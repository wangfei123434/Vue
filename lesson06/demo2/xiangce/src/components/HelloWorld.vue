<template>
  <div class="hello">
    <child :imgall="imgsrc"></child>
  </div>
</template>

<script>
import child from "./Child"
export default {
  name: 'HelloWorld',
  data () {
    return {
      imgsrc:[
		  require("../assets/img/1.jpg"),
		  require("../assets/img/2.jpg"),
		  require("../assets/img/3.jpg"),
		  require("../assets/img/4.jpg"),
		  require("../assets/img/5.jpg"),
		  require("../assets/img/6.jpg"),
		  require("../assets/img/7.png"),
		  require("../assets/img/8.png")
	  ]
    }
  },
  components:{
  	child
  }
}
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
</style>
