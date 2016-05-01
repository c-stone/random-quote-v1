document.getElementById('loadQuote').addEventListener("click", printQuote, false);
//Create an array to hold my quote data
//Each quote needs: quote, source, citation(optional), year(optional)
//Example dataset

function getRandomQuote() {
	var quoteArray = [{ 
										quote: "When Students cheat on exams it's because our School System values grades more than Students value learning.", 
										source: "Neil deGrasse Tyson", 
										citation: "Twitter", 
										year: "2013"
									},
									{
										quote: "blank", 
										source: "blank", 
										citation: "",
										year: ""
									}];

	//select random number, not larger than length of array
	var maxNumber = quoteArray.length
	var randomSelection = Math.floor((Math.random() * maxNumber));
	//return random quote object based on randomSelection
	return quoteArray[randomSelection]
}

function printQuote() {
	//select a random quote
	var randomQuote = getRandomQuote();
	var quoteString;
	
	//concatenate stings to create HTML template using quote object
	quoteString += '<p class="quote">' + randomQuote.quote + '</p>' +
								 '<p class="source">' + randomQuote.source;
	//optionally add year and/or citation if they are present
	if ( randomQuote.citation ) { quoteString += '<span class="citation">' + randomQuote.citation + '</span>' }
	if ( randomQuote.year ) { quoteString += '<span class="year">' + randomQuote.year + '</span>' }
	//complete the html string
	quoteString += '</p>'
	
	//add completed html template string to page
	document.getElementById('quote-box').innerHTML = quoteString
}

printQuote();