// generate btn
const generate = document.getElementById('genBtn').addEventListener('click', () => {
	const randomNumber = Math.floor(1000 + Math.random() * 9000);
	let genOutput = document.getElementById('genOutput');
	genOutput.value = randomNumber;
});

// pin check
const submitBtn = document.getElementById('submit').addEventListener('click', () => {
	let genNumber = document.getElementById('genOutput');
	let submitOutput = document.getElementById('subOutput');
	// notify
	const failed = document.getElementById('failed');
	const success = document.getElementById('success');
	const empty = document.getElementById('emptyValue');

	if (submitOutput.value == '') {
		empty.style.display = 'block';
		success.style.display = 'none';
		failed.style.display = 'none';
		return;
	}
	if (genNumber.value === submitOutput.value) {
		success.style.display = 'block';
		failed.style.display = 'none';
		empty.style.display = 'none';
	}

	if (genNumber.value !== submitOutput.value) {
		failed.style.display = 'block';
		success.style.display = 'none';
		empty.style.display = 'none';

		let count = document.getElementById('tryLeft');
		let countLeft = parseInt(count.innerText);
		if (countLeft == 3) {
			count.innerText = countLeft - 1;
		}
		if (countLeft == 2) {
			count.innerText = countLeft - 1;
		}
		if (countLeft == 1) {
			alert('Please try again');
			count.innerText = 3;
			failed.style.display = 'none';
			success.style.display = 'none';
			empty.style.display = 'none';
			genNumber.value = '';
			submitOutput.value = '';
		}
	}
});
