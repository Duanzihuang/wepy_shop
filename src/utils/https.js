import wepy from 'wepy'

const API_HOST = "https://www.zhengzhicheng.cn/api/public/v1/"

export default params=>{
  return wepy.request({
      url:`${API_HOST}${params.url}`,
      method:params.method || 'GET',
      data:params.data,
      header:params.header
  })
}
