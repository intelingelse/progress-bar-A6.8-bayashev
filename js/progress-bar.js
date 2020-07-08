let progressBar = $("#myProgressBar");
let progressWidth = $(".progress").width();
let currentProgressBarWidth = 0;




$("#plusOne").click(function(){
    // progressBar.width(currentProgressBarWidth + progressWidth*0.01);
    // currentProgressBarWidth += progressWidth*0.01;
    currentProgressBarWidth+=1;
    progressBar.width(`${currentProgressBarWidth}%`);
    console.log(currentProgressBarWidth);
});
$("#plusThree").click(function(){
    currentProgressBarWidth+=3;
    progressBar.width(`${currentProgressBarWidth}%`);
});
$('#plusSeven').click((function(){
    currentProgressBarWidth+=7;
    progressBar.width(`${currentProgressBarWidth}%`);
}));