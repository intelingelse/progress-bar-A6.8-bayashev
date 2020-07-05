let progressBar = $("#myProgressBar");
let progressBarWidth = 0;
let progressWidth = $(".progress").width();



$("#plusOne").click(function(){
    progressBarWidth += progressWidth*0.01;
    progressBar.width(progressBarWidth + progressWidth*0.01);
});
$("#plusThree").click(function(){
    progressBarWidth += progressWidth*0.03;
    progressBar.width(progressBarWidth + progressWidth*0.03);
});
$('#plusSeven').click((function(){
    progressBarWidth += progressWidth*0.07;
    progressBar.width(progressBarWidth + progressWidth*0.07);
}));