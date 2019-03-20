<template>
    <div class="read">
        <Row   type="flex" justify="center" >
            <!-- 文章 -->
            <Col  :xs="24" :sm="24" :md="14" :lg="14" class="content-left">
                <div class="read-wrap">
                    <h4 class="read-title">{{title}}</h4>
                    <div class="read-content" v-html='innerH'></div>
                </div>
            </Col>
            <!-- 侧边栏 -->
            <Col  :xs="0" :sm="0" :md="10" :lg="5" class="content-right">
                <Person/>
            </Col>
        </Row>
    </div>
</template>
<script>
import axios from 'axios'
import Person from '~/components/person.vue'
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
       Person
    },
    data(){
        return{
            title:'',
            innerH: ''   
        }
    },
    methods:{
        async getHtml(){
            try{
                let data =await axios.get(this.$store.state.baseUrl+'api/articleHtml'+this.$route.params.id);
                //console.log(data);
                this.title= data.data.articles[0].title;
            this.innerH= data.data.articles[0].text;
            }catch(err){
                console.log(err)
            }
        }
    },
    created(){
        this.getHtml();
    }
}
</script>
<style lang="less" scoped>
   .read{
        &-wrap{
            margin:20px;
            padding:20px;
            background-color: #fff;
            min-height: 60vh;
            border-radius: 5px;
        }
        &-title{
           font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
                'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            display: block;
            font-weight: 300;
            font-size: 28px;
            font-weight: 600;
            color: #35495e;
            letter-spacing: 1px;
            text-align: center; 
        }
        &-content{

        }
   }
    
</style>