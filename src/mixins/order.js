import wepy from 'wepy'

import { getLocalGoods } from '../utils/storageHelper'
import https from '../utils/https'

export default class OrderMixin extends wepy.mixin {
  //根据ids 获取商品数据
  getGoodsListData(ids) {
    return new Promise((resolve, reject) => {
      if (ids == null) {
        reject(new Error('ids不能为空'))
      } else {
        https({
          url: `goods/goodslist`,
          data: {
            goods_ids: ids
          }
        }).then(res => {
          const localGoods = getLocalGoods()

          res.data.forEach(item => {
            item.isSelected = true
            item.goodsCount = localGoods[item.goods_id]
          })

          resolve(res.data)
        }).catch(err=>{
          reject(err)
        })
      }
    })
  }
}
