$(document).ready(function(){

    let isClicked = false;
    var ul = $("ul");
    $(".btn").click(function(){
        let inputValue = $("input");
        var liElement = $("<li></li>").text(inputValue.val()).addClass("list-group-item my-2 d-flex justify-content-between");
        var icon = $("<i></i>").addClass("far fa-trash-alt").click(function(){
            $(this).parent().remove();
        });
        liElement.append(icon);

        liElement.click(function(){
            if(!isClicked){
                $(this).css({
                    "font-size": 20,
                    "font-weight" : "bold",
                    "background-color":"#76ddfc"
                });
                isClicked = true;
            } else {
                $(this).attr("style","");
                isClicked = false;
            }
           
        });
      
        ul.append(liElement);
        inputValue.val("");
    });


});