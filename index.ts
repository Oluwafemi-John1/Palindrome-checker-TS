// let food:string = 'Semo'
// console.log(food);

// const test = (a:number,b:number) => {
//     return a + b;
// }

// let sum = test(5,6)
// console.log(sum);

// interface User {

// }

interface Palindrome {
    inp: string | undefined,
    date: string,
    time: string
}
const btn = document.getElementById('checkBtn') as HTMLButtonElement | null
btn?.addEventListener('click', () => {
    const inpPali = document.getElementById('pali') as HTMLInputElement | null

    if (inpPali?.value == '') {
        alert("Input cannot be empty")
    } else {
        let paliObj: Palindrome = {
            inp: inpPali?.value,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString()
        }
        const { inp } = paliObj
        console.log(inp);
        const changeLower = inp?.toLowerCase()
        console.log(changeLower);
        const check = changeLower?.split('').reverse().join('')
        const divShow = document.getElementById('show') as HTMLElement
        if (changeLower == check) {
            divShow.innerHTML = `<p class="alert alert-success text-center p-1">${inp} is a palindrome</p>`
        } else {
            divShow.innerHTML = `<p class="alert alert-danger text-center p-1">${inp} is not a palindrome</p>`
        }

        // console.log(paliObj);
    }
})