function ImperialCalendar(aDate) {
	
	this.myCheckNumber = 0; 
	
	this.myStandardDate = (typeof aDate !== 'undefined') ? aDate : new Date();
	
	//If we were passed a date object but that date object is invalid the following block will find out.
	if ( Object.prototype.toString.call(this.myStandardDate) === "[object Date]" ) {
		if ( isNaN( this.myStandardDate.getTime() ) ) {
			throw new Error("Passed value is not a proper Javascript Date object: " + aDate);
		}
	} else {
		throw new Error("Passed value is not a proper Javascript Date object: " + aDate);
	}
	
	/*
	@return Integer The check value for the date.
	
	This method returns the current check value being used by the date.
	*/
	this.getCheckNumber = function() {
		return this.myCheckNumber;
	}
	
	/*
	@param aNewCheckNumber Integer The new check number should be in accordance with imperial standards
	@return Boolean Returns True if the new check value was accepted, false otherwise.
	
	This method sets the check number. The new value should be between 0 and 9 inclusive.
	The check number should probably be left at 0, unless you are calling this from the International Space Station.
	*/
	this.setCheckNumber = function(aNewCheckNumber) {
		if ( aNewCheckNumber >= 0 && aNewCheckNumber <= 9 ) {
			this.myCheckNumber = aNewCheckNumber;
			return true;
		}
		
		return false;
	}
	
	/*
	@return Date The stored Javascript Date Object that generates the Imperial date.
	
	This method returns the stored Javascript Date Object, perhaps so that it can checked or something.
	I'm not really sure why you'd want to retrieve it but that is for you to decide.
	*/
	this.getStandardDate = function() {
		return this.myStandardDate;
	}
	
	/*
	@param aNewDate Date A Javascript Date object from which to derive the imperial date.
	
	This method is used to change the internally stored date. Useful for reusing the same ImperialCalendar 
	object for multiple calculations.
	*/
	this.setStandardDate = function(aNewDate) {
		//If we were passed a date object but that date object is invalid the following block will find out.
		if ( Object.prototype.toString.call(aNewDate) === "[object Date]" ) {
			if ( isNaN( aNewDate.getTime() ) ) {
				throw new Error("Passed value is not a proper Javascript Date object: " + aNewDate);
			}
		} else {
			throw new Error("Passed value is not a proper Javascript Date object: " + aNewDate);
		}
		
		this.myStandardDate = aNewDate;
	}
	
	/*
	@param aWithSpaces Boolean Whether or not to use space seperators between date parts.
	@return String The derived imperial date.
	
	The main function of this object, used to find the imperial date from a Gregorian Anno Domini date. 
	*/
	this.imperialDate = function(aWithSpaces) {
		
		aWithSpaces = (typeof aWithSpaces !== 'undefined') ? aWithSpaces : false;
		
		var theImperialDate = "";
	
	// The gets the hours, minutes and seconds of the current date

		var currentDate = new Date();
		var currentHour = currentDate.getHours();
		var currentMinute = currentDate.getMinutes();
		var currentSecond = currentDate.getSeconds();

	// This calculates what day of the year we're at

		var theStart = new Date(this.myStandardDate.getFullYear(), 0, 0);
		var theDiff = this.myStandardDate - theStart;
		var theDay = Math.floor(theDiff / (1000 * 60 * 60 * 24));

	// Here we're getting the current elapsed seconds in the year for the days, hours and minutes
	// Substracting one day's worth of seconds to make the date start counting at zero

		var days = (theDay * 86400) - 86400
		var hours = currentHour * 3600
		var minutes = currentMinute * 60


	// There are this many seconds in a year

		var secondsInYear = 31536000;
	

	// Figure out if we have a leap year and change seconds in a year accordingly
		
		var isLeap = new Date(this.myStandardDate.getFullYear(), 1, 29).getMonth() == 1
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
		
		var theYear = this.myStandardDate.getFullYear() % 1000;
		
		//quick and dirty padding for our limited cases
		if (theYear < 10) {
			theYear = "00" + theYear;
		} else if (theYear < 100) {
			theYear = "0" + theYear;
		}
		
		var theMillennium = Math.ceil( (this.myStandardDate.getFullYear())/1000 );
		
		if (aWithSpaces == true) {
			theImperialDate = this.myCheckNumber + " " + theYearFraction + " " + theYear + ".M" + theMillennium;
		} else {
			theImperialDate = this.myCheckNumber + "" + theYearFraction + "" + theYear + ".M" + theMillennium;
		}
		
		return theImperialDate;
	}
	
}
