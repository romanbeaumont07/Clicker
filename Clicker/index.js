localStorage.getItem('ClickCount');
var ClickCount = Number(localStorage.getItem('ClickCount'));
if(ClickCount == null){
    ClickCount = 0;
    localStorage.setItem('ClickCount', ClickCount);
};
localStorage.getItem('TwoTimesUpgrade')
var TwoTimesUpgrade = localStorage.getItem('TwoTimesUpgrade');
if(TwoTimesUpgrade == null) {
    TwoTimesUpgrade = false;
    localStorage.setItem('TwoTimesUpgrade', TwoTimesUpgrade);
};
localStorage.getItem('AutoClick');
var AutoClick = localStorage.getItem('AutoClick');
if(AutoClick == null){
    AutoClick = false;
    localStorage.setItem('AutoClick', AutoClick);
}
document.getElementById("Clicker").addEventListener("click", function(){
    if(TwoTimesUpgrade == "false") {
    ClickCount++;
    document.getElementById("ClickAmount").innerHTML = ClickCount;
    localStorage.setItem('ClickCount', ClickCount);
    }else {
        ClickCount += 2;
        document.getElementById("ClickAmount").innerHTML = ClickCount;
        localStorage.setItem('ClickCount', ClickCount);
    }
});
document.getElementById("UpgradesPage").addEventListener("click", function(){
    window.location.href = "upgrades.html"
});
if(AutoClick == "true"){
    setInterval(()=>{
        ClickCount++
        document.getElementById("ClickAmount").innerHTML = ClickCount;
    },1000);
    localStorage.setItem('ClickCount', ClickCount);
};
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