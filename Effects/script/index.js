$(function () {
  $("#menuList").on("click", "a", function () {
// 模拟点击closeBtn按钮
    if ($(this).hasClass("btn-active")) {
      $("#expandZone #closeBtn").click();
      return false;
    }
    var curIndex = $(this).index(), mlValue = "-" + curIndex * 100 + "%";
    if ($("#expandZone").hasClass("active")) {
//  给expdiv类元素赋予动画切换的效果
      $("#expandZone .expdiv").animate({ marginLeft: mlValue });
    }
    else {
      $("#expandZone .expdiv").css({ marginLeft: mlValue });
      $("#expandZone").animate({ height: "130px" }).addClass("active");
    }
//  为当前元素添加"btn-active"样式，同时移除同级其它元素的"btn-active"样式
    $(this).addClass("btn-active").siblings().removeClass("btn-active");
    return false;
    });
  $("#expandZone #closeBtn").on("click", function () {
    $("#expandZone").animate({ height: "0px" }, function () {
      $(this).removeClass("active");
      $("#menuList .btn-active").removeClass("btn-active");
    });
    return false;
  });
});
