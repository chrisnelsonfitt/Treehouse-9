$("#bell").addClass("wobble");
//Alert Fade
$(".alert-note svg").click(function(){
    $(".alert-note").fadeOut();
    $("#bell").fadeOut();
    
});

  $("#bell").hover(  
function(){ $(".alert-note").addClass("scale");},  
function(){ $(".alert-note").removeClass("scale"); 
});




//Submit Note
$( "#settings" ).submit(function( event ) {
  $(".submit-note").css("display", "inherit");
      $("#bell").fadeIn();
  event.preventDefault();
});
//Message Note  


    

   
 
$( "#message" ).submit(function( event ) {
    
    if($("#search-user").val()===""){
        $(".search-error").css("display","inherit");
        $(".message-note").css("display", "none");
        $("#bell").fadeIn();
        event.preventDefault(); 
        
    }
    else if ($("#User-message").val()===""){
      
        $(".message-error").css("display","inherit");
         $(".search-error , .message-note").css("display","none");
        
        $("#bell").fadeIn();
        event.preventDefault(); 
        
    }
    else{
        $(".message-fail").css("display","none");
        $(".message-note").css("display", "inherit"); 
        $("#bell").fadeIn();
        event.preventDefault(); 
    }
    
});




//Success Fade

$(".message-fail svg").click(function(){
    $(".message-fail , #bell").fadeOut();
});

$(".submit-note svg").click(function(){
    $(".submit-note , #bell").fadeOut();
});
$(".message-note svg").click(function(){
    $(".message-note , #bell").fadeOut();
});


