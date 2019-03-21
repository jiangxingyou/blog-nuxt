<template>
     <Row class="wrap message">
        <Col span="18">
            <Msg/>
        </Col>
        <Col span="6">
            
        </Col>
    </Row>
</template>
<script>
import Msg from '~/components/messageBoard.vue'

export default {
    components: {
		Msg	
    }
}

</script>
<style lang="less" scoped>
@import "../../assets/var.less";

.wrap{
    background-color: #efefef;
}

</style>
