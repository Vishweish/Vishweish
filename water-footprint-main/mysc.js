function redto1(){
    location.href="Tips.html";
}
function redto2(){
    location.href="Calc.html";
}
function gotolearn(){
    location.href="https://en.wikipedia.org/wiki/Water_footprint";
}
function myf(){
    document.getElementById("dem1").innerHTML="<h4>Phone No's:</h4><b>Vishwesh</b>-8825452654<br><b>Thirumurugan</b>-8754564299<br><b>Vishwankar</b>-9865707386<br><b>Shanjeev Gnaesh</b>-8939203911<br><b>Vandhana Devi</b>-8248127017<br><b>Uma Maheshwari</b>-9342695959";
}
function myins(){
    document.getElementById("dem2").innerHTML="<h4>Instagram Id's:</h4><b>Vishwesh</b>-@vix_wesh<br><b>Thirumurugan</b>-@Thiru_cruze<br><b>Vishwankar</b>-@vixwa_<br><b>Shanjeev Ganesh</b>-@shanj2806<br><b>Vandhana Devi</b>-@cat_girl<br><b>Uma maheshwari</b>-@uma11";
}

function getValue() {
    var inputElement = document.getElementById("inputField");
    var inputValue = inputElement.value.toLowerCase();
    var displayElement = document.getElementById("displayValue");
    if (foodItems.hasOwnProperty(inputValue)) {
        var foodItem = foodItems[inputValue];
        displayElement.textContent = "Water Footprint (wft) of " + inputValue + ": " + foodItem.wft + " " + foodItem.unit;
    } else {
        displayElement.textContent = "invalid";
    }
}
