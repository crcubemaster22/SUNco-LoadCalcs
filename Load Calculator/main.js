document.getElementById("solarAllowed").innerHTML = 0;
document.getElementById("ampsUsed").innerHTML = 0;
document.getElementById("ampsAvailable").innerHTML = 0;


//Declaring Variables here so I can use them outside of function//
let acBreaker01;
let smallTotal01;
let maxSolar;
let lightsTotal;
let finalTotal;
let heatInput1;
let heatInput2;
let heatInput3;
let heatInput4;
let heatInput5;
let heatInput6;
let userPick1;
let userPick2;
let userPickNum;
let pole1;
let pole2;
let percent;
let max_val;
let remain1;
let remain2;
let heatPrint1;
let maxAmp;
let get = "document.getElementById";
const heatAcArray = [0];

function submitClicked() {

    let get = "document.getElementById";
    //LINE ONE DECLARED VARIABLES//
    let otherUserPicked = document.getElementById("otherList").value;
    let otherBreaker = parseInt(document.getElementById("otherInput").value);
    let otherLine1;
    //LINE TWO DECLARED VARIABLES//
    let otherUserPicked2 = document.getElementById("otherList2").value;
    let otherBreaker2 = parseInt(document.getElementById("otherInput2").value);
    let otherLine2;
    //LINE THREE DECLARED VARIABLES//
    let otherUserPicked3 = document.getElementById("otherList3").value;
    let otherBreaker3 = parseInt(document.getElementById("otherInput3").value);
    let otherLine3;
    //LINE FOUR DECLARED VARIABLES//
    let otherUserPicked4 = document.getElementById("otherList4").value;
    let otherBreaker4 = parseInt(document.getElementById("otherInput4").value);
    let otherLine4;
    //LINE FIVE DECLARED VARIABLES//
    let otherUserPicked5 = document.getElementById("otherList5").value;
    let otherBreaker5 = parseInt(document.getElementById("otherInput5").value);
    let otherLine5;
    //LINE SIX DECLARED VARIABLES//
    let otherUserPicked6 = document.getElementById("otherList6").value;
    let otherBreaker6 = parseInt(document.getElementById("otherInput6").value);
    let otherLine6;
    //LINE SEVEN DECLARED VARIABLES//
    let otherUserPicked7 = document.getElementById("otherList7").value;
    let otherBreaker7 = parseInt(document.getElementById("otherInput7").value);
    let otherLine7;
    //LINE EIGHT DECLARED VARIABLES//
    let otherUserPicked8 = document.getElementById("otherList8").value;
    let otherBreaker8 = parseInt(document.getElementById("otherInput8").value);
    let otherLine8;
    //LINE NINE DECLARED VARIABLES//
    let otherUserPicked9 = document.getElementById("otherList9").value;
    let otherBreaker9 = parseInt(document.getElementById("otherInput9").value);
    let otherLine9;
    //LINE TEN DECLARED VARIABLES//
    let otherUserPicked10 = document.getElementById("otherList10").value;
    let otherBreaker10 = parseInt(document.getElementById("otherInput10").value);
    let otherLine10;

    let derate = document.getElementById("print16.1").value;


    //PRINTING//


    //Variable name declared for final calculation/
    userPickNum = document.getElementById("heatListNum").value;
    //ONE
    heatInput1 = document.getElementById("heatInput1").value;
    userPick1 = document.getElementById("heatList1").value;
    //TWO
    heatInput2 = document.getElementById("heatInput2").value;
    userPick2 = document.getElementById("heatList2").value;




    //Switch case for Heat Line one//
    if (userPick1 == "one") {
        pole1 = "120";

    } else if (userPick1 == "two") {
        pole1 = "240";

    } else {
        pole1 = 0;
    }
    if (userPick2 == "one") {
        pole2 = "120";

    } else if (userPick2 == "two") {
        pole2 = "240";

    } else {
        pole2 = 0;
    }


    if (userPickNum == "one") {
        percent = .65;

    } else if (userPickNum == "two") {
        percent = .40;

    } else {
        percent = 0;
    }
    //Line 1 If - Other
    if (otherUserPicked == 'one') {
        otherLine1 = otherBreaker * .8 * 120;

    } else if (otherUserPicked == 'two') {
        otherLine1 = otherBreaker * .8 * 240;

    } else {
        otherLine1 = 0;

    }
    //Line 2 If - Other
    if (otherUserPicked2 == 'one') {
        otherLine2 = otherBreaker2 * .8 * 120;

    } else if (otherUserPicked2 == 'two') {
        otherLine2 = otherBreaker2 * .8 * 240;

    } else {
        otherLine2 = 0;

    }
    //Line 3 If - Other
    if (otherUserPicked3 == 'one') {
        otherLine3 = otherBreaker3 * .8 * 120;

    } else if (otherUserPicked3 == 'two') {
        otherLine3 = otherBreaker3 * .8 * 240;

    } else {
        otherLine3 = 0;

    }
    //Line 4 If - Other
    if (otherUserPicked4 == 'one') {
        otherLine4 = otherBreaker4 * .8 * 120;

    } else if (otherUserPicked4 == 'two') {
        otherLine4 = otherBreaker4 * .8 * 240;

    } else {
        otherLine4 = 0;

    }
    //Line 5 If - Other
    if (otherUserPicked5 == 'one') {
        otherLine5 = otherBreaker5 * .8 * 120;
    } else if (otherUserPicked5 == 'two1') {
        otherLine5 = otherBreaker5 * .8 * 240;
    } else {
        otherLine5 = 0;
    }
    //Line 6 If - Other
    if (otherUserPicked6 == 'one') {
        otherLine6 = otherBreaker6 * .8 * 120;

    } else if (otherUserPicked5 == 'two') {
        otherLine6 = otherBreaker6 * .8 * 240;

    } else {
        otherLine6 = 0;
    }
    //Line 7 If - Other
    if (otherUserPicked7 == 'one') {
        otherLine7 = otherBreaker7 * .8 * 120;

    } else if (otherUserPicked5 == 'two') {
        otherLine7 = otherBreaker7 * .8 * 240;

    } else {
        otherLine7 = 0;
    }
    //Line 8 If - Other
    if (otherUserPicked8 == 'one') {
        otherLine8 = otherBreaker8 * .8 * 120;

    } else if (otherUserPicked8 == 'two') {
        otherLine8 = otherBreaker8 * .8 * 240;

    } else {
        otherLine8 = 0;
    }
    //Line 9 If - Other
    if (otherUserPicked9 == 'one') {
        otherLine9 = otherBreaker9 * .8 * 120;

    } else if (otherUserPicked9 == 'two') {
        otherLine9 = otherBreaker9 * .8 * 240;

    } else {
        otherLine9 = 0;
    }
    //Line 10 If - Other
    if (otherUserPicked10 == 'one') {
        otherLine10 = otherBreaker10 * .8 * 120;

    } else if (otherUserPicked10 == 'two') {
        otherLine10 = otherBreaker10 * .8 * 240;

    } else {
        otherLine10 = 0;
    }
    let otherTotal = otherLine1 + otherLine2 + otherLine3 + otherLine4 + otherLine5 + otherLine6 + otherLine7 + otherLine8 + otherLine9 + otherLine10;

    //General Information//
    //This grabs the value inputed in the form box and stores it in the variable//
    let mspRating = parseInt(document.getElementById("input01").value);
    let mainRating = parseInt(document.getElementById("input02").value);

    //Calulating 120% Rule - Max Solar Allowance//
    maxSolar = mspRating * 1.20 - mainRating;
    maxAmp = mspRating * 1.20;
    document.getElementById("solarAllowed").innerHTML = maxSolar + "A";

    //Lighting//
    let squareFoot = parseInt(document.getElementById("input03").value);

    lightsTotal = squareFoot * 3;

    //Small Lighting Calculations//

    //This grabs the value inputed in the form box "input10" and stores it in the variable smallInput and converts it to a number//
    let smallInput = parseInt(document.getElementById("input10").value);

    //Completes multiplication - 1500 * number inputed//
    smallTotal01 = smallInput * 1500;


    heatTotal1 = (heatInput1 * .8 * pole1) * percent;
    heatPrint1 = heatInput1 * .8 * pole1;
    heatAcArray.push(heatTotal1);

    heatTotal2 = heatInput2 * .8 * pole2;
    heatAcArray.push(heatTotal2);

    max_val = Math.max(...heatAcArray);
    finalMath = max_val;
    mainTotals = smallTotal01 + lightsTotal + otherTotal;


    //Final Calculation
    finalTotal = (((mainTotals - 10000) * .4 + 10000) + finalMath) / 240;
    remain1 = mainTotals - 10000;
    remain2 = (mainTotals - 10000) * .4;

    rounded = Math.round(finalTotal);
    ampA = mainRating - rounded;

    document.getElementById("ampsUsed").innerHTML = Math.round(finalTotal) + "A";
    document.getElementById("ampsAvailable").innerHTML = ampA + "A";
    localStorage.setItem('0001', finalTotal);

    // THIS IS FOR THE PRINT FORM
    if (userPickNum == "one") {
        document.getElementById("print01").innerHTML = heatPrint1;
        document.getElementById("print01.1").innerHTML = heatTotal1;
        document.getElementById("print02").innerHTML = 0;
        document.getElementById("print02.1").innerHTML = 0;
    } else if (userPickNum == "two") {
        document.getElementById("print01").innerHTML = 0;
        document.getElementById("print01.1").innerHTML = 0;
        document.getElementById("print02").innerHTML = heatPrint1;
        document.getElementById("print02.1").innerHTML = heatTotal1;
    } else {
        document.getElementById("print01").innerHTML = 0;
        document.getElementById("print01.1").innerHTML = 0;
        document.getElementById("print02").innerHTML = 0;
        document.getElementById("print02.1").innerHTML = 0;
    }

    if (finalTotal > 0.001 && finalTotal < 100) {
        document.getElementById("derate").innerHTML = "You can safely derate to 100A";
        document.getElementById("derate1").innerHTML = 100;
        document.getElementById("derate2").innerHTML = 100;
        document.getElementById("maxSolar3").innerHTML = maxAmp - 100;
        document.getElementById("maxSolar4").innerHTML = maxAmp - 100;
    } else if (finalTotal > 100 && finalTotal < 150) {
        document.getElementById("derate").innerHTML = "You can safely derate to 150A";
        document.getElementById("derate1").innerHTML = 150;
        document.getElementById("derate2").innerHTML = 150;
        document.getElementById("maxSolar3").innerHTML = maxAmp - 150;
        document.getElementById("maxSolar4").innerHTML = maxAmp - 150;
    } else if (finalTotal >= 150 && finalTotal <= 175) {
        document.getElementById("derate").innerHTML = "You can safely derate to 175A";
        document.getElementById("derate1").innerHTML = 175;
        document.getElementById("derate2").innerHTML = 175;
        document.getElementById("maxSolar3").innerHTML = maxAmp - 175;
        document.getElementById("maxSolar4").innerHTML = maxAmp - 175;
    } else if (finalTotal > 175 && finalTotal <= 200) {
        document.getElementById("derate").innerHTML = "You can safely derate to 200A";
        document.getElementById("derate1").innerHTML = 200;
        document.getElementById("derate2").innerHTML = 200;
        document.getElementById("maxSolar3").innerHTML = maxAmp - 200;
        document.getElementById("maxSolar4").innerHTML = maxAmp - 200;
    } else {
        document.getElementById("derate").innerHTML = "A derate is not possible";
    }

    // This will hide what id is not needed for the pv calcs info on print page
    proposedPV = document.getElementById("input04").value;
    if (proposedPV > maxSolar) {
        document.getElementById("yesDerate").style.display = "block";
        document.getElementById("noDerate").style.display = "none";
    } else {
        document.getElementById("yesDerate").style.display = "none";
        document.getElementById("noDerate").style.display = "block";
    }




    document.getElementById("proposedBreaker").innerHTML = document.getElementById("input04").value;
    document.getElementById("proposedBreaker1").innerHTML = document.getElementById("input04").value;
    document.getElementById("proposedBreaker2").innerHTML = document.getElementById("input04").value;
    document.getElementById("proposedBreaker3").innerHTML = document.getElementById("input04").value;
    document.getElementById("mainBreaker").innerHTML = document.getElementById("input02").value;
    document.getElementById("mainBreaker1").innerHTML = document.getElementById("input02").value;
    document.getElementById("mainBreaker2").innerHTML = document.getElementById("input02").value;
    document.getElementById("maxAmp").innerHTML = maxAmp
    document.getElementById("maxSolar").innerHTML = maxSolar
    document.getElementById("maxSolar1").innerHTML = maxSolar
    document.getElementById("maxSolar2").innerHTML = maxSolar
    document.getElementById("busbar").innerHTML = mspRating
    document.getElementById("busbar1").innerHTML = mspRating
    document.getElementById("busbar2").innerHTML = mspRating
    document.getElementById("print03").innerHTML = heatTotal2;
    document.getElementById("print03.1").innerHTML = heatTotal2;
    document.getElementById("print04").innerHTML = finalMath;
    document.getElementById("print05").innerHTML = squareFoot;
    document.getElementById("print05.1").innerHTML = lightsTotal;
    document.getElementById("print06").innerHTML = smallInput;
    document.getElementById("print06.1").innerHTML = smallTotal01;
    // OTHER OUTPUTS
    document.getElementById("print08.1").innerHTML = otherLine1;
    document.getElementById("print09.1").innerHTML = otherLine2;
    document.getElementById("print10.1").innerHTML = otherLine3;
    document.getElementById("print11.1").innerHTML = otherLine4;
    document.getElementById("print12.1").innerHTML = otherLine5;
    document.getElementById("print20").innerHTML = otherLine6;
    document.getElementById("print21").innerHTML = otherLine7;
    document.getElementById("print22").innerHTML = otherLine8;
    document.getElementById("print23").innerHTML = otherLine9;
    document.getElementById("print24").innerHTML = otherLine10;
    // IF statements for hiding unused special loads inputs on print page
    if (otherLine1 == 0) {
        document.getElementById("labelWrap1").style.display = "none";
    } else {
        document.getElementById("labelWrap1").style.display = "block";
    }
    if (otherLine2 == 0) {
        document.getElementById("labelWrap2").style.display = "none";
    } else {
        document.getElementById("labelWrap2").style.display = "block";
    }

    if (otherLine3 == 0) {
        document.getElementById("labelWrap3").style.display = "none";
    } else {
        document.getElementById("labelWrap3").style.display = "block";
    }

    if (otherLine4 == 0) {
        document.getElementById("labelWrap4").style.display = "none";
    } else {
        document.getElementById("labelWrap4").style.display = "block";
    }

    if (otherLine5 == 0) {
        document.getElementById("labelWrap5").style.display = "none";
    } else {
        document.getElementById("labelWrap5").style.display = "block";
    }

    if (otherLine6 == 0) {
        document.getElementById("labelWrap6").style.display = "none";
    } else {
        document.getElementById("labelWrap6").style.display = "block";
    }

    if (otherLine7 == 0) {
        document.getElementById("labelWrap7").style.display = "none";
    } else {
        document.getElementById("labelWrap7").style.display = "block";
    }

    if (otherLine8 == 0) {
        document.getElementById("labelWrap8").style.display = "none";
    } else {
        document.getElementById("labelWrap8").style.display = "block";
    }

    if (otherLine9 == 0) {
        document.getElementById("labelWrap9").style.display = "none";
    } else {
        document.getElementById("labelWrap9").style.display = "block";
    }

    if (otherLine10 == 0) {
        document.getElementById("labelWrap10").style.display = "none";
    } else {
        document.getElementById("labelWrap10").style.display = "block";
    }

    if (document.getElementById("otherLabel1").value == 0) {
        document.getElementById("otherLabel1").value = "Unlabeled Breaker";
    }
    if (document.getElementById("otherLabel2").value == 0) {
        document.getElementById("otherLabel2").value = "Unlabeled Breaker";
    }
    if (document.getElementById("otherLabel3").value == 0) {
        document.getElementById("otherLabel3").value = "Unlabeled Breaker";
    }
    if (document.getElementById("otherLabel4").value == 0) {
        document.getElementById("otherLabel4").value = "Unlabeled Breaker";
    }
    if (document.getElementById("otherLabel5").value == 0) {
        document.getElementById("otherLabel5").value = "Unlabeled Breaker";
    }
    if (document.getElementById("otherLabel6").value == 0) {
        document.getElementById("otherLabel6").value = "Unlabeled Breaker";
    }
    if (document.getElementById("otherLabel7").value == 0) {
        document.getElementById("otherLabel7").value = "Unlabeled Breaker";
    }
    if (document.getElementById("otherLabel8").value == 0) {
        document.getElementById("otherLabel8").value = "Unlabeled Breaker";
    }
    if (document.getElementById("otherLabel9").value == 0) {
        document.getElementById("otherLabel9").value = "Unlabeled Breaker";
    }
    if (document.getElementById("otherLabel10").value == 0) {
        document.getElementById("otherLabel10").value = "Unlabeled Breaker";
    }

    // LABELS
    document.getElementById("label1").innerHTML = document.getElementById("otherLabel1").value;
    document.getElementById("label2").innerHTML = document.getElementById("otherLabel2").value;
    document.getElementById("label3").innerHTML = document.getElementById("otherLabel3").value;
    document.getElementById("label4").innerHTML = document.getElementById("otherLabel4").value;
    document.getElementById("label5").innerHTML = document.getElementById("otherLabel5").value;
    document.getElementById("label6").innerHTML = document.getElementById("otherLabel6").value;
    document.getElementById("label7").innerHTML = document.getElementById("otherLabel7").value;
    document.getElementById("label8").innerHTML = document.getElementById("otherLabel8").value;
    document.getElementById("label9").innerHTML = document.getElementById("otherLabel9").value;
    document.getElementById("label10").innerHTML = document.getElementById("otherLabel10").value;

    document.getElementById("print13").innerHTML = mainTotals;
    document.getElementById("print14").innerHTML = remain1;
    document.getElementById("print14.1").innerHTML = remain2;
    document.getElementById("print15").innerHTML = remain2;
    document.getElementById("print16").innerHTML = remain2;
    document.getElementById("print16.1").innerHTML = finalTotal;
    document.getElementById("print17").innerHTML = mspRating;
    document.getElementById("print17.1").innerHTML = maxAmp;
    document.getElementById("print18").innerHTML = maxAmp;
    document.getElementById("print18.1").innerHTML = mainRating;
    document.getElementById("print18.2").innerHTML = maxSolar;
    document.getElementById("print19").innerHTML = maxSolar;
}


function printClicked() {
    document.getElementById("printing").style.display = "grid";
    document.getElementById("calculator").style.display = "none";
    document.body.style.backgroundColor = '#2c2c2c';
}

function backClicked() {
    document.getElementById("printing").style.display = "none";
    document.getElementById("calculator").style.display = "block";
    document.body.style.backgroundColor = '#2c2c2c';
}

var img = document.getElementById("image");
var img1 = document.getElementById("image1");
document.getElementById("chooseFile").onchange = function () { setImage() };
document.getElementById("chooseFile1").onchange = function () { setImage1() };

function setImage() {
    const files = document.getElementById("chooseFile").files;
    if (!files || files.length == 0)
        return;
    const file = files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        img.src = reader.result;
    };
}
function setImage1() {
    const files = document.getElementById("chooseFile1").files;
    if (!files || files.length == 0)
        return;
    const file = files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        img1.src = reader.result;
    };
}
console.log(document.getElementById("otherInput2").value);
