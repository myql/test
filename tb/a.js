//ËÑË÷·Å´ó¾µ
var $allSoso=$(".all-soso");
var str1='<i class="iconfont glass">&#xe605;</i>';
$allSoso.append(str1);
var $glass=$('.all-soso .glass');
$glass.css({position: 'absolute',
						left: 12,
						top: 5,
						color: '#ccc',
						fontSize: '16px'
})
//ËÑË÷ÕÕÆ¬
var str2='<a href="javascript;void(0)" class="camera-link"><i class="iconfont camera">&#xe66e;</i></a>';
$allSoso.append(str2);
var $camera=$('.camera');
var $cameraLink=$('camera-link');
$camera.css({
	position: 'absolute',
	top: 5,
	right: 180,
	color: '#ccc',
	fontSize: '20px',
	fontWeight: 'bold'
})
$camera.on('mouseover',function(){
	$camera.css({
		color: '#fd4705'
	})
})
$camera.on('mouseout',function(){
	$camera.css({
		color: '#ccc'
	})
})
var $searchBox=$('.search-box');

$searchBox.on('keyup onpaste',function(){
	console.log($searchBox.val().length);
	if($searchBox.val()!==''){
		$glass.hide();
 }else {
	 $glass.show();
 }
})
//ËÑË÷ÎÄ×Ö
var str3='<p>Ê±ÉÐµÆ¾ß´ó¾Û»Ý</p>';
 //tabÇÐ»»
 var $taobao=$(".taobao");
 var $tmall=$(".tmall");
 var $store=$(".store");
 var $soso=$(".soso");
 $taobao.on('click',function(){
	 $taobao.addClass('active');
	 $store.removeClass('active');
	 $tmall.removeClass('active1');
	 $searchBox.css({
		 'border-color': '#ff5400'
	 })
	 $soso.css({
		 'background': '#ff4200'
	 })
	 $soso.on('mousemove',function(){
		 $soso.css({
			 'background':'#f52b00'
			 })
	 })
	 $soso.on('mouseout',function(){
		 $soso.css({
			 'background':'#ff4200'
			 })
	 })
 })
 $tmall.on('click',function(){
	 $tmall.addClass('active1');
	 $searchBox.css({
		 'border-color': '#c60000'
	 })
	 $soso.css({
		 'background': '#c60000'
		 })
	 $taobao.removeClass('active');
	 $store.removeClass('active');
 })
 $store.on('click',function(){
	 $store.addClass('active');
	 $taobao.removeClass('active');
	 $tmall.removeClass('active1');
	 $searchBox.css({
		 'border-color': '#ff5400'
	 })
	 $soso.css({
		 'background': '#ff4200'
	 })
	 $soso.on('mouseover',function(){
		 $soso.css({
			 'background':'#f52b00'
			 })
	 })
	 $soso.on('mouseout',function(){
		 $soso.css({
			 'background':'#ff4200'
			 })
	 })
 })