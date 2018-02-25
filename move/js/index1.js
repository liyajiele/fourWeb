$(function(){
//banner
function banner(){
var imgs=$("a",$(".imgbox")[0]);
var btn=$(".btn");
var bannermiddle=$(".bannermiddle")[0];
var rightbtn=$(".rightbtn")[0];
var leftbtn=$(".leftbtn")[0];

for(var i=1;i<imgs.length;i++){
   imgs[i].style.left="750px";
}

var now=0;
var next=0;
function move(type){
  type=type||"rightbtn";
  if(type=="rightbtn"){
          next++;
        if(next>=imgs.length){
        next=0;
         }
    }else if(type=="leftbtn"){
      next--;
        if(next<=-1){
         next=imgs.length-1;
         }
    }else if(type=="over"){
            
    }
   
    imgs[next].style.left="750px";
    imgs[now].style.left="0px";
    animate(imgs[now],{left:-750},300);
    animate(imgs[next],{left:0},300);
    btn[now].className="btn";
    btn[next].className="btn active";
    now=next;
}
var t2=setInterval(move,2000);


bannermiddle.onmouseover=function(){
  clearInterval(t2);
  animate(leftbtn,{opacity:1})
  animate(rightbtn,{opacity:1})
}
bannermiddle.onmouseout=function(){
    animate(rightbtn,{opacity:0})
    animate(leftbtn,{opacity:0})
    t2=setInterval(move,2000);
  }
  
      leftbtn.onclick=function(){
         move("leftbtn");
      }
      rightbtn.onclick=function(){
         move("rightbtn");
      }


for(var i=0;i<btn.length;i++){
      btn[i].index=i;
      btn[i].onmouseover=function(){
        next=this.index;
                move("over");
        }
      } 
}
banner();
//banner右
function da(){
  var da=$(".da");
  // var imgs=$("img",da);
  for(var i=0;i<da.length;i++){
    da[i].aa=i;
    da[i].onmouseover=function(){
      animate(da[this.aa],{width:40},100);
    }
    da[i].onmouseout=function(){
      animate(da[this.aa],{width:32},100);
    }
  }
 }
 da();

//move
function move(){
    var imgs=$(".picture1");
    var banner=$(".move")[0];
    // var leftbtn=$(".leftbtn")[0];
    // var rightbtn=$(".rightbtn")[0];
    // var num=0;
    banner.style.width=imgs.length*(imgs[0].offsetWidth+12)+"px";

    // for(var i=0;i<imgs.length;i++){
    //   imgs[i].className="imgs imgs"+(i+1);
    // }
    function hChange(){
     var last=getLast(banner);
     last.style.width="0";
     banner.insertBefore(last,getFirst(banner));
        animate(last,{width:285},200);
    }
    // function hChange(type){
    //   type=type||"leftbtn";
    //     if(type=="leftbtn"){
    //           num++;
    //         if(num>=imgs.length){
    //          num=0;
    //          }
    //     }else if(type=="right"){
    //       num--;
    //         if(num<=-1){
    //          num=imgs.length-1;
    //          }
    //     }
    //   animate(getFirst(banner),{width:0},300,function(){
    //     insertAfter(banner,getFirst(banner),getLast(banner));
    //     getLast(banner).style.width="200px";
    //   })
    // }
      var t=setInterval(hChange,2000);

    //       leftbtn.onclick=function(){
    //          hChange("leftbtn");
    //       }
    //       rightbtn.onclick=function(){
    //           hChange("rightbtn");
    //       }
          banner.onmouseover=function(){
          clearInterval(t);
        }
        banner.onmouseout=function(){
          t=setInterval(hChange,2000);
        }
      }
  move();

//4G图片左移
function zuo(){
  var move1=$(".move1");
  for(var i=0;i<move1.length;i++){
    move1[i].bb=i;
    move1[i].onmouseover=function(){
      animate(move1[this.bb],{right:20},300);
    }
    move1[i].onmouseout=function(){
      animate(move1[this.bb],{right:0},300);
  }
}
}
zuo();

//手机左移
function zuo1(){
  var move2=$(".move2");
  for(var i=0;i<move2.length;i++){
    move2[i].bb=i;
    move2[i].onmouseover=function(){
      animate(move2[this.bb],{right:20},300);
    }
    move2[i].onmouseout=function(){
      animate(move2[this.bb],{right:0},300);
  }
}
}
zuo1();
//侧栏左移
function zuo2(){
  var fu2=$(".fu2")[0];
  var fu3=$(".fu3")[0];
  var fu4=$(".fu4")[0];
    fu2.onmouseover=function(){
      animate(fu2,{left:-80},300);
    }
    fu2.onmouseout=function(){
      animate(fu2,{left:-22},300);
  }
   fu3.onmouseover=function(){
      animate(fu3,{left:-80},300);
    }
    fu3.onmouseout=function(){
      animate(fu3,{left:-22},300);
  }
   fu4.onmouseover=function(){
      animate(fu4,{left:-80},300);
    }
    fu4.onmouseout=function(){
      animate(fu4,{left:-22},300);
  }

}
zuo2();

  })