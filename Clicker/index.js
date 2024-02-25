var ClickCount = 0;
localStorage.setItem('ClickCount', ClickCount);
var TwoTimesUpgrade = false;
localStorage.setItem('TwoTimesUpgrade', TwoTimesUpgrade);
document.getElementById("Clicker").addEventListener("click", function(){
    localStorage.getItem('TwoTimesUpgrade')
    if(TwoTimesUpgrade == false) {
    ClickCount++;
    document.getElementById("ClickAmount").innerHTML = ClickCount;
    localStorage.setItem('ClickCount', ClickCount);
    }
    if(TwoTimesUpgrade == true) {
        ClickCount = ClickCount + 2;
        document.getElementById("ClickAmount").innerHTML = ClickCount;
        localStorage.setItem('ClickCount', ClickCount);
    }
});
document.getElementById("UpgradesPage").addEventListener("click", function(){
    window.location.href = "upgrades.html"
});
/*document.getElementById("Upgrade1").addEventListener("click", function(){
    if(ClickCount >= 100){
        ClickCount -= 100;
        TwoTimesUpgrade = true;
        document.getElementById("ClickAmount").innerHTML = ClickCount;
        localStorage.setItem('ClickCount', ClickCount);
        console.log(TwoTimesUpgrade);
    }
    else {
        window.alert("Not Enough Clicks");
    }
})*/