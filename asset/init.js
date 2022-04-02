window.onload = function(){
    var main_text = document.getElementById("status_text");
    main_text.innerHTML = "程序正在启动中";
    setTimeout(init,4000);
    function init(){
        main_text.innerHTML = "准备连接";
        setTimeout(init2,500);
    }
    function init2(){
        main_text.innerHTML = "加载程序核心文件中 ... ";
        setTimeout(init3,4000);
    }
    function init3(){
        main_text.innerHTML = "读取Node.js插件库 ... ";
        setTimeout(init4,2000);
    }
    function init4(){
        main_text.innerHTML = "准备JavaScript中";
        setTimeout(init5,1200);
    }
    function init5(){
        main_text.innerHTML = "加载Leaflet资源库 ... ";
        setTimeout(init6,5400);
    }
    function init6(){
        main_text.innerHTML = "加载Canvas插件库";
        setTimeout(init7,3400);
    }
    function init7(){
        main_text.innerHTML = "初始化变量";
       setTimeout(init8,600);
    }
    function init8(){
        main_text.innerHTML = "加载完成 ... "
        setTimeout(openProgram,2300);
    }
    function openProgram(){
    var d = new Date;
    var id = d.getTime();
    var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",
        a = t.length,
        n = "";
    for (i = 0; i < 15; i++) {
        n += t.charAt(Math.floor(Math.random() * a));
    };
        window.location.href = "src/program.html?from=init&return=True&BaseKey=6d49f6s&id="+id+"&TokenNumber="+n;
    }
}