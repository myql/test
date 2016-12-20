//轮播

// setTimeout(foo(),300);

var $beforeButton=$(".before-button"),
		$afterButton=$(".after-button"),
		$dot=$(".dot"),
		$largePage=$(".large-page");
var $image=$(".large-page img"),
		imageWidth=$image.width(),
		$large=$largePage.children(),
		largeLength=$large.length;
		$largePage.prepend($large.last().clone());
		$largePage.append($large.first().clone());
		$largePage.css({
			left: -imageWidth,
			top: 0
		})
var curIdx=0;
$dot.children().on('click',function(){
	$cur=$(this);
	var idx=$cur.index();
	if(idx>curIdx){
		playNext(idx-curIdx);
	}else if(idx<curIdx){
		playPre(curIdx-idx);
	}
})
$beforeButton.on('click',function(){
	playPre();
})
$afterButton.on('click',function(){
	playNext();
})
var isAnimate=false;
function playNext(idx){
	idx=idx||1;
	console.log(1);
	if(!isAnimate){
		isAnimate=true;
		$largePage.animate({
		left: '-='+idx*imageWidth
	},function(){
			curIdx=(idx+curIdx)%largeLength;
			if(curIdx===0){
				$largePage.css({left: 0-imageWidth});
			}
			isAnimate=false;
			setBubble();
	})
	}	
}
function playPre(idx){
	idx=idx||1;
	if(!isAnimate){
		$largePage.animate({left:'+='+imageWidth*idx},function(){
			curIdx=(largeLength+curIdx-idx)%largeLength;
			if(curIdx===(largeLength-1)){
				$largePage.css({left:0-imageWidth*largeLength});
			}
			isAnimate=false;
			setBubble();
		})
	}
}
function setBubble(){
	$dot.children().removeClass('mark1').eq(curIdx).addClass('mark1');
}
