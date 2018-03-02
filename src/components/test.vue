<template>
  <ul>
    <li v-for="(item,index) in mokeData" class="page" :key="index">
      <div class="page-left">
        <p class="page-left-title">{{item.title}}</p>
        <p class="page-left-content">{{item.content}}
        </p>
        <div class="page-left-bottom">
          <span>23分钟之前</span>
          <span>要戒网</span>
        </div>
      </div>
      <div class="page-right" v-if="item.cover || item.cover1 || item.cover2">
        <div class="cover" style="display: flex;align-items: center;">
          <span><img :src="item.cover" alt=""></span>
          <div class="imgs" style="display: flex;">
            <span><img :src="item.cover1" alt=""></span>
            <span><img :src="item.cover2" alt=""></span>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      mokeData: [
        {
          title: '猎豹移动回应区块链AI音箱：不涉及ICO，不会募资',
          content: '猎豹移动就“基于区块链的小豹AI音箱”做出回应：将通过发展区块链底层技术，重构“企业与消费者之间的生产关系”；把技术实际落地到应用场景，解决消费者回报和激励问题，让消费者消费和使用产品的同时也能分享产品生态的收益；猎豹移动的区块链技术，不涉及ICO，亦不会有任何募资。（腾讯科技）',
          cover: 'http://oc3brgiv8.bkt.clouddn.com/7ddIKibvNL7wsWGrgyozmKLoiALqcxrqpBUYcFdqk2o',
          cover1: '',
          cover2: ''
        },
        {
          title: '猎豹移动回应区块链AI音箱：不涉及ICO，不会募资',
          content: '猎豹移动就“基于区块链的小豹AI音箱”做出回应：将通过发展区块链底层技术，重构“企业与消费者之间的生产关系”；把技术实际落地到应用场景，解决消费者回报和激励问题，让消费者消费和使用产品的同时也能分享产品生态的收益；猎豹移动的区块链技术，不涉及ICO，亦不会有任何募资。（腾讯科技）',
          cover: '',
          cover1: '',
          cover2: ''
        },
        {
          title: '猎豹移动回应区块链AI音箱：不涉及ICO，不会募资',
          content: '猎豹移动就“基于区块链的小豹AI音箱”做出回应：将通过发展区块链底层技术，重构“企业与消费者之间的生产关系”；把技术实际落地到应用场景，解决消费者回报和激励问题，让消费者消费和使用产品的同时也能分享产品生态的收益；猎豹移动的区块链技术，不涉及ICO，亦不会有任何募资。（腾讯科技）',
          cover: '',
          cover1: 'http://oc3brgiv8.bkt.clouddn.com/7ddIKibvNL7wsWGrgyozmKLoiALqcxrqpBUYcFdqk2o',
          cover2: 'http://oc3brgiv8.bkt.clouddn.com/7ddIKibvNL7wsWGrgyozmKLoiALqcxrqpBUYcFdqk2o'
        },
        {
          title: '猎豹移动回应区块链AI音箱：不涉及ICO，不会募资',
          content: '猎豹移动就“基于区块链的小豹AI音箱”做出回应：将通过发展区块链底层技术，重构“企业与消费者之间的生产关系”；把技术实际落地到应用场景，解决消费者回报和激励问题，让消费者消费和使用产品的同时也能分享产品生态的收益；猎豹移动的区块链技术，不涉及ICO，亦不会有任何募资。（腾讯科技）',
          cover: '',
          cover1: '',
          cover2: 'http://oc3brgiv8.bkt.clouddn.com/7ddIKibvNL7wsWGrgyozmKLoiALqcxrqpBUYcFdqk2o'
        },
        {
          title: '猎豹移动回应区块链AI音箱：不涉及ICO，不会募资',
          cover: '',
          content: '猎豹移动就“基于区块链的小豹AI音箱”做出回应：将通过发展区块链底层技术，重构“企业与消费者之间的生产关系”；把技术实际落地到应用场景，解决消费者回报和激励问题，让消费者消费和使用产品的同时也能分享产品生态的收益；猎豹移动的区块链技术，不涉及ICO，亦不会有任何募资。（腾讯科技）',
          cover1: 'http://oc3brgiv8.bkt.clouddn.com/7ddIKibvNL7wsWGrgyozmKLoiALqcxrqpBUYcFdqk2o',
          cover2: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.page{
  width: 665px;
  display: flex;
  align-items: center;
  border: 1px solid #aaa;
  padding: 10px;
  .imgs{

    span{
      width: 93px;
      img{
        width: 90%;
      }
    }
  }
  .page-left{
    flex: 1;
    .page-left-title{
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
    .page-left-content{
      margin-bottom: 24px;
      -webkit-box-orient: vertical;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      overflow: hidden;
      line-height: 1.3;
      color: #878787;
      font-size: 14px;
      text-overflow: ellipsis;
      min-height: 36px;
    }
    .page-left-bottom{
      span{
        font-size: 12px;
        color: #aaa;
      }
      span:nth-child(2):before{
        content: "|";
        margin:0 10px;
      }
    }
  }
  .page-right{
    width: 180px;
    height: 110px;
    background: aqua;
  }
}
</style>
