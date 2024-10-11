<template>
  <div id="app">
    <input class="search-input"
           :value="searchValue"
           @change="onChange" />
    <div class="dropdown-list">
      <div class="list-item"
           v-for="item in listData"
           :key="item">{{ item }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        searchValue: '',
        listData: [
          'apple',
          'peach',
          'banana'
        ],
        originListData: [
          'apple',
          'peach',
          'banana'
        ]
      }
    },
    methods: {
      onChange(e) {
        console.log('onchange');
        console.log(e.target.value);
        this.searchValue = e.target.value;



        console.log('listData', this.listData);

        const temp = this.originListData.filter(item => {
          if (item.includes(this.searchValue)) {
            return true // 留下
          }
          return false // 不留下
        })

        console.log('temp: ', temp);

        this.listData = temp;
      }
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
