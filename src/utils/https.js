import wepy from 'wepy'

const API_HOST = "https://www.zhengzhicheng.cn/api/public/v1/"

export default params=>{
  return new Promise((resolve,reject)=>{
    wepy.request({
      url:`${API_HOST}${params.url}`,
      method:params.method || 'GET',
      data:params.data,
      header:params.header,
      success:res=>{
        resolve(res.data)
      },
      fail:reject
    })
  })
}
