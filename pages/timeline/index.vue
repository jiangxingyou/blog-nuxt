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
import axios from 'axios'
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
               
            ]
        }
    },
    methods:{
        async getLists(){//articleTime
            console.log(123213);
            try{
                console.log(2222)
                let data =await axios.get(this.$store.state.baseUrl+'api/articleTime');
                let year=0;
                data.data.articles.map((v)=>{
                    let t = new Date(v.date);
                    if( year!=t.getFullYear() ) {
                        year = t.getFullYear();
                       this.list.push({ time : t.getFullYear()})
                    }
                    this.list.push({
                        time:t.getMonth()+"-"+t.getDate(),
                        des:v.title
                    })
                    
                })
                //this.list=data.data.articles;
            }catch(e){
                console.log(err);
            }
        }
    },
    created(){
        this.getLists();
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
            min-height: 500px;
            background:#fff;
            
       }
       &-content{
            padding:10px 30px; 
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