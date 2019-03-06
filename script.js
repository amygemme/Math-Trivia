var n = 20;
var correct = 0;
var incorrect = 0;

$("#button").on("click", start);

function start() {
    $("#button").hide();
    $("#image").hide();
    $("#time").show();
   setTimeout(countDown, 1000);
   $(".container").show();
   // $(".radio-inline").show();
}
function countDown() {
   n--;
   if (n > 0) {
      setTimeout(countDown, 1000);
   }
   else {
      alert("Time Up!")
      timeup();
   }
   console.log(n);
   $("#count").text(n);

}

function timeup() {

if ($("#opt2a").is(":checked")) {
   correct++;
   console.log("you got it")
 }
 else{
//  else if ($("#opt1a").is(":checked") || $("#opt3a").is(":checked")|| $("#opt4a").is(":checked")) {
    console.log("no go");
    incorrect++;
 }

 if ($("#opt4b").is(":checked")) {
   correct++;
   console.log("you got it")
 }
 else{
//  else if ($("#opt1a").is(":checked") || $("#opt3a").is(":checked")|| $("#opt4a").is(":checked")) {
    console.log("no go");
    incorrect++;
 }

 if ($("#opt3c").is(":checked")) {
   correct++;
   console.log("you got it")
 }
 else{
//  else if ($("#opt1a").is(":checked") || $("#opt3a").is(":checked")|| $("#opt4a").is(":checked")) {
    console.log("no go");
    incorrect++;
 }

 if ($("#opt1d").is(":checked")) {
   correct++;
   console.log("you got it")
 }
 else{
//  else if ($("#opt1a").is(":checked") || $("#opt3a").is(":checked")|| $("#opt4a").is(":checked")) {
    console.log("no go");
    incorrect++;
 }

$(".container").hide();
$("#time").hide();
$("#score").show();
$("#correct").text(correct);
$("#incorrect").text(incorrect);
console.log(correct);
console.log(incorrect);
} // close time up function 
 







