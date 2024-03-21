const QUOTE_CONTENT = document.querySelector('.quote')
const QUOTE_ID = document.querySelector('.quote--id')
const QUOTE_GENERATOR = document.querySelector('#get-data')

function getQuote() {
	const results = fetch("	https://api.adviceslip.com/advice")

	results.then(response => response.json())
	.then(data => {
		const adviceObj = data.slip
		QUOTE_CONTENT.textContent = `${adviceObj.advice}`
		QUOTE_ID.textContent = `${adviceObj.id}`
	})
	.catch(error => {
		console.log(error)
		QUOTE_CONTENT.textContent = "Sorry, there was a failure communicating with the server. 😥"
		QUOTE_ID.textContent = "null"
	})
}

QUOTE_GENERATOR.addEventListener('click', () => getQuote())

window.onload = () => getQuote()