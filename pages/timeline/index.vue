<template>
    <div class="time">
       <div class="time-wrap">
            <div class="time-content">
                
                <p class="time-content-title">reat! 179 posts in total. Keep on posting.</p>
                    
                    <Timeline class="line">
                        <template v-for="(li,index) in list" >
                            <TimelineItem v-if="li.des" :key="index">
                                <p class="line-time">{{li.time}}</p>
                                <p class="line-content"> {{li.des}}</p>
                            </TimelineItem>
                            <TimelineItem v-else :key="index">
                                <p class="line-time-only">{{li.time}}</p>
                            </TimelineItem>
                        </template>  
                    </Timeline>
                     
            </div>

        </div>
        
    </div>
    
</template>
<script>
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
        
    },
    data(){
        return{
            list:[
                {time:"2018"},
                {time:"12-25",des:"S常用设计模式总结"},
                {time:"12-25",des:"如何形成一个完整的HTML对象"},
                {time:"12-25",des:"聊聊伪元素（::after和::before）、pointer-events属性、touch-action属性"},
                {time:"12-25",des:"HTTP知识（前端相关）"},
                {time:"12-25",des:"HTTP知识（前端相关）"},
                {time:"2018"},
                {time:"12-25",des:"CSS技巧"},
            ]
        }
    }
}
</script>
<style lang="less" scoped>
    .time{
        display: flex;
        flex-direction: column;
        flex: auto;
        background: #f5f7f9;

        &-wrap{
            width: 70%;
            margin: 50px auto;
            min-height: 800px;
            
       }
       &-content{
            &-title{
                font-size: 22px;
                margin:20px;
            }
            .line{
                margin:30px auto;
                &-time{
                    font-size: 14px;
                    position: relative;
                    top: -12px;
                }
                &-content{
                    font-size: 18px;
                    position: relative;
                    top: -12px;
                }
                &-time-only{
                    font-size: 30px;
                    position: relative;
                    top: -12px;
                }
            }
            
       }
       
   
    }
    
    
</style>