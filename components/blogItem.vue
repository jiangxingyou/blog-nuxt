4<template>
    <div class="item">
        <div class="item-type">
            日记本····     
        </div>
        <div class="item-inner">
            <div class="item-title">定制化默认的建一个</div>
            <div class="item-info">
                <span class="item-info-time">
                    <Icon type="ios-clipboard-outline" />
                    发表于20190101
                </span>
                <span class="item-info-word">
                    <Icon type="ios-create-outline" />
                    字数300
                </span>  
                <span class="item-info-scan">
                    <Icon type="ios-eye-outline" />
                    阅读200
                </span>    
            </div>
            <div class="item-abstract">一直是 ESLint 的忠实用户，深知规范的重要性。然而，在新项目交接中，我被 Git Commit 规范逼疯了。才意识到自己的疏忽，于是便有了一探究竟的想法。</div>
        </div>
        <div class="item-tag">
            
        </div>
        <div class="item-read">阅读全文</div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
               
            }
        }
    }
</script>
<style lang="less" scoped>
    @import "../assets/var.less";
    .item{
        background-color: #fff;
        box-shadow: 0px 0px 1px #ccc;
        border-radius: 3px;
        width: 90%;
        margin:auto;
        margin-bottom: 20px;
        position: relative;
        padding: 40px 20px;
        span{
            margin: auto 12px;
        }
        &-title{
            font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
                'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            display: block;
            font-weight: 300;
            font-size: 36px;
            color: #35495e;
            letter-spacing: 1px;
            text-align: center;
        }
        &-info{
            margin-top: 10px;
            margin-bottom: 20px;
            color: #555;
            font-family: "PingFang SC","Microsoft YaHei",Lato,sans-serif;
            font-size: 14px;
            text-align: center;
            i{
                font-size: 20px;
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
            border-color: #f5f7f9;
            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px #f5f7f9, 0 1px 5px 0 rgba(0, 0, 0, 0.12);
            background-color: #f5f7f9;
            margin: 5px 0 15px 2px;
            font-size: 14px;
            border-radius: 0 4px 4px 0;
            display: inline-block;
            padding: 6px 9px 3px 17px;
            line-height: 1;
        }
        &-abstract{
            text-align: justify;
            font-size: 22px;
        }
        &-read{
            background: #97dffd;
            color: #fff;
            font-size: 13px;
            padding: 1px 15px;
            border-radius: 5px;
            border: none;
            display: inline-block;
            transition-property: background-color;
            transition-duration: .2s;
            transition-timing-function: ease-in-out;
            transition-delay: 0s;
            line-height: 2;
            cursor: pointer;
            
        }


    }
</style>