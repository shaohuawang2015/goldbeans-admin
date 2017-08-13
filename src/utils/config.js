const APIV1 = '/api/v1';
const APIV2 = '/api/v2';
const GOLDBEANS = '/goldbeans';

module.exports = {
  name: '种金豆后台管理系统',
  prefix: 'antdAdmin',
  footerText: 'GoldBeans Admin  © 2017 limo',
  logo: '/logo.png',
  iconFontCSS: '/iconfont.css',
  iconFontJS: '/iconfont.js',
  YQL: ['http://www.zuimeitianqi.com'],
  CORS: [],
  openPages: ['/login'],
  apiPrefix: '/api/v1',
  api: {
    userLogin: `${APIV1}/user/login`,
    userLogout: `${APIV1}/user/logout`,
    userInfo: `${APIV1}/userInfo`,
    users: `${APIV1}/users`,
    posts: `${APIV1}/posts`,
    user: `${APIV1}/user/:id`,
    dashboard: `${APIV1}/dashboard`,
    menus: `${APIV1}/menus`,
    v1test: `${APIV1}/test`,
    v2test: `${APIV2}/test`,
    categoryQuery: `${GOLDBEANS}/category/query.json`
  },
}
