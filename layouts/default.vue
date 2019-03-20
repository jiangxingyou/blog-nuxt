<template>
    <div style="min-height: 100vh;margin: 0;padding:0;display: flex;
      flex-direction: column;" >
        <Header style="position: fixed;width: 100%;z-index: 100">
            <Nav></Nav>
        </Header>
        <nuxt style="flex:1;padding-top: 64px;"/>
        <Foot />
    </div>
</template>
<style lang="less">
@import "../assets/var.less";
html {
      font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, 'Helvetica Neue', Arial, sans-serif;
      font-size: 16px;
      word-spacing: 1px;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      box-sizing: border-box;
}

*,
*:before,
*:after {
    box-sizing: border-box;
    margin: 0;
}

.button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;
}

.button--green:hover {
    color: #fff;
    background-color: #3b8070;
}

.button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
}

.button--grey:hover {
    color: #fff;
    background-color: #35495e;
}
.ivu-layout{
     background: transparent !important; 
}
.blog,.read,.type,.message,.time,.tag{
    background:@bg-img2  !important; 
    background-size:cover !important;
    background-repeat:no-repeat !important;
    background-attachment:fixed !important;
}

</style>
<script type="text/javascript">
import axios from 'axios'
import Nav from '~/components/nav.vue'
import Foot from '~/components/foot.vue'
export default {
    components: {
        Nav,
        Foot
    },
    methods:{
        async setVisitAdd(next){//设置访问数加一
            if(!this.$store.state.isDev){
                let addV =await axios.get(this.$store.state.baseUrl+'api/visitAdd');
            }
            
            //console.log(addV);
        },
        async getVisit(next){//获取访问数
            let data =await axios.get(this.$store.state.baseUrl+'api/visitCount');
            this.$store.state.visitCount = data.data.site[0].count;
        }

    },
    mounted(){
        this.getVisit();
        this.setVisitAdd();    
    }
}

</script>
