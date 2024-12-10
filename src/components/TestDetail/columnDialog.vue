<template>
	<div class="dialog-container">
		<!-- <div class="caseItem" v-for="(item, index) in itemColumn" :key="index">
				<div
					:class="{
						item: true,
						'item-1': columnsNum === 1,
						'item-2': columnsNum === 2,
						'item-3': columnsNum === 3,
					}"
					v-for="(val, i) in item"
					:key="i">
					<div class="itemName" :style="{ width: isCn ? zhwidth + 'px' : uswidth + 'px' }">
						{{ val.label }}
					</div>
					<div class="itemMain" :style="{ width: isCn ? zhwidth + 'px' : uswidth + 'px' }" :isCn="isCn">
						{{ detailsData[val.prop] }}
					</div>
				</div>
			</div> -->

		<div class="popup-container">
			<div class="title">{{ title }}</div>
			<div class="body">
				<div class="list-item" v-for="(item, index) in itemColumn" :key="index">
					<div class="item-label">{{ item.label }}</div>
					<div class="item-value">{{ detailsData[item.prop] }}</div>
				</div>
			</div>
			<div class="footer"><button @click="handCancel">取消</button></div>
		</div>

		<span slot="footer" class="dialog-footer">
			<slot name="btnBefore" :data="detailsData"></slot>
		</span>
	</div>
</template>

<script>
export default {
	name: "column-dialog",
	props: {
		dialogWidth: {
			type: String,
			default: "80%",
		},
	},
	emits: ["cancel", "sure"], //注册我要抛出事件
	data() {
		return {
			showFlag: false,
			loading: false,
			detailsData: [],
			itemColumn: [],
			columnsNum: 1,
			zhwidth: 150,
			uswidth: 240,
			title: "",
		};
	},
	computed: {
		isCn() {
			return true;
		},
	},
	methods: {
		initPage(param) {
			console.log("param: ", param);

			const { columnsNum, zhwidth, uswidth, columnsConfig, title, detailsData } = param;
			this.zhwidth = zhwidth;
			this.uswidth = uswidth;
			this.columnsNum = columnsNum;
			this.title = title;
			this.itemColumn = columnsConfig; //分列
			// 	this.itemColumn = columnsConfig.flatMap((value, index, array) => {
			//   if (index % columnsNum === 0) {
			//     return [array.slice(index, index + columnsNum)];
			//   }
			//   return [];
			// });

			// this.itemColumn = columnsConfig.map((item)=>{

			// })

			this.detailsData = detailsData;
			this.showFlag = true;
		},
		handCancel() {
			this.$emit("cancel"); // 抛出具体的事件
		},
	},
};
</script>

<style>
.popup-container {
	display: flex;
	flex-direction: column;
	height: 100%;
}

.title {
	text-align: center;
}

.body .list-item {
	display: flex;
}

.list-item .item-label {
	width: 50%;
}
.list-item .item-value {
	width: 50;
}

.footer {
	margin-top: auto;
	display: flex;
	justify-content: flex-end;
}

.footer button {
	margin: 16px;
}

.dialog-container {
	width: 300px;
	height: 300px;
	box-shadow: 0 0 4px 4px lightgray;
	border-radius: 8px;
}
.mop-dialog-small {
	max-height: 70vh;
}
.mop-dialog-body {
	max-height: calc(70vh - 99px);
}
</style>
