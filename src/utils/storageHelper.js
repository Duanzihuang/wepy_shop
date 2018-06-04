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

export const updateLocalGoods = (goods) => {
  const localGoods = getLocalGoods()

  localGoods[goods.goodsId] = goods.count

  wepy.setStorageSync(KEY,localGoods)
}

export const deleteGoodsById = (goodsId) => {
  const localGoods = getLocalGoods()

  delete localGoods[goodsId]

  wepy.setStorageSync(KEY,localGoods)
}
