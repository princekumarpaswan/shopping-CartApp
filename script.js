
let count = document.getElementById("spanCount")
let increase = 0
let tt = 0


const cartCounter = () => {
    increase = increase + 1;
    count.innerText = increase;


}

const addToCart = (acceptID) => {
    const val = document.getElementById(acceptID).childNodes[3]
    const valImage = document.getElementById(acceptID).childNodes[1].src
    console.log(valImage)
    const subVal = val.childNodes
    let color = subVal[1].innerText
    let price = subVal[3].innerText
    let size = subVal[5].innerText
    console.log(valImage, color, price, size)
    console.log(tt + "pkkp")

    let img = ""
    img = "img" + tt
    let colour = ""
    colour = "color" + tt
    let pri = "price" + tt
    let siz = "size" + tt

    tt = tt + 1
    console.log(tt)


    localStorage.setItem("tt", tt)
    localStorage.setItem(img, valImage)
    localStorage.setItem(colour, color)
    localStorage.setItem(pri, price)
    localStorage.setItem(siz, size)


}

const red = () => {
    let cc = document.getElementById("red").checked
    if (cc == true) {
        let colorAry = document.getElementsByClassName("colo");
        console.log(colorAry.length)
        for (let i = 0; i <= 20; i++) {
            if (colorAry[i].innerText === "Color: Red") {
                console.log(colorAry[i])
                let x = colorAry[i].parentElement;
                let y = x.parentElement;
                console.log(y)
                let z = document.getElementById("apen")
                z.appendChild(y)
            }


            else {

                let x = colorAry[i].parentElement;
                let y = x.parentElement;
                y.setAttribute("class", "show")
                document.getElementById("cart13").setAttribute("class", "show")
                console.log(y)
            }
        }
    }
}


const yellow = () => {
    let cc = document.getElementById("yellow").checked
    if (cc == true) {
        let colorAry = document.getElementsByClassName("colo");
        for (let i = 0; i <= 20; i++) {
            if (colorAry[i].innerText === "Color: Yellow") {
                console.log(colorAry[i])
                let x = colorAry[i].parentElement;
                let y = x.parentElement;
                console.log(y)
                let z = document.getElementById("apen")
                z.appendChild(y)
            }


            else {

                let x = colorAry[i].parentElement;
                let y = x.parentElement;
                y.setAttribute("class", "show")
                // document.getElementById("cart13").setAttribute("class", "show")
                console.log(y)
            }
        }
    }
}

const blue = () => {
    let cc = document.getElementById("blue").checked
    if (cc == true) {
        let colorAry = document.getElementsByClassName("colo");
        for (let i = 0; i <= 20; i++) {
            if (colorAry[i].innerText === "Color: Blue") {
                console.log(colorAry[i])
                let x = colorAry[i].parentElement;
                let y = x.parentElement;
                console.log(y)
                let z = document.getElementById("apen")
                z.appendChild(y)
            }


            else {

                let x = colorAry[i].parentElement;
                let y = x.parentElement;
                y.setAttribute("class", "show")
                // document.getElementById("cart13").setAttribute("class", "show")
                console.log(y)
            }
        }
    }
}


const small = () => {
    let size = document.getElementsByClassName("size")
    // size.innerText
    console.log(size[1])
    for (let i = 0; i <= size.length; i++) {
        if (size[i].innerHTML == "Size: Small") {
            console.log(size[i])
            let x = size[i].parentElement;
            let y = x.parentElement;
            console.log(y)
            let z = document.getElementById("apen")
            z.appendChild(y)
        } else {

            let x = size[i].parentElement;
            let y = x.parentElement;
            y.setAttribute("class", "show")
            // document.getElementById("cart13").setAttribute("class", "show")
            console.log(y)
        }
    }

}

function medium() {
    let size = document.getElementsByClassName("size")
    // size.innerText
    console.log(size[1])
    for (let i = 0; i <= size.length; i++) {
        if (size[i].innerHTML == "Size: Medium") {
            console.log(size[i])
            let x = size[i].parentElement;
            let y = x.parentElement;
            console.log(y)
            let z = document.getElementById("apen")
            z.appendChild(y)
        } else {

            let x = size[i].parentElement;
            let y = x.parentElement;
            y.setAttribute("class", "show")
            // document.getElementById("cart13").setAttribute("class", "show")
            console.log(y)
        }
    }
}


function large() {
    let size = document.getElementsByClassName("size")
    // size.innerText
    console.log(size[1])
    for (let i = 0; i <= size.length; i++) {
        if (size[i].innerHTML == "Size: Large") {
            console.log(size[i])
            let x = size[i].parentElement;
            let y = x.parentElement;
            console.log(y)
            let z = document.getElementById("apen")
            z.appendChild(y)
        } else {

            let x = size[i].parentElement;
            let y = x.parentElement;
            y.setAttribute("class", "show")
            // document.getElementById("cart13").setAttribute("class", "show")
            console.log(y)
        }
    }
}

function Elarge() {
    let size = document.getElementsByClassName("size")
    // size.innerText
    console.log(size[1])
    for (let i = 0; i <= size.length; i++) {
        if (size[i].innerHTML == "Size: Extra Large") {
            console.log(size[i])
            let x = size[i].parentElement;
            let y = x.parentElement;
            console.log(y)
            let z = document.getElementById("apen")
            z.appendChild(y)
        } else {

            let x = size[i].parentElement;
            let y = x.parentElement;
            y.setAttribute("class", "show")
            // document.getElementById("cart13").setAttribute("class", "show")
            console.log(y)
        }
    }

}

function EElarge() {
    let size = document.getElementsByClassName("size")
    // size.innerText
    console.log(size[1])
    for (let i = 0; i <= size.length; i++) {
        if (size[i].innerHTML == "Size: Size: 2Ex Large") {
            console.log(size[i])
            let x = size[i].parentElement;
            let y = x.parentElement;
            console.log(y)
            let z = document.getElementById("apen")
            z.appendChild(y)
        } else {

            let x = size[i].parentElement;
            let y = x.parentElement;
            y.setAttribute("class", "show")
            // document.getElementById("cart13").setAttribute("class", "show")
            console.log(y)
        }
    }

}



