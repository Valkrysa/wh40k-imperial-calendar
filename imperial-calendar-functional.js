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
	
	if (!( theCheckNumber >= 0 && theCheckNumber <= 9 )) {
		theCheckNumber = 0;
	}
	
	var theImperialDate = "";
	
	// The gets the hours, minutes and seconds of the current date

	var currentDate = new Date();
	var currentHour = currentDate.getHours();
	var currentMinute = currentDate.getMinutes();
	var currentSecond = currentDate.getSeconds();
	
	var theStart = new Date(theStandardDate.getFullYear(), 0, 0);
	var theDiff = theStandardDate - theStart;
	var theDay = Math.floor(theDiff / (1000 * 60 * 60 * 24));
	
	// Here we're getting the current elapsed seconds in the year for the days, hours and minutes
	// Substracting one day's worth of seconds to make the date start counting at zero
	var days = (theDay * 86400) - 86400
	var hours = currentHour * 3600
	var minutes = currentMinute * 60


	// There are this many seconds in a year
	var secondsInYear = 31536000;
	
	var isLeap = new Date(theStandardDate.getFullYear(), 1, 29).getMonth() == 1
        if (isLeap) {
                secondsInYear = 31622400;
        }
        
        // Add all the currently elapsed seconds together, divide by seconds in the year
	// Then multiply by a thousand and round it all down to get the current year fraction
	var theYearFraction = Math.floor(((days + hours + minutes + currentSecond) / secondsInYear) * 1000);
	
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
