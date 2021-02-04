<template>
  <div @click="father" class="father">
    <div @click.stop="son" class="son"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  methods: {
    father () {
      console.log('father')
      console.log(this.$attrs)
      console.log(this.$listeners)
    },
    son () {
      console.log('son')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.father {
  width: 100px;
  height: 100px;
  background: #42b983;
  position: absolute;
  left: 0;
  top: 0;
}
.son {
  /* position: absolute; */
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: -25px;
  margin-left: -25px; */
  width: 50px;
  height: 50px;
  /* left: 0;
  right: 0;
  bottom: 0;
  top: 0; */
  margin: 0 auto;
  background: #fff;
}
</style>
