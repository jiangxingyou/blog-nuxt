//首字母配置颜色
const colorArr={
	'a':'rgb(17, 1, 65)',
	'b':'rgb(113, 1, 98)',
	'c':'rgb(161, 42, 94)',
	'd':'rgb(237, 3, 69)',
	'e':'rgb(239, 106, 50)',
	'f':'rgb(251, 191, 69)',
	'g':'rgb(170, 217, 98)',
	'h':'rgb(3, 195, 131)',
	'i':'rgb(1, 115, 81)',
	'j':'rgb(1, 84, 90)',
	'k':'rgb(38, 41, 74)',
	'l':'rgb(26, 19, 52)',
	'm':'rgb(0, 102, 119)',
	'n':'rgb(119, 153, 85)',
	'o':'rgb(255, 170, 102)',
	'p':'rgb(255, 119, 119)',
	'q':'rgb(199, 96, 101)',
	'r':'rgb(23, 103, 87)',
	's':'rgb(188, 173, 148)',
	't':'rgb(83, 109, 114)',
	'u':'rgb(102, 188, 41)',
	'v':'rgb(181, 231, 146)',
	'w':'rgb(232, 247, 221)',
	'x':'rgb(113, 39, 122)',
	'y':'rgb(213, 150, 221)',
	'z':'rgb(242, 224, 245)'
}
//随机颜色
const $RandomColor = function(){
	 var r=Math.floor(Math.random()*256);
     var g=Math.floor(Math.random()*256);
     var b=Math.floor(Math.random()*256);
     return "rgb("+r+','+g+','+b+")";
}
//随机颜色hsl
const $RandomColor2 = function() {
    return "hsl(" + 
    	Math.round(Math.random() * 360) + "," + 
    	Math.round(Math.random() * 100) + '%,' + 
    	Math.round(Math.random() * 100) + '%)';
}


export{colorArr,$RandomColor};