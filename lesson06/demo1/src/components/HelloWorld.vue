<template>
  <div class="hello">
    <input type="text" v-model="msg" @keypress.enter="alertFn"/>
    <h1 class="redH1"> {{ toupper }}</h1>
    
    <child inpmsg="我是父组件的data数据" @change="getValue"></child>
  </div>
</template>

<script>
//引入child:
import child from "./Child"
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'abcd'
    }
  },
  computed:{
  	toupper(){
  		return this.msg.toUpperCase()
  	}
  },
  methods:{
  	alertFn(){
  		alert(this.msg)
  	},
  	getValue(val){
  		console.log(val)
  	}
  	
  },
  components:{
  	child
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.redH1{
	color: red;
}
</style>
