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
        $(".expe").removeClass("active")
        $(".compe").addClass("active");
        $(".home").animate({left:'1300px'});
        $(".home").hide(1000);
        $("#comp1").show();
        $("#comp2").show();
        $("#comp3").show();
        $("#comp4").show();
        $("#comp5").show();
        $("#comp1").animate({top:'-300px'},1000);
        $("#comp2").animate({top:'-290px'},2000);
        $("#comp3").animate({top:'-280px'},3000);
        $("#comp4").animate({top:'-270px'},4000);
        $("#comp5").animate({top:'-260px'},5000);

    });

    $(".expe").click(function(){
      $(".compe").removeClass("active");
      $(".expe").addClass("active");
      $("#comp1").animate({left:'1300px'},2000);
      $("#comp2").animate({left:'-1300px'},2200);
      $("#comp3").animate({left:'1300px'},2400);
      $("#comp4").animate({left:'-1300px'},2600);
      $("#comp5").animate({left:'1300px'},2600);
      $("#comp1").hide(1000);
      $("#comp2").hide(1000);
      $("#comp3").hide(1000);
      $("#comp4").hide(1000);
      $("#comp5").hide(1000);
      $(".Experience").animate({top:'-300px'},4000);
      $(".Experience").show(3000);
    });

    $(".form").click(function(){
      $(".expe").removeClass("active");
      $(".form").addClass("active");

    });



  });
