<template>
    <aside class="sidebar">
        <div class="person">
            <section class="person-wrap">
                <div class="person-auth">
                    <img src="../assets/imgs/person.png" alt=""> 
                </div>
                <p class="person-word">哈哈啊哈</p>
                <div class="person-link">
                    <div class="person-link-item">
                        <a href="">
                            <Tooltip content="github" placement="top">
                                
                                <Icon type="logo-github" class="person-link-item-icon"/>
                               
                            </Tooltip>
                         </a>
                    </div>
                    <div class="person-link-item">
                        <a href="">
                           
                                <Tooltip content="yongsheng_pang@163.com" placement="top">
                                    <Icon type="ios-mail" class="person-link-item-icon"/>
                                </Tooltip>
                          
                        </a>
                    </div>
                    <div class="person-link-item">
                        <a href="">
                           
                                <Tooltip content="codepen" placement="top">
                                    <Icon type="md-code-working" class="person-link-item-icon"/>
                                </Tooltip>
                           
                        </a>
                    </div>
                    <div class="person-link-item">
                        <a href="">
                           
                                <Tooltip content="微信：Pang_yongsheng" placement="top">
                                    <Icon type="md-male" class="person-link-item-icon"/>
                                </Tooltip>
                           
                        </a>
                    </div>
                </div>
                <div class="person-feed">
                    <a href="" class="person-feed-item"> 
                        <Icon type="logo-rss" />博客园
                    </a>
                    <a href="" class="person-feed-item">
                        <Icon type="logo-skype" />
                        掘金
                    </a>
                </div>
                <div class="person-state">
                    <div class="person-state-item">
                        <a href="">
                            <span>日志-54</span>
                        </a>
                    </div>
                   <div class="person-state-item">
                        <a href="">
                            <span>分类-6</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    </aside>
    
</template>

<script>

    export default {
    	
    	
    }
</script>

<style lang="less" scoped>
    .sidebar{
       position: fixed;
       top: 90px;    
    }
	.person{ 
        width: 420px;
        padding: 20px;
        background: #fff;
        box-shadow: initial;
        border-radius: 5px;
        background:#fff;
        &-wrap{
            width: 100%;
            text-align: center; 
        }
        &-auth{
            position:relative;
            height: 300px;
            overflow: hidden;
            img{
                margin-left: 50%;
                transform: translateX(-50%);
                height: 100%;
            }
        }
        &-word{
            font-size: 16px;
            margin: 20px 8px;
            font-weight: 700;
            color: #555;
        }
        &-link{
            display: flex;
            flex-wrap: wrap;
            justify-content:space-around;
            align-items: center;
            margin: 5px 20px; 
            &-item{
                display: block;
                width: 50px;
                height: 50px;
                overflow: hidden;
                background-color:rgba(0,0,0,.1);
                vertical-align: middle;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                a{
                    display:block;
                    width: 100%;
                    height: 100%;
                    text-align: center;

                }
                &-icon{
                    line-height: 50px;
                    font-size: 30px;
                    color: #fff;

                }  
            }
            &-item:hover{
                background-color:#97dffd;
            }
        }
        &-feed{
            margin: 20px auto;
            display: flex;
            justify-content: center;
            a{
                height: 30px;
                width: 40%;
                text-align: center;
                font-size: 20px;
            }
            a:nth-child(1){
                color: #48c7fb;
            }
            a:nth-child(2){
                color: #fc6423;
            }
        }
        &-state{
            a{
                font-size: 16px;
                color:#000;
                line-height: 30px;
            }
            a:hover{
                color: green;
            }
        }
    }
</style>
