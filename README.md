**项目简介** 
 后端接口的开源项目（项目地址：https://github.com/Binaryify/NeteaseCloudMusicApi）
**API安装步骤：** 
1. git clone https://github.com/Binaryify/NeteaseCloudMusicApi.git

2. $ npm install

3. cd api文件夹

4. node app.js

**结构树**
│─ src
│     ├─ App.vue
│     ├─ assets
│     │  ├─ common
│     │  │  ├─ mixin.js
│     │  │  └─ tool.js
│     │  ├─ css
│     │  │  ├─ base.css
│     │  │  └─ play.css
│     │  └─ img     
│     ├─ components
│     │  ├─ common
│     │  │  ├─ progress
│     │  │  │  └─ Progress.vue   //歌曲进度条
│     │  │  ├─ Scroll.vue   //封装的bs
│     │  │  └─ swiper
│     │  │     ├─ indexSwiper.js
│     │  │     └─ Swiper.vue     //轮播图
│     │  └─ content
│     │     ├─ main
│     │     │  └─ Main.vue   //主页  App.vue -> Main.vue -> DiscoverMusic.vue -> router-view
│     │     ├─ musiclist
│     │     │  └─ MusicList.vue  //登陆后显示的每日推荐歌单入口
│     │     ├─ navbar
│     │     │  └─ NavBar.vue  //二级菜单
│     │     ├─ playmusic
│     │     │  ├─ playList.js     
│     │     │  ├─ PlayMusic.vue  //底部播放音乐组件
│     │     │  └─ PlayMusicList.vue  //播放列表
│     │     ├─ search 
│     │     │  ├─ hotSearch.vue     //搜索模块的二级热搜菜单
│     │     │  └─ MusicSearch.vue   //搜索模块
│     │     ├─ tabbar
│     │     │  └─ TabBar.vue   //顶部菜单的商标、搜索和登录模块
│     │     ├─ topmenu
│     │     │  └─ TopMenu.vue  //顶部菜单
│     │     └─ user 
│     │        ├─ Login.vue   //登录页面
│     │        ├─ MySongList.vue  //我的歌单页面
│     │        └─ Register.vue     //注册页面
│     ├─ main.js 
│     ├─ network 
│     │  ├─ artist.js   //歌手信息请求
│     │  ├─ detail.js   //歌单歌曲详情请求
│     │  ├─ discover.js //发现页请求
│     │  ├─ request.js  //接口请求
│     │  ├─ search.js   //搜索请求
│     │  └─ user
│     │     └─ userVerify.js  //用户验证和获取用户歌单
│     ├─ router
│     │  └─ index.js   //
│     ├─ store
│     │  └─ index.js
│     ├─ views
│     │  ├─ artistdetail
│     │  │  ├─ ArtistDetail.vue    //歌手详情页
│     │  │  ├─ childComps
│     │  │  │  ├─ ArtistAlbumList.vue  //所有专辑
│     │  │  │  ├─ ArtistBar.vue       //歌手详情页的菜单
│     │  │  │  └─ ArtistHot50.vue    //歌手热门50首详情页
│     │  │  └─ childRouter
│     │  │     ├─ ArtistAlbum.vue    //所有专辑页
│     │  │     ├─ ArtistDescDetail.vue  //艺人介绍页
│     │  │     ├─ ArtistHot.vue   //歌手热门50首
│     │  │     └─ ArtistMv.vue    //相关mv页
│     │  ├─ discover
│     │  │  ├─ childComps
│     │  │  │  ├─ ArtistList.vue   //二级菜单歌手页的歌手列表
│     │  │  │  ├─ newSongs.vue    //二级菜单个性推荐页的最新音乐
│     │  │  │  ├─ PrivateContent.vue    //二级菜单个性推荐页的独家放送
│     │  │  │  └─ RankListItem.vue      //二级菜单排行榜页的榜单详情
│     │  │  ├─ childRouter
│     │  │  │  ├─ ArtistCategory.vue  //二级菜单的歌手页
│     │  │  │  ├─ DjProgram.vue     //二级菜单的主播电台页
│     │  │  │  ├─ indexMixin.js
│     │  │  │  ├─ Individuation.vue   //二级菜单的个性推荐页
│     │  │  │  ├─ MusicListCategory.vue   //二级菜单的歌单页
│     │  │  │  ├─ MusicRankList.vue    //二级菜单的排行榜页
│     │  │  │  └─ NewSongsR.vue     //二级菜单的最新音乐页
│     │  │  └─ DiscoverMusic.vue
│     │  ├─ musicListDetail
│     │  │  ├─ baseMixin.js
│     │  │  ├─ childComps
│     │  │  │  ├─ DayBaseInfo.vue     //日推歌单详情页头部信息
│     │  │  │  ├─ DetailBar.vue       //歌单详情页的歌曲列表和评论切换部分
│     │  │  │  ├─ DetailBaseInfo.vue  //歌单详情页的头部信息
│     │  │  │  ├─ MusicItem.vue       //歌单详情页的歌曲列表
│     │  │  │  ├─ MusicListLive.vue   //登录后显示的个人收藏歌单
│     │  │  │  ├─ Recommends.vue      //歌单详情页的评论
│     │  │  │  └─ tableMixin.js
│     │  │  ├─ DayMusicListDetail.vue    //日推的歌单详情页歌曲信息
│     │  │  ├─ indexMixin.js
│     │  │  ├─ MusicListDetail.vue     //歌单详情页
│     │  │  └─ playMixin.js
│     │  └─ search
│     └─ vue.config.js


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
