import Home from "@/components/home.vue";
import Login from "@/components/login.vue";
const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/home",
    component: Home,
  },
];
export default routes;
