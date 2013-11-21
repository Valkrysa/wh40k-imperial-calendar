function ImperialCalendar(a_date)
{
	this.my_standard_date = (typeof a_date !== 'undefined') ? a_date : new Date();
	
	//If we were passed a date object but that date object is invalid the following block will find out.
	if( Object.prototype.toString.call(this.my_standard_date) === "[object Date]" )
	{
		if( isNaN( this.my_standard_date.getTime() ) )
		{
			throw new Error("Passed value is not a proper Javascript Date object: " + a_date);
		}
	} else {
		throw new Error("Passed value is not a proper Javascript Date object: " + a_date);
	}
}