try {
    console.log(a);
    
} catch (err) {
    console.log("Variable is in dead tempral zone" + " " + err.message);
    
}

let a = 10 ;

console.log("a after declaration" + a);
