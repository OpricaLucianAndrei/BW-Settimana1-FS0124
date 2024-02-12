const form=document.getElementsByTagName('form');
const btnAdd=document.getElementById('btnAdd');
const checkbox=document.getElementById('checkbox');

window.addEventListener("load", init());

function init() {
  btnStart();
}
function btnStart() {
  document.getElementById("btnAdd").disabled = true;
  checkbox.addEventListener('click',function () {
  if (!checkbox.checked) {
      document.getElementById("btnAdd").disabled = true;
  }else
  {
      document.getElementById("btnAdd").disabled =false;
  }

})
}