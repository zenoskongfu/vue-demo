<template>
	<div id="app">
		<CustomSelect></CustomSelect>
	</div>
</template>

<script>
// 引入
import CustomSelect from "./components/CustomSelect.vue";

export default {
	name: "App",
	// 局部注册
	components: {
		CustomSelect,
	},
	data() {
		return {};
	},
	methods: {},
};
</script>

<style>
#app {
	width: fit-content;
	margin: 0 auto;
	margin-top: 10vh;
}

.search-input {
	width: 300px;
	height: 40px;

	font-size: 20px;
}

.dropdown-list {
	box-shadow: 0 0 4px 0px lightgray;
	border-radius: 4px;
	padding: 4px;
	width: 300px;

	margin-top: 10px;
}

.list-item {
	border-bottom: 1px solid gray;
	height: 35px;

	text-align: center;
	line-height: 35px;
}

.list-item:last-child {
	border-bottom: none;
}
</style>
