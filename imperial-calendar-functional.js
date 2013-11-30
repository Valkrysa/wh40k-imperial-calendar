function imperialCalendar(aDate, aWithSpaces, aCheckNumber) {
	
	var theStandardDate = (typeof aDate !== 'undefined') ? aDate : new Date();
	
	//If we were passed a date object but that date object is invalid the following block will find out.
	if ( Object.prototype.toString.call(theStandardDate) === "[object Date]" ) {
		if ( isNaN( theStandardDate.getTime() ) ) {
			throw new Error("Passed value is not a proper Javascript Date object: " + theStandardDate);
		}
	} else {
		throw new Error("Passed value is not a proper Javascript Date object: " + theStandardDate);
	}
	
	var theWithSpaces = (typeof aWithSpaces !== 'undefined') ? aWithSpaces : false;
	
	var theCheckNumber = (typeof aCheckNumber !== 'undefined') ? aCheckNumber : 0
	
	if !( theCheckNumber >= 0 && theCheckNumber <= 9 ) {
		theCheckNumber = 0;
	}
	
	var theImperialDate = "";
	
	var theStart = new Date(theStandardDate.getFullYear(), 0, 0);
	var theDiff = theStandardDate - theStart;
	var theDay = Math.floor(theDiff / (1000 * 60 * 60 * 24));
	
	var theYearFraction = Math.ceil((theDay/366) * 1000);
	
	//quick and dirty padding for our limited cases
	if (theYearFraction < 10) {
		theYearFraction = "00" + theYearFraction;
	} else if (theYearFraction < 100) {
		theYearFraction = "0" + theYearFraction;
	} else if (theYearFraction == 1000) {
		theYearFraction = "000";
	}
	
	var theYear = theStandardDate.getFullYear() % 1000;
	
	//quick and dirty padding for our limited cases
	if (theYear < 10) {
		theYear = "00" + theYear;
	} else if (theYear < 100) {
		theYear = "0" + theYear;
	}
	
	var theMillennium = Math.ceil( (theStandardDate.getFullYear())/1000 );
	
	if (aWithSpaces == true) {
		theImperialDate = theCheckNumber + " " + theYearFraction + " " + theYear + ".M" + theMillennium;
	} else {
		theImperialDate = theCheckNumber + "" + theYearFraction + "" + theYear + ".M" + theMillennium;
	}
	
	return theImperialDate;
}