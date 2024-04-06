import { ref } from 'vue'
import { defineStore } from 'pinia'
import {getCategoryAPI}  from "@/apis/layout"
export const useCategoryStore = defineStore('category', () => {
//导航列表的数据管理
//state 导航列表数据
const cotegoryList=ref([])

//action导航列表数据的方法
    const getCategory= async()=>{
   const res=await getCategoryAPI()
    cotegoryList.value=res.result
}

    return{
        cotegoryList,
        getCategory
    }
})
