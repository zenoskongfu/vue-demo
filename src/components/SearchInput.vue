<template>
  <div class="search-input-container">
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
    // 给组件取个名字
    name: 'SearchInput',
    // 组件中需要用到的数据
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
    // 组件内部需要用的方法，函数
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

<style></style>