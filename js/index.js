$(".nav").on("click",function(){
    $(".side-bar").animate({width:"250px"},600,function(){
        $(".side-bar").addClass("position-fixed")
    })
   
})

$(".close i").on("click",function(){
    $(".side-bar").removeClass("position-fixed")
    $(".side-bar").animate({width:"0px"},600)
   
})
$(".side-bar ul li").on("click",function(){
    let currentSection= $(this).children().attr("href")
    let currentOffset= $(currentSection).offset().top
    $("html,body").animate({
        scrollTop:currentOffset
    },2000)
})

$(".singer").on("click",function(){
    $(this).children().eq(1).slideToggle(500) 
})
$("textarea").on("input",function(){
    
    let charlength =$(this).val().split("").length
    $(".charnumbers").html(`${100-charlength}`)
})

window.onload = function() {
   
    countDownToTime("11 october 2025 9:56:00");
  }

  function countDownToTime(countTo) {
  
        let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime()/1000);
   
    

    let now = new Date();
    now = (now.getTime()/1000);
    timeDifference = (futureDate- now);
  
        
   let days = Math.floor( timeDifference / (24*60*60));
 let daysToSec = (days * (24*60*60))
   
   let hours = Math.floor((timeDifference - (daysToSec)) / 3600);
   let mins = Math.floor((timeDifference - (daysToSec) - (hours * 3600 )) / 60);
   let secs = Math.floor((timeDifference - (daysToSec) - (hours * 3600) - (mins * 60)))


    $(".day").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)

  
    setInterval(function() {  countDownToTime(countTo); }, 1000);
  }
