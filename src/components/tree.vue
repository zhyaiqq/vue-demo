<template>
  <div>
    test
    <span v-if="true">client</span>
  </div>
</template>

<script>
export default {
  name: 'TreeItem',
  data () {
    return {
      data: [
        {
          'name': 'Web秀',
          'children': [{
              'name': 'web前端',
              'children': [{
                  'name': 'CSS'
              }, {
                  'name': 'JavaScript'
              }, {
                  'name': 'Vue'
              }, {
                  'name': '小程序'
              }, {
                  'name': 'Three.js'
              }]
          }, {
              'name': '服务器'
          }, {
              'name': '工具类'
          }]
        }, 
        {
          'name': '今日头条',
          'children': [
            {
              'name': '图片'
            }, 
            {
              'name': '新闻',
              'children': []
            }
          ]
        }, 
        {
          'name': 'Angular'
        }
      ]
    }
  },
  mounted () {
    console.log('dd', process.client)
  },
  activated () {
    console.log('activated1222------')
  },
  deactivated () {
    console.log('deactivated2222------')
  }
}
</script>

<style>

</style>