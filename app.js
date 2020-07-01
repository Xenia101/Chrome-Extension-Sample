// initial starting function
function onloadFunc() {
    console.log("Hello World");
}

// button click event
document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('btn');
    var count = 1;
    btn.addEventListener('click', function () {
        document.getElementById("count").innerHTML = count;
        count += 1;
    });
});

window.onload = onloadFunc;