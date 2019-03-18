<template>

         <Layout class="blog">
            <Content class="content-wrap">
                <!-- <Banner></Banner> -->
                 <Row   type="flex" justify="center" >
                    <Col  :xs="24" :sm="24" :md="14" :lg="14" class="content-left">
                        <Item v-for="(li,i) in list" :key="i" bType="文章" :bTitle="li.title" :bTime="li.date　|　dateStr" :bScan="li.scan" :bAbstract="li.overview"/> 
                    </Col>
                    <Col  :xs="0" :sm="0" :md="10" :lg="5" class="content-right">
                        <Person/>
                    </Col>
                </Row>
            </Content>
         </Layout>
</template>
<script>
import Logo from '~/components/Logo.vue'
import Nav from '~/components/nav.vue'
import Banner from '~/components/banner.vue'
import Item from '~/components/blogItem.vue'
import Person from '~/components/person.vue'
import axios from 'axios'
export default {
    head() {
        return {
            title:'Home|生生',
            meta: [
                { hid: 'description', name: 'description', content: 'My custom description' }
            ]
        }
    },
    components: {
        Logo,Nav,Banner,Item,Person
    },
    data(){
        return{
            list:[]
        }
    },
    filters: {
        dateStr:function (value) {
            return value.match(/\d{4}\-\d{2}\-\d{2}/)[0];
        }
    },
    methods:{
        async getArticleList(){//获取文章列表
            let data =await axios.get(this.$store.state.baseUrl+'api/article');
            this.list=data.data.articles;
        }
    },
    created(){
        this.getArticleList();
    }
}

</script>
<style lang="less" scoped>

.content-wrap{
    .content-left{
        padding:20px;
    }
    .content-right{
        
    }

}


</style>
