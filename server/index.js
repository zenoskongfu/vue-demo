const http = require("http");

const server = new http.Server((req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.end(
		JSON.stringify([
			{
				value: "选项1",
				label: "黄金糕",
			},
			{
				value: "选项2",
				label: "双皮奶",
			},
			{
				value: "选项3",
				label: "蚵仔煎",
			},
			{
				value: "选项4",
				label: "龙须面",
			},
			{
				value: "选项5",
				label: "北京烤鸭",
			},
			{
				value: "选项6",
				label: "上海烤鸭",
			},
		])
	);
});

server.listen(8082);
