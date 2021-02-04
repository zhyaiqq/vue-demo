<template>
  <div class="list">
    <h2>Demo</h2>
    <p v-for="(item, index) in list" :key="index">
      <router-link :to="item.route">{{ item.text }}</router-link>
    </p>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
export default {
  name: 'Index',
  components: { HelloWorld },
  data () {
    return {
      list: [
        {route: '/move-top', text: '1.列表滚动效果'},
        {route: '/tree', text: '2.tree递归组件'},
      ]
    }
  },
  methods: {
    update () {
      console.log('update')
    }
  },
  mounted () {
    console.log(this.$refs['ref'], this.$children[0].$data)
  }
}
</script>

<style>
</style>
