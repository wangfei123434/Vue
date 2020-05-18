<template>
	<div>
		<h1>多彩照片墙相册</h1>
		<ul>
			<li v-for="(item,index) in imgall">
				<img :src="item"/>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name:"Child",
		props:["imgall"]
	}
</script>

<style>
	ul{
		margin: 30px auto;
		width: 1200px;
		display: flex;
		flex-wrap: wrap;
	}
	li{
		list-style: none;
		margin: 10px;
	}
</style>
