import { getAxios, postAxios } from "@/util/httpAxios";

// 获取银行列表
export const getBankList = () => {
	return getAxios("http://localhost:3000/api/bank");
};

// 获取客户类型
export const getCustomerType = (bankId) => {
	return postAxios("http://localhost:3000/api/customer-types", { bankId });
};

export const getDetailData = async (param) => {
	console.log(param);

	// 模拟后端的数据
	return {
		payload: {
			id: "001",
			name: "zenos",
			phone: "123123123",
			date: "2023",
		},
	};
};
