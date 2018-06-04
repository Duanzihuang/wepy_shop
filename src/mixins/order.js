import wepy from 'wepy'

import { getLocalGoods } from '../utils/storageHelper'
import https from '../utils/https'

export default class OrderMixin extends wepy.mixin {
  //根据ids 获取商品数据
  getGoodsListData(ids) {
    if (ids == null) {
      reject(new Error('ids不能为空'))
    }

    return new Promise((resolve,reject)=>{
      https({
        url: `goods/goodslist`,
        data: {
          goods_ids: ids
        }
      }).then(res => {
        const localGoods = getLocalGoods()

        res.data.message.forEach(item => {
          item.isSelected = true
          item.goodsCount = localGoods[item.goods_id]
        })

        resolve(res.data.message)
      }).catch(err=>{
        reject(err)
      })
    })
  }
}
