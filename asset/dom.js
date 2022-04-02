//这个JavaScript是专门给电子黑板进行DOM操作的
function openColor() {
    var color_panel = document.getElementById("color_panel");
    var weight_panel = document.getElementById("weight_panel");
    var eraser_2 = document.getElementById("eraser_panel_2");
    weight_panel.style.display = "none";//防止两个菜单同时打开，出现bug
    color_panel.style.display = "block";
    eraser_2.style.display = "none";
}
function openWeight() {
    var color_panel = document.getElementById("color_panel");
    var weight_panel = document.getElementById("weight_panel");
    var eraser_2 = document.getElementById("eraser_panel_2");
    color_panel.style.display = "none";//防止两个菜单同时打开，出现bug
    weight_panel.style.display = "block";
    eraser_2.style.display = "none";
}
function closePanel_1() {
    var close_panel = document.getElementById("color_panel");
    close_panel.style.display = "none";
}
function closePanel_2() {
    var close_panel_2 = document.getElementById("weight_panel");
    close_panel_2.style.display = "none";
}
function openMath() {
    var math = document.getElementById("math_panel");
    var allSub = document.body.querySelectorAll(".sub_main");
    //用for循环去打开
    for (var i = 0; i < allSub.length; i++){
        allSub[i].style.display = "none";
    }
    math.style.display = "block";
}
function openEng() {
    var eng = document.getElementById("eng_panel");
    var allSub = document.body.querySelectorAll(".sub_main");
    for (var i = 0; i < allSub.length; i++){
        allSub[i].style.display = "none";
    }
    eng.style.display = "block";
}
function openPhy() {
    var phy = document.getElementById("phy_panel");
    var allSub = document.body.querySelectorAll(".sub_main");
    for (var i = 0; i < allSub.length; i++){
        allSub[i].style.display = "none";
    }
    phy.style.display = "block";
}
function openChe() {
    var che = document.getElementById("che_panel");
    var allSub = document.body.querySelectorAll(".sub_main");
    for (var i = 0; i < allSub.length; i++){
        allSub[i].style.display = "none";
    }
    che.style.display = "block";
}
function openOther() {
    var other = document.getElementById("other_panel");
    var allSub = document.body.querySelectorAll(".sub_main");
    for (var i = 0; i < allSub.length; i++){
        allSub[i].style.display = "none";
    }
    other.style.display = "block";
}
function close(){
    var allSub = document.body.querySelectorAll(".sub_main");
    //用for循环去关闭
    for (var i = 0; i < allSub.length; i++){
        allSub[i].style.display = "none";
    }
}
function openInfo(){
    var info = document.getElementsByClassName("info_panel")[0];
    info.style.display = "block";
}
function closeInfo(){
    var info = document.getElementsByClassName("info_panel")[0];
    info.style.display = "none";
}
function openEraser(){
    var color_panel = document.getElementById("color_panel");
    var weight_panel = document.getElementById("weight_panel");
    var eraser_2 = document.getElementById("eraser_panel_2");
    color_panel.style.display = "none";
    weight_panel.style.display = "none";
    eraser_2.style.display = "block";
}
function closeEraser(){
    var eraser_2 = document.getElementById("eraser_panel_2");
    eraser_2.style.display = "none";
}