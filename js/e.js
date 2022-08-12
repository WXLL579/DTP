//获取两份数据
const SX = await this.getWorldJson('sx')
const SXNoSubRegion = await this.getWorldJson('shanXiNoSubRegion')

//加载数据
this.$echarts.registerMap('山西省', SX)
this.$echarts.registerMap('山西省无子区域', SXNoSubRegion)

const option = {
    series: [
      {
        type: 'map',
        map: '山西省无子区域',
        silent: true, // 图形是否不响应和触发鼠标事
        roam: false, // 鼠标缩放
        zoom: 1.01,
        itemStyle: {
          borderColor: '#14edfc',
          borderWidth: 5,
          areaColor: 'rgba(0,0,0,0)'
        }
      },
      {
        type: 'map',
        map: '山西省',
        roam: false,
        label: {
          show: true,
          color: '#0484a5'
        },
        itemStyle: {
          borderColor: '#3b89ac',
          borderWidth: 3,
          areaColor: 'rgba(9, 40, 77, 0.5)'
        }
      }
    ]
  }