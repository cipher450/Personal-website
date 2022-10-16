
//#region profile_social_icons
$('#p_iconText1').hide()
$('#p_iconText2').hide()
$('#p_iconText3').hide()
$('#p_iconText4').hide()

$('.insta').hover(function(){
    $('#p_iconText1').toggle()
})
$('.telegram').hover(function(){
    $('#p_iconText2').toggle()

})
$('.github').hover(function(){
    $('#p_iconText3').toggle()
})
$('.linkedin').hover(function(){
    $('#p_iconText4').toggle()
})

//#endregion
  
  
$('.Home').animate({opacity: 0}, 5);
$(window).scroll(function(){
    
    $('.Home').animate({opacity: 1}, 1000);
    
    })
