var new_element=document.createElement("script");
new_element.setAttribute("type","text/javascript");
new_element.setAttribute("src","./js/sz_index_2020.js");
document.body.appendChild(new_element);
//$('.chart_map').document.write("<script language=javascript src='/sz_index_2020.js'></script>");

document.getElementById('metro_test_2').innerHTML="";
var metroline = [1,2,3,4,5,6,7,8,9,10,11];
var color = ['#46ac59','#8b440e','#1b9ac5','red','#7f3a7e','#57e1ca','#181d70','#8b440e','#6e6356','#fa7ab3','#703945'];
for(var i = 1; i<= 11;i++)
{
	var metro = document.createElement('button');
	metro.style.backgroundColor = '#034C6A';
	metro.style.height = '50px' ;
	metro.style.width = '150px' ;
	metro.innerHTML = '<button class="metro_span" id="'+ metroline[i-1] +'" style="background-color: '+ color[i-1] +';  padding: 5px;" onclick = "button_click(this);"> '+ metroline[i-1] +'号线 </button>';
	document.getElementById("metro_test_2").appendChild(metro);
}

// 声明变量
// 1、li元素的宽度  $li_width
var $li = $('.slide_items li')
var $li_width = $li.width()
var $ul = $('.slide_items')
// 2、ul dom 
var $ul_dom = $('.slide_items')
// 3、定义移动的初始值  
var go = 0;
// 上一个
// 计算ul的宽度
var ul_width = 0;
for(var i = 0; i< $li.length; i++ ){
    ul_width +=$li.eq(i).width();
}
$ul.width(ul_width)
// 定义初始标记
var flag = 0
 $('.button.next').on('click',function(e){
    go_next();
 })

 $('.button.prev').on('click',function(){
    go_prev();
 })
$('.slide_items li').on('click',function(e){
    var index = $(this).index();
    flag = index;
    go_next_item(index);
    return false;
 })
 var go_next_length =0;

//  向右动画函数
 function go_next(){

    if(flag > $li.length-2) {
        return false;
    }
    flag = flag+1;  //下标的标记
    go = go + $li_width;
    go_next_length =  -go;
    move(); //移动函数
    // // 活跃的年份
    onYear(flag);
    title_switch(flag);
 }
 function go_next_item(index) {
    go = $li_width*index;
    go_next_length =  -go;
    move();
    onYear(index);
    title_switch(index);

 }
 //  向右动画函数向左函数动画
 function go_prev(){
    if(flag <= 0) {
        return false;
    }
    flag = flag-1;  //下标的标记
    go = go - $li_width;
    go_next_length = -go;
    move(); //移动函数
    onYear(flag);
    title_switch(flag);
}
// 移动函数
function move() {
    $ul_dom.stop().animate({
        'left' : go_next_length
    },800,'easeOutCirc')
}
// 活跃的年份
function onYear(index){
    var index;
    $('.slide_items li').eq(index).addClass('on').siblings().removeClass('on');
}

function  title_switch(index) {
    if (index == 0)
    {
        $('.title_year').text('2020年');
		var new_element=document.createElement("script");
		new_element.setAttribute("type","text/javascript");
		new_element.setAttribute("src","./js/sz_index_2020.js");
		document.body.appendChild(new_element);
		//$('.chart_map').document.write("<script language=javascript src='/sz_index_2020.js'></script>");
		
		document.getElementById('metro_test_2').innerHTML="";
		var metroline = [1,2,3,4,5,6,7,8,9,10,11];
		var color = ['#46ac59','#8b440e','#1b9ac5','red','#7f3a7e','#57e1ca','#181d70','#8b440e','#6e6356','#fa7ab3','#703945'];
		for(var i = 1; i<= 11;i++)
		{
			var metro = document.createElement('button');
			metro.style.backgroundColor = '#034C6A';
			metro.style.height = '50px' ;
			metro.style.width = '150px' ;
			metro.innerHTML = '<button class="metro_span" id="'+ metroline[i-1] +'" style="background-color: '+ color[i-1] +'; padding: 5px;" onclick = "button_click(this);"> '+ metroline[i-1] +'号线 </button>';
			document.getElementById("metro_test_2").appendChild(metro);
		}
		
	}
    else if (index == 1)
    {
        $('.title_year').text('2020年');
		var new_element=document.createElement("script");
		new_element.setAttribute("type","text/javascript");
		new_element.setAttribute("src","./js/sz_index_2016.js");
		document.body.appendChild(new_element);
		
		document.getElementById('metro_test_2').innerHTML="";
		var metroline = [1,2,3,4,5,7,9,11];
		var color = ['#46ac59','#8b440e','#1b9ac5','red','#7f3a7e','#181d70','#6e6356','#703945'];
		for(var i = 1; i<= 8;i++)
		{
			var metro = document.createElement('button');
			metro.style.backgroundColor = '#034C6A';
			metro.style.height = '50px' ;
			metro.style.width = '150px' ;
			metro.innerHTML = '<button class="metro_span" id="'+ metroline[i-1] +'" style="background-color: '+ color[i-1] +'; padding: 5px;"> '+ metroline[i-1] +'号线 </button>';
			document.getElementById("metro_test_2").appendChild(metro);
		}
    }
    else if (index == 2)
	{
        $('.title_year').text('2020年');
		var new_element=document.createElement("script");
		new_element.setAttribute("type","text/javascript");
		new_element.setAttribute("src","./js/sz_index_2011.js");
		document.body.appendChild(new_element);
		
		document.getElementById('metro_test_2').innerHTML="";
		var metroline = [1,2,3,4,5];
		var color = ['#46ac59','#8b440e','#1b9ac5','red','#7f3a7e'];
		for(var i = 1; i<= 5;i++)
		{
			metro = document.createElement('button');
			metro.style.backgroundColor = '#034C6A';
			metro.style.height = '50px' ;
			metro.style.width = '150px' ;
			metro.innerHTML = '<button class="metro_span" id="'+ metroline[i-1] +'" style="background-color: '+ color[i-1] +'; padding: 5px;"> '+ metroline[i-1] +'号线 </button>';
			document.getElementById("metro_test_2").appendChild(metro);
		}
		
	}
    else if (index == 3)
	{
        $('.title_year').text('2020年');
		var new_element=document.createElement("script");
		new_element.setAttribute("type","text/javascript");
		new_element.setAttribute("src","./js/sz_index_2004.js");
		document.body.appendChild(new_element);
		
		document.getElementById('metro_test_2').innerHTML="";
		var metroline = [1,4];
		var color = ['#46ac59','red'];
		for(var i = 1; i<= 2;i++)
		{
			var metro = document.createElement('button');
			metro.style.backgroundColor = '#034C6A';
			metro.style.height = '50px' ;
			metro.style.width = '150px' ;
			metro.innerHTML = '<button class="metro_span" id="'+ metroline[i-1] +'" style="background-color: '+ color[i-1] +'; padding: 5px;"> '+ metroline[i-1] +'号线 </button>';
			document.getElementById("metro_test_2").appendChild(metro);
		}
	}
}

$('.left_1').click(function(){
	window.location.href = "./page/showchart_index.html";
});
$('.main_title').click(function(){
	window.location.href = "./page/showchart_index.html";
});
$('.right_1').click(function(){
	window.location.href = "./page/showchart_index.html";
});
$('.right_2').click(function(){
	window.location.href = "./page/showchart_index.html";
});

function ChinaSystem() {
	window.location.href = "China.html";
}

function IndexSystem() {
	window.location.href = "page/showchart_index.html";
}
