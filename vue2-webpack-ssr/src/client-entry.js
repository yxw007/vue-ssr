import createApp from "./app";

const { app } = createApp();
//! 说明：由于server端无dom，只有客户端才能$mount(激活客户端逻辑处理)
app.$mount("#app");
