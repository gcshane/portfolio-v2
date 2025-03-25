let i = 0;
let j = 0;
let txt = ["Welcome!", "My name is Shane.", "I am an aspiring software engineer.", "Scroll down to see more!"];
let forward = true
let target = document.getElementById("intro");

function typeWriter() {

    if (i == txt[j].length && forward) {
        forward = false;
    }
    else if (i == 0 && ! forward) {
        forward = true;
        if (j < txt.length) {
            j++;
        }
    }
    if (forward) {
        target.innerHTML += txt[j].charAt(i);
        i++;
    }
    else if (j < txt.length - 1) {
        target.innerHTML = target.innerHTML.slice(0, -1);
        i--;
    }
    if (i == txt[j].length) {
        setTimeout(typeWriter, 1000);
    }
    else {
        setTimeout(typeWriter, 40);
    }

}