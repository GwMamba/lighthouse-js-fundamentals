var x = 100;

// while loop with a stop condition
while (x >= 100 && x <= 200) {
    if (x % 3 === 0 && x % 4 === 0) {
        console.log("LoopyLighthouse");
    }else if (x % 3 === 0) {
        console.log("Loopy");
    }else if (x % 4 === 0) {
        console.log("Lighthouse");
    }
    else {
        console.log(x);
    }
    // increment x at the end of each loop
    x = x + 1 ; 
}