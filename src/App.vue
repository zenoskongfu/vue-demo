<template>
  <div id="app">

    <el-input placeholder="请输入内容"
              v-model="inputValue"
              clearable
              show-password
              prefix-icon="el-icon-date">
    </el-input>

    <el-autocomplete class="inline-input"
                     v-model="inputValue2"
                     :fetch-suggestions="querySearch"
                     placeholder="请输入内容"
                     @select="handleSelect"></el-autocomplete>
  </div>
</template>

<script>
  // 引入
  // import SearchInput from './components/SearchInput.vue';


  export default {
    name: 'App',
    // 局部注册
    components: {
      // SearchInput
    },
    data() {
      return {
        inputValue: '',
        inputValue2: '',
        restaurants: []
      }
    },
    methods: {
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(
          // 遍历得到的每一项，作为参数传入
          (restaurant) => {
            // indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置，否则返回 -1
            return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
          }
        ) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
          { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
          { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
          { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
          { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
          { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
          { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
          { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },
          { "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号" },
          { "value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号" },
          { "value": "新麦甜四季甜品炸鸡", "address": "嘉定区曹安公路2383弄55号" },
          { "value": "Monica摩托主题咖啡店", "address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F" },
          { "value": "浮生若茶（凌空soho店）", "address": "上海长宁区金钟路968号9号楼地下一层" },
          { "value": "NONO JUICE  鲜榨果汁", "address": "上海市长宁区天山西路119号" },
          { "value": "CoCo都可(北新泾店）", "address": "上海市长宁区仙霞西路" },
          { "value": "快乐柠檬（神州智慧店）", "address": "上海市长宁区天山西路567号1层R117号店铺" },
          { "value": "Merci Paul cafe", "address": "上海市普陀区光复西路丹巴路28弄6号楼819" },
          { "value": "猫山王（西郊百联店）", "address": "上海市长宁区仙霞西路88号第一层G05-F01-1-306" },
          { "value": "枪会山", "address": "上海市普陀区棕榈路" },
        ]
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
    }
  }
</script>

<style>
  #app {
    width: fit-content;
    margin: 0 auto;
    margin-top: 10vh;
  }

  .search-input {
    width: 300px;
    height: 40px;

    font-size: 20px;
  }

  .dropdown-list {
    box-shadow: 0 0 4px 0px lightgray;
    border-radius: 4px;
    padding: 4px;
    width: 300px;

    margin-top: 10px;
  }

  .list-item {
    border-bottom: 1px solid gray;
    height: 35px;

    text-align: center;
    line-height: 35px;
  }

  .list-item:last-child {
    border-bottom: none;
  }
</style>
