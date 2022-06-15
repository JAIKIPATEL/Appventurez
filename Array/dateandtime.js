
    //Without arguments – create a Date object for the current date and time:

let now = new Date();
console.log( now ); // shows current date/time
new Date(2011, 0, 1, 0, 0, 0, 0); // 1 Jan 2011, 00:00:00
new Date(2011, 0, 1); // the same, hours etc are 0 by default

//The maximal precision is 1 ms (1/1000 sec):

    let date = new Date(2011, 0, 1, 2, 3, 4, 567);
    console.log( date ); // 1.01.2011, 02:03:04.567

    /*There are methods to access the year, month and so on from the Date object:

getFullYear()
    Get the year (4 digits)
getMonth()
    Get the month, from 0 to 11.
getDate()
    Get the day of month, from 1 to 31, the name of the method does look a little bit strange.
getHours(), getMinutes(), getSeconds(), getMilliseconds()
    Get the corresponding time components. 

    urrent date
let date = new Date();

// the hour in your current time zone
console.log( date.getHours() );

// the hour in UTC+0 time zone (London time without daylight savings)
console.log( date.getUTCHours() );

Besides the given methods, there are two special ones that do not have a UTC-variant:

getTime()



Setting date components

The following methods allow to set date/time components:

    setFullYear(year, [month], [date])
    setMonth(month, [date])
    setDate(date)
    setHours(hour, [min], [sec], [ms])
    setMinutes(min, [sec], [ms])
    setSeconds(sec, [ms])
    setMilliseconds(ms)
    setTime(milliseconds) (sets the whole date by milliseconds since 01.01.1970 UTC)

Every one of them except setTime() has a UTC-variant, for instance: setUTCHours()
*/

let today = new Date();

today.setHours(0);
console.log(today); // still today, but the hour is changed to 0

today.setHours(0, 0, 0, 0);
console.log(today); // still today, now 00:00:00 sharp.

let ms = Date.parse('2012-01-26T13:51:50.417-07:00');

console.log(ms); // 1327611110417  (timestamp)

//We can instantly create a new Date object from the timestamp:

let date1 = new Date( Date.parse('2012-01-26T13:51:50.417-07:00') );

console.log(date1);

//example with numbers as date components:

//new Date(year, month, date, hour, minute, second, millisecond)
let d3 = new Date(2012, 1, 20, 3, 12);
console.log( d3 );

//We could also create a date from a string, like this:

//new Date(datastring)
let d2 = new Date("February 20, 2012 03:12:00");
console.log( d2 );

//The method date.getDay() returns the number of the weekday, starting from sunday.

//Let’s make an array of weekdays, so that we can get the proper day name by its number:

function getWeekDay(date) {
  let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

  return days[date.getDay()];
}

let date11 = new Date(2014, 0, 3); // 3 Jan 2014
console.log( getWeekDay(date11) ); // FR
