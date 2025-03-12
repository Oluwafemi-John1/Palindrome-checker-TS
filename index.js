// let food:string = 'Semo'
// console.log(food);
var arrPali = [];
var btn = document.getElementById('checkBtn');
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', function () {
    var inpPali = document.getElementById('pali');
    if ((inpPali === null || inpPali === void 0 ? void 0 : inpPali.value) == '') {
        alert("Input cannot be empty");
    }
    else {
        var paliObj = {
            inp: inpPali === null || inpPali === void 0 ? void 0 : inpPali.value,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
        };
        var inp = paliObj.inp;
        console.log(inp);
        var changeLower = inp === null || inp === void 0 ? void 0 : inp.toLowerCase();
        console.log(changeLower);
        var check = changeLower === null || changeLower === void 0 ? void 0 : changeLower.split('').reverse().join('');
        var divShow = document.getElementById('show');
        console.log(arrPali);
        if (changeLower == check) {
            divShow.innerHTML = "\n                <p class=\"alert alert-success text-center p-1\">".concat(inp, " is a palindrome</p>\n                <small>").concat(paliObj.date, ", ").concat(paliObj.time, "</small>\n                ");
        }
        else {
            divShow.innerHTML = "\n                <p class=\"alert alert-danger text-center p-1\">".concat(inp, " is not a palindrome</p>\n                <small>").concat(paliObj.date, ", ").concat(paliObj.time, "</small>\n                ");
        }
    }
});
