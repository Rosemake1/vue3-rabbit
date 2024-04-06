//axios基础的封装
import axios from 'axios'

const httpInstace=axios.create({
baseURL:'http://pcapi-xiaotuxian-front-devtest.itheima.net',
timeout:5000

})
//拦截器
//axios请求拦截器
httpInstace.interceptors.request.use(config => {
    return config
  }, e => Promise.reject(e))
  
//axios响应式拦截器
httpInstace.interceptors.response.use(res => res.data, e => {
    return Promise.reject(e)
  })

export default httpInstace