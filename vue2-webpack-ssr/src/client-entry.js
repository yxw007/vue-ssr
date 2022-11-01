import createApp from "./app";

const { app } = createApp();
//! 说明：由于server端无dom，只有客户端才能$mount(激活客户端逻辑处理)
//! 说明：利用app.$mount("#app")激活客户端的事件响应，如果是直接使用new Vue({el:"#app",...}) 会导致客户端事件全部都是，原因：服务端是无事件的，渲染出来的只是html字符串
app.$mount("#app");
