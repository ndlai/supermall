import axiox from 'axios'
export function request(config){
// 1、创建axios实例
const instance=axiox.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
})

//2、请求拦截器
instance.interceptors.request.use(config=>{
    return config
},err=>{
console.log('请求拦截器：'+err);
})

//3、响应拦截器
instance.interceptors.response.use(res=>{
    return res.data
},err=>{
    console.log('响应拦截器：'+err);
})

return instance(config)
}