let decks = [
	'Cruel',
	'Reanimated',
	'Think Again',
	'Think Again',
	'Feathered Friends',
	'Phyrexian',
	'Tree-hugging',
	'Unicorns',
	'Elves',
	'Treasure',
	'Lightning',
	'Detective',
	'Goblins',
	'Well-read',
	'Spirits',
	'Vampires',
	'Landfall',
	'Boneyard'
];

decks = decks
	.map(deck => { return {deck: deck, val: Math.floor(Math.random() * 10000)}})
	.sort((a,b) => b.val - a.val)
	.map(combo => combo.deck);

let first = `${decks.pop()} + ${decks.shift()}`
let second = `${decks.pop()} + ${decks.shift()}`

document.getElementById('top').innerText = first;
document.getElementById('bottom').innerText = second;
