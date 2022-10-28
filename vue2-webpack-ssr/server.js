const Koa = require("koa");
const Router = require("koa-router");
const static = require("koa-static");
const VueServerRender = require("vue-server-renderer");
const fs = require("fs");
const path = require("path");
const resolve = (p) => path.resolve(__dirname, p);

const serverBundle = fs.readFileSync(resolve("dist/server.js"), "utf8");
const serverTemplete = fs.readFileSync(resolve("dist/index.ssr.html"), "utf8");

const render = VueServerRender.createBundleRenderer(serverBundle, { template: serverTemplete });

const app = new Koa();
const router = new Router();

router.get("/", async (ctx) => {
	ctx.body = await new Promise((resolve, reject) => {
		render.renderToString((err, html) => {
			if (err) {
				reject(err);
			} else {
				resolve(html);
			}
		});
	});
});

app.use(static(resolve("dist")));
app.use(router.routes());


app.listen(4000, () => {
	console.log("server start success port:", 4000);
});


