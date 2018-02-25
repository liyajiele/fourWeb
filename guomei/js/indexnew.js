$(function(){

// 顶部循环   菜单栏
 $(".lyj_gong").hover(function(){
 	$(this).children().css({"display":"block"});
 },function(){
 	$(this).children(".lyj_gongactive").css({"display":"none"});
 	$(this).children(".lyj_gongopen").css({"display":"none"});
 	
 })

// 国美会员里的轮播
 $(document).ready(function(){
  	var now=0;
  	var next=0;
  	var flag=true;
  	var width=$(".lyj_guobox").width();
  	function move(type){
  		type=type||"r";
  		if(type=="r"){
  			next=now+1;
	     		if(next>=$(".lyj_guob ul").length){
	     			next=0;
	     		}	
	     		$(".lyj_guob ul").eq(now).css({left:0}).animate({left:-width},500)
	     		$(".lyj_guob ul").eq(next).css({left:width}).animate({left:0},500,function(){
	     			flag=true;
	     		})
  		}else if(type=="l"){
  			next=now-1;
  	    	if(next<0){
  	    		next=$(".lyj_guob ul").size()-1;
  	    	}
  	    	$(".lyj_guob ul").eq(now).css({left:0}).animate({left:width},500)
	     		$(".lyj_guob ul").eq(next).css({left:-width}).animate({left:0},500,function(){
	     			flag=true;
	     		})
  	    	
  		}
			now=next;
  	}
  	
	    $(".lyj_guol").on("click",function(){
	    	if (flag) {   //判断
		 		flag=false;   //每次点击完，开关关闭
		 	    move("l")
		    }
	    })
	    $(".lyj_guor").on("click",function(){
		    if (flag) {   //判断
		 		flag=false;   //每次点击完，开关关闭
		 	    move("r")
		    }
		})
  	
  })

//消失gif
   $(".lyj_displaybox b").on("click",function(){
   		$(".lyj_displaybox").css({"display":"none"})
   })

// 搜索框
    $(".lyj_searchtop input").on("click",function(){
      $(".lyj_searchtop label").css({"display":"none"})
    })
    $(".lyj_searchtop label").on("click",function(){
      $(".lyj_searchtop label").css({"display":"none"})
    })
    $("body").on("click",function(e){
          if($(".lyj_label").css("display")=="none"){
            var obj=e.target;
            if(obj.className=="lyj_input"||obj.className=="lyj_label"){
              return;
            }else{
              $(".lyj_label").css("display","block");
            }
          }
    })

// 购物车
  $(".lyj_gou").hover(function(){
 	$(this).children(".lyj_goua").css({"display":"block"});
 	$(this).children(".lyj_gouopen").css({"display":"block"});
 },function(){
 	$(this).children(".lyj_goua").css({"display":"none"});
 	$(this).children(".lyj_gouopen").css({"display":"none"});
 	
 })

// 购物车下小轮播
function xiao(){
    bw=$(".lyj_daoimgbox li").eq(0).height();    //获取图片当前的宽度
    $(".lyj_daoimgbox").css({height:$(".lyj_daoimgbox li").length*bw});    //imgbox的宽度
    var flag=true;

    function lunbo(type){
        if(!flag){
            return;
        }
        flag=false;
        var type=type||"r";    //
        if(type=="r"){
            $(".lyj_daoimgbox li").eq(0).appendTo($(".lyj_daoimgbox"));
            $(".lyj_daoimgbox").css({top:0}).animate({top:-bw},500,function(){
              flag=true
            });
        }else if(type=="l"){
          $(".lyj_daoimgbox li").eq(-1).css({height:0}).prependTo($(".lyj_daoimgbox")).animate({height:bw},500,function(){
              flag=true
            });
           
        }
    }

    var t=setInterval(lunbo,3000);
    $(".lyj_daoright").hover(function(){
        clearInterval(t);
    },function(){
        t=setInterval(lunbo,3000);
    });

    $(".lyj_daotopbtn").click(function(){
        lunbo("r");
    });
    $(".lyj_daobottombtn").click(function(){
        lunbo("l");
        $(".lyj_daobottombtn").css({"background":"#efefef"})

    })
    
    $(".lyj_daotopbtn").hover(function(){
        $(".lyj_daotopbtn").css({"background":"#efefef"})
    },function(){
        $(".lyj_daotopbtn").css({"background":"#fff"})
    })

    $(".lyj_daobottombtn").hover(function(){
        $(".lyj_daobottombtn").css({"background":"#efefef"})
    },function(){
        $(".lyj_daobottombtn").css({"background":"#fff"})
    })
    }xiao()


// 左侧菜单栏
	$(".lyj_bann").hover(function(){
	 	$(this).children(".lyj_bla").css({"display":"block"});
	 	$(this).children(".lyj_blopen").css({"display":"block"});
	},function(){
	 	$(this).children(".lyj_bla").css({"display":"none"});
	 	$(this).children(".lyj_blopen").css({"display":"none"});
	 	
	})
// 菜单栏里的红色
  $(".lyj_blopenlt li").hover(function(){
    $(this).css({"background":"#e3101e"})
  },function(){
    $(this).css({"background":"#f67070"})

  })
// main  banner
function da(){
   var now=0;
   var next=0;
   var t=setInterval(move,3000);
   var bg=["#f23231","#bd1918","#f04e2a","#dc0f49","#fe9601","#ca0b17","#fbaa81","#f34849"];
   function move(type){
  		type=type||"r";
  		if(type=="r"){
  			next=now+1;
	     		if(next>=$(".lyj_imgbox li").length){
	     			next=0;
	     		}	
	     		$(".lyj_imgbox li").eq(now).animate({opacity:0},500)
	     		$(".lyj_imgbox li").eq(next).animate({opacity:1},500)
  		}else if(type=="l"){
  			next=now-1;
	  	    	if(next<0){
	  	    		next=$(".lyj_imgbox li").size()-1;
	  	    	}
	  	    $(".lyj_imgbox li").eq(now).animate({opacity:0},500)
	     		$(".lyj_imgbox li").eq(next).animate({opacity:1},500)
  	    	
  		}
  		    $(".lyj_btnbox li").eq(now).removeClass().end().eq(next).addClass("lyj_active");
          $.each(["#f23231","#bd1918","#f04e2a","#dc0f49","#fe9601","#ca0b17","#fbaa81","#f34849"],function(index){
            $(".lyj_bannerbox").css({backgroundColor:bg[next]})
          })
			now=next;
  	}
  	
	    $(".lyj_leftbtn").on("click",function(){
		 	    move("l")
	    })
	    $(".lyj_rightbtn").on("click",function(){
		 	    move("r")
		})


		$(".lyj_btnbox li").on("mouseover",function(){
  		    $(".lyj_imgbox li").eq(now).animate({opacity:0},500).end().eq($(this).index()).animate({opacity:1},500);
  		    $(".lyj_btnbox li").eq(now).removeClass().end().eq($(this).index()).addClass("lyj_active");
          // $.each(["#f23231","#bd1918","#f04e2a","#dc0f49","#fe9601","#ca0b17","#fbaa81","#f34849"],function(index){
            $(".lyj_bannerbox").css({backgroundColor:bg[$(this).index()]})
          // })
          now=$(this).index();
		})

		$(".lyj_bannerm").hover(function(){
    		clearInterval(t);
		},function(){
   		    t=setInterval(move,3000);
		})
  }da()

// 糖葫芦遮罩
    $(".lyj_kuaibx").hover(function(index){
        $(".lyj_kuaizhe").eq($(this).index()).css({"display":"block"});
    },function(index){
        $(".lyj_kuaizhe").eq($(this).index()).css({"display":"none"});
       
    })

// 猜你喜欢
   $(".lyj_caibuttom li").hover(function(index){
       $(".lyj_caibuttom a").eq($(this).index()).css({"color":"red"});
   },function(index){
       $(".lyj_caibuttom a").eq($(this).index()).css({"color":""});
   })

// 楼层  1/2/3/5/8
   function louceng(){
      $(".lyj_louceng").each(function(loucengnum){
        function louceng(loucengnum){
            // 中部轮播
            var t=setInterval(move,5000);
            var num=0;
            var bgc=["#96a4e8","#7bbfea","#95a3e7","#d08d74","#ce8e76"]
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
        
            // btn按钮
            $(".lyj_louceng_bottom_right_big_btnbox").eq(loucengnum).children().mouseover(function(){
                $(".lyj_louceng_bottom_right_big_btnbox").eq(loucengnum).children().removeClass().eq($(this).index()).addClass("first");
                $(".lyj_louceng_bottom_right_big_picbox").eq(loucengnum).children().removeClass().eq($(this).index()).addClass("first");
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
                $(".lyj_louceng_top ul").eq(loucengnum).children().removeClass().eq($(this).index()).addClass("first");
                $(".lyj_louceng_bottom").eq(loucengnum).children(".lyj_louceng_bottom_right").removeClass("first").eq($(this).index()).addClass("first");
                nub=$(this).index();
            })

            // 整体右侧按钮
            $(".lyj_louceng_bottom").eq(loucengnum).children(".lyj_louceng_bottom_right").children(".lyj_louceng_bottom_right_xiaokuai").click(function(){
                nub++;
                if(nub>=$(".lyj_louceng_top ul").eq(loucengnum).children().length){
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
  }
  louceng()

// 楼层  4/6/7/9
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
                $(".lyj_lc_bottom_right_big_btnbox").eq(lcnum).children().removeClass().eq($(this).index()).addClass("first");
                $(".lyj_lc_bottom_right_big_picbox").eq(lcnum).children().removeClass().eq($(this).index()).addClass("first");
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
                if(nub>=$(".lyj_lc_top ul").eq(lcnum).children().length){
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
  }
  lc()

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

  // 顶部隐藏
  var kai=true;
	var guan=true;
	$(document).scroll(function(){
	    if($(this).scrollTop()>=200&&kai){
     		$(".lyj_yinbox").animate({top:0},100);
     		kai=false;
     		guan=true;
	    }else if($(this).scrollTop()<200&&guan){
	    	$(".lyj_yinbox").animate({top:-50},100);
     		kai=true;
     		guan=false;
	    }	
	})
   // 顶部隐藏 二级出现
   $(".lyj_yinleft").hover(function(){
       $(".lyj_bannerleft").css({"display":"block"});
   },function(){
       $(".lyj_bannerleft").css({"display":"none"});
       
   })
   // 楼层跳转
    $(window).scroll(function(){
        document.title=$(window).scrollTop();
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
        $(".lyj_floornav li").click(function(){
            $(".lyj_floornav li").css({"color":"#5e5e5e"}).eq($(this).index()-1).css({"color":"#e3101e"})
            $(".lyj_floornav li b").css({"opacity":"0"}).eq($(this).index()-1).css({"opacity":"1"})
            num=$(this).index()-1;
            $(document).scrollTop($(".lyj_lcdh").eq($(this).index()-1).offset().top);
        })

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
    $.returnTop($(".lyj_fan"),1000)  
   
	$(".lyj_floornav_bottom").click(function(){
		$(document).scrollTop("10000");
	})

    })    

// 右侧固定
function rightGuding(){
        $(".lyj_rightGuding_yiru").each(function(index){
            $(".lyj_rightGuding_yiru").eq(index).hover(function(){
                $(".lyj_rightGuding_js").eq(index).animate({"left":"-82","width":"90"},300)
                $(".lyj_rightGuding_yiru").eq(index).css({"background":"#3f2e2e"})
            },function(){
                $(".lyj_rightGuding_js").eq(index).animate({"left":"0","width":"0"},300)
                $(".lyj_rightGuding_yiru").eq(index).css({"background":""})
            })
        })
        $("#lyj_rightGuding_top_gouwuche").hover(function(){
            $("#lyj_rightGuding_top_gouwuche").css({"background":"#3f2e2e"})
        },function(){
            $("#lyj_rightGuding_top_gouwuche").css({"background":""})
        })
        $(".lyj_rightGuding_yiru2").hover(function(){
            $(".lyj_rightGuding_js2").animate({"left":"-140","width":"140"},300)
            $(".lyj_rightGuding_yiru2").css({"background":"#3f2e2e"})
        },function(){
            $(".lyj_rightGuding_yiru2").css({"background":""})
        })
    }
    rightGuding()


















})