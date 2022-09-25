import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import NotFound from "../views/404";

Vue.use(VueRouter);

const routes = [
	{
		path: "/user",
        hideInMenu: true,
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
				name: "dashboard",
                meta: { icon: "dashboard", title: "仪表盘" },
				component: { render: h => h("router-view")},
				children: [
					{
						path: "/dashboard/analysis",
						name: "analysis",
                        meta: { title: "分析页" },
						component: () =>
							import(/* webpackChunkName: "dashboard" */ "../views/Dashboard/Analysis"),
					},
				]
			},
			{
				path: "/form",
				name: "form",
                meta: { icon: "form", title: "表单" },
				component: { render: h => h("router-view")},
				children: [
					{
						path: "/form",
						redirect: "/form/basic-form"
					},
					{
						path: "/form/basic-form",
						name: "basicform",
                        meta: { title: "基础表单" },
						component: () =>
							import(/* webpackChunkName: "form" */ "../views/Forms/BasicForm"),
					},
					{
						path: "/form/step-form",
						name: "stepform",
                        hideChildrenInMenu: true,
                        meta: { title: "分步表单" },
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
        hideInMenu: true,
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
    if(to.path !== from.path) {
	    NProgress.start();
    }
	next();
})

router.afterEach((to, from) => {
	NProgress.done();
})

export default router;
