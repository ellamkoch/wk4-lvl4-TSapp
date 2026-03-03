/**
 * Read TS Handbook sections: “The Basics” + “Everyday Types.”
 * Create src/day1-homework.ts with:
 * - 5 variables using string, number, boolean
 * - 3 union types
 * - 2 examples of incorrect assignments (commented) that would fail typecheck
* Run npm run typecheck and confirm it fails until you fix it.
 */

//5 variables using string, number or boolean
let myName: string = "Alice";
console.log(myName);

let className: string = "Western Pleasure";
console.log(className);

let classNumber: number = 59;
console.log(classNumber);

let isComplete: boolean = false;
console.log(isComplete);

let Santa: boolean = true;
console.log(Santa);
//3 union types
function classId(id: number | string) {
    console.log("Class number: " + id);
}
classId(101);
classId("101");

function listOfClasses(x: string[] | string ) {
    if (Array.isArray(x)) {
        console.log("Your classes are " +x.join(" , "));
    } else {
        console.log("Your class is " + x);
    }
}

function listClassNumbers(x: number [] | string) {
    return x.slice(0, 3);
}


//example of something that is incorrect that would fail a typecheck
function ownerName(obj: { first: string; last?: string }){

    // console.log(obj.last.toUpperCase());//incorrect. added line if below to fix. 
    if (obj.last !== undefined) {
        console.log(obj.last.toUpperCase());
    }
}
function classList(id: number | string) {
    console.log("Class number: "+ id);
}
// classList({ classId: 223 }); //incorrect
classList(223);
