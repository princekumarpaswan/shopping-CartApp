
let tt = localStorage.getItem("tt")

let fild;
let i = 0
let count = 0
for (i = 0; i < tt; i++) {
    let ul = document.createElement("ul");
    // console.log(ul, xx);
    console.log(i)
    let image = localStorage.getItem(`img${i}`)
    console.log(image)
    let color = localStorage.getItem(`color${i}`)
    let price = localStorage.getItem(`price${i}`)
    let size = localStorage.getItem(`size${i}`)

    let numPrice = price.split(" ")


    let liOne = document.createElement('li');
    let liTwo = document.createElement('li');
    let liThree = document.createElement('li');
    let liFour = document.createElement('li');
    let img = document.createElement('img');
    let br = document.createElement('br');
    let span = document.createElement('span');
    let spanTwo = document.createElement('span');
    let button = document.createElement('button');
    let button2 = document.createElement('button');
    let h2 = document.createElement('h2');
    let hh = document.createElement("hh")
    let input = document.createElement('input')
    span.setAttribute("class", "color")
    span.textContent = color;
    spanTwo.textContent = size
    // console.log(liOne, img, br, span, spanTwo);
    ul.setAttribute("class", "item-list")
    liOne.append(img, br, span, spanTwo)
    input.type = "number"
    img.setAttribute("src", image)
    ul.append(liOne);
    ul.setAttribute("class", "items-list")
    liTwo.append(button, input, button2)
    liTwo.setAttribute("class", "btn-list")
    button.innerText = "-";
    button2.innerText = "+";
    ul.appendChild(liTwo)
    liThree.append(h2)
    h2.innerText = numPrice[1]
    liThree.setAttribute("class", "btn-list")
    ul.appendChild(liThree)
    liFour.append(hh)
    ul.appendChild(hh)
    liFour.setAttribute("class", "total-list")

    button.setAttribute("onClick", "decrement()")
    button2.setAttribute("onClick", "increment()")
    input.setAttribute("id", "inputFild")
    console.log(input)

    h2.setAttribute("id", "total")


    hh.setAttribute("id", "oriPrice")

    // fild = document.querySelector("#inputFild")
    // console.log(fild)





    document.getElementById('ppp').append(ul)



}

function decrement() {
    fild = document.querySelector("#inputFild")
    // console.log(fild)
    // console.log("decrement")
    i = i - 1;
    fild.value = i
    let hh = document.getElementById("total")
    console.log(hh)
    let sum = document.getElementById("oriPrice")
    console.log(sum)

    sum.innerText = hh.innerText * i

    document.getElementById("itm").textContent = i
    document.getElementById("itmP").textContent = sum.innerHTML
}


function increment() {
    console.log("incremnet")
    fild = document.querySelector("#inputFild")
    console.log(fild)
    console.log("decrement")
    i = i + 1;
    fild.value = i
    let hh = document.getElementById("total")
    console.log(hh)
    let sum = document.getElementById("oriPrice")
    console.log(sum)

    sum.innerText = hh.innerText * i

    document.getElementById("itm").textContent = i
    document.getElementById("itmP").textContent = sum.innerHTML
}


function display() {


    let adress = document.getElementById("adress")
    adress = adress.value
    alert("Your order will be shipped to this :- " + adress)

}


function discount() {
    let less = document.getElementById("coupen");
    less = less.value;
    if (less == "dis100") {
        let sub = document.getElementById("itmP").textContent
        sub = sub - 100
        document.getElementById("itmP").textContent = sub
    } else {
        console.log("fail")
    }
}