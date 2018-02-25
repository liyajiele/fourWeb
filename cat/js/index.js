$(function(){
	//我的淘宝
	function tao(){
		var mytao=$(".mytao")[0];
		var taoopen=$(".taoopen")[0];
		var taoactive=$(".taoactive")[0];
		mytao.onmouseover=function(){
			taoopen.style.display="block";
			taoactive.style.display="block";
		}
		mytao.onmouseout=function(){
			taoopen.style.display="none";
			taoactive.style.display="none";
		}
	}
tao();
//我的收藏
function cang(){
		var mycang=$(".mycang")[0];
		var cangopen=$(".cangopen")[0];
		var cangactive=$(".cangactive")[0];
		mycang.onmouseover=function(){
			cangopen.style.display="block";
			cangactive.style.display="block";
		}
		mycang.onmouseout=function(){
			cangopen.style.display="none";
			cangactive.style.display="none";
		}
	}
cang();
//手机
function shou(){
		var myshou=$(".myshou")[0];
		var shouopen=$(".shouopen")[0];
		myshou.onmouseover=function(){
			shouopen.style.display="block";
		}
		myshou.onmouseout=function(){
			shouopen.style.display="none";
		}
	}
shou();
//商家支持
function shang(){
		var myshang=$(".myshang")[0];
		var shangopen=$(".shangopen")[0];
		var shangactive=$(".shangactive")[0];
		myshang.onmouseover=function(){
			shangopen.style.display="block";
			shangactive.style.display="block";
		}
		myshang.onmouseout=function(){
			shangactive.style.display="none";
			shangopen.style.display="none";
		}
	}
shang();
//网站导航
function wang(){
		var mywang=$(".mywang")[0];
		var wangopen=$(".wangopen")[0];
		var wangactive=$(".wangactive")[0];
		mywang.onmouseover=function(){
			wangopen.style.display="block";
			wangactive.style.display="block";
		}
		mywang.onmouseout=function(){
			wangactive.style.display="none";
			wangopen.style.display="none";
		}
	}
wang();
//二级菜单
function bigleft(){
		var bigleft=$(".bigleft");
		for (var i = 0; i < bigleft.length; i++) {
			bigleft[i].aa=i;
		
			var banneropen=$(".banneropen");
			var banneractive=$(".banneractive");
			bigleft[i].onmouseover=function(){
				banneropen[this.aa].style.display="block";
				banneractive[this.aa].style.display="block";
			}
			bigleft[i].onmouseout=function(){
				banneractive[this.aa].style.display="none";
				banneropen[this.aa].style.display="none";
			}
	    };
	}
bigleft();

//banner
function banner(){
	var imgbox=$(".imgbox")[0];
	var imgs=$("li",imgbox);
	var btnbox=$(".btnbox")[0];
	var btn=$("li",btnbox);
	var banner=$(".banner")[0];
    var bannerBg=["#e8e8e8","#d9123d","#ec7b97","#f6bdc6","#d3316d","#c99a6c","#fed130"];
	var num=0;
	var t=setInterval(lun,3000);

	function lun(type){
		type=type||"rightbtn";
		if(type=="rightbtn"){
		     	num++;
		    if(num>=imgs.length){
			   num=0;
		     }
		}else if(type=="leftbtn"){
			num--;
		    if(num<=-1){
			   num=imgs.length-1;
		     }
		}
		for(var i=0;i<imgs.length;i++){
			imgs[i].style.opacity=0;
			btn[i].className="btn";
		}
		animate(imgs[num],{opacity:1},Tween.Bounce.easeInOut);
		btn[num].className="btn active";
	    banner.style.backgroundColor=bannerBg[num];
    }

       imgbox.onmouseover=function(){
			clearInterval(t);
		}
		imgbox.onmouseout=function(){
			t=setInterval(lun,3000);
		}

	for(var i=0;i<btn.length;i++){
    	btn[i].aa=i;
    	btn[i].onclick=function(){
    		for(var j=0;j<imgs.length;j++){
    			imgs[j].style.opacity=0;
			    btn[j].className="btn";
		    }
		animate(imgs[this.aa],{opacity:1},500);
		btn[this.aa].className="active";
		banner.style.backgroundColor=bannerBg[this.aa];
		num=this.aa;
        }
    }
}
banner();

//品牌
function re(){
	var rebuttom1=$(".rebuttom3");
	var zhezhao=$(".guanzhu");
	for(var i=0;i<rebuttom1.length;i++){
		rebuttom1[i].aa=i;
		rebuttom1[i].onmouseover=function(){
			animate(zhezhao[this.aa],{opacity:1},500,Tween.Linear,function(){})
			// zhezhao[this.aa].style.display="block";
		}
		rebuttom1[i].onmouseout=function(){
			animate(zhezhao[this.aa],{opacity:0},500,Tween.Linear,function(){})
			// zhezhao[this.aa].style.display="none";
	}
}
}
re();
//顶部隐藏栏
function ying(){
	var ying=$(".ying")[0];
	var floor1=$(".liu");
	var cebtn=$(".cebtn")[0];
    var btn1=$(".cebtn1");
    var btn2=$(".cebtn2")[0];
    var btn3=$(".cebtn3")[0];
    var bg=["#ea5f8d","#0999d6","#64c333","#f15453","#19c8a9","#f7a945"];
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
            animate(cebtn,{left:0},300);
            flag=false;
            flag2=true;
        } 
       }
       else{
       	if(flag2){
       		animate(ying,{top:-50},300);
	        animate(cebtn,{left:-35},300);
	        flag2=false;
	        flag=true;
       	}
       
       }


       for(var i=0;i<floor1.length;i++){
		  if(tops>=floor1[i].offsetTop-100){
		       
		    for(var j=0;j<btn1.length;j++){
		      btn1[j].style.background="rgba(45,45,45,0.8)";
		    }
		      btn1[i].style.background=bg[i];
		      now=i;
		  }
       }

}
		for(var i=0;i<btn1.length;i++){
		    btn1[i].aa=i;
		    btn1[i].onmouseover=function(){
		      for(var j=0;j<btn1.length;j++){
		      if(now!=j){
		        btn1[j].style.background="rgba(45,45,45,0.8)";
		        }
		      }
		     this.style.background=bg[this.aa];
		    }


			   btn1[i].onmouseout=function(){
			     this.style.background="rgba(45,45,45,0.8)";
			   }
			    var ot=document.documentElement.scrollTop?document.documentElement:document.body;
			   btn1[i].onclick=function(){
			     animate(ot,{scrollTop:floor1[this.aa].offsetTop},500);
			   }


		  btn3.onclick=function(){
		    animate(ot,{scrollTop:0},500);
		  }
		}
	}
ying();
 
 //右侧顶部
 // function you(){
 //    var xiaokuang6=$(".xiaokuang6")[0];
 //     document.documentElement.scrollTop=1;
 //  window.onscroll=function(){
 //       var tops=document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop;
       
	// 	  }

 // 			xiaokuang6.onclick=function(){
	// 	    animate(ot,{scrollTop:0},500); 
	// 	} 
 // you();
 //分类
 function fen(){
 	var fen5=$(".fen5");
 	for(var i=0;i<fen5.length;i++){
 		fen5[i].aa=i;
	 	fen5[i].onmouseover=function(){
	 		var imgs=$("img",fen5[this.aa])[0];
			animate(imgs,{width:150,height:150},100);
		}
		fen5[i].onmouseout=function(){
	 		var imgs=$("img",fen5[this.aa])[0];
			animate(imgs,{width:100,height:100},100);
		}
 	}
 }
 fen();
//六栏
function liu(){

	var move=$(".move");
	for(var i=0;i<move.length;i++){
		move[i].bb=i;
		move[i].onmouseover=function(){
			//imgs=$("img",move[this.bb])[0];
			animate(move[this.bb],{right:15},100);
		}
		move[i].onmouseout=function(){
			//imgs=$("img",move[this.bb])[0];
			animate(move[this.bb],{right:0},100);
		}
    }
}
liu();
//品牌移入
function pin(){
	var pinbuttom1=$(".pinbuttom1");
   var pinbuttom5=$(".pinbuttom5");
   var zhezhao=$(".zhezhao");
   
	for(var i=0;i<pinbuttom1.length;i++){
		pinbuttom1[i].aa=i
		pinbuttom1[i].onmouseover=function(){
			pinbuttom1[this.aa].style.borderColor="red";
			for(var j=0;j<pinbuttom5.length;j++){
				pinbuttom5[j].aa=j;
		        pinbuttom5[j].onmouseover=function(){
			        zhezhao[this.aa].style.display="block";
			    }
				pinbuttom5[j].onmouseout=function(){
					zhezhao[this.aa].style.display="none";
				}
			}
		    
		}
		pinbuttom1[i].onmouseout=function(){
			pinbuttom1[this.aa].style.borderColor="#fff";
   		 }
	}
}
pin();
//猜你喜欢
function cai(){
	var pinbuttom1=$(".caibuttom1");
    var zhezhao=$(".zhezhao1");
   
	for(var i=0;i<pinbuttom1.length;i++){
		pinbuttom1[i].aa=i;
		pinbuttom1[i].onmouseover=function(){
			pinbuttom1[this.aa].style.borderColor="red";
			zhezhao[this.aa].style.display="block";
			    }
				pinbuttom1[i].onmouseout=function(){
					zhezhao[this.aa].style.display="none";
					pinbuttom1[this.aa].style.borderColor="#fff";
				}
    }
}
cai();
//右侧定位
function bian(){
	var xiaokuang5=$(".xiaokuang5")[0];
	var xiaokuang4=$(".xiaokuang4")[0];
	var xiaokuang=$(".xiaokuang");
	var xiaokuang1=$(".xiaokuang1")[0];
	var jian=$(".jian");
	var ju=$(".ju");
	var bai=$(".bai")[0];
	for(var i=0;i<jian.length;i++){
		xiaokuang[i].bb=i;
		xiaokuang[i].onmouseover=function(){
			aa=this.bb;
			xiaokuang[this.bb].style.backgroundColor="#c40000";
			
			animate(jian[this.bb],{right:80},300,function(){
				animate(jian[aa],{right:40},300);
			});
			animate(ju[this.bb],{right:70},300,function(){
				animate(ju[aa],{right:30},300);
			});
			jian[this.bb].style.display="block";
			ju[this.bb].style.display="block";
		}
		xiaokuang[i].onmouseout=function(){
			xiaokuang[this.bb].style.backgroundColor="";
		
			animate(jian[this.bb],{right:40},100);
			animate(ju[this.bb],{right:30},100);
			jian[this.bb].style.display="none";
			ju[this.bb].style.display="none";
		}
   }
  
   xiaokuang4.onmouseover=function(){
	    xiaokuang5.style.display="block";
	    bai.style.display="block";
}
	xiaokuang4.onmouseout=function(){
	    xiaokuang5.style.display="none";
	     bai.style.display="none";
	}
}
bian();

	function xiaokuang1(){
		var xiaokuang1=$(".xiaokuang1")[0];
		xiaokuang1.onmouseover=function(){
			xiaokuang1.style.backgroundColor="#c40000";
		}
		xiaokuang1.onmouseout=function(){
			xiaokuang1.style.backgroundColor="";
		}
	} 
xiaokuang1();
//六白色遮罩
function liuzhe(){
	var liubuttom1=$(".liubuttom1");
	var zhezhao4=$(".zhezhao4");
	for(var i=0;i<liubuttom1.length;i++){
		liubuttom1[i].aa=i;
		liubuttom1[i].onmouseover=function(){
			zhezhao4[this.aa].style.display="block";
		}
		liubuttom1[i].onmouseout=function(){
		zhezhao4[this.aa].style.display="none";
	    }
    }
}
liuzhe();
//热门右遮罩
function rebuttom(){
	var rebuttom4=$(".rebuttom4-1");
	var zhezhao5=$(".zhezhao5");
	var rebuttom7=$(".rebuttom7");
	var rebuttom8=$(".rebuttom8");
	for(var i=0;i<rebuttom4.length;i++){
		rebuttom4[i].aa=i;
		rebuttom4[i].onmouseover=function(){
			zhezhao5[this.aa].style.display="block";
			rebuttom8[this.aa].style.color="red";
			rebuttom7[this.aa].style.color="red";
		}
		rebuttom4[i].onmouseout=function(){
			zhezhao5[this.aa].style.display="none";
			rebuttom8[this.aa].style.color="#333";
			rebuttom7[this.aa].style.color="#333";
		}
	}
}
rebuttom();
//bannerright
function bannerright(){
	var bannerright=$(".bannerright")[0];
	bannerright.onmouseover=function(){
		bannerright.style.backgroundColor="#383838";
	}
	bannerright.onmouseout=function(){
		bannerright.style.backgroundColor="#747474";
		
	}
}

bannerright();
//小天猫
function mao(){
	var mao=$(".mao");
	var mao1=$(".mao1");
	var mao3=$(".mao3");
	var mao2=$(".mao2");
	for(var i=0;i<mao.length;i++){
		mao[i].aa=i;
		mao[i].onmouseover=function(){
			animate(mao1[this.aa],{opacity:1},500,Tween.Linear,function(){})
		}
		mao[i].onmouseout=function(){
			animate(mao1[this.aa],{opacity:0},500,Tween.Linear,function(){})
	}
}
	for(var i=0;i<mao2.length;i++){
			mao2[i].aa=i;
			mao2[i].onmouseover=function(){
				animate(mao3[this.aa],{opacity:1},500,Tween.Linear,function(){})
			}
			mao2[i].onmouseout=function(){
				animate(mao3[this.aa],{opacity:0},500,Tween.Linear,function(){})
		}
	}
}
mao();
})
