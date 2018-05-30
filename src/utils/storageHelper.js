import wepy from 'wepy'

const KEY = "GOODS"

export const getLocalGoods = () => {
  return wepy.getStorageSync(KEY) || {}
}

// goods {goodsId:87,count:3}
export const addLocalGoods = (goods) => {
  const localGoods = getLocalGoods()

  if(localGoods[goods.goodsId]){
    localGoods[goods.goodsId]+=goods.count
  }else{
    localGoods[goods.goodsId]=goods.count
  }

  wepy.setStorageSync(KEY,localGoods)
}
