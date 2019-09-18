'use strict';

//the number of milliseconds in one week
const ONE_WEEK = 1000 * 60 * 60 * 24 * 7;
const WEEKS_IN_A_YEAR = 52;

class Person {

    constructor(dob) {
        this.dob = new Date(dob);
        this.today = new Date();
    }

    setYears(years) {
        this.years = years;
        return this;
    }

    getBoxes() {
        return this.boxes;
    }

    setBoxes() {
        this.boxes = this.years * WEEKS_IN_A_YEAR;
        return this;
    }

    getWeeks() {
        //get the date difference
        var dob_in_milliseconds = this.dob.getTime();
        var today_in_milliseconds = this.today.getTime();
        var difference_in_milliseconds = Math.abs(dob_in_milliseconds - today_in_milliseconds);

        //then calculate the weeks lived
        this.weeks = Math.floor(difference_in_milliseconds / ONE_WEEK);

        return this;
    }

    save() {
        this.setBoxes();
        this.getWeeks();
        return this;
    }
    
}