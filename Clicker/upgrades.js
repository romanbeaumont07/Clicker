ClickCount = localStorage.getItem('ClickCount');
TwoTimesUpgrade = localStorage.getItem('TwoTimesUpgrade');
AutoClick = localStorage.getItem('AutoClick');
document.getElementById("Upgrade1").addEventListener("click", function(){
    if(ClickCount >= 100){
        ClickCount -= 100;
        TwoTimesUpgrade = true;
        //document.getElementById("ClickAmount").innerHTML = ClickCount;
        console.log(TwoTimesUpgrade);
        localStorage.setItem('ClickCount', ClickCount);
        localStorage.setItem('TwoTimesUpgrade', TwoTimesUpgrade);
    }
    else {
        window.alert("Not Enough Clicks");
    };
});
document.getElementById("Upgrade2").addEventListener("click", function(){
    if(ClickCount >= 100){
        ClickCount -= 100;
        AutoClick = true;
        localStorage.setItem('ClickCount', ClickCount);
        localStorage.setItem('AutoClick', AutoClick);
    }
    else {
        window.alert("Not Enough Clicks")
    };
});