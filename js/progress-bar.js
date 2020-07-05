let progressBar = $("#myProgressBar");
let progressWidth = $(".progress").width();
let currentProgressBarWidth = 0;




$("#plusOne").click(function(){
    progressBar.width(currentProgressBarWidth + progressWidth*0.01);
    currentProgressBarWidth += progressWidth*0.01;
});
$("#plusThree").click(function(){
    progressBar.width(currentProgressBarWidth + progressWidth*0.03);
    currentProgressBarWidth += progressWidth*0.03;
});
$('#plusSeven').click((function(){
    progressBar.width(currentProgressBarWidth + progressWidth*0.07);
    currentProgressBarWidth = currentProgressBarWidth + progressWidth*0.07;
}));