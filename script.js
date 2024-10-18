document.getElementById("calculateBtn").addEventListener("click", function () {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100;

    if (weight && height) {
        const bmi = (weight / (height * height)).toFixed(2);
        document.getElementById("bmiResult").textContent = bmi;



        let category = '';
        if (bmi < 18.5) {
            category = "You are UNDERWEIGHT";
            document.getElementById("bmiResult").style.color = "f39c12";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            category = "You are HEALTHY";
            document.getElementById("bmiResult").style.color = "#28a745";
        } else if (bmi >= 25 && bmi <= 29.9) {
            category = "You are OVERWEIGHT";
            document.getElementById("bmiResult").style.color = "#e67e22";
        } else {
            category = "You are OBESE";
            document.getElementById("bmiResult").style.color = "#e74c3c";
        }
        document.getElementById("bmiCategory").textContent = category;
    } else {
        alert("Please enter valid weight and height.");
    }
});



document.getElementById("resetBton").addEventListener("click", function () {
    document.getElementById("weight").value = '';
    document.getElementById("height").value = '';
    document.getElementById("bmiResult").textContent = '--';
    document.getElementById("bmiCategory").textContent = '--';
    const genderRadios = document.getElementsByName('gender');
    for (let i = 0; i < genderRadios.length; i++) {
        genderRadios[i].checked = false;
    }
});
