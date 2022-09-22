import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import NotFound from "../views/404";

Vue.use(VueRouter);

const routes = [
	{
		path: "/user",
		component: () =>
			import(/* webpackChunkName: "layout" */ "../layouts/UserLayout"),
		children: [
			{
				path: "/user",
				redirect: "/user/login"
			},
			{
				path: "/user/login",
				name: "login",
				component: () =>
					import(/* webpackChunkName: "user" */ "../views/User/Login"),
			},
			{
				path: "/user/register",
				name: "register",
				component: () =>
					import(/* webpackChunkName: "user" */ "../views/User/Register"),
			}
		],
	},
	{
		path: "/",
		component: () =>
			import(/* webpackChunkName: "layout" */ "../layouts/BasicLayout"),
		children: [
			{
				path: "/",
				redirect: "/dashboard"
			},
			{
				path: "/dashboard",
				redirect: "/dashboard/analysis"
			},
			{
				path: "/dashboard",
				name: "Dashboard",
				component: { render: h => h("router-view")},
				children: [
					{
						path: "/dashboard/analysis",
						name: "analysis",
						component: () =>
							import(/* webpackChunkName: "dashboard" */ "../views/Dashboard/Analysis"),
					},
				]
			},
			{
				path: "/form",
				name: "form",
				component: { render: h => h("router-view")},
				redirect: "",
				children: [
					{
						path: "/form",
						redirect: "/form/basic-form"
					},
					{
						path: "/form/basic-form",
						name: "basicform",
						component: () =>
							import(/* webpackChunkName: "form" */ "../views/Forms/BasicForm"),
					},
					{
						path: "/form/step-form",
						name: "stepform",
						component: () =>
							import(/* webpackChunkName: "form" */ "../views/Forms/StepForm"),
						children: [
							{
								path: "/form/step-form",
								redirect: "/form/step-form/info"
							},
							{
								path: "/form/step-form/info",
								name: "info",
								component: () =>
									import(/* webpackChunkName: "form" */ "../views/Forms/StepForm/Step1"),
							},
							{
								path: "/form/step-form/confirm",
								name: "confirm",
								component: () =>
									import(/* webpackChunkName: "form" */ "../views/Forms/StepForm/Step2"),
							},
							{
								path: "/form/step-form/result",
								name: "result",
								component: () =>
									import(/* webpackChunkName: "form" */ "../views/Forms/StepForm/Step3"),
							},
						]
					},
				]
			}
		],
	},
	{
		path: "*",
		name: "404",
		component: NotFound
	}
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

// 路由守卫
router.beforeEach((to, from, next) => {
	NProgress.start();
	next();
})

router.afterEach((to, from) => {
	NProgress.done();
})

export default router;
