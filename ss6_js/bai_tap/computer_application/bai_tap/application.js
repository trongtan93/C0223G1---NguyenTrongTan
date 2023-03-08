let input1 = document.getElementById("value_1");
let input2 = document.getElementById("value_2");

function addition() {
    let add_value =  "result: " + (+input1.value + +input2.value);
    document.getElementById("result").innerHTML = add_value;
}

function subtraction() {
    let value_1 = + input1.value;
    let value_2 = + input2.value;
    let sub_value = "result: " + (value_1 - value_2)
    document.getElementById("result").innerHTML = sub_value;
}

function multi() {
    let value_1 = + input1.value;
    let value_2 = + input2.value;
    let multi_value =  "result: " + (value_1 * value_2)
    document.getElementById("result").innerHTML = multi_value;
}

function div() {
    let value_1 = + input1.value;
    let value_2 = + input2.value;
    let div_value =  "result: " + (value_1 / value_2)
    document.getElementById("result").innerHTML = div_value;
}
