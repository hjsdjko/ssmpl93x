import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import huodongfenlei from '@/views/modules/huodongfenlei/list'
    import shetuan from '@/views/modules/shetuan/list'
    import discussshetuanhuodong from '@/views/modules/discussshetuanhuodong/list'
    import shetuanshenqing from '@/views/modules/shetuanshenqing/list'
    import shetuanhuodong from '@/views/modules/shetuanhuodong/list'
    import yonghu from '@/views/modules/yonghu/list'
    import huodongbaoming from '@/views/modules/huodongbaoming/list'
    import discussshetuanxinxi from '@/views/modules/discussshetuanxinxi/list'
    import shetuanxinxi from '@/views/modules/shetuanxinxi/list'
    import storeup from '@/views/modules/storeup/list'
    import config from '@/views/modules/config/list'
    import shetuanfenlei from '@/views/modules/shetuanfenlei/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/huodongfenlei',
        name: '活动分类',
        component: huodongfenlei
      }
      ,{
	path: '/shetuan',
        name: '社团',
        component: shetuan
      }
      ,{
	path: '/discussshetuanhuodong',
        name: '社团活动评论',
        component: discussshetuanhuodong
      }
      ,{
	path: '/shetuanshenqing',
        name: '社团申请',
        component: shetuanshenqing
      }
      ,{
	path: '/shetuanhuodong',
        name: '社团活动',
        component: shetuanhuodong
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/huodongbaoming',
        name: '活动报名',
        component: huodongbaoming
      }
      ,{
	path: '/discussshetuanxinxi',
        name: '社团信息评论',
        component: discussshetuanxinxi
      }
      ,{
	path: '/shetuanxinxi',
        name: '社团信息',
        component: shetuanxinxi
      }
      ,{
	path: '/storeup',
        name: '我的收藏管理',
        component: storeup
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/shetuanfenlei',
        name: '社团分类',
        component: shetuanfenlei
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
