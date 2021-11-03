let body = document.querySelector("body");
let button = document.querySelector("#button");
let result = document.querySelector("span")


button.addEventListener("click", () => {
    let r = Math.ceil(Math.random() * 255);
    let g = Math.ceil(Math.random() * 255);
    let b = Math.ceil(Math.random() * 255);
    let r2 = Math.ceil(Math.random() * 255).toString(16);
    let g2 = Math.ceil(Math.random() * 255).toString(16);
    let b2 = Math.ceil(Math.random() * 255).toString(16);
    let number = Math.floor(Math.random() * 2);
    let rgb = `Rgb(${r},${g},${b})`;
    let hex = `#${r2}${g2}${b2}`;
    if (number == 0) {
        if (r == 0 && g == 0 && b == 0) {
            result.innerText = "Black";
            body.style.backgroundColor = rgb;
        } else if (r == 255 && g == 255 && b == 255) {
            result.innerText = "White";
            body.style.backgroundColor = rgb;
        } else if (r == 255 && g == 0 && b == 0) {
            result.innerText = "Red";
            body.style.backgroundColor = rgb;
        } else if (r == 0 && g == 255 && b == 0) {
            result.innerText = "Lime";
            body.style.backgroundColor = rgb;
        } else if (r == 0 && g == 0 && b == 255) {
            result.innerText = "Blue";
            body.style.backgroundColor = rgb;
        } else if (r == 255 && g == 255 && b == 0) {
            result.innerText = "Yellow";
            body.style.backgroundColor = rgb;
        } else if (r == 0 && g == 255 && b == 255) {
            result.innerText = "Cyan";
            body.style.backgroundColor = rgb;
        } else if (r == 0 && g == 0 && b == 128) {
            result.innerText = "Navy";
            body.style.backgroundColor = rgb;
        } else if (r == 255 && g == 0 && b == 255) {
            result.innerText = "Fuchsia";
            body.style.backgroundColor = rgb;
        } else if (r == 192 && g == 192 && b == 192) {
            result.innerText = "Silver";
            body.style.backgroundColor = rgb;
        } else if (r == 128 && g == 128 && b == 128) {
            result.innerText = "Gray";
            body.style.backgroundColor = rgb;
        } else if (r == 128 && g == 0 && b == 0) {
            result.innerText = "Maroon";
            body.style.backgroundColor = rgb;
        } else if (r == 128 && g == 128 && b == 0) {
            result.innerText = "Olive";
            body.style.backgroundColor = rgb;
        } else if (r == 0 && g == 128 && b == 0) {
            result.innerText = "Green";
            body.style.backgroundColor = rgb;
        } else if (r == 128 && g == 0 && b == 128) {
            result.innerText = "Purple";
            body.style.backgroundColor = rgb;
        } else if (r == 0 && g == 128 && b == 128) {
            result.innerText = "Teal";
            body.style.backgroundColor = rgb;
        } else {
            result.innerText = rgb;
            body.style.backgroundColor = result.innerText;
        }
    } else {
        result.innerText = hex;
        body.style.backgroundColor = result.innerText;
    }
});