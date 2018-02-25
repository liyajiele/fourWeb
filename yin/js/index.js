$(function(){

	//banner
function banner(){
	var imgbox=$(".imgbox")[0];
	var imgs=$("a",imgbox);
	var btnbox=$(".btnbox")[0];
	var btn=$(".btn");
	var leftbtn=$(".leftbtn")[0];
	var rightbtn=$(".rightbtn")[0];
	var banner=$(".bannermiddle")[0];
    var bannerBg=["#f6f6f6","#0089cd","#ec7b97","#a7d8f8"];
	var num=0;

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
	    // banner.style.backgroundColor=bannerBg[num];
	    banner.className="bannermiddle bannerbei"+[num+1];
    }
		var t=setInterval(lun,2000);

	leftbtn.onclick=function(){
         lun("leftbtn");
    }
    rightbtn.onclick=function(){
         lun("rightbtn");
    }

    banner.onmouseover=function(){
		clearInterval(t);
		animate(leftbtn,{opacity:1})
	    animate(rightbtn,{opacity:1})
	}
	banner.onmouseout=function(){
		animate(rightbtn,{opacity:0})
	    animate(leftbtn,{opacity:0})
		t=setInterval(lun,2000);
	}

	for(var i=0;i<btn.length;i++){
		btn[i].aa=i;
		btn[i].onclick=function(){
			for(var j=0;j<imgs.length;j++){
				imgs[j].style.opacity=0;
			     btn[j].className="btn";
		    }
		animate(imgs[this.aa],{opacity:1});
		btn[this.aa].className="btn active";
		// banner.style.backgroundColor=bannerBg[num];
		banner.className="bannermiddle bannerbei"+[this.aa+1];
		num=this.aa;
		}
	}

    var huadong=$(".bigleft");
	var tanchu=$(".tanchu");
	for (var i = 0; i < huadong.length; i++) {
		huadong[i].aa=i;
		hover(huadong[i],function(){
			tanchu[this.aa].style.display="block";
		},function(){
			tanchu[this.aa].style.display="none";
		})
	};


	}
	banner();
	//绿框左移
	function zuoyi(){
		var move=$(".bannerright");
	    for(var i=0;i<move.length;i++){
		    move[i].bb=i;
		    move[i].onmouseover=function(){
			    animate(move[this.bb],{right:10},500);
	        }
	        move[i].onmouseout=function(){
		        animate(move[this.bb],{right:0},500);
            }
	    }
	}
	zuoyi();

	// 选项卡
	function dong(){
		var shang=$(".shang")[0];
		var shang1=$("li",shang);
        var san=$(".san");
		var xia=$(".xia")[0];
		var xia1=$("ul",xia);
        
	    for(var i=0;i<shang1.length;i++){
	    	shang1[i].aa=i;
	    	shang1[i].onmouseover=function(){
	    		for(var j=0;j<xia1.length;j++){
	    			xia1[j].style.display="none";
	    			shang1[j].className="";
	    			san[j].style.display="none";
	    		}
	    		xia1[this.aa].style.display="block";
	    		shang1[this.aa].className="dong";
	    		san[this.aa].style.display="block";
	    	}
	    }
	}
	dong();


//百货选项卡
function dong1(){
		var shang=$(".zhuanguibottomrighttop")[0];
		var shang1=$("li",shang);
        var san=$(".san1");
		var xia=$(".zhuanguibottomrightbottom")[0];
		var xia1=$("ul",xia);
        
	    for(var i=0;i<shang1.length;i++){
	    	shang1[i].aa=i;
	    	shang1[i].onmouseover=function(){
	    		for(var j=0;j<xia1.length;j++){
	    			xia1[j].style.display="none";
	    			shang1[j].className="";
	    			san[j].style.display="none";
	    		}
	    		xia1[this.aa].style.display="block";
	    		shang1[this.aa].className="dong1";
	    		san[this.aa].style.display="block";
	    	}
	    }
	}
	dong1();

//微信
function wei(){
var weixin=$(".weixin")[0];
var weixinopen=$(".weixinopen")[0];
var weixinactive=$(".weixinactive")[0];
weixin.onmouseover=function(){
	weixinopen.style.display="block";
	weixinactive.style.display="block";
}
weixin.onmouseout=function(){
	weixinopen.style.display="none";
	weixinactive.style.display="none";

}
}
wei();


//手机银泰
function shou(){
	var phone=$(".phone")[0];
	var phoneopen=$(".phoneopen")[0];
	var phoneactive=$(".phoneactive")[0];
	phone.onmouseover=function(){
		phoneopen.style.display="block";
		phoneactive.style.display="block";
	}
	phone.onmouseout=function(){
		phoneopen.style.display="none";
		phoneactive.style.display="none";
	}
}
shou();

//我的银泰
function wo(){
    var yiji=$(".topright2");
    var erji=$(".erji");
		for (var i=0;i<yiji.length;i++){
			yiji[i].aa=i;
			yiji[i].onmouseover=function(){
				var lis=$("li",erji[this.aa]);
		        var h=lis[0].offsetHeight*lis.length;
				animate(erji[this.aa],{height:h},300);
                
			}
			yiji[i].onmouseout=function(){
				animate(erji[this.aa],{height:0},300);
			}
	    }
}
wo();

//线
function xian(){
	var box=$(".xia1");
	var linebottom=$(".linebottom");
	var lineright=$(".lineright");
	var lineleft=$(".lineleft");
	var linetop=$(".linetop");
	for(var i=0;i<box.length;i++){
		box[i].aa=i;
		hover(box[i],function(){
			 animate(linetop[this.aa],{width:box[this.aa].offsetWidth-1},500);
			 animate(linebottom[this.aa],{width:box[this.aa].offsetWidth-1},500);
			 animate(lineleft[this.aa],{height:box[this.aa].offsetHeight-1},500);
			 animate(lineright[this.aa],{height:box[this.aa].offsetHeight-1},500);
		},function(){
			 animate(linetop[this.aa],{width:0},500);
			 animate(linebottom[this.aa],{width:0},500);
			 animate(lineleft[this.aa],{height:0},500);
			 animate(lineright[this.aa],{height:0},500);
		})
       
	}
}
xian();

//遮罩
function zhezhao(){
    var zhezhao=$(".zhezhao");
    var baizhe=$(".baizhe");
    for(var i=0;i<zhezhao.length;i++){
    	zhezhao[i].aa=i;
    	zhezhao[i].onmouseover=function(){
    		baizhe[this.aa].style.display="block";
    	}
    	zhezhao[i].onmouseout=function(){
    		baizhe[this.aa].style.display="none";
    	}
    }

}
zhezhao();

//热门品牌遮罩
function zhezhao1(){
    var zhezhao=$(".zhezhao1");
    var baizhe=$(".baizhe1");
    for(var i=0;i<zhezhao.length;i++){
    	zhezhao[i].aa=i;
    	zhezhao[i].onmouseover=function(){
    		baizhe[this.aa].style.display="block";
    	}
    	zhezhao[i].onmouseout=function(){
    		baizhe[this.aa].style.display="none";
    	}
    }

}


zhezhao1();

//底部遮罩
function zhezhao4(){
    var zhezhao=$(".ka1");
    var baizhe=$(".dizhe");
    for(var i=0;i<zhezhao.length;i++){
    	zhezhao[i].aa=i;
    	zhezhao[i].onmouseover=function(){
    		baizhe[this.aa].style.display="block";
    	}
    	zhezhao[i].onmouseout=function(){
    		baizhe[this.aa].style.display="none";
    	}
    }

}
zhezhao4();


//楼层跳转
function louceng(){

	var box=$(".tiaozhuan")[0];
	var tu=$(".shi");
	var btn=$("li",box);
	var kai=true;
	var guan=true;
	window.onscroll=function(){
		var tops=document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop;

		if(tops>=1500){
			if(kai){
			animate(box,{opacity:1},200);
		kai=false;
		guan=true;}
		}else{
			if(guan){
			animate(box,{opacity:0},200);
		kai=true;
		guan=false;}
		}


		for (var i = 0; i < tu.length; i++) {
			var weizhi=tu[i].offsetTop;
			if(tops>=weizhi&&tops<(weizhi+400)){
			for(var j=0;j<btn.length-1;j++){
				btn[j].style.opacity="0";
			}
			btn[i].style.opacity="1";
			}else if(tops>=(weizhi+400)){
				btn[i].style.opacity="0";
			}else{
				btn[i].style.opacity="0";
			}
		}
	}
for(var i=0;i<btn.length-1;i++){
	btn[i].aa=i;
	btn[i].onmouseover=function(){
		btn[this.aa].style.opacity="1";
	}
	btn[i].onmouseout=function(){
		btn[this.aa].style.opacity="0";
	}
	btn[i].onclick=function(){
		var tops=document.documentElement.scrollTop?document.documentElement:document.body;
		animate(tops,{scrollTop:tu[this.aa].offsetTop},200)
	}
}
btn[9].onclick=function(){
		var tops=document.documentElement.scrollTop?document.documentElement:document.body;
		animate(tops,{scrollTop:0},500)
	}


}
louceng();

//中间轮播遮罩
function zhezhao5(){
    var zhezhao=$(".shibottommiddle");
    var lunzhe=$(".lunzhe");
    for(var i=0;i<zhezhao.length;i++){
    	zhezhao[i].aa=i;
    	zhezhao[i].onmouseover=function(){
    		lunzhe[this.aa].style.display="block";
    	}
    	zhezhao[i].onmouseout=function(){
    		lunzhe[this.aa].style.display="none";
    	}
    }

}
zhezhao5();

// 中间轮播
function zhonglunbo(){
	var shi=$(".shibottommiddle");
	for (var j = 0; j < shi.length; j++) {
		switch(j){      //判断哪个楼层有轮播
			case 0:
			case 2:
			case 4:
			case 5:
				middle(j);break;
		}
	}
	function middle(i){
			var imgbox=$(".imgboxmiddle",shi[i])[0];
			var imgs=$("li",imgbox);
			var btns=$("li",$(".btnboxmiddle",shi[i])[0]);
			var rightbtn=$(".rightbtnmiddle",shi[i])[0];
			var leftbtn=$(".leftbtnmiddle",shi[i])[0];
			var ow=imgs[0].offsetWidth;
			var pw=btns[0].offsetWidth;

			rightbtn.onclick=function(){
		        animate(imgs[0],{left:-ow},500)
		        animate(imgs[1],{left:0},500);
		        btns[0].style.backgroundColor="#777";
		        btns[1].style.backgroundColor="#e5004f";
		    }
		    leftbtn.onclick=function(){
		        animate(imgs[1],{left:ow},500)
		        animate(imgs[0],{left:0},500);
		        btns[0].style.backgroundColor="#e5004f";
		        btns[1].style.backgroundColor="#777";
		    }

			shi[i].onmouseover=function(){
			    animate(leftbtn,{left:0},500)
			    animate(rightbtn,{left:358},500)
			}
			shi[i].onmouseout=function(){
			    animate(rightbtn,{left:388},500)
			    animate(leftbtn,{left:-30},500)
			}
		}
	}

zhonglunbo();

//下面轮播
function lunbo(){
	var shi=$(".shibottomleftbottom");
	for (var i = 0; i < shi.length; i++) {
		banner2(i);
	}
	

	function banner2(i){
		var imgs=$(".shibottomleftbottom2",shi[i]); 
		imgs[0].style.left=20+"px";
		var rightbtn=$(".shibottomleftbottom3",shi[i])[0];
		var leftbtn=$(".shibottomleftbottom1",shi[i])[0];
		var now=0;
		var next=0;
        
     
		function move(type){
	    	type=type||"rightbtn";  //注意引号
	    	if(type=="rightbtn"){   //判断向左走，还是向右走
	    		next++;      //
		    	if (next>imgs.length-1) {
		            next=0;
		    	}
		    	var ow = shi[0].offsetWidth;
			    imgs[next].style.left = ow + "px";
		        animate(imgs[now],{left:-ow+20},500);   //第一张图片移动为负
		    	animate(imgs[next],{left:20},500);
		    	   
	    	}else if(type=="leftbtn"){
	    		next--;
		    	if (next<0) {
		            next=imgs.length-1;
		    	}
		    	var ow = shi[0].offsetWidth;
			    imgs[next].style.left = -ow + "px";
		    	animate(imgs[now],{left:ow},500);
		    	animate(imgs[next],{left:20},500);
		    }
	    	now=next;        //赋值
	    }
	    leftbtn.onclick=function(){
	    	move("leftbtn");
	    }
	    rightbtn.onclick=function(){
	    	move("rightbtn");
	    }
	}
}
lunbo();
	
// 购物车
function gouwuche(){
	var souright=$(".souright2")[0];
	var souright2open=$(".souright2open")[0];
	souright.onmouseover=function(){
		souright2open.style.display="block";
	}
	souright.onmouseout=function(){
		souright2open.style.display="none";
	}
}
gouwuche();



	})