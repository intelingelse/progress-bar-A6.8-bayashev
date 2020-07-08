let progressBar = $("#myProgressBar");
let currentProgressBarWidth = 0;




$("#plusOne").click(function(){
    currentProgressBarWidth+=1;
    progressBar.width(`${currentProgressBarWidth}%`);
});
$("#plusThree").click(function(){
    currentProgressBarWidth+=3;
    progressBar.width(`${currentProgressBarWidth}%`);
});
$('#plusSeven').click((function(){
    currentProgressBarWidth+=7;
    progressBar.width(`${currentProgressBarWidth}%`);
}));