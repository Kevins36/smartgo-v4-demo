import { type RouteRecordRaw } from "vue-router";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage1 from "../views/RegisterPage.vue";
import RegisterPage2 from "../views/RegisterPage2.vue";
import RegisterPage3 from "../views/RegisterPage3.vue";
import RegisterPage4 from "../views/SucessPage.vue";
import RecoverPage from "../views/RecoverPage.vue";

const authRoutes: RouteRecordRaw[] = [
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
    meta: { layout: "auth" },
  },
  {
    path: "/register1",
    name: "Register1",
    component: RegisterPage1,
    meta: { layout: "auth" },
  },
  {
    path: "/register2",
    name: "Register2",
    component: RegisterPage2,
    meta: { layout: "auth" },
  },
  {
    path: "/register3",
    name: "Register3",
    component: RegisterPage3,
    meta: { layout: "auth" },
  },{
    path: "/register4",
    name: "Register4",
    component: RegisterPage4,
    meta: { layout: "auth" },
  },
  {
    path: "/recover",
    name: "Recover",
    component: RecoverPage,
    meta: { layout: "auth" },
  },
];

export default authRoutes;
