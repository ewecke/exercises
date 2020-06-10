`use strict`
//D-2 Is it a weekend?
const IsItaWeekend = () => {
    //specificDate = new Date ();
    specificDate = new Date(`2020-06-13`);
    console.log(specificDate);
    specificDate.getDay() === 6 || specificDate.getDay() === 0 ? console.log(`Yes it is a weekend`) : console.log(`No it is not a weekend`);
}
IsItaWeekend()
