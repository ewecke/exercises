`use strict`
//D-3 How many days remain?
const daysRemain = (date)=> {
    //console.log(date);
    month = date.getMonth()+1;
    //console.log(month);
    day = date.getDate();
    //console.log(day);
    if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
        days = 31 - day;
        console.log(` ${days} days remain until the end of the month.` );
    } else if (month === 4 || month === 6 || month === 9 || month === 11) { 
        days = 30 - day;
        console.log(` ${days} days remain until the end of the month.` );
    } else {
    days = 28 - day;
    console.log(` ${days} days remain until the end of the month.` );
    }
    }
daysRemain(new Date ('2020-3-21'));