<template>
    <Layout>
         <Layout>
            <Content class="content-wrap">
                <!-- <Banner></Banner> -->
                 <Row   type="flex" justify="center" >
                    <Col  :xs="24" :sm="24" :md="14" :lg="14" class="content-left">
                        <Item v-for="(v,i) in list"/> 
                    </Col>
                    <Col  :xs="0" :sm="0" :md="10" :lg="5" class="content-right">
                        <Person/>
                    </Col>
                </Row>
            </Content>
         </Layout>
        <Foot></Foot>
    </Layout>
</template>
<script>
import Logo from '~/components/Logo.vue'
import Nav from '~/components/nav.vue'
import Banner from '~/components/banner.vue'
import Item from '~/components/blogItem.vue'
import Foot from '~/components/foot.vue'
import Person from '~/components/person.vue'
export default {
    head() {
        return {
            title:'hhh',
            meta: [
                { hid: 'description', name: 'description', content: 'My custom description' }
            ]
        }
    },
    components: {
        Logo,Nav,Banner,Item,Foot,Person
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
// .container {
//     min-height: 100vh;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     text-align: center;
   
// }

// .title {
//     font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
//         'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
//     display: block;
//     font-weight: 300;
//     font-size: 100px;
//     color: #35495e;
//     letter-spacing: 1px;
// }

// .subtitle {
//     font-weight: 300;
//     font-size: 42px;
//     color: #526488;
//     word-spacing: 5px;
//     padding-bottom: 15px;
// }

// .links {
//     padding-top: 15px;
// }

// .side{
//     background-color:#fff;
// }
.footer{
    background-color:#fe8ef1;
}
</style>
