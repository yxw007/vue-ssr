import createApp from "./app.js";

export default function (context) {
	const { url } = context;
	return new Promise((resolve, reject) => {
		const { app, router, store } = createApp();
		//! 说明：如果当前使用的是前端路由，比如：/bar 回车就会导致404,
		//! 解决办法：利用vue-router的push和onReady接口解决
		//! 1. 让其跳入前端路由
		router.push(url);
		//! 2. 路由渲染完毕，准备进入匹配的路由
		router.onReady(() => {
			const matchComponents = router.getMatchedComponents();
			if (matchComponents.length === 0) {
				return reject({ code: 404 });
			} else {
				Promise.all(matchComponents.map(component => {
					//! 1. 调用异步组件的asyncData 函数，进行异步数据获取
					if (component.asyncData) {
						console.log("execute: component asyncData");
						return component.asyncData(store);
					}
				})).then(() => {
					//! 2. 等待异步组件数据全部处理完毕后，需要将后端的store.state 挂载至上下文中，方便客户端对服务端的state数据进行同步
					context.state = store.state;
					resolve(app);
				});
			}
		});
	});
}
