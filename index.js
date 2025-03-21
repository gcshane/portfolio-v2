let i = 0;
let j = 0;
let txt = ["Software Engineer"];
let forward = true
let target = document.getElementById("engineer");

function typeWriter() {

    if (i == txt[j].length && forward) {
        forward = false;
    }
    else if (i == 0 && ! forward) {
        forward = true;
        if (j == txt.length - 1) {
            j = 0;
        } 
        else {
            j++;
        }

    }
    if (forward) {
        target.innerHTML += txt[j].charAt(i);
        i++;
    }
    else {
        target.innerHTML = target.innerHTML.slice(0, -1);
        i--;
    }
    if (i == txt[j].length) {
        setTimeout(typeWriter, 1000);
    }
    else {
        setTimeout(typeWriter, 50);
    }

}