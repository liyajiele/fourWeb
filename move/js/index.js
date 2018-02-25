$(function(){
  //登录
  function den(){
    var deng=$(".deng")[0];
    var dengopen=$(".dengopen")[0];
    var dengactive=$(".dengactive")[0];
    deng.onmouseover=function(){
      dengopen.style.display="block";
      dengactive.style.display="block";
    }
    deng.onmouseout=function(){
      dengopen.style.display="none";
      dengactive.style.display="none";
    }
  }
  den();


  //营业厅
  function yingye(){
    var shou=$(".shou")[0];
    var shouopen=$(".shouopen")[0];
    var shouactive=$(".shouactive")[0];
    shou.onmouseover=function(){
      shouopen.style.display="block";
      shouactive.style.display="block";
    }
    shou.onmouseout=function(){
      shouopen.style.display="none";
      shouactive.style.display="none";
    }
  }
  yingye();


  //首页
  function shouye(){
    var nav1=$(".nav1")[0];
    var shouactive=$(".shouyeactive")[0];
    nav1.onmouseover=function(){
      shouactive.style.display="block";
    }
    nav1.onmouseout=function(){
      shouactive.style.display="none";
    }
  }
  shouye();


//选择城市
function city(){
    var city=$(".city")[0];    //太原
    var sx=$(".sx")[0];      //山西省
    var allcity=$(".allcity")[0];    //全国
    var fanhui=$(".fanhui")[0];    //返回全部省份

    fanhui.onclick=function(){
        allcity.style.display="block";
    }
    document.body.onclick=function(e){
      var e=e||window.event;
      var obj=e.target||e.srcElement;  //事件委派，获取真正的事件源
      if(obj.className=="city"||obj.className=="fanhui"){     // 或
        sx.style.display="block";   
      }else{
        sx.style.display="none";
        allcity.style.display="none";
      } 
    }
}
city();


  //移动
  function yidong(){
    var nav2=$(".nav2");
    var ydopen=$(".ydopen");
    var ydactive=$(".ydactive");
    for (var i = 0; i < nav2.length; i++) {
      nav2[i].aa=i;
      nav2[i].onmouseover=function(){
        ydopen[this.aa].style.display="block";
        ydactive[this.aa].style.display="block";
     
      }
      nav2[i].onmouseout=function(){
        ydactive[this.aa].style.display="none";
        ydopen[this.aa].style.display="none";
      }
    }
  }
  yidong();


  //banner
  function banner(){ 
    var bannermiddle=$(".bannermiddle")[0];
    var imgs=$("li",$(".imgbox")[0]);
    var btns=$("li",$(".btnbox")[0]);
    var rightbtn=$(".rightbtn")[0];
    var leftbtn=$(".leftbtn")[0];
    var now=0;
    var next=0;
    var t=setInterval(move,2000);

    function move(type){
        type=type||"rightbtn";  //注意引号
        if(type=="rightbtn"){   //判断向左走，还是向右走
          next=now+1;      //右边永远有一张图片在等待
          if (next>imgs.length-1) {
                next=0;
          }
          var width=imgs[0].offsetWidth;   //获取图片的宽
          imgs[next].style.left=width+"px";
            animate(imgs[now],{left:-width},1000);   //第一张图片移动为负
            animate(imgs[next],{left:0},1000,function(){   //回调函数，再调用
            flag=true;
          });     //第二张图片移动为0
        }else if(type=="leftbtn"){
          next=now-1;
          if (next<0) {
                next=imgs.length-1;
          }
          var width=imgs[0].offsetWidth;
          imgs[next].style.left=-width+"px";
          animate(imgs[now],{left:width},1000);
          animate(imgs[next],{left:0},1000,function(){
            flag=true;   //每次点击完，开关再打开
          });
        }
        btns[now].className="";
        btns[next].className="active";
        now=next;        //赋值
      }
      
      for (var i = 0; i < btns.length; i++) {
        btns[i].aa=i;
        btns[i].onclick=function(){    //分情况判断
          if (this.aa>now) {
            var width=imgs[0].offsetWidth;   //获取图片的宽
            imgs[this.aa].style.left=width+"px";
            animate(imgs[now],{left:-width},1000);   
            animate(imgs[this.aa],{left:0},1000);    //当前
          }else if(this.aa<now){
            var width=imgs[0].offsetWidth;
            imgs[this.aa].style.left=-width+"px";
            animate(imgs[now],{left:width},1000);
            animate(imgs[this.aa],{left:0},1000);
          }
          btns[now].className="";
          btns[this.aa].className="active";
          now=this.aa;
        }
      };
      
      leftbtn.onclick=function(){
          if (flag) {   //判断
          flag=false;   //每次点击完，开关关闭
            move("leftbtn")
          }
      }
      rightbtn.onclick=function(){
        if (flag) {
          flag=false;
          move("rightbtn");
        }
      }

      bannermiddle.onmouseover=function(){
        clearInterval(t);
        
      }
      bannermiddle.onmouseout=function(){
        t=setInterval(move,2000)
       
      }
  }
  banner();


  //banner右
  function da(){
    var da=$(".da");
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
  function moveal(){
    var imgbox=$(".move")[0];
    // alert(imgbox)
    var imgs=$("div",imgbox);
    var leftbtn=$(".movebtnleft")[0];
    var rightbtn=$(".movebtnright")[0];
    var t=setInterval(move,2000);
    var width=parseInt(getStyle(imgs[0],"width"));
    var flag=true;
     
    function move(){
      animate(imgbox,{left:-width},500,function(){   //自动走，盒子向左移
        var first=getFirst(imgbox);   //获取盒子的第一个元素
        imgbox.appendChild(first);    //追加，插入到最后
        imgbox.style.left=0;       //把盒子拉回来
        flag=true;
      })
    }
    leftbtn.onclick=function(){
      if (flag) {
        flag=false;
            var last=getLast(imgbox);      //获取盒子的最后一个元素
            var first=getFirst(imgbox);    //获取盒子的第一个元素
            insertBefore(last,first);      //把最后一个元素放到第一个元素之前，就是把最后一个元素放到右面第一个
            imgbox.style.left=-width+"px";   //把盒子退回去
            animate(imgbox,{left:0},500,function(){
                  flag=true;
            })
      }
    }
    rightbtn.onclick=function(){
      if (flag) {
        flag=false;
        move();
      }
    }

    imgbox.onmouseover=function(){
        clearInterval(t);
        // leftbtn.style.opacity="1";
        // rightbtn.style.opacity="1";
    }
    imgbox.onmouseout=function(){
      leftbtn.style.opacity="0.5";
      rightbtn.style.opacity="0.5";
      t=setInterval(move,2000);
    }
  }
  moveal();

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

//公告
function indexg(){
    var box=$(".indexgg")[0];
    var boxul=$("ul",box);
    // var indexgg1=$(".indexgg1")[0]; 
    // var indexgg2=$(".indexgg2")[0];
    var leftbtn=$(".gglbtn")[0];
    var rightbtn=$(".ggrbtn")[0];
    var t=setInterval(lun,3000);
    var num=0;
    
    function lun(type){
    type=type||"rightbtn";
    if(type=="rightbtn"){
          num++;
        if(num>=boxul.length){
         num=0;
         }
    }else if(type=="leftbtn"){
      num--;
        if(num<-1){
         num=boxul.length-1;
         }
    }
    for(var i=0;i<boxul.length;i++){
      // boxul[i].style.opacity=0;
      boxul[i].style.display="none";
       }
    // animate(boxul[num],{opacity:1},500);
    animate(boxul[num],{display:"block"},0,Tween.Back.easeInOut);

}
    leftbtn.onclick=function(){
         lun("leftbtn");
    }
    rightbtn.onclick=function(){
        lun("rightbtn");
    }
}
indexg();



















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