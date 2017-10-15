var no1 = 30;
var no2 = 40;
console.log(no1 + no2);
var say = "15";
var say2 = "25";
console.log(say+say2);
var about_me = {firstName:'Daria', lastName: 'Ros', birthday: '09.08.'}
console.log(about_me.firstName + " " + about_me.lastName); //returns with Daria Ros
console.log(about_me.lastName); // returns with Ros
console.log(about_me.birthday); // returns with 09.08
var interests=["fitness",  "books", "TV series"];
console.log(interests[0]); // returns with fitness
console.log(interests[1]); // returns with books
console.log(interests[2]); //returns with TV series
var fitness =[["Monday", "push-ups"], ["Tuesday", "cardio", "jogging" ],["Wednesday", "joga"],["Thursday","HIIT"]["Friday","stretching"]];
console.log(fitness[2][1]); //returns with the second parameter in the third array
console.log(fitness[0][0]+" "+fitness[2][1]); //returns with the sfirst parameter in the first array + second parameter in the third array
if(3>100){alert("You see this because 3 is not greater than 100/true");} 
else{alert("You see this because 3 is not greater than 100 it evaluates to false");}
if(3<100){alert("You will see this because 3 is not greater than 100/true");} 
else{alert("You won't see this, since 3 < 100 evaluates to true");}
function alertName(somePersonsName){
		return alert(somePersonsName);}
console.log(alertName("Anna"));

function Prize( doorNumber ){
  var prizes = ['Ferrari','Holidays','A dinner'];
    if( doorNumber == 1 ) {
      alert(prizes[0]); //if call the door 1 alert 'Ferrari'
  } else if( doorNumber == 2) {   
      alert(prizes[1]); //if call the door 2 alert 'Holidays'
  } else {
      alert (prizes[2]); //if none of the above calls will be true alert 'A dinner'
}
}
  console.log(Prize(1)); //the doorNumber=1 so it wil alert 'Ferrari'
  console.log(Prize(2)); //the doorNumber=2 so it will alert 'Holidays'
  console.log(Prize(3)); //the doorNumber is not 1 or 2 so alert 'A dinner' 
