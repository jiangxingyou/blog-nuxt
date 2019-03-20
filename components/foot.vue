<template>
    <div class="foot">
        <div class="foot-content">
            <div class="foot-copyright">
                <span>@ 2019 - 2022</span>
                <span>庞永胜-pangys</span>
                <span>Powered By pangyongsheng</span>
            </div>
            <div class="foot-count">
                <span class="foot-count-a">Unique Visitor: 
                    <span style="color:red">{{visit}}</span>
                </span>
                <span class="foot-count-b">Unique Visitor:
                    <span style="color:blank">1</span>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    	computed:{
            visit(){
                return this.$store.state.visitCount;
            }
        }
    }
</script>

<style lang="less" scoped>
	.foot{
        padding: 15px 0;
        background: #3a3b3c;
        color: #fff;
        font-size: 12px;
        width: 100%;
        position: relative;
        margin: 0;

        &-content{
            margin: 0 auto;
            text-align: left;
            width: 70%;
        }
        &-count{
            &-a{
                
            }
        }


    }
    
</style>
