import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'pymk-inspector',
      component: require('@/components/Main')
    },
    {
      path: '/summary',
      name: 'summary',
      component: require('@/components/Summary')
    },
    {
      path: '/sessions',
      name: 'sessions',
      component: require('@/components/Sessions')
    },
    {
      path: '/sessions-people',
      name: 'sessions-people',
      component: require('@/components/Sessions')
    },
    {
      path: '/people',
      name: 'people',
      component: require('@/components/People')
    },
    {
      path: '/credentials',
      name: 'credentials',
      component: require('@/components/Credentials')
    },
    {
      path: '/settings',
      name: 'settings',
      component: require('@/components/Settings')
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: require('@/components/PrivacyPolicy')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
