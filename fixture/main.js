document.addEventListener("DOMContentLoaded", function() {
    var darkButton = document.getElementById("darkButton");
    
    darkButton.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        var infoPartidos = document.querySelectorAll(".infoPartido");
        infoPartidos.forEach(function(infoPartido) {
            infoPartido.classList.toggle("dark-mode");
        });
    });
});



