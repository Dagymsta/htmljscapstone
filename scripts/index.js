let baseWeight = document.getElementById("count"),
    count = 1;

const studentArray = []

function addToCount() {
    count += 1;
    baseWeight.innerText = count;
}

function minusFromCount() {
    count -= 1;
    baseWeight.innerText = count;
}