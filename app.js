$(document).ready(function(){
    
    $("button").hover(function () {
        var background = "url(" + $(this).text()+ ".jpg)";
        $("#container").css("background-image", background);
    });
    $("button").on("click", function() {
        var background = "url(" + $(this).text()+ ".jpg)";

        $("#container").css("background-image", background);
        $("#display").css("opacity", "0.8");
        $("#display").css("background-color", "#E7E5DB");
        $("h1").text("Select Players");
        $("button").remove();

        var ninjaOptions = `<select> 
            <option value="select ninja">Select Ninja</option>
            <option value="donny">Donny</option> 
            <option value="leo">Leo</option> 
            <option value="mikey">Mikey</option>  
            <option value="raphael">Raphael</option> 
        </select>`

        $("#display").append(ninjaOptions, ninjaOptions);
        $("select").css("margin-left", "50px");

        $("select").first().change(function(){
            $("#player-one-image").css("background-image", "url(" + $(this).children(':selected').val()+ ".png)");
            $(this).children().css("margin", "0 auto" );
        });
        $("select").last().change(function(){
            $("#player-two-image").css("background-image", "url(" + $(this).children(':selected').val()+ ".png)");
        });
    });    
});