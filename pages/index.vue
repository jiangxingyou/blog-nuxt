<template>

         <Layout class="blog">
            <Content class="content-wrap">
                <!-- <Banner></Banner> -->
                 <Row   type="flex" justify="center" >
                    <Col  :xs="24" :sm="24" :md="14" :lg="14" class="content-left">
                        <Item v-for="(v,i) in list" :key="i"/> 
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
            list:[1,2,3,4,5,6,6,7]
        }
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
