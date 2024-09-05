let first;
let second;
let third;

function calculateAmount(){
    first = parseFloat(document.getElementById('grocery1').value);
    second = parseFloat(document.getElementById('grocery2').value);
    third = parseFloat(document.getElementById('grocery3').value);

    let amount = first + second + third;

    document.getElementById('result').innerText= `The total amount is: ${amount}`;
}