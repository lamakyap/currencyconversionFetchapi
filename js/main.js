/*function start() {
			fetch("https://cors.io/?https://exchangeratesapi.io/api/latest")
			.then(resp => resp.json())
			.then(data => {
				document.getElementById('content').innerHTML=data 
				console.log(data);
			});
		}
*/

const endpoint = 'https://exchangeratesapi.io/api/latest';
const euroField = document.querySelector('.euro');
const poundField = document.querySelector('.pound');

document.querySelector(".convertButton").addEventListener('click', moneyConvert);
euroField.addEventListener('input', moneyConvert);

fetch(endpoint)
.then(resp => resp.json())
.then(data => {
	const euroAmount = data.rates.GBP;
	const euro = euroField.value; 
	const pound = (euro * euroAmount).toFixed(2);
	poundField.value = pound;
});

function moneyConvert(){
	fetch(endpoint)
	.then(resp => resp.json())
	.then(data => {
		const euroAmount = data.rates.GBP;
		const euro = euroField.value;
		const pound = (euro * euroAmount).toFixed(2);
		poundField.value = pound;
	});
}









