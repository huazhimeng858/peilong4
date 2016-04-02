/**
 * Created by Administrator on 2016-04-02.
 */
function getByClass(parent,tagname,classname){
    var aEls=parent.getElementsByTagName(tagname);
    var arr=[];
    var re=new RegExp('(^|\\s)' + classname + '(\\s|$)');
    for(var i=0;i<aEls.length;i++){
        if(re.test(aEls[i].className)){
            arr.push(aEls[i]);
        }
    }
    return arr;
}

function addClass(obj,sClass){
    var aClass=obj.className.split(' ');
    if(!obj.className){
        obj.className=sClass;
        return;
    }
    for(var i=0;i<aClass.length;i++){
        if(aClass===sClass)return;
    }
    obj.className+=' '+sClass;
}

function removeClass(obj,sClass){
    var aClass=obj.className.split(' ');
    if(!obj.className)return;
    for(var i=0;i<aClass.length;i++){
        if(aClass[i]===sClass){
            aClass.splice(i,1);
            obj.className=aClass.join(' ');
            break;
        }
    }
}

function view(){
    return {
        W:document.documentElement.clientWidth,
        H:document.documentElement.clientHeight
    }
}

function offsetL(obj){
    var left=0;
    while(obj){
        left+=obj.offsetLeft;
        obj=obj.offsetParent;
    };
    return left;
}

function getNum(option){
    var min=option.min||0;
    var num=option.num;
    var max=option.max;
    var sort=option.sort;
    var arr=[];
    var json={};
    while(arr.length<num){
        var iNum=Math.round(Math.random()*max);
        if(!json[iNum]&&iNum>min){
            arr.push(iNum);
            json[iNum]=1;
        }
    }
    if(sort=='>'){
        arr.sort(function(a,b){return b-a;});
        return arr;
    }else if(sort=='<'){
        arr.sort(function(a,b){return a-b;});
        return arr;
    }else{
        return arr;
    }

}

window.onload=function(){
    document.body.style.height=view().H+'px';
    var aImg=document.getElementsByTagName('img');
    var aLi=document.getElementsByTagName('li');
    var btn=getByClass(document,'div','btnarea')[0];
    for(var i=0;i<aLi.length;i++){
        aLi[i].style.width=view().W/7/view().W*100+'%';

    }

}