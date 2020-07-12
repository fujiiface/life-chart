'use strict';

function generate() {
    let person = new Person(this.value).setYears(90).save();
    let weeksLived = person.weeks;
    let boxes = person.getBoxes();
    let grid = document.getElementById('grid');
    grid.innerHTML = '';
    for (let i = 0; i < boxes; i++) {
        let div = document.createElement('div');
        div.setAttribute('class', 'box-grid');
        if (i < weeksLived) {
            div.setAttribute('class', 'box-grid-complete');
        }
        grid.appendChild(div);
    }
}

let input = document.getElementById('birthdate');
input.onchange = generate;
input.onkeydown = function(event) {
    if (event.keyCode === 13) {
        generate.call(input);
    }
};
