//利用Box-Muller方法极坐标形式    使用两个均匀分布产生一个正态分布
const $Normal = function(mean,sigma){
    var u=0.0, v=0.0, w=0.0, c=0.0;
    do{
        //获得两个（-1,1）的独立随机变量
        u=Math.random()*2-1.0;
        v=Math.random()*2-1.0;
        w=u*u+v*v;
    }while(w==0.0||w>=1.0)
    c=Math.sqrt((-2*Math.log(w))/w);
    return mean+u*c*sigma;
}



export {$Normal}