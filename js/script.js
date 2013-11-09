var socket = io.connect('http://alexreinking.com:8080');

$(function() {
    socket.on('found-drink', function(data){
        console.log(data);
    });

    socket.on('search-results', function(data){
        var drinkArr = data.drinks ;
        for (var i = 0; i < drinkArr.length; ++i) {
            alert(drinkArr[i]);
        };
    });

    socket.on('drink', function(data) {
        $(".search").slideUp(500, function () {
            var results = "";
            for(var i = 0; i < data.ingredients.length; i++) {
                results += "<li>" + data.ingredients[i].name + "</li>";
            }
            $(".ingredient-list").html(results);
            $(".results").slideDown(500);
            $("#content").addClass("shaded");
        });
        $("#nextIngredient").val("");
        $("#startingIngredient").val("");
    });

    socket.on('error', function (err) {
        console.log(err);
    });

    $("#getDrinkBtn").click(function () {
        socket.emit('generate-drink', { ingredient: $("#startingIngredient").val() });
    });

    $("#getNextDrinkBtn").click(function () {
        socket.emit('generate-drink', { ingredient: $("#nextIngredient").val() });
    });

    $("#startingIngredient, #nextIngredient").autocomplete({
        source: allIngredients
    }).keyup(function (e) {
        if(e.which === 13) {
            $(".ui-menu-item").hide();
        }            
    });
});
