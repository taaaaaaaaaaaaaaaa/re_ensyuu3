var element1 = document.getElementById('sitagosi'); // 移動させたい位置の要素を取得
    var rect1 = element1.getBoundingClientRect();
    var position1 = rect1.top;    // 一番上からの位置を取得
var element2 = document.getElementById('nakami'); // 移動させたい位置の要素を取得
    var rect2 = element2.getBoundingClientRect();
    var position2 = rect2.top;    // 一番上からの位置を取得
var element3 = document.getElementById('tutumi'); // 移動させたい位置の要素を取得
    var rect3 = element3.getBoundingClientRect();
    var position3 = rect3.top;    // 一番上からの位置を取得
var element4 = document.getElementById('yaki'); // 移動させたい位置の要素を取得
    var rect4 = element4.getBoundingClientRect();
    var position4 = rect4.top;    // 一番上からの位置を取得


function scroll1(){
    scrollTo(0,position1);
}


function scroll2(){
    scrollTo(0,position2);
}


function scroll3(){
    scrollTo(0,position3);
}


function scroll4(){
    scrollTo(0,position4);
}