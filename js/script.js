// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//Create an array to hold my quote data
//Each quote needs: quote, source, citation(optional), year(optional)
//Example dataset
var quoteArray = [{ 
										quote: "blank", 
										source: "blank", 
										citation: "blank", 
										year: "1970"
									},
									{
										quote: "blank", 
										source: "blank", 
										citation: "blank", 
										year: "1971"
									}]

//getRandomQuote function: select and return a randomly selected quote object
function getRandomQuote(array) {
	//select random number, not larger than length of array
	var maxNumber = array.length
	var randomSelection = Math.floor((Math.random() * maxNumber));
	//return random quote object based on randomSelection
	return array[randomSelection]
}