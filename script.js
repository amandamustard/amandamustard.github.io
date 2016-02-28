window.onresize = function(e){

	var kittens = 5;
	var puppies = 4;
	var animals = (kittens + puppies);

	var kittenName = "Fluffy";

	var firstName = "Amanda";
	var lastName = "DiGiondomenico";

	var fullName = (firstName + " " + lastName)

	//function turtleFact() {
		//alert("Turtles are cool.");
	//}

	//turtleFact();

	function temptGang(gangName) {
		alert(gangName +" "+ "Come out and play!")
	}



	function addNumbers(num1, num2){
		alert(num1+num2)
	}

	//addNumbers(10,5)

	function square(number) {
		return number * number;
	}

	function displaySquare(squaredNumber){
		console.log("Your number is" +" "+ squaredNumber);
	}

	displaySquare(square(3))


	var title = document.getElementById('open-title');
	title.innerHTML = "Thanks!";

}