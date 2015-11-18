window.onload = function(){
  var Lis = document.getElementsByTagName("li");
  for (var i=0;i<Lis.length;i++){
    Lis[i].onmouseover = function(){
      var u = this.getElementsByTagName("ul")[0];
      if (u !=undefined){
        u.style.display = "block";
        ChangeH(u.id,1);
      }
    }

    Lis[i].onmouseleave = function(){
      var u = this.getElementsByTagName("ul")[0];
      if(u !=undefined){
        ChangeH(u.id,-1);
      }
    }
  }
}
function ChangeH(id,count){
  var ulList = document.getElementById(id);
  var h = ulList.offsetHeight;
  h += count;
  if (count>0){
    if (h<=54){
    ulList.style.height = h +"px";
    setTimeout("ChangeH('"+id+"',1)",10);
    }
    else{
      return;
    }
  }
  else{
    if (h>0) {
    ulList.style.height = h + "px";
    setTimeout("ChangeH('" + id + "',-1)",10);
    }
    else{
      ulList.style.display="none";
      return;
    }
  }
}


// function AddH(id){
//   var ulList = document.getElementById(id);
//   var h = ulList.offsetHeight;
//   h += 1;
//   if (h<=54){
//     ulList.style.height = h +"px";
//     setTimeout("ChangeH('"+id+"')",10);
//   }
//   else{
//     return;
//   }
// }
// function SubH(id){
//   var ulList = document.getElementById(id);
//   var h = ulList.offsetHeight;
//   h -=1;
//   if (h>0) {
//     ulList.style.height = h + "px";
//     setTimeout("ChangeH('" + id + "')",10);
//   }
//   else{
//     ulList.style.display="none";
//     return;
//   }
// }
