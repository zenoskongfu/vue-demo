const express = require("express");
const {data} = require("./data.js");

const app = express();

app.use(express.json());
app.use((req,res,next)=>{
    // 设置跨域
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    next();
})

app.use((req,res,next)=>{
    console.log("url",req.url);
    console.log("method",req.method);
    next();
})

app.get("/", (req, res) => {

  res.send("Hello, I am a server");
});


// 我要写一系列接口，返回json数据格式
// 1. 银行名称
// 2. 客户类型
// 3. 交易系统
// 4. 交易码
// 5. 交易客户姓名
// 6. 交易客户证件类型
// 7. 交易客户证件号码
// 8. 交易客户手机号

app.get("/api/bank", (req, res) => {
  res.send({
    code: 200,
    status: "success",
    data: data.banks,
  });
});

// 根据银行ID查询客户类型
app.post("/api/customer-types", (req, res) => {
    const { bankId } = req.body;
    console.log("bankId",bankId); // 1 number
    const bank = data.banks.find(b => b.id === bankId);
    if (bank) {
      res.send({
        code: 200,
        status: "success",
        data: bank.customerTypes,
      });
    } else {
      res.status(200).send({
        code: 200,
        status: "error",
        message: "Bank not found",
      });
    }
  });

  app.get("/api/customer-types", (req, res) => {
    // console.log("req++++++++=",req.url,req.params,req.query);
    const { bankId } = req.query; // "1" string
    res.send({
      code: 200,
      status: "success",
      data: data.banks.find(b => b.id === Number(bankId)).customerTypes,
    });
  });
  
  // 根据银行ID查询交易系统
  app.post("/api/trading-systems", (req, res) => {
    const { bankId } = req.body;
    const bank = data.banks.find(b => b.id === bankId);
    if (bank) {
      res.send({
        code: 200,
        status: "success",
        data: bank.tradingSystems,
      });
    } else {
      res.status(404).send({
        code: 404,
        status: "error",
        message: "Bank not found",
      });
    }
  });
  
  // 根据交易系统ID查询交易码
  app.post("/api/trading-codes", (req, res) => {
    const { systemId } = req.body;
    const system = data.banks.flatMap(bank => bank.tradingSystems).find(s => s.id === systemId);
    if (system) {
      res.send({
        code: 200,
        status: "success",
        data: system.tradingCodes,
      });
    } else {
      res.status(404).send({
        code: 404,
        status: "error",
        message: "Trading system not found",
      });
    }
  });
  
  // 根据交易系统ID查询客户姓名
  app.post("/api/customer-names", (req, res) => {
    const { systemId } = req.body;
    const system = data.banks.flatMap(bank => bank.tradingSystems).find(s => s.id === systemId);
    if (system) {
      res.send({
        code: 200,
        status: "success",
        data: system.customerNames,
      });
    } else {
      res.status(404).send({
        code: 404,
        status: "error",
        message: "Trading system not found",
      });
    }
  });
  



app.listen(3000, () => {
  console.log("Server is running on port 3000");
});


