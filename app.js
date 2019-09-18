'use strict';

document.addEventListener("DOMContentLoaded", function () {

    let person = new Person('<YOUR BIRTHDATE>').setYears(90).save();
    let weeksLived = person.weeks;
    let boxes = person.getBoxes();
    let grid = document.getElementById('grid');

    for (let i = 0; i < boxes; i++) {
        let div = document.createElement('div');
        div.setAttribute('class', 'box-grid');

        if (i < weeksLived) {
            div.setAttribute('class', 'box-grid-complete');
        }

        grid.appendChild(div);
    }
    
});
