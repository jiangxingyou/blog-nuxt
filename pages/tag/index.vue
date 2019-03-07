<template>
    <div class="wrap">
        <div class="content">
            <header class="tag-header">
                <h2>标签</h2>
            </header>
            <div class="tag-body">
                
                <div class="tag-body-tags">
                   <div v-for="(item,index) in tags" :key="index"  class="tag-body-tags-li">
                       <Tag v-for="(tag,index) in item" :key="index" :tname="tag" ></Tag>
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
            tagList: ["BOM", "Babel", "MVC", "Mobx", "OSI", "React", "Redux", "Sass", "TCP/IP", "Web", "css", "dos命令", "element-ui", "git", "html,css,js", "html5", "http", "java", "js", "jsp", "koa", "mysql", "node", "ramda", "shell", "svg", "vue", "web", "web开发", "代码规范", "代码重构", "优秀项目", "函数式编程", "前端", "前端面试", "安全", "布局", "性能", "数据库", "数据结构和算法", "有趣的", "服务端", "浏览器", "移动端", "移动端,", "布局", "缓存", "设计模式", "读书笔记", "调试", "路由", "面向对象编程", "面试"],
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
