<template>
     <Row class="wrap message">
        <Col span="18">
            <Msg/>
        </Col>
        <Col span="6">
            <button @click="add">add</button>
            <button @click="add2">add</button>
            <div class="a">{{name}}</div>
            <div class="b">{{msg}}</div>
        </Col>
    </Row>
</template>
<script>
import Msg from '~/components/messageBoard.vue'
import { mapState } from 'vuex'
export default {
    components: {
		Msg	
    },
    methods:{
        add(){
            this.$store.commit("increment");
        },
        add2(){
            this.$store.dispatch("INCREMENT");
        }
    },
    computed:mapState({
        name:"nowIndex",
        msg:(state)=>state.visitCount
    })
}

</script>
<style lang="less" scoped>
@import "../../assets/var.less";

.wrap{
    background-color: #efefef;
}

</style>
