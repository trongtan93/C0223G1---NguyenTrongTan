function convert_money() {
    let amount = document.getElementById("amount").value;
    let from = document.getElementById("from_currency").value;
    let to = document.getElementById("to_currency").value;
    let resault;

    if (from == "VND" && to == "AUD") {
        resault = "resault: " + amount / 15880 + "AUD"
    }
    else if (from == "AUD" && to == "VND") {
        resault = "resault: " + amount * 15880 + "VND"
    }

    else {
        resault = "Slowing down unit"
    }

    document.getElementById("resault").innerHTML = resault;
}

