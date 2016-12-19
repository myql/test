var $shot=$(".shot");
var windowWidth=$(window).width(),
    windowHeight=$(window).height();
var shotTop=150;
var headerHeight=800;
$shot.height(headerHeight-shotTop);

// œÓƒøΩÈ…‹¬÷≤•
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