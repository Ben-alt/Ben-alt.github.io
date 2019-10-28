window.onload = function(){ 
    var header = document.getElementById("top");
    var btns = header.getElementsByClassName("header");
    var content = document.getElementsByClassName("text")
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";

            var change = this.className.split(' ')[0];
            for (i = 0; i < content.length; i++) {
                var compare = content[i].className.split(' ')[0];
                if(compare == change){
                    content[i].classList.add("shown")
                } else {
                    content[i].classList.remove("shown")
                };
            };
        });
    };
};
