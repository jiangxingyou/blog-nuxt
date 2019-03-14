//类正态排序
// const $NormalSort = function(arr){
// 	var temp = [], i = 0, l = arr.length,
//     sortArr = arr.sort(function(a,b){return a-b}) //先将数组从小到大排列得到 [1, 1, 2, 2, 3, 3, 3, 4, 6]
// 	for (;i<l;i++){
//         if(i%2==0){
//             temp[i/2] = sortArr[i]    // 下标为偶数的顺序放到前边
//         } else {
//             temp[l-(i+1)/2] = sortArr[i] // 下标为奇数的从后往前放
//         }
//     }
//     return temp;
// }
//类正态排序
const $NormalSort = function(arr){
    var temp = [], i = 0, l = arr.length,leftTo=0,rightTo=0,
    sortArr = arr.sort(function(a,b){return b-a}); //先将数组从大到小排列得到 [7,6,5,5,4,3,2,1]
    while(arr.length>1){
        let a = arr.pop();
        let b= arr.pop();
        if(leftTo<rightTo){
            temp[i] = b;
            temp[l-(i+1)] = a;
        }else{
            temp[i] = b;
            temp[l-(i+1)] = a;
        }
        i++;
    }
    return temp;
}
export {$NormalSort}


