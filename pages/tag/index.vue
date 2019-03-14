<template>
    <div class="wrap">
        <div class="content">
            <header class="tag-header">
                <h2>标签</h2>
            </header>
            <div class="tag-body">
                
                <div class="tag-body-tags">
                   <div v-for="(item,index) in tags" :key="index"  class="tag-body-tags-li">
                       <Tag v-for="(tag,index) in item" :key="tag.id" :tname="tag.name" ></Tag>
                   </div> 
                </div>
               <div class="tag-body-title">
                   <Button @click="rearrange">{{tagList.length}}tags in total,Click Rearrange Tags</Button>
               </div>     
            </div>
        </div>
    </div>
</template>
<script>
    
import axios from 'axios'

import Tag from '~/components/tag.vue'
import {$RandomSplit} from '@/utils/Random';
import { $NormalSort } from '@/utils/ArrSort';

export default { 
    components: {
        Tag
    },
    data() {
        return {
            list:[],
            tagList: [],
        }
    },
    computed:{
        tags(){
            this.list =  $NormalSort($RandomSplit(this.tagList.length,8,10));//获取数据结构
            let temp = this.tagList.sort(function(a,b){    //重新随机排序
                return Math.random()>.5 ? -1 : 1; 
            }).concat();
            return this.list.map((v,k) => {//根据list生成数据结构
                return temp.splice(0,v);
            })
        }
       
    },
    methods:{
        rearrange(){
            this.tagList.sort(function(a,b){    //重新随机排序
                return Math.random()>.5 ? -1 : 1; 
            })
        }
    },
    created(){
        let data  = axios.get('http://localhost:3000/api/tags')
        data.then((b)=>{
            this.tagList = b.data.tags;
         })

    }
}

</script>
<style lang="less" scoped>
@import "../../assets/var.less";

.wrap {
    padding: 50px 0px;

    .content {
        margin-top: 80px;
        margin: 0 auto;

        .tag-header {
            margin: 45px auto;
            text-align: center;
            font-size: 22px;
            font-weight: 400;
             user-select: none;
        }

        .tag-body {

            //max-width: 672px;
            margin: auto;

            &-title {
                text-align: center;
                margin-top: 50px;
            }

            &-tags {
                text-align: center;
                word-break: break-word;

                &-li{
                     text-align: center;
                }
            }
        }
    }

}

</style>
