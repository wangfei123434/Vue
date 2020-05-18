<template>
	<div>
		<h1>我是子组件</h1>
		<h3>子组件接收到父组件传过来的值是：{{ inpmsg }}</h3>
		<br />
		<button @click="fn">点击我传递数据给父组件</button>
	</div>
</template>

<script>
	//导出child
	export default {
		name:"Child",
		props:["inpmsg"],
		data () {
			return {
				childMsg:"我是子组件的data数据"
			}
		},
		methods:{
			fn(){
				this.$emit("change",this.childMsg)
			}
		}
	}
</script>

<style>
</style>