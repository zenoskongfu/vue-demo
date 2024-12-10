<template>
	<div>
		<button @click="doDetail">查看详情</button>
		<columnDialog v-if="isViewDetail" ref="columnDialog" @cancel="doCancel"> </columnDialog>
	</div>
</template>

<script>
import { getDetailData } from "@/api/bank";
import columnDialog from "./columnDialog.vue";
import { config } from "./config";
export default {
	name: "list-demo",
	components: {
		columnDialog,
	},
	data() {
		return {
			isViewDetail: false,
		};
	},
	methods: {
		doCancel() {
			console.log("点击取消");
			this.isViewDetail = false;
		},
		async doDetail() {
			this.isViewDetail = true;

			let detailsData = {};
			await getDetailData({})
				.then((res) => {
					console.log("res: ", res);
					detailsData = res.payload || {}; // 判空操作
					// &&
					// isOK && getData()
					// ||
				})
				.finally(() => {
					this.loading = false;
				});

			// columnsNum, zhwidth, uswidth, columnsConfig, title, detailsData
			const obj = {
				columnsNum: 2,
				zhwidth: 100,
				uswidth: 150,
				columnsConfig: config,
				title: "详情弹框的标题",
				detailsData,
			};
			// 实例对象
			this.$refs["columnDialog"].initPage(obj);
		},
	},
};
</script>

<style scoped lang="scss"></style>
