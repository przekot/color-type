/**
 * Created by przekot on 17.03.2017.
 */

document.addEventListener('DOMContentLoaded', function () {

    var colorTyped = document.querySelector('#color-picker');
    var body = document.querySelector('body');
    var hash = document.querySelector("#hash");
    
    colorTyped.addEventListener('keyup', function () {
            body.style.background = colorTyped.value;
            isBlack();
            isNumber();
            console.log(colorTyped.value);
    });

    function isBlack() {
        if(colorTyped.value === 'black' || colorTyped.value === '000' || colorTyped.value === '000000'){
            body.style.color = "#fff";
            colorTyped.style.color = "#fff";
            colorTyped.style.borderBottom = "2px solid white";
        } else {
            body.style.color = "#000";
            colorTyped.style.color = "#000";
            colorTyped.style.borderBottom = "2px solid black";
        }
    };

    function isNumber() {
        if(!isNaN(colorTyped.value[0])){
            /*/ hash.style.visibility = 'visible'; */
            body.style.background = "#" + colorTyped.value;
        } /* else if(isNaN(colorTyped.value)) {
            hash.style.visibility = 'hidden'; */
        }
    /*}; */

});