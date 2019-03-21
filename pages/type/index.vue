<template>
    <div class="type">
       <div class="type-wrap">
            <div class="type-content">
                <h3 class="type-content-title">分类</h3>
                <p class="type-content-des">{{lists.length}} categories in total</p>
                
                <ul>
                    <li v-for="(li,index) in lists" :ley="index">{{li.name}}({{li.total}})</li>
                </ul>

            </div>

        </div>
        
    </div>
    
</template>
<script>
import Foot from '~/components/foot.vue'
export default {
    head() {
        return {
            title:'Home',
            meta: [
                { hid: 'description', name: 'description', content: 'My custom description' }
            ]
        }
    },
    components: {
        Foot
    },
    data(){
        return{
            lists:[
                {name:"日记",total:'2'},
                {name:"web",total:'1'},
                {name:"node",total:'1'}
            ]
        }
    }
}
</script>
<style lang="less" scoped>
    .type{
        display: flex;
        flex-direction: column;
        flex: auto;
        background: #e8edf1;
        &-wrap{
            padding: 50px 150px;
            margin: 50px auto;
            
           
            
            background: radial-gradient(circle at top left, transparent 15px, #757678 0) top left,
                        radial-gradient(circle at top right, transparent 15px, #757678 0) top right,
                        radial-gradient(circle at bottom left, transparent 15px, #757678 0) bottom left,
                        radial-gradient(circle at bottom right, transparent 15px, #757678 0) bottom right;
            background-size: 51% 51%; 
            
            background-repeat: no-repeat;
       }
       &-content{

            &-title{
                font-size: 40px;
                line-height: 50px;
                margin: 60px auto;
                text-align: center;
                    color: #fff;
            }
            &-des{
                text-align: center;
                margin:30px auto;
                font-size: 18px;
                    color: #fff;
            }
            ul{
                padding:20px;
                    color: #fff;
               
                li{
                    font-size: 23px;        
                }
            }
       }
    }

    
</style>