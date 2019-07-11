let origboard;
const humanPlayer = '0';
const computerPlayer = 'X';
const winningCombos = [
	[ 0, 1, 2 ],
	[ 3, 4, 5 ],
	[ 6, 7, 8 ],
	[ 0, 4, 8 ],
	[ 0, 3, 6 ],
	[ 1, 4, 7 ],
	[ 2, 5, 8 ],
	[ 6, 4, 2 ]
];

const cells = document.querySelectorAll('.cell');

startGame();

function startGame() {
	document.querySelector('.endgame').style.display = 'none';
	origboard = Array.from(Array(9).keys()); //create an array on 9 elements and get just the keys to a new array
	for (let i = 0; i < cells.length; i++) {
		cells[i].innerText = '';
		// cells[i].removeProperty('background-color');
		cells[i].addEventListener('click', turnClick, false);
	}
}
function turnClick(square) {
	turn(square.target.id, humanPlayer);
}
