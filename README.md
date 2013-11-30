wh40k-imperial-calendar
=======================

This can be used to convert dates and times into the Imperial Dating System found in the Warhammer 40k Universe.

#### Usage

If you want to use the Object Oriented version use imperial-calendar.js
A single function version is available in imperial-calendar-functional.js

Basic usage. Uses the current date.
```
//The OO version.
var theImperialDate = new ImperialCalendar();
console.log( theImperialDate.imperialDate() ); //results in: 0910013.M3

//The single function version
var theImperialDate = imperialCalendar();
console.log( theImperialDate ); //results in: 0910013.M3
```

You can also specify your own date using a basic Javascript Date Object.
```
//The OO version.
var theGregorianDate = new Date(2013, 10, 29);
var theImperialDate = new ImperialCalendar(theGregorianDate);
console.log( theImperialDate.imperialDate() ); //results in: 0910013.M3

//The single function version
var theGregorianDate = new Date(2013, 10, 29);
var theImperialDate = imperialCalendar(theGregorianDate);
console.log( theImperialDate ); //results in: 0910013.M3
```

You can pass true to add spaces between date parts as a stylistic choice.
```
//The OO version
console.log( theImperialDate.imperialDate(true) ); //results in: 0 910 013.M3

//The single function version, you pass true as the second parameter, date being the first.
var theGregorianDate = new Date(2013, 10, 29);
var theImperialDate = imperialCalendar(theGregorianDate, true);
console.log( theImperialDate ); //results in: 0 910 013.M3
```

If you are using this from anywhere other than earth the setCheckNumber() method can be useful.

If you are on the International Space Station you could use:
```
//The OO version
theImperialDate.setCheckNumber(1);
console.log( theImperialDate.imperialDate(true) ); //results in: 1 910 013.M3

//The single function version, you can pass a check number as the third parameter, 
//a style value as the second parameter like before, and of course date being the first.
var theGregorianDate = new Date(2013, 10, 29);
var theImperialDate = imperialCalendar(theGregorianDate, true, 1);
console.log( theImperialDate ); //results in: 1 910 013.M3
```

If you are running this from an alien world you can mark it the following way, also, please visit your nearest Inquisitorial office as soon as possible for further instructions.
```
theImperialDate.setCheckNumber(9);
console.log( theImperialDate.imperialDate(true) ); //results in: 9 910 013.M3

var theGregorianDate = new Date(2013, 10, 29);
var theImperialDate = imperialCalendar(theGregorianDate, true, 9);
console.log( theImperialDate ); //results in: 9 910 013.M3
```
