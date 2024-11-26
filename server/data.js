const data = {
  banks: [
    { 
      id: 1, 
      name: "工商银行", 
      customerTypes: [
        { id: 1, type: "个人客户" },
        { id: 2, type: "企业客户" }
      ], 
      tradingSystems: [
        { 
          id: 1, 
          name: "系统A", 
          tradingCodes: [
            { id: 1, code: "交易码1" },
            { id: 2, code: "交易码2" }
          ], 
          customerNames: [
            { id: 1, name: "李四", idType: { id: 1, type: "身份证" }, idNumber: "123456789012345678", phone: "13800138000" },
            { id: 2, name: "王五", idType: { id: 2, type: "护照" }, idNumber: "987654321098765432", phone: "13900139000" }
          ]
        },
        { 
          id: 2, 
          name: "系统B", 
          tradingCodes: [
            { id: 2, code: "交易码2" },
            { id: 3, code: "交易码3" }
          ], 
          customerNames: [
            { id: 2, name: "王五", idType: { id: 2, type: "护照" }, idNumber: "987654321098765432", phone: "13900139000" },
            { id: 3, name: "赵六", idType: { id: 1, type: "身份证" }, idNumber: "112233445566778899", phone: "13700137000" }
          ]
        }
      ]
    },
    { 
      id: 2, 
      name: "农业银行", 
      customerTypes: [
        { id: 1, type: "个人客户" }
      ], 
      tradingSystems: [
        { 
          id: 3, 
          name: "系统C", 
          tradingCodes: [
            { id: 1, code: "交易码1" },
            { id: 3, code: "交易码3" }
          ], 
          customerNames: [
            { id: 1, name: "李四", idType: { id: 1, type: "身份证" }, idNumber: "123456789012345678", phone: "13800138000" },
            { id: 3, name: "赵六", idType: { id: 1, type: "身份证" }, idNumber: "112233445566778899", phone: "13700137000" }
          ]
        }
      ]
    },
    { 
      id: 3, 
      name: "建设银行", 
      customerTypes: [
        { id: 2, type: "企业客户" }
      ], 
      tradingSystems: [
        { 
          id: 1, 
          name: "系统A", 
          tradingCodes: [
            { id: 1, code: "交易码1" },
            { id: 2, code: "交易码2" }
          ], 
          customerNames: [
            { id: 1, name: "李四", idType: { id: 1, type: "身份证" }, idNumber: "123456789012345678", phone: "13800138000" },
            { id: 2, name: "王五", idType: { id: 2, type: "护照" }, idNumber: "987654321098765432", phone: "13900139000" }
          ]
        },
        { 
          id: 3, 
          name: "系统C", 
          tradingCodes: [
            { id: 1, code: "交易码1" },
            { id: 3, code: "交易码3" }
          ], 
          customerNames: [
            { id: 1, name: "李四", idType: { id: 1, type: "身份证" }, idNumber: "123456789012345678", phone: "13800138000" },
            { id: 3, name: "赵六", idType: { id: 1, type: "身份证" }, idNumber: "112233445566778899", phone: "13700137000" }
          ]
        }
      ]
    },
    { 
      id: 4, 
      name: "中国银行", 
      customerTypes: [
        { id: 1, type: "个人客户" },
        { id: 2, type: "企业客户" }
      ], 
      tradingSystems: [
        { 
          id: 1, 
          name: "系统A", 
          tradingCodes: [
            { id: 1, code: "交易码1" },
            { id: 2, code: "交易码2" }
          ], 
          customerNames: [
            { id: 1, name: "李四", idType: { id: 1, type: "身份证" }, idNumber: "123456789012345678", phone: "13800138000" },
            { id: 2, name: "王五", idType: { id: 2, type: "护照" }, idNumber: "987654321098765432", phone: "13900139000" }
          ]
        }
      ]
    }
  ],
};

exports.data = data; 