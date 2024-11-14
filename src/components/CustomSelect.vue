<template>
	<div>
		<el-select v-model="value" placeholder="请选择">
			<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
		</el-select>

		<el-select v-model="value" placeholder="请选择">
			<el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"> </el-option>
		</el-select>
	</div>
</template>

<script>
import { staticOptions } from "./config"; // 重命名
import { getData } from "./api";

export default {
	data() {
		return {
			options: [],
			options2: [],
			value: "",
		};
	},
	watch: {
		value() {
			console.log(this.value);
			// 使用this.value对this.options2进行过滤
			const fn1 = (option) => {
				if (option.value == this.value) return true;
				return false;
			};

			this.options2 = staticOptions.filter(fn1);
		},
	},
	mounted() {
		getData().then((res) => {
			console.log("getData: ", res);
			this.options = res;
			this.options2 = res;
		});
	},
};
</script>
