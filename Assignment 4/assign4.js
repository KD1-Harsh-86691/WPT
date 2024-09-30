// Name - Harsh Dixit
// RollNo - 86691
// KD1-86691-HARSH

function DoCalculation(choice) {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var res = document.getElementById("res");

    console.log(num1);
    console.log(num2);
    switch (choice) {
        case 1:
            res.value = num1 + num2;
            console.log(res.value);
            break;
        case 2:
            res.value = num1 - num2;
            console.log(res.value);
            break;
        case 3:
            res.value = num1 * num2;
            console.log(res.value);
            break;
        case 4:
            res.value = num1 / num2;
            console.log(res.value);
            break;

        default:
            console.log("Invalid choice...");
            break;
    }


}