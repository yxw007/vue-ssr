const Koa = require("koa");
const Router = require("koa-router");
const static = require("koa-static");
const VueServerRender = require("vue-server-renderer");
const fs = require("fs");
const path = require("path");
const resolve = (p) => path.resolve(__dirname, p);

const serverTemplete = fs.readFileSync(resolve("dist/index.ssr.html"), "utf8");
const serverBundle = require(resolve("dist/vue-ssr-server-bundle.json"));
const clientManifest = require(resolve("dist/vue-ssr-client-manifest.json"));

const render = VueServerRender.createBundleRenderer(serverBundle, { template: serverTemplete, clientManifest });

const app = new Koa();
const router = new Router();

//! 说明：匹配非首页路径，否则会显示404页面
router.get("/(.*)", async (ctx) => {
	ctx.body = await new Promise((resolve) => {
		render.renderToString({ url: ctx.url }, (err, html) => {
			if (err && err.code == 404) resolve(`not found 404`);
			resolve(html)
		})
	})
})

//! 特别注意：要先匹配static中间件，否则会导致全部进制get中然后渲染成html导致，请求client.bundle.js文件都是返回html内容
app.use(static(resolve("dist")));
app.use(router.routes());

app.listen(4000, () => {
	console.log("server start success port:", 4000);
});


