import wepy from 'wepy'

const API_HOST = "https://www.zhengzhicheng.cn/api/public/v1/"

export default params=>{
  return wepy.request({
      url:`${API_HOST}${params.url}`,
      method:params.method || 'GET',
      data:params.data,
      header:params.header || {}
  })
}

//导出一个https中GET请求的方法
export const httpsGet = (url,data={},header={}) => {
  // return new Promise((resolve,reject)=>{
  //   wepy.request({
  //     url: `${API_HOST}${url}`, //开发者服务器接口地址",
  //     data ,
  //     success: resolve,
  //     fail: reject
  //   })
  // })

  return wepy.request({
    url: `${API_HOST}${url}`, //开发者服务器接口地址",
    data,
    header
  })
}
