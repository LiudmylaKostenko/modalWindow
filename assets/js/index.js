var modal = document.getElementById("modal_id");
var btn = document.getElementById("btn_window");
var span = document.getElementsByClassName("close_window")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}