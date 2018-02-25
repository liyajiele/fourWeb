//1、解决获取类名的兼容问题
function getClass(classname,father){
	father=father||document;
	if(father.getElementsByClassName){
        return father.getElementsByClassName(classname);
	}else{
		var newarr=[];
		var all=document.getElementsByTagName("*");
		for(var i=0;i<all.length;i++){
			if(all[i].className==classname){
				newarr.push(all[i]);
			}
		}return newarr;

	}
}
//2、解决获取样式的兼容函数
//obj:对象
//attr:属性
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
	   return getComputedStyle(obj,null)[attr];
	}
}
//3、获取元素的兼容函数
//"#" id   "." 类名  "a"
//3.获取元素的兼容函数
function $(selecter,father){   //参数及其父类
    if(typeof selecter=="string"){   //检测是否为字符串
        father=father||document;
        selecter=selecter.replace(/^\s*|\s*$/g,"");  //检测空格
        if(selecter.charAt(0)=="."){    //检测类
            return getClass(selecter.slice(1),father);
        }else if(selecter.charAt(0)=="#"){   //检测ID
            return document.getElementById(selecter,slice(1))
        }else if(/^[a-zA-Z][a-zA-Z0-6]{0,8}$/.test(selecter)){   //检测任意字符
            return father.getElementsByTagName(selecter);
        }else if(/^<[a-zA-Z][a-zA-Z0-6]{0,8}>$/.test(selecter)){   //检测任意字符
            return document.createElement(selecter.slice(1,-1));
        }
    }else if(typeof selecter=="function"){  //检测为函数。调用
        window.onload=function(){
            selecter();
        }
    }
}
// $("div");
//正则：一个定规则的表达式对象
// /cxcas/
//4、获取节点中的子节点
//father:父节点
//type:"a"子节点只有元素节点
//     "b"子节点只有元素节点与非空的文本节点
function getChilds(father,type){
	type=type||"a";
	var all=father.childNodes;
	var newarr=[];
	for(var i=0;i<all.length;i++){
		if(type=="a"){
			if(all[i].nodeType==1){
			newarr.push(all[i]);
		    }
	    }else if(type=="b"){//元素+非空的文本节点
		   if(all[i].nodeType==1||(all[i].nodeType==3&&all[i].nodeValue.replace(/^\s|\s*$/g,"")!="")){
			newarr.push(all[i]);
		    }

	      }
	}
		
	return newarr;
}
//5、获取第一个子节点
function getFirst(father){
	return getChilds(father)[0];
}
//6、获取最后一个子节点
function getLast(father){
	var i=getChilds(father).length-1;
	return getChilds(father)[i];
}
//7、获取指定的子节点
function getNum(father,num){
	return getChilds(father)[num];
}
//8、获取下一个兄弟结点的引用
function getNext(obj){
    var next=obj.nextSibling;
    if(!next){
            return false;
    	}
    while(next.nodeType==3||next.nodeType==8){
    	next=next.nextSibling
    	if(!next){
            return false;
    	}
    }
	return next;
}
//9、获取上一个兄弟节点的引用
function getpre(obj){
	var pre=obj.previousSibling;
	if(!pre){
            return false;
    	}
    while(pre.nodeType==3||pre.nodeType==8){
    	pre=pre.previousSibling
    	if(!pre){
            return false;
    	}
    }
	return pre;
}
//10、把一个元素插入到某一个元素之后
//10.把一个元素插入到某一元素之前
function insertBefore(newobj,oldobj){
    var parent=oldobj.parentNode;
    parent.insertBefore(newobj,oldobj);
}
function insertAfter(father,newobj,oldobj){
	var next=getNext(oldobj);
	if(next){
		father.insertBefore(newobj,next)
	}else{
		father.appendChild(newobj);
	}
}
//11、鼠标滚轮得函数
function mouseWheel(obj,upfun,downfun){
	if(document.attachEvent){
		document.attachEvent("onmousewheel",scrollFn);//IE、opear
	}else if(document.addEventListener){
		document.addEventListener("mousewheel",scrollFn,false);
		//chrome,safari -webkit-
		document.addEventListener("DOMMouseScroll",scrollFn,false);//firefox   -moz-
	}

function scrollFn(e){
    var eve=e||window.event;
    if(eve.preventDefault){
    	eve.preventDefault();
    }else{
    	eve.returnValue=false;
    }
    var fangxiang=eve.wheelDelta||eve.detail;
    //FF   向上：-3    向下：3 
    //IE   向上：120    向下：-120
    //谷歌 向上：120    向下：-120   

    if(fangxiang==-3||fangxiang==120){
    	if(upfun){
    		upfun();
    	}
    }
    if(fangxiang==3||fangxiang==-120){
    	if(downfun){
    		downfun();
    	}
    }
}
}
  //15.hover
//判断某个元素是否包含有另外一个元素
 function contains (parent,child) {
  if(parent.contains){
     return parent.contains(child) && parent!=child;
  }else{
    return (parent.compareDocumentPosition(child)===20);
  }
 }

//判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
  function checkHover (e,target) {
   if(getEvent(e).type=="mouseover"){
      return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
   }else{
    return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
    }
  }
//鼠标移入移出事件
/*
  obj   要操作的对象
  overfun   鼠标移入需要处理的函数
  outfun     鼠标移除需要处理的函数
*/
function hover (obj,overfun,outfun) {
    if(overfun){
      obj.onmouseover=function  (e) {
        if(checkHover(e,obj)){
           overfun.call(obj,[e]);
        }
      }
    }
    if(outfun){
      obj.onmouseout=function  (e) {
        if(checkHover(e,obj)){
           outfun.call(obj,[e]);
        }
      }
    }
}
 function getEvent (e) {
      return e||window.event;
 }
/********************************/
//12.事件绑定,删除的兼容性问题
function addEvent(obj,event,fun){
    if (obj.addEventListener) {
        obj.addEventListener(event,function(e){   //事件处理程序
            var e=e||window.event;
            fun.call(obj,e) //6.7.8里的this不正确   call需要转换指针方向
        },false);
    }else{
        obj.attachEvent("on"+event,function(){
            var e=e||window.event;
            fun.call(obj,e);
        })
    }
}
function removeEvent(obj,event,fun){
    if (obj.addEventListener) {
        obj.removeEventListener(event,fun,false);
    }else{
        obj.detachEvent("on"+event,fun);
    }
}
//13.鼠标滚轮
function mouseWheel(obj,upfun,downfun){
    if (document.attachEvent) {
            document.attachEvent("onmousewheel",fun)
        }else if (document.addEventListener) {
            document.addEventListener("mousewheel",fun,false)
            document.addEventListener("DOMMouseScroll",fun,false)
        }
    function fun(e){
        var ev=e||window.event;
        var num=ev.wheelDelta||ev.detail;
        if (num==-3||num==120) {
            upfun.call(obj);
        }else if (num==3||num==-120) {
            downfun.call(obj);
        };
    }
}


//cookie
function setCookie(attr,value,time){
  if(time){
    var nowtime=new Date();
    nowtime.setTime(nowtime.getTime()+time*1000);
    document.cookie=attr+"="+value+";expires="+nowtime.toGMTString();
  }else{
    document.cookie=attr+"="+value;
  }
}
function getCookie(attr){
  var cookies=document.cookie;
  var arr=cookies.split("; ");
  for(var i=0;i<arr.length;i++){
    var brr=arr[i].split("=");
    if(brr[0]==attr){
      return brr[1];
    }
  }
  return false;
}
function delCookie(attr){
  var nowtime=new Date();
  nowtime.setTime(nowtime.getTime()-1);
  document.cookie=attr+"=a;expires="+nowtime.toGMTString();   //删除
  
}
