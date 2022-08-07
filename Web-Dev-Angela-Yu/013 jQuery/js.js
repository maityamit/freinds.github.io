// $("h1").css("color","red")

$("h1").addClass("big-title margin-50")

$("h1").text("Amit")

$("button").css("color","green")

$("button").text("Don't click me")

// $("button").html("<em>Hey</em>")

$("img").attr("src")

$("a").attr("href","https://www.google.com")


//Event Listner

$("h1").click(function(){
    $("h1").css("color","green")
})


$("button").click(function(){
    let col = $("h1").css("color")
    if(col==="rgb(255, 255, 0)"){
        $("h1").css("color","purple")
    }else {
        $("h1").css("color","black")
    }
    $("h1").fadeOut().fadeIn().animate({opacity: 0.5 , margin: "10%"})

})


$("input").keypress(function(event){
    $("h1").text(event.key)
})

$("h1").on("mouseover",function(){
    $("h1").text("Mouse")
})


$("h1").before("<button>Hello</button>")