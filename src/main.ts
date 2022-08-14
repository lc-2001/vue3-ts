import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "../router";
import "../src/assets/css/global.css";

// 引入antd-vue
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

const app = createApp(App);
// 挂载路由
app.use(router);
app.use(Antd);
app.mount("#app");
