var $shot=$(".shot");
var windowWidth=$(window).width(),
    windowHeight=$(window).height();
var shotTop=150;
var headerHeight=800;
$shot.height(headerHeight-shotTop);
var $teacherList=$('.teacher-list'),$teacherLi=$('.teacher-list li'),$arrowBefore=$('.arrow-before'),$arrowAfter=$('.arrow-after'),$dot=$('.dot');
var windowWidth=$(window).width();
var liWidth=windowWidth*0.8;
$teacherLi.width(liWidth);
// ÂÖ²¥

var lisWidth=$teacherLi.width();
var $lis=$teacherList.children(), liCount=$lis.length;
$teacherList.append($teacherLi.first().clone());
$teacherList.prepend($teacherLi.last().clone());

var liRealcount=$teacherList.children().length;
console.log(liRealcount);

$teacherList.css({
  left: -lisWidth,
  top: 0
});

var curIdx=0;
$dot.children().on('click',function(){
  var $cur=$(this),
      idx=$cur.index();
  if(idx<curIdx){
    playPre(curIdx-idx);
  }else if(idx>curIdx){
    playNext(idx-curIdx);
  }
});
$arrowAfter.on('click',function(){
  playNext();
});
$arrowBefore.on('click',function(){
  playPre();
});
var isAnimate=false;
function playNext(idx){
 idx=idx||1;
  if(!isAnimate){
    isAnimate=true;
    $teacherList.animate({left: '-='+lisWidth*idx},200,function(){
      curIdx=(curIdx+idx)%liCount;
      if(curIdx===0){
        $teacherList.css({
          left: -lisWidth,
        });
      }
      isAnimate=false;
      setButtle();
    });
    
  }
}
function playPre(idx){
 idx=idx||1;
  if(!isAnimate){
    isAnimate=true;
    $teacherList.animate({left: '+='+lisWidth*idx},200,function(){
      curIdx=(curIdx+liCount-idx)%liCount;
      if(curIdx===(liCount-1)){
        $teacherList.css({
          left: -lisWidth*liCount
        });
      }
      isAnimate=false;
      setButtle();
    });
    
  }
}
function setButtle(){      $dot.children().removeClass('active').eq(curIdx).addClass('active');
}
// function autoPlay(){
        // clock=setInterval(function(){
            // playNext();
        // },3000);
    // }
// autoPlay();

// ÏîÄ¿½éÉÜÂÖ²¥
function foo(){
	var $ct=$(".project-list");
var $list=$(".project-introduction");
$list.on('click',function(){ 
   var $cur=$(this);
  console.log(idx);
   var idx=$cur.index();
  $ct.children().attr('class','project-center');
  if(idx===1){
    $cur.prev().attr('class','project-left');
    $cur.next().attr('class','project-right');
  }
  if (idx===0){
    $list.eq(2).attr('class','project-left');
    $cur.next().attr('class','project-right');
  }
  if (idx===2){
      $cur.prev().attr('class','project-left');
      $list.eq(0).attr('class','project-right');
  }
});
}
foo();
