import httpInstace from "@/utils/http";

//获取banner
export function getBannerAPI(){
    return  httpInstace({
        url:'/home/banner'
    })

}