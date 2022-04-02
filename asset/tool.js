//学科工具js
window.onload = function () {
    var tool_items = document.getElementById("tool_items");
    var translate_API = document.getElementById("translate_iframe");
    //定义执行函数
    function openTool(id,action){
        var ToolName = document.getElementById(id);
        ToolName.onclick = action;
    }
    // for (var i = 0; i < ToolList.length; i ++){
    //     var pic_name = String(ToolList[i]);//把定义放在前面，要不然函数不识别
    //     //console.log(pic_name);
    //     openTool(ToolList[i],function(){
    //         tool_items.innerHTML += "<img src='../resource/"+pic_name+".png' width='300px'> ";
    //     });
    // }
    openTool("Math_triangle",function(){
        tool_items.innerHTML += "<img class='tool_img' src='../resource/Math_triangle.png' width='100%'> "
    });
    openTool("Math_cone",function(){
        tool_items.innerHTML += "<img class='tool_img' src='../resource/Math_cone.png' width='100%'> "
    });
    openTool("Math_Coordinate_axis",function(){
        tool_items.innerHTML += "<img class='tool_img' src='../resource/Math_Coordinate_axis.png' width='100%'> "
    });
    openTool("Math_cube",function(){
        tool_items.innerHTML += "<img class='tool_img' src='../resource/Math_cube.png' width='100%'> "
    });
    openTool("Math_cube_clear",function(){
        tool_items.innerHTML += "<img class='tool_img' src='../resource/Math_cube_clear.png' width='100%'> "
    });
    openTool("Math_circle",function(){
        tool_items.innerHTML += "<img class='tool_img' src='../resource/Math_circle.png' width='100%'> "
    });
    openTool("Translate_API",function(){
        document.getElementById("translate_iframe").style.display = "block";
        document.getElementById("translate_button").style.display = "block";
    });
    openTool("Che_benzene",function(){
        tool_items.innerHTML += "<img class='tool_img' src='../resource/Che_benzene.png' width='100%'> "
    });
    openTool("Che_cell_clear",function(){
        tool_items.innerHTML += "<img class='tool_img' src='../resource/Che_cell_clear.png' width='100%'> "
    });
    openTool("Che_cell_simple",function(){
        tool_items.innerHTML += "<img class='tool_img' src='../resource/Che_cell_simple.png' width='100%'> "
    });
    openTool("Che_cell_side",function(){
        tool_items.innerHTML += "<img class='tool_img' src='../resource/Che_cell_side.png' width='100%'> "
    });
    openTool("Che_h2o",function(){
        tool_items.innerHTML += "<img class='tool_img' src='../resource/Che_h2o.png' width='100%'> "
    });
}
function closeTranslate(){
    document.getElementById("translate_iframe").style.display = "none";
    document.getElementById("translate_button").style.display = "none";
}