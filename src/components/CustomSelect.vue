<template>
	<div>
		<div>银行</div>
		<el-select v-model="bankValue" placeholder="请选择">
			<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
		</el-select>
		<div>客户类型</div>
		<el-select v-model="customerTypeValue" placeholder="请选择">
			<el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"> </el-option>
		</el-select>
	</div>
</template>

<script>
// import { staticOptions } from "./config"; // 重命名
import { getBankList, getCustomerType } from "@/api/bank.js";
// import { getAxios, postAxios } from "../util/httpAxios.js";
// import axios from "axios";
// [{label: "工商银行", value: 1}, {label: "农业银行", value: 2}]

export default {
	data() {
		return {
			options: [],
			options2: [],
			bankValue: "",
			customerTypeValue: "",
		};
	},
	watch: {
		bankValue() {
			console.log("bankValue", this.bankValue);
			// 根据bankValue的值，发送请求获取客户类型
			getCustomerType(this.bankValue).then((res) => {
				console.log("res", res);
				const customerTypes = res.data.data;
				this.options2 = customerTypes.map((item) => {
					return {
						label: item.type,
						value: item.id,
					};
				});
			});
		},
	},
	mounted() {
		getBankList().then((res) => {
			console.log("getData: ", res.data);
			const bankData = res.data.data;
			this.options = bankData.map((item)=>{
				return {
					label: item.name,
					value: item.id,
				};
			});
		});
	},
};
</script>
