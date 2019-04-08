4<template>
    <div class="item">
        <div class="item-type">
            {{bType}}····     
        </div>
        <div class="item-inner">
            <div class="item-title">
                <nuxt-link :to="{name:'read',params:{id:bId}}">{{bTitle}}</nuxt-link>
            </div>
            <div class="item-info">
                <span class="item-info-time">
                    <Icon type="ios-clipboard-outline" />
                    {{bTime}}
                </span>
                <span class="item-info-word">
                    <Icon type="ios-create-outline" />
                    评论0
                </span>  
                <span class="item-info-scan">
                    <Icon type="ios-eye-outline" />
                    阅读{{bScan}}
                </span>    
            </div>
            <div class="item-abstract">{{bAbstract}}</div>
        </div>
        <div class="item-read">
            <nuxt-link :to="{name:'read',params:{id:bId}}">阅读全文</nuxt-link>
            
        </div>
    </div>
</template>
<script>
    export default {
        props:{
           bType:String,    //类型
           bTitle:String,   //标题
           bTime:String,    //时间
           bScan:Number,   //浏览数
           bAbstract:String, //内容概要
           bId:Number
        }
    }
</script>
<style lang="less" scoped>
    @import "../assets/var.less";
    .item{
        background-color: #fff;
        box-shadow: -1px 1px 1px #ccc;
        border-radius: 3px;
        width: 90%;
        margin:auto;
        margin-bottom: 20px;
        position: relative;
        padding: 20px 20px;

        background: linear-gradient(-150deg, transparent 1.5em, #fff 0);    
        position: relative;
        border-radius: .5em;

        span{
            margin: auto 12px;
        }
        &-title{
            a{
                font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
                'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                display: block;
                font-weight: 300;
                font-size: 26px;
                color: #35495e;
                letter-spacing: 1px;
                text-align: center;
            }
            
        }
        &-info{
            margin-top: 10px;
            margin-bottom: 20px;
            color: #00a7e0;
            font-family: "PingFang SC","Microsoft YaHei",Lato,sans-serif;
            font-size: 14px;
            text-align: center;
            i{
                font-size: 14px;
            }
            &-time{
                color: #00a7e0;
            }
            &-word{
                color: #000; 
            }
            &-scan{
                color: #ff3f1a; 
            }
        }
        &-type{
            position: absolute;
            left: -8px;
            top: 20px;
            /* border-color: #3a3b3c; */
            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px #f5f7f9, 0 1px 5px 0 rgba(0, 0, 0, 0.12);
            background-color: #757678;
            margin: 5px 0 15px 2px;
            font-size: 14px;
            border-radius: 0 4px 4px 0;
            display: inline-block;
            padding: 6px 9px 3px 17px;
            line-height: 1;
            color: #fff;
        }
        &-abstract{
            text-align: justify;
            font-size: 16px;
        }
        &-read{
            background: #66cccc;
            color: #fff;
            font-size: 17px;
            padding: 1px 15px;
            border-radius: 5px;
            border: none;
            display: inline-block;
            cursor: pointer;
            margin-top: 30px;
            position: relative;
            left: 80%;
            width: 100px;
            text-align: center;
            height: 40px;
            line-height: 40px;  
            a{
                display: inline-block;
                width: 100%;
                height: 100%;
                color: #fff;
                font-size: 16px;
            }

        }
        &-read:hover{
                font-weight:600;
            }

        &::after{
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            background: linear-gradient(to left bottom, transparent 50%, #66cccc 0,  #66cccc) 100% 0 no-repeat;
            width: 1.73em;
            height: 3em;
            -webkit-transform: translateY(-1.3em) rotate(-30deg);
            transform: translateY(-1.3em) rotate(-30deg);
            -webkit-transform-origin: bottom right;
            transform-origin: bottom right;
            border-bottom-left-radius: inherit;
            box-shadow: -0.2em 0.2em 0.3em -0.1em rgba(0, 0, 0, 0.15);
        }


    }
</style>