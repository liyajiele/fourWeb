$(function(){
 //国美会员
   function guo(){
       	var topimg=$(".lyj_topimg1")[0];
       	var open=$(".lyj_guoopen")[0];
       	var guo=$(".lyj_guo")[0];  
       	topimg.onmouseover=function(){
       	   open.style.display="block";
       	   guo.style.display="block";
       	}
       	topimg.onmouseout=function(){
       	   open.style.display="none";
       	   guo.style.display="none";
       	}
   }
   guo()
//国美会员
   function guobanner(){
    var bannerbox=$(".lyj_guobox")[0];
    var imgbox=$(".lyj_guob")[0];
    var imgs=$("ul",imgbox);
    var leftbtn=$(".lyj_guol")[0];
    var rightbtn=$(".lyj_guor")[0];
    var now=0;
    var next=0;
    var flag=true;    //设置开关
    var bimg=$(".lyj_bimg");
    var nimg=$(".lyj_nimg");

    function move(type){
      type=type||"rightbtn";  //注意引号
      if(type=="rightbtn"){   //判断向左走，还是向右走
        next=now+1;      //右边永远有一张图片在等待
        if (next>imgs.length-1) {
              next=0;
        }
        var width=imgs[0].offsetWidth;   //获取图片的宽
        imgs[next].style.left=width+"px";
          animate(imgs[now],{left:-width},500);   //第一张图片移动为负
        animate(imgs[next],{left:0},500,function(){   //回调函数，再调用
          flag=true;
        });     //第二张图片移动为0
      }else if(type=="leftbtn"){
        next=now-1;
        if (next<0) {
              next=imgs.length-1;
        }
        var width=imgs[0].offsetWidth;
        imgs[next].style.left=-width+"px";
        animate(imgs[now],{left:width},500);
        animate(imgs[next],{left:0},500,function(){
          flag=true;   //每次点击完，开关再打开
        });
      }
      now=next;        //赋值
    }
   
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
    
    for (var i = 0; i < bimg.length; i++) {
      bimg[i].aa=i;
      bimg[i].onmouseover=function(){
        nimg[this.aa].style.display="block";
      }
      bimg[i].onmouseout=function(){
        nimg[this.aa].style.display="none";
      }
    };

   }
   guobanner();
  //banner
   // 我的国美
   function my(){
        var topimg=$(".lyj_topimg2")[0];
        var open=$(".lyj_myopen")[0];
        var guo=$(".lyj_guo2")[0];  
        topimg.onmouseover=function(){
       	   open.style.display="block";
       	   guo.style.display="block";
       	}
       	topimg.onmouseout=function(){
       	   open.style.display="none";
       	   guo.style.display="none";
       	}
   }
   my()
   // 我的国美
   // 服务中心
   function fu(){
        var topimg=$(".lyj_topimg3")[0];
        var open=$(".lyj_fuopen")[0];
        var guo=$(".lyj_guo3")[0];  
        topimg.onmouseover=function(){
       	   open.style.display="block";
       	   guo.style.display="block";
       	}
       	topimg.onmouseout=function(){
       	   open.style.display="none";
       	   guo.style.display="none";
       	}
   }
   fu()
   // 服务中心
   // 网站导航
   function wang(){
        var topimg=$(".lyj_topimg4")[0];
        var open=$(".lyj_wangopen")[0];
        var guo=$(".lyj_guo4")[0];  
        topimg.onmouseover=function(){
       	   open.style.display="block";
       	   guo.style.display="block";
       	}
       	topimg.onmouseout=function(){
       	   open.style.display="none";
       	   guo.style.display="none";
       	}
   }
   wang()
   // 网站导航
   // 手机国美
   function shou(){
        var topimg=$(".lyj_topimg5")[0];
        var open=$(".lyj_shouopen")[0];
        var guo=$(".lyj_guo5")[0];  
        topimg.onmouseover=function(){
           open.style.display="block";
           guo.style.display="block";
        }
        topimg.onmouseout=function(){
           open.style.display="none";
           guo.style.display="none";
        }
   }
   shou()
   // 手机国美
   // display
   function xiaoshi(){
       var displaybox=$(".lyj_displaybox")[0];
       var disb=$("b",displaybox)[0];
       disb.onclick=function(){
       	  displaybox.style.display="none";
       }
   }
   xiaoshi()
   // display
   // 购物车
   function gou(){
       var gou=$(".lyj_gou")[0];
       var goua=$(".lyj_goua")[0];
       var gouopen=$(".lyj_gouopen")[0];
       gou.onmouseover=function(){
       	goua.style.display="block";
       	gouopen.style.display="block";
       }
       gou.onmouseout=function(){
       	goua.style.display="none";
       	gouopen.style.display="none";
       }
   }
   gou()
   // 购物车
   // 左侧二级菜单
   function zuo(){
      var bannerli=$(".lyj_bann");
      var bla=$(".lyj_bla");
      var blopen=$(".lyj_blopen");
      for (var i = 0; i < bannerli.length; i++) {
      	bannerli[i].aa=i;
      		bannerli[i].onmouseover=function(){
        		bla[this.aa].style.display="block";
        		blopen[this.aa].style.display="block";
      	  };
          bannerli[i].onmouseout=function(){
          bla[this.aa].style.display="none";
          blopen[this.aa].style.display="none";
        };
      	
      };
   }
   zuo()
   // 左侧二级菜单
   // banner
   function banner(){
    var bannerbox=$(".lyj_bannerbox")[0];
    var bannerm=$(".lyj_bannerm")[0];
    var imgbox=$(".lyj_imgbox")[0];
    var imgs=$("li",imgbox);
    var btns=$("li",$(".lyj_btnbox")[0]);
    var leftbtn=$(".lyj_leftbtn")[0];
    var rightbtn=$(".lyj_rightbtn")[0];
    var bannerBg=["#f02105","#e20014","#ee7634","#e4144e","#e49b00","#d2340f","#f7a57c","#f54b4b"];
    var t=setInterval(move,3000);  //开启函数
    var now=0;
    var next=0;
    var flag=true;    //设置开关

    function move(type){
      type=type||"rightbtn";  //注意引号
      if(type=="rightbtn"){   //判断向左走，还是向右走
        next=now+1;      //右边永远有一张图片在等待
        if (next>imgs.length-1) {
              next=0;
        }
        var width=imgs[0].offsetWidth;   //获取图片的宽
        imgs[next].style.left=width+"px";
          animate(imgs[now],{left:-width},500);   //第一张图片移动为负
        animate(imgs[next],{left:0},500,function(){   //回调函数，再调用
          flag=true;
        });     //第二张图片移动为0
      }else if(type=="leftbtn"){
        next=now-1;
        if (next<0) {
              next=imgs.length-1;
        }
        var width=imgs[0].offsetWidth;
        imgs[next].style.left=-width+"px";
        animate(imgs[now],{left:width},500);
        animate(imgs[next],{left:0},500,function(){
          flag=true;   //每次点击完，开关再打开
        });
      }
      btns[now].className="";
      btns[next].className="lyj_active";
      bannerbox.style.backgroundColor=bannerBg[next];
      // bannerbox.style.opacity="0.5";
      now=next;        //赋值
    }
    
    for (var i = 0; i < btns.length; i++) {
      btns[i].aa=i;
      btns[i].onclick=function(){    //分情况判断
        if (this.aa>now) {
          var width=imgs[0].offsetWidth;   //获取图片的宽
          imgs[this.aa].style.left=width+"px";
            animate(imgs[now],{left:-width},500);   
          animate(imgs[this.aa],{left:0},500);    //当前
        }else if(this.aa<now){
          var width=imgs[0].offsetWidth;
          imgs[this.aa].style.left=-width+"px";
          animate(imgs[now],{left:width},500);
          animate(imgs[this.aa],{left:0},500);
        }
        btns[now].className="";
        btns[this.aa].className="lyj_active";
        bannerbox.style.backgroundColor=bannerBg[this.aa];
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


    bannerm.onmouseover=function(){
      clearInterval(t);
    }
    bannerm.onmouseout=function(){
      t=setInterval(move,3000)
    }

   }
   banner();
  //banner
  //糖葫芦遮罩
  function zhe(){
    var kuaib=$(".lyj_kuaib")[0];
    var kuaibx=$(".lyj_kuaibx");
    var kuaizhe=$(".lyj_kuaizhe");
    for (var i = 0; i < kuaibx.length; i++) {
      kuaibx[i].aa=i;
        kuaibx[i].onmouseover=function(){
          kuaizhe[this.aa].style.display="block";
        }
        kuaibx[i].onmouseout=function(){
          kuaizhe[this.aa].style.display="none";
        }
    };
  }zhe();
  //糖葫芦遮罩
  // 猜你喜欢
  function cai(){
    var caibu=$(".lyj_caibuttom")[0];
    var caibuli=$("li",caibu);
    var caibulia=$("a",caibu);
    for (var i = 0; i < caibuli.length; i++) {
      caibuli[i].aa=i;
      caibuli[i].onmouseover=function(){
         caibulia[this.aa].style.color="red";
      }
      caibuli[i].onmouseout=function(){
         caibulia[this.aa].style.color="";
      }
    };
    

  }cai();
  // 猜你喜欢
  // 楼层
  function louceng(){
      $(".lyj_louceng").each(function(loucengnum){
        function louceng(loucengnum){
            // 中部轮播
            var t=setInterval(move,5000);
            var num=0;
            function move(type){
                type=type||"right";
                if(type=="left"){
                    num--;
                    if(num<0){
                        num=2;
                    };
                    $(".lyj_louceng_bottom_right_big_picbox").eq(loucengnum).children().removeClass().eq(num).addClass("first");
                     $(".lyj_louceng_bottom_right_big_btnbox").eq(loucengnum).children().removeClass().eq(num).addClass("first");
                }else if(type=="right"){
                    num++;
                    if(num>=3){
                        num=0;
                    };
                     $(".lyj_louceng_bottom_right_big_picbox").eq(loucengnum).children().removeClass().eq(num).addClass("first");
                     $(".lyj_louceng_bottom_right_big_btnbox").eq(loucengnum).children().removeClass().eq(num).addClass("first");
                }
            }
            // 中部选项卡
            $(".lyj_louceng_bottom_right_big_btnbox").eq(loucengnum).children().mouseover(function(){
                $(".lyj_louceng_bottom_right_big_btnbox").eq(loucengnum).children().removeClass().eq($(this).eq(loucengnum).index()).addClass("first");
                $(".lyj_louceng_bottom_right_big_btnbox").eq(loucengnum).children().removeClass().eq($(this).eq(loucengnum).index()).addClass("first");
                num=$(this).eq(loucengnum).index();
            })
            // 左右按钮
            $(".lyj_louceng_bottom_right_big_left").eq(loucengnum).click(function(){
                move("left");
            })
            $(".lyj_louceng_bottom_right_big_right").eq(loucengnum).click(function(){
                move("right");
            })
            // 移入移出
            $(".lyj_louceng_bottom_right_big").eq(loucengnum).hover(function(){
                    clearInterval(t)
                    $(".lyj_louceng_bottom_right_big_right").eq(loucengnum).css({"display":"block"})
                    $(".lyj_louceng_bottom_right_big_left").eq(loucengnum).css({"display":"block"})
                },
                function(){
                    $(".lyj_louceng_bottom_right_big_right").eq(loucengnum).css({"display":"none"})
                    $(".lyj_louceng_bottom_right_big_left").eq(loucengnum).css({"display":"none"});
                    t=setInterval(move,5000);
                }
            )
            // 整体选项卡
            var nub=0;
            $(".lyj_louceng_top ul").eq(loucengnum).children().click(function(){
                $(".lyj_louceng_top ul").eq(loucengnum).children().removeClass("first").eq($(this).index()).addClass("first");
                $(".lyj_louceng_bottom").eq(loucengnum).children(".lyj_louceng_bottom_right").removeClass("first").eq($(this).index()).addClass("first");
                nub=$(this).index();
            })
            // 整体右侧按钮
            $(".lyj_louceng_bottom").eq(loucengnum).children(".lyj_louceng_bottom_right").children(".lyj_louceng_bottom_right_xiaokuai").click(function(){
                nub++;
                if(nub>=8){
                    nub=0;
                };
                $(".lyj_louceng_top ul").eq(loucengnum).children().removeClass("first").eq(nub).addClass("first");
                $(".lyj_louceng_bottom").eq(loucengnum).children(".lyj_louceng_bottom_right").removeClass("first").eq(nub).addClass("first");
            })
            // 整体右侧移入移出
            $(".lyj_louceng_bottom").eq(loucengnum).children(".lyj_louceng_bottom_right").hover(function(){
                    $(".lyj_louceng_bottom").eq(loucengnum).children(".lyj_louceng_bottom_right").children(".lyj_louceng_bottom_right_xiaokuai").css({"display":"block"})
                },
                function(){
                   $(".lyj_louceng_bottom").eq(loucengnum).children(".lyj_louceng_bottom_right").children(".lyj_louceng_bottom_right_xiaokuai").css({"display":"none"})
                }
            )
        }
        louceng(loucengnum)
    })
  }louceng()

  function lc(){
    $(".lyj_lc").each(function(lcnum){
        function lc(lcnum){
            // 中部轮播
            var t=setInterval(move,5000);
            var num=0;
            function move(type){
                type=type||"right";
                if(type=="left"){
                    num--;
                    if(num<0){
                        num=2;
                    };
                    $(".lyj_lc_bottom_right_big_picbox").eq(lcnum).children().removeClass().eq(num).addClass("first");
                     $(".lyj_lc_bottom_right_big_btnbox").eq(lcnum).children().removeClass().eq(num).addClass("first");
                }else if(type=="right"){
                    num++;
                    if(num>=3){
                        num=0;
                    };
                     $(".lyj_lc_bottom_right_big_picbox").eq(lcnum).children().removeClass().eq(num).addClass("first");
                     $(".lyj_lc_bottom_right_big_btnbox").eq(lcnum).children().removeClass().eq(num).addClass("first");
                }
            }
            // 中部选项卡
            $(".lyj_lc_bottom_right_big_btnbox").eq(lcnum).children().mouseover(function(){
                $(".lyj_lc_bottom_right_big_btnbox").eq(lcnum).children().removeClass().eq($(this).eq(lcnum).index()).addClass("first");
                $(".lyj_lc_bottom_right_big_btnbox").eq(lcnum).children().removeClass().eq($(this).eq(lcnum).index()).addClass("first");
                num=$(this).eq(lcnum).index();
            })
            // 左右按钮
            $(".lyj_lc_bottom_right_big_left").eq(lcnum).click(function(){
                move("left");
            })
            $(".lyj_lc_bottom_right_big_right").eq(lcnum).click(function(){
                move("right");
            })
            // 移入移出
            $(".lyj_lc_bottom_right_big").eq(lcnum).hover(function(){
                    clearInterval(t)
                    $(".lyj_lc_bottom_right_big_right").eq(lcnum).css({"display":"block"})
                    $(".lyj_lc_bottom_right_big_left").eq(lcnum).css({"display":"block"})
                },
                function(){
                    $(".lyj_lc_bottom_right_big_right").eq(lcnum).css({"display":"none"})
                    $(".lyj_lc_bottom_right_big_left").eq(lcnum).css({"display":"none"});
                    t=setInterval(move,5000);
                }
            )
            // 整体选项卡
            var nub=0;
            $(".lyj_lc_top ul").eq(lcnum).children().click(function(){
                $(".lyj_lc_top ul").eq(lcnum).children().removeClass("first").eq($(this).index()).addClass("first");
                $(".lyj_lc_bottom").eq(lcnum).children(".lyj_lc_bottom_right").removeClass("first").eq($(this).index()).addClass("first");
                nub=$(this).index();
            })
            // 整体右侧按钮
            $(".lyj_lc_bottom").eq(lcnum).children(".lyj_lc_bottom_right").children(".lyj_lc_bottom_right_xiaokuai").click(function(){
                nub++;
                if(nub>=7){
                    nub=0;
                };
                $(".lyj_lc_top ul").eq(lcnum).children().removeClass("first").eq(nub).addClass("first");
                $(".lyj_lc_bottom").eq(lcnum).children(".lyj_lc_bottom_right").removeClass("first").eq(nub).addClass("first");
            })
            // 整体右侧移入移出
            $(".lyj_lc_bottom").eq(lcnum).children(".lyj_lc_bottom_right").hover(function(){
                    $(".lyj_lc_bottom").eq(lcnum).children(".lyj_lc_bottom_right").children(".lyj_lc_bottom_right_xiaokuai").css({"display":"block"})
                },
                function(){
                   $(".lyj_lc_bottom").eq(lcnum).children(".lyj_lc_bottom_right").children(".lyj_lc_bottom_right_xiaokuai").css({"display":"none"})
                }
            )
        }
        lc(lcnum)
    })
  }lc()

// 热销榜
 function rxb(){
        var num=0
        $(".lyj_hot_right_top #right").click(function(){
            num++;
            if(num>=3){
                num=0;
            };
            $(".lyj_hot_right_bottom").removeClass("first").eq(num).addClass("first");
        })
        $(".lyj_hot_right_top #left").click(function(){
            num--;
            if(num<0){
                num=2;
            };
            $(".lyj_hot_right_bottom").removeClass("first").eq(num).addClass("first");
        })
    }
    rxb()

  // 底部
  function footer(){
        $(".lyj_footer_dw_small").hover(function(){
            $(".lyj_footer_dw_small_js").css({"display":"none"}).eq($(this).index()).css({"display":"block"})
        },function(){
            $(".lyj_footer_dw_small_js").css({"display":"none"})
        })
    }
    footer()


// 楼层跳转
    $(window).scroll(function(){
        document.title=$(window).scrollTop()
        var num;
        // 隐藏显示
        if($(window).scrollTop()>=2000&&$(window).scrollTop()<=8000){
                $(".lyj_floornav").css({"display":"block"});
        }else{
                $(".lyj_floornav").css({"display":"none"});
        }
        //鼠标移入变色
        $(".lyj_floornav li").hover(function(){
                $(".lyj_floornav li").eq($(this).index()-1).css({"color":"#e3101e"})
        },function(){
            if(($(this).index()-1)!=num){
                $(".lyj_floornav li").eq($(this).index()-1).css({"color":"#5e5e5e"})
            }
        })
        // 点击调到指定位置
        // $(".lyj_floornav li").click(function(){
        //     $(".lyj_floornav li").css({"color":"#5e5e5e"}).eq($(this).index()-1).css({"color":"#e3101e"})
        //     $(".lyj_floornav li b").css({"opacity":"0"}).eq($(this).index()-1).css({"opacity":"1"})
        //     num=$(this).index()-1;
        //     $(window).scrollTop($(".lyj_lcdh").eq($(this).index()-1).offset().top)
        //     $("html,body").animate({scrollTop:$(".lyj_lcdh").eq($(this).index()-1).offset().top}, 1000);
        // })
        // 返回顶部
      jQuery.extend({
      returnTop:function(obj,time){
        obj.on("click",function(){
          var top=$(document).scrollTop();
          var newobj={top:top};
          $(newobj).animate({top:0},{
            duration:"time",
            step:function(){
              $(document).scrollTop(newobj.top)
            }
          })
        })
      }
    })
    $.returnTop($(".lyj_floornav_top"),1000)  
    })    
    
  // 顶部隐藏
  function ying(){
  var ying=$(".lyj_yinbox")[0];
  var floor1=$(".lyj_lcdh");
  var num=0;
  var now=0;
  var flag=true;
  var flag2=true;
  document.documentElement.scrollTop=1;
  window.onscroll=function(){
    //获取滚动条的兼容方法
       var tops=document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop;
         //document.title=tops;
       //记录的是页面超出可视窗口的距离
       if(tops>=400){
        if(flag){
            animate(ying,{top:0},300);
            // animate(cebtn,{left:0},300);
            flag=false;
            flag2=true;
        } 
       }
       else{
        if(flag2){
          animate(ying,{top:-50},300);
          // animate(cebtn,{left:-35},300);
          flag2=false;
          flag=true;
        }
       
       }
     }
  }
ying();

// 右侧固定
   // var ren=$(".lyj_ftopul_ren")[0];
   
   var xiaokuang=$(".lyj_xiaokuang");
   var jian=$("a",xiaokuang);
   var ju=$("b",xiaokuang);
  for(var i=0;i<jian.length;i++){
    xiaokuang[i].bb=i;
    xiaokuang[i].onmouseover=function(){
      aa=this.bb;
      xiaokuang[this.bb].style.backgroundColor="#c40000";
      animate(jian[this.bb],{width:1001},300);
      // animate(ju[this.bb],{right:70},300,function(){
      //   animate(ju[aa],{right:30},300);
      // });
      jian[this.bb].style.display="block";
      ju[this.bb].style.opacity="1";
    }
    xiaokuang[i].onmouseout=function(){
      xiaokuang[this.bb].style.backgroundColor="";
    
      animate(jian[this.bb],{right:40},100);
      // animate(ju[this.bb],{right:30},100);
      jian[this.bb].style.display="none";
      ju[this.bb].style.opacity="0";
    }
   }

})