//Add click event listened to #loadQuote button, calls printQuote
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quoteArray = [{
										quote: "When Students cheat on exams it's because our School System values grades more than Students value learning.", 
										source: "Neil deGrasse Tyson", 
										citation: "Twitter", 
										year: "2013"
									},
									{ 
										quote: "We ask 18-year-olds to make huge decisions about their career and financial future, when a month ago they had to ask to go to the bathroom.", 
										source: "Adam Kotsko", 
										citation: "Twitter", 
										year: ""
									},
									{ 
										quote: "When a person tells you that you hurt them, you don't get to decide that you didn't.", 
										source: "Louis C.K.", 
										citation: "Louie", 
										year: "2010"
									},
									{ 
										quote: "That which can be destroyed by the truth, should be.", 
										source: "P. C. Hodgell", 
										citation: "Seeker's Mask", 
										year: "1994"
									},
									{ 
										quote: "Tupac was one of the biggest thugs I know and he always wore his seat belt", 
										source: "Ice Cube", 
										citation: "Conan", 
										year: "2016"
									},
									{ 
										quote: "I spend so much time on the Internet... I feel like I'm a million pages into the worst book ever, and I'm never going to stop reading.", 
										source: "Aziz Ansari", 
										citation: "Freakonomics Podcast", 
										year: "2015"
									}];
var usedQuotes = [];

function getRandomQuote(array) {
	var maxNumber = array.length; 	//select a random number, not larger than length of array
	var randomSelection = Math.floor((Math.random() * maxNumber));
	return [array[randomSelection], randomSelection] 	//return a random quote object based on randomSelection
}

function getRandomColor() {
	//randomly generate numbers between 0 and 225 for use with rgb CSS
	var r = Math.floor((Math.random() * 226)),
			g = 225, //keeping this consistent for a similar feeling color each time
			b = Math.floor((Math.random() * 226)),
			// combine the random numbers to create a complete rgb color code
			color = "rgb(" + r + "," + g + "," + b + ")";
	return color
}

function printQuote() {
	//get a random quote, and the index of quoteArray used
	var quoteObject = getRandomQuote(quoteArray);
	usedQuotes.push(quoteObject[0]); //add the quote object used to an empty array
	quoteArray.splice(quoteObject[1], 1); //remove the quote object used from the quoteArray

	//if the quoteArray is empty, refill it with usedQuote. clear usedQuotes array.
	if ( !quoteArray.length ) {
		quoteArray = usedQuotes;
		usedQuotes = [];
	}

	var quoteString= ""; //create a string
	//concatenate strings to create HTML template using quote object
	quoteString += '<p class="quote">' + quoteObject[0].quote + '</p>' +
								 '<p class="source">' + quoteObject[0].source;
	//optionally add year and/or citation if they are present
	if ( quoteObject[0].citation ) { quoteString += '<span class="citation">' + quoteObject[0].citation + '</span>' }
	if ( quoteObject[0].year ) { quoteString += '<span class="year">' + quoteObject[0].year + '</span>' }
	quoteString += '</p>' //complete the html string
	
	document.getElementById('quote-box').innerHTML = quoteString //add completed html template string to page
	document.getElementById("random-color").style.background = getRandomColor();
}


printQuote(); //call printQuote to add a random quote on page load
window.setInterval(printQuote, 30000); //call printQuote every 30 seconds