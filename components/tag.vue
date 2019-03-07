<template>
   <a class="tag" :style="{color:setColor,fontSize:normalSize}">
        {{tname}}
   </a>
</template>

<script>
	import {$isColor} from '@/utils/validator';
	import {$initial,$makePy} from '@/utils/stringInitial';
	import {colorArr,$RandomColor} from '@/utils/color';
    import {$Normal} from '@/utils/NormalDistrib';

    export default {
    	props:{
    		tname:String,	//文字内容
    		bgcolor:{		//背景颜色
    			validator(v){
    				return $isColor(v)
    			}
    		},
    		color:{			//文字颜色
    			validator(v){
    				return $isColor(v)
    			},
    		},
    	},
    	computed:{
    		setColor(){
                return $RandomColor();
    		},
            normalSize(){
                return $Normal(24,6)+"px"
            }
    	},
        created(){

        }
    	
    }
</script>

<style lang="less" scoped>
	.tag{
        font-size: 24px;
        margin:5px;
        display: inline-block;
        user-select: none;
    }

</style>
