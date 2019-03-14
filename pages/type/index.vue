<template>
    <div class="type">
       <div class="type-wrap">
            <div class="type-content">
                <h3 class="type-content-title">分类</h3>
                <p class="type-content-des">27 categories in total</p>
                <ul>
                    <li>BOM</li>
                </ul>
            </div>

        </div>
        <Foot/> 
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
            
        }
    }
}
</script>
<style lang="less" scoped>
    .type{
        display: flex;
        flex-direction: column;
        flex: auto;
        background: #f5f7f9;
        &-wrap{
            width: 700px;
            margin: 50px auto;
            min-height: 800px;
            background-color: #fff;
       }
       &-content{

            &-title{
                font-size: 40px;
                line-height: 50px;
                margin: 60px auto;
                text-align: center;
            }
       }
    }
   
    
</style>