import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home.vue'
import NewInfo from '../pages/Home/NewInfo.vue'
import NearInfo from '../pages/Home/NearInfo.vue'

import PetAdopt from '../pages/PetAdopt/PetAdopt.vue'
import PlantAdopt from '../pages/PlantAdopt/PlantAdopt.vue'
import PetSeek from '../pages/PetSeek/PetSeek.vue'
import ArticleRecommendation from '../pages/ArticleRecommendation/ArticleRecommendation.vue'
import ArtDetail from '../pages/ArtDetail/ArtDetail.vue'

import Talk from '../pages/Talk/Talk.vue'
import Release from '../pages/Release/Release.vue'
import Show from '../pages/Show/Show.vue'
import Mine from '../pages/Mine/Mine.vue'

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
      path: '/art_detail',
      component: ArtDetail
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
    },
    {
      path: '/talk',
      component: Talk
    },
    {
      path: '/release',
      component: Release
    },
    {
      path: '/show',
      component: Show
    },
    {
      path: '/mine',
      component: Mine
    }
  ]
})
