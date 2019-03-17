<template>
    <Row style="height: 100%;overflow: hidden;">
        <Col :xs="0" :sm="2" :md="3" :lg="3">s</Col>
        <Col :xs="20" :sm="22" :md="21" :lg="21">
            <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo"></div>
            <div class="layout-nav">
                <MenuItem name="1">
                    <nuxt-link to="/">
                        <Icon type="md-home"/>
                        首页
                    </nuxt-link>
                </MenuItem>
                <MenuItem name="2">
                    <nuxt-link to="/type" active-class="nav-active">
                        <Icon type="ios-keypad"></Icon>
                        分类
                    </nuxt-link>
                </MenuItem>
                <MenuItem name="4" >
                    <nuxt-link to="/timeline" active-class="nav-active">
                        <Icon type="md-attach" />
                        时间轴  
                    </nuxt-link>
                </MenuItem>
                <MenuItem name="3">
                    <nuxt-link to="/tag" active-class="nav-active">
                        <Icon type="md-pricetags" />
                        标签
                    </nuxt-link>
                </MenuItem>
                <MenuItem name="4">
                    <nuxt-link to="/message" active-class="nav-active">
                        <Icon type="ios-paper"></Icon>
                        留言板
                    </nuxt-link>
                </MenuItem>
                
            </div>
        </Menu>
        </Col>
        
    </Row>
    
</template>
<style scoped lang="less">
    @import "../assets/var.less";
    .ivu-layout-header{
        display: flex;
    }
    .ivu-menu-item{
        font-size: 20px;
        a{
            display: inline-block;
            width: 100%;
            height: 100%;
            color:#fff; 
        }
    }
    .nav-active{
        font-weight: 600;
        color: @theme-color;
    }
    
</style>
<script type="text/javascript">

    export default {}
</script>
