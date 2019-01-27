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

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    const position = {}
    // new navigation.
    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash
    }
    // check if any matched route config has meta that requires scrolling to top
    if (to.matched.some(m => m.meta.scrollToTop)) {
      // cords will be used if no selector is provided,
      // or if the selector didn't match any element.
      position.x = 0
      position.y = 0
    }
    // if the returned position is falsy or an empty object,
    // will retain current scroll position.
    return position
  }
}

export default new Router({
  mode: 'history',
  scrollBehavior,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      meta: {
        showFooter: true
      },
      children: [
        {
          path: '',
          redirect: '/home/new_info'
        },
        {
          path: '/home/new_info',
          component: NewInfo,
          meta: {
            showFooter: true
          }
        },
        {
          path: '/home/near_info',
          component: NearInfo,
          meta: {
            showFooter: true
          }
        }
      ]
    },
    {
      path: '/art_detail/:articleId',
      component: ArtDetail,
      meta: {
        showFooter: true,
        scrollToTop: true
      }
    },
    {
      path: '/pet_adopt',
      component: PetAdopt,
      meta: {
        showFooter: true,
        scrollToTop: true
      }
    },
    {
      path: '/plant_adopt',
      component: PlantAdopt,
      meta: {
        showFooter: true,
        scrollToTop: true
      }
    },
    {
      path: '/pet_seek',
      component: PetSeek,
      meta: {
        showFooter: true,
        scrollToTop: true
      }
    },
    {
      path: '/article_recommendation',
      component: ArticleRecommendation,
      meta: {
        showFooter: true,
        scrollToTop: true
      }
    },
    {
      path: '/talk',
      component: Talk,
      meta: {
        showFooter: true,
        scrollToTop: true
      }
    },
    {
      path: '/release',
      component: Release,
      meta: {
        showFooter: true,
        scrollToTop: true
      }
    },
    {
      path: '/show',
      component: Show,
      meta: {
        showFooter: true,
        scrollToTop: true
      }
    },
    {
      path: '/mine',
      component: Mine,
      meta: {
        showFooter: true,
        scrollToTop: true
      }
    }
  ]
})
