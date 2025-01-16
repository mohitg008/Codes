function makeColor(r,g,b){
    const color = {}; //make a object
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function () {
        const {r,g,b} = this; //destruction rgb values from object using this
        return `rgb(${r},${g},${b})`;
        
    };
    color.hex = function() {
        const {r,g,b} = this;
        return (
            '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
        );
    };
    return color;
}

const firstColor = makeColor(35,255,150)

const black = makeColor(0,0,0);
//console.log(firstColor.hex()); //#23ff96

//firstColor.r = 20 //change r in function
//console.log(firstColor.hex()) //#14ff96

/* rgb(35,255,150)
#23ff96 */

