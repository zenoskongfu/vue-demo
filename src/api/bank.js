import { getAxios, postAxios } from "@/util/httpAxios";

// 获取银行列表
export const getBankList = () => {
	return getAxios("http://localhost:3000/api/bank");
};

// 获取客户类型
export const getCustomerType = (bankId) => {
	return postAxios("http://localhost:3000/api/customer-types", { bankId });
};
