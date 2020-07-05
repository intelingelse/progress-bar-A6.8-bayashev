let progressBar = $("#myProgressBar");



$("#plusOne").click(function(){
    progressBar.css("width", "+=1");
});
$("#plusThree").click(function(){
    progressBar.css("width", "+=3");
});
$('#plusSeven').click((function(){
    progressBar.css("width", "+=7");
}));