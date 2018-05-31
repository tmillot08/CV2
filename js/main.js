$(document).ready(function(){

    $("img").click(function(){
        console.log('coucou');
        $("img").animate({right:'400px'});
        $("ul").show();
        $("ul").animate({top:'-300px'},"slow");
        $(".home").show(3000);
    });

    $(".compe").click(function(){
        $("#home").removeClass("active");
        $(".compe").addClass("active");
        $(".home").animate({left:'1300px'});


    });

  });
