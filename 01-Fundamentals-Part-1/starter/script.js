/*let js = 'amazing';
      if(js==='amazing')alert('JavaScript is FUN!');

      console.log(40+8+23-10);*/

const markMass = 67;
const markHeight = 1.69;
const johnMass = 98;
const johnHeight = 1.95;

const markBMI = markMass/(markHeight**2);
const johnBMI = johnMass/(johnHeight**2);
const markHigherBMI = markBMI > johnBMI;

if(markBMI > johnBMI){
      markHigherBMI = true;
      if(markHigherBMI === true){
            console.log(`Mark has a higher BMI (${markBMI}) `);
      }
}else{
      console.log(`John has a higher BMI (${johnBMI})`)
}

console.log(`Mark's BMI is: ${markBMI}`);
console.log(`John's BMI is:  ${johnBMI}`);

/*const age = 14;
const isOldEnough = age >= 18;

if(isOldEnough){
      console.log(`Sarah can drive 🚗🚓👍`);
}
else{
      const yearsLeft = 18 - age;
      console.log(`Sarah needs ${yearsLeft} more years`)
}

const birthYear = 1991;
let century;

if(birthYear <= 2000){
      century = 20;
}else{
      century = 21;
}
console.log(century);*/