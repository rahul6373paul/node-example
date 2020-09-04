var rect = require('./rectangle')

function solveRect(l,b) {
    console.log("solving for rectangle with l = " + l + " and b =" + b)

    rect(l,b, (err, rectangle) => {
        if(err) {
            console.log("Error: ", err.message);
        }
        else {
            console.log("l="+l+" b="+b)
            console.log("The area=" + rectangle.area())
            console.log("The perimeter=" + rectangle.perimeter())
        }
    });

    console.log("This statement is after the call to rect()")
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5)