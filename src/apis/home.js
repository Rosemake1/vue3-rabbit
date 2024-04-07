import httpInstace from "@/utils/http";



//获取banner
export function getBannerAPI(){
    return  httpInstace({
        url:'/home/banner'
    })

}

export const findNewAPI=()=>{
        return httpInstace({
            url:'home/new'
        })
}

export const  getHotAPI=()=>{
    return httpInstace({
        url:'home/hot'
    })
}

export const getGoodsAPI=()=>{
    return httpInstace({
        url:'home/goods'
    })
}