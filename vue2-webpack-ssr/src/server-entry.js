import createApp from "./app.js";

export default function (context) {
	const { url } = context;
	return new Promise((resolve, reject) => {
		const { app, router } = createApp();
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
					if (component.asyncData) {
						return component.asyncData();
					}
				})).then(() => {
					resolve(app);
				});
			}
		});
	});
}
