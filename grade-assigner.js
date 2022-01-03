
for (let num = 60; num <= 100; num++) {
    if (num > 90) {
        x = "A";
    } else if (num > 80) {
        x = "B";
    } else if (num > 70) {
        x = "C";
    } else if (num > 65) {
        x = "D";
    } else {
        x = "E";
    }
    console.log('For scoring ' + num + ' points, you get an ' + x)

}