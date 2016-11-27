var msg;

var isX;
var count;
var isEnd;

window.onload = function() {
    initBoard();
    initGame();
};

function initBoard() {
    var table = document.createElement('table');
    table.className = 'board';
    for(var row = 1; row <= 3; row++) {
        var tr = document.createElement('tr');
        for(var col = 1; col <= 3; col++) {
            var td = document.createElement('td');
            td.id = 'ttt_f' + row + col;
            td.onclick = (function() {
                var rowInner = row;
                var colInner = col;
                return function() { clickField(rowInner, colInner); };
            })();
            td.innerHTML = '';
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.getElementById('board').appendChild(table);

    msg = document.createElement('div');
    msg.set = function(s) { this.innerHTML = s; };
    msg.className = 'message';
    document.getElementById('message').appendChild(msg);
}

function initGame() {
    for(var row = 1; row <= 3; row++) {
        for(var col = 1; col <= 3; col++) {
            get(row, col).innerHTML = '';
        }
    }
    count = 0;
    isEnd = false;
    isX = true;
    msg.set('x fängt an');
}

function clickField(row, col) {
    var field = get(row, col);
    if(isEnd || field.innerHTML !== '') return;

    count++;
    if(isX) {
        field.innerHTML = 'x';
        isX = false;
        msg.set('o ist dran');
        check('x');
    } else {
        field.innerHTML = 'o';
        isX = true;
        msg.set('x ist dran');
        check('o');
    }
}

function check(s) {
    if(get(1, 1).innerHTML === s && get(2, 2).innerHTML === s && get(3, 3).innerHTML === s
    || get(3, 1).innerHTML === s && get(2, 2).innerHTML === s && get(1, 3).innerHTML === s) {
        return end(s + ' gewinnt');
    }
    for(var x = 1; x <= 3; x++) {
        if(get(x, 1).innerHTML === s && get(x, 2).innerHTML === s && get(x, 3).innerHTML === s
        || get(1, x).innerHTML === s && get(2, x).innerHTML === s && get(3, x).innerHTML === s) {
            return end(s + ' gewinnt');
        }
    }
    if(count === 9) {
        return end('Cat\'s game!');
    }
}

function get(row, col) {
    return document.getElementById('ttt_f' + row + col);
}

function end(mesg) {
    msg.set(mesg);
    isEnd = true;
    window.setTimeout(initGame, 3000);
}