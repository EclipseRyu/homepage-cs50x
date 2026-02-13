function calculateTip(){
    let dollars = parseFloat(document.getElementById("dollars").value);
    let percent = parseFloat(document.getElementById("percent").value) / 100;

    let tipDue = dollars * percent;

    document.getElementById("tip-amount").innerHTML = tipDue;
}