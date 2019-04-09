$(document).ready(function () {

    // $(".btn:nth-child(3)").hover(function () {
    //     var a = $(this).text();
    //     // alert(a);
    //     // $(this).hide();

    //     $("h2").toggle(2000, function(){
    //         console.log("toggle finished");
    //     });
    // });

    $(".btn:first").click(function(){
        console.log( $("p").text("New text") );
        document.querySelector("p").innerText = "New text";
    });

    $("p").on({
        click: function () {
            console.log("clicked");
        }
        // mouseover: function () {
        //     console.log("hover");

        // }
    });


    console.log($("a").attr("href", "facebook.com"));


});

