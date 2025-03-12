// let food:string = 'Semo'
// console.log(food);
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
            time: new Date().toLocaleTimeString()
        };
        var inp = paliObj.inp;
        console.log(inp);
        var check = inp === null || inp === void 0 ? void 0 : inp.split('').reverse().join('');
        if (inp == check) {
            var divShow = document.getElementById('show');
            divShow.innerHTML = "<p class=\"alert alert-success text-center p-1\">".concat(inp, " is a palindrome</p>");
        }
        // console.log(paliObj);
    }
});
