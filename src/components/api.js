export const getData = () => {
	return fetch("http://localhost:8082")
		.then((res) => res.json())
		.then((res) => {
			console.log(res);
			return res;
		});
};
