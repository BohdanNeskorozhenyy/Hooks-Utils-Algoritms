
// w: 1680, h: 640

function smallestArea({ w, h }) {
    const [smalAxis, bigAxis] = [w, h].sort((a, b) => a - b);

    const restAreaAxis = bigAxis % smalAxis;

    if (restAreaAxis === 0){
        return { w: smalAxis, h: smalAxis }
    }
    return smallestArea({ w: restAreaAxis, h: smalAxis })
}

console.log(smallestArea({w: 1680, h: 640})); // { w: 80, h: 80 }
