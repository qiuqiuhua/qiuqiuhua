import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home.vue'
import NewInfo from '../pages/Home/NewInfo.vue'
import NearInfo from '../pages/Home/NearInfo.vue'

import PetAdopt from '../pages/PetAdopt/PetAdopt.vue'
import PlantAdopt from '../pages/PlantAdopt/PlantAdopt.vue'
import PetSeek from '../pages/PetSeek/PetSeek.vue'
import ArticleRecommendation from '../pages/ArticleRecommendation/ArticleRecommendation.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '',
          redirect: '/home/new_info'
        },
        {
          path: '/home/new_info',
          component: NewInfo
        },
        {
          path: '/home/near_info',
          component: NearInfo
        }
      ]
    },
    {
      path: '/pet_adopt',
      component: PetAdopt
    },
    {
      path: '/plant_adopt',
      component: PlantAdopt
    },
    {
      path: '/pet_seek',
      component: PetSeek
    },
    {
      path: '/article_recommendation',
      component: ArticleRecommendation
    }
  ]
})
