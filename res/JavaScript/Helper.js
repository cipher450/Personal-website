
//#region 

function openurl(url){
    window.open(url,'_blank')
}
const randomColor = Math.floor(Math.random()*16777215).toString(16);

function changeStyle(){
    var element = document.getElementById("article"); linear-gradient(rgba(80, 5, 99, 0.945),rgba(44, 14, 197, 0.863));
    element.style.backgroundImage = 'linear-gradient(' + randomColor + ',' + randomColor + ')';
}
changeStyle();
//#endregion