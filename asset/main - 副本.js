function blackBoard() {
    window.addEventListener("load", () => {
        const color = document.querySelector("#select_color");
        const range = document.querySelector("#select_range");
        var color_eraser = document.getElementById("select_eraser");
        var range_eraser = document.getElementById("select_eraser_2");
        var eraser_button = document.getElementById("eraser");
        var blackBoard_button = document.getElementById("write");
        // 设置初始的画笔颜色和粗细
        var colorValue = color.value,
            rangeValue = range.value;
        eraser_button.onclick = function () {//橡皮工具
            colorValue = color_eraser.value;
            rangeValue = range_eraser.value;
            return;
        }
        blackBoard_button.onclick = function () {//黑板书写工具
            colorValue = color.value;
            rangeValue = range.value;
            return;
        }
        // 给颜色选择器加onchange事件 以此来更新颜色
        color.addEventListener("change", () => {
            colorValue = color.value;
        });
        //改变画笔粗细
        range.addEventListener("change", () => {
            rangeValue = range.value;
        });


        const cvs = document.querySelector("canvas");
        const ctx = cvs.getContext("2d");
        let flag = false;
        cvs.addEventListener("ontouchstart", (e) => {
            flag = true;
            const top = cvs.getBoundingClientRect().top;
            const left = cvs.getBoundingClientRect().left;
            const mouseX = e.pageX - left;
            const mouseY = e.pageY - top;
            // 设置好绘图的画笔颜色和粗细
            ctx.strokeStyle = colorValue;
            ctx.lineWidth = rangeValue;
            // 绘制的图像是圆角的
            ctx.lineCap = "round";
            // 开启一个路径
            ctx.beginPath();
            // 然后确定开始绘图的起点位置
            ctx.moveTo(mouseX, mouseY);
        });
        cvs.addEventListener("ontouchmove", (e) => {
            const top = cvs.getBoundingClientRect().top;
            const left = cvs.getBoundingClientRect().left;
            const mouseX = e.pageX - left;
            const mouseY = e.pageY - top;
            if (flag) {
                ctx.lineTo(mouseX, mouseY);
                // 封闭连接
                ctx.stroke();
            }
        });
        cvs.addEventListener("touchend", () => {
            flag = false;
        });
//         var can=document.getElementById("can");
// 		var ctx=can.getContext("2d");
// 		ctx.strokeStyle="black";
//         ctx.strokeStyle = colorValue;
//         ctx.lineWidth = rangeValue;
// 		ctx.lineJoin="round";  //线与线的连接方式改为圆形
// 		ctx.lineCap="round";   //起始点的绘制方式		
// 		var flag=false;
// 		can.addEventListener("touchstart",function(evt){
// //			var evt=evt||window.event;
// 			var x=evt.touches[0].pageX;
// 			var y=evt.touches[0].pageY;
// 			console.log(x+"|"+y);
// 			ctx.beginPath();
// 			ctx.moveTo(x,y);
// 			flag=true;			
// 		});
// 		can.addEventListener("touchmove",function(evt){
// 			if(flag){
// //				var evt=evt||window.event;
// 			 	var x=evt.touches[0].pageX;
// 				var y=evt.touches[0].pageY;
// 				ctx.lineTo(x,y);
// 				ctx.stroke();		
// 			}			
// 		});
// 		can.addEventListener("touchend",function(){
// 			flag=false;
// 			ctx.closePath();
// 		});
        // 清空画布功能
        const clear = document.querySelector("#clear");
        clear.addEventListener("click", () => {
            //按照预定坐标清楚画布的内容，班级电脑是1920*1080，所以填写1920*1080的数据
            ctx.clearRect(0, 0, 1920, 1080);
        });
    });

}
function eraser() {
    //橡皮功能(bug已被修复)
    // const color = document.querySelector("#select_eraser");
    // const range = document.querySelector("#select_eraser_2");
    //变量作用域问题，对应函数移植到blackBoard里面
}
blackBoard();
function newTab() {
    //【注】:因为指令”_black“的限制，edge浏览器相同页面只能新页面跳转一次，所以会造成加页功能只能使用一次的bug
    //解决方法是利用每次加页的时间（精确到毫秒）都不一样，作为新的参数传递给浏览器
    //这样会使浏览器认为跳转的页面是不一样的
    //所以我们要先获取时间戳，以id的形式传过去，再以参数的形式给浏览器识别
    //更好的方法是再生成一段随机的字符串randomString也一起传过去
    var d = new Date;
    var id = d.getTime();
    //生成一段随机字符串
    var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",
        a = t.length,
        n = "";
    for (i = 0; i < 15; i++) {
        n += t.charAt(Math.floor(Math.random() * a));
    };
    //在新页面打开
    var urlData = "../src/program.html" + "?from=NewTab" + "&require=true" + "&API_Main=main" + "&id=" + id + "&randomString=" + n;
    window.open(urlData, "");
}