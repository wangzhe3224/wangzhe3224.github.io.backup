function $(elementID) { return document.getElementById(elementID); }

function pageScroll() {
    window.scrollBy(0,-10);
    scrolldelay = setTimeout('pageScroll()',0.00001); /*速度值自定义，越小越快*/
    
    var isChrome = navigator.userAgent.toLowerCase().indexOf('chrome');
    if(isChrome == -1){ /*兼容Chrome*/
        if(document.documentElement.scrollTop == 0) clearTimeout(scrolldelay);
    }else{
        if(document.body.scrollTop == 0) clearTimeout(scrolldelay);
    }
}

window.onscroll = function(){
    var scrHeight = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop; /*兼容各浏览器*/
    if (scrHeight >= 400) { /*自定义显示高度*/
        $('backtop').style.display = 'block';
        $('backtop').innerHTML = '<a href="javascript:pageScroll();">Top</a>';
    }else{
        $('backtop').style.display = 'none';
    }
}
