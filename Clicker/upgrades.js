ClickCount = localStorage.getItem('ClickCount');
TwoTimesUpgrade = localStorage.getItem('TwoTimesUpgrade');
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
    }
})