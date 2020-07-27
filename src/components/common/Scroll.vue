<template>
  <div class="swiper" ref="swiper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
    name: "Scroll",
    props: {
        probeType: {
            type: Number,
            default() {
                return 0
            }
        }
    },
    pullUpload: {
        type: Boolean,
        default() {
            return false
        }
    },
    scrollbar: {
        type: [Boolean, Object],
        default() {
            return false
        }
    },
    data() {
    return {
        scroll: null
        }
    },
    mounted() {
        this.scroll = new BScroll(this.$refs.swiper, {
            click: true,
            probeType: this.probeType,//3实时监听
            pullUpload: this.pullUpload,//上拉加载更多
            scrollbar: this.scrollbar
        })
        this.scroll.on('scroll', (position) => {
            this.$emit('scroll',position)
        })
        this.scroll.on('pullingUp',() => {
            this.$emit('pullingUp')
        })
    },
    methods: {
        scrollTo(x, y, timer = 500) {
            this.scroll.scrollTo(x, y, timer)
        },
        finishPullUp() {
            this.scroll.finishPullUp()
        },
        refresh() {
            this.scroll.refresh()
        },
        getScrollY() {
            return this.scroll ? this.scroll.y:0
        }
    }

}

</script>
<style scoped>
</style>