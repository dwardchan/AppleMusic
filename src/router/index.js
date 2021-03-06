import Vue from 'vue'
import VueRouter from 'vue-router'

const DiscoverMusic=()=>import('@/views/discover/DiscoverMusic')
const Individuation=()=>import('@/views/discover/childRouter/Individuation')
const MusicListCategory=()=>import('@/views/discover/childRouter/MusicListCategory')
const MusicRankList=()=>import('@/views/discover/childRouter/MusicRankList')
const ArtistCategory=()=>import('@/views/discover/childRouter/ArtistCategory')
const NewSongsR=()=>import('@/views/discover/childRouter/NewSongsR')
const DjProgram=()=>import('@/views/discover/childRouter/DjProgram')

const MusicListDetail=()=>import('@/views/musicListDetail/MusicListDetail')
const DayMusicListDetail=()=>import('@/views/musicListDetail/DayMusicListDetail')

const ArtistDetail=()=>import('@/views/artistdetail/ArtistDetail')
const ArtistHot=()=>import('@/views/artistdetail/childRouter/ArtistHot')
const ArtistAlbum=()=>import('@/views/artistdetail/childRouter/ArtistAlbum')
const ArtistDescDetail=()=>import('@/views/artistdetail/childRouter/ArtistDescDetail')
const ArtistMv=()=>import('@/views/artistdetail/childRouter/ArtistMv')

// const SearchList=()=>import('views/search/SearchList')

Vue.use(VueRouter)

  const routes = [
  {
    path: '',
    redirect:'/discover'
  },
  {
    path: '/discover',
    component: DiscoverMusic,
    children: [
      {
        path: '/',
        redirect: '/discover/individ'
      },
      {
        path:'/discover/individ',
        component: Individuation,
        meta: {
          keepAlive: true
        }
      },
      {
        path:'/discover/category',
        component:MusicListCategory,
        meta: {
          keepAlive: true
        }
      },
      {
        path:'/discover/ranklist',
        component:MusicRankList,
        meta: {
          keepAlive: true
        }
      },
      {
        path:'/discover/artist',
        component:ArtistCategory,
        meta: {
          keepAlive: true
        }
      },
      {
        path:'/discover/newsongs',
        component:NewSongsR,
        meta: {
          keepAlive: true
        }
      },
      {
        path:'/discover/djprogram',
        component:DjProgram,
        meta: {
          keepAlive: true
        }
      }  
    ]
  },
  {
    path:'/musiclistdetail/:id/:time',
    name:'detail',
    component:MusicListDetail,
  },
  {
    path:'/daymusic',
    component:DayMusicListDetail
  },
  {
    path:'/artist',
    component:ArtistDetail,
    children:[
      {
        path:'/',
        redirect:'/artist/album'
      },
      {
        path:'/artist/top/song',
        component:ArtistHot
      },
      {
        path:'/artist/album',
        component:ArtistAlbum
      },
      {
        path:'/artist/desc',
        component:ArtistDescDetail
      },
      {
        path:'/artist/mv',
        component:ArtistMv
      },
    ]
  },
  // {
  //   path:'/search/:key',
  //   component:SearchList
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes
})

export default router
