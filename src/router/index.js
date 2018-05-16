import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home'
import ConfigurationGradient from '../pages/configurationGradient/configurationGradient'
import QueryContrast from '../pages/queryContrast/queryContrast'
import ConfigurationContrast from '../pages/configurationContrast/configurationContrast'
import ConfigurationQueryComparison from '../pages/configurationQueryComparison/configurationQueryComparison'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[
        {
          path:'/configurationGradient',
          name:'configurationGradient',
          component:ConfigurationGradient
        },
        {
          path:'/queryContrast',
          name:'queryContrast',
          component:QueryContrast
        },
        {
          path:'/configurationContrast',
          name:'configurationContrast',
          component:ConfigurationContrast
        },
        {
          path:'/configurationQueryComparison',
          name:'configurationQueryComparison',
          component:ConfigurationQueryComparison
        }
      ]
    },
    {
      path:'/',redirect:'/home'
    }
  ]
})
