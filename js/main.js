const domElements = {
	quoteContent: document.querySelector('.quote'),
	quoteId: document.querySelector('.quote--id'),
    quoteGenerator: document.querySelector('#get-data')
}

async function getQuote () {
	try {
		const response = await fetch('https://api.adviceslip.com/advice')
		if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

		const data = await response.json()
		const adviceObj = data.slip

		updateDOM(adviceObj.advice, adviceObj.id)
	}
	catch (error) {
		console.error('Error fetching quote:', error)
        updateDOM('Sorry, there was a failure communicating with the server.', 'null')
	}
}

const updateDOM = (quote, id) => {
	domElements.quoteContent.textContent = quote
	domElements.quoteId.textContent = id
}

const init = () => {
	domElements.quoteGenerator.addEventListener('click', getQuote)
	getQuote() // Initial fetch when the page loads.
}

window.onload = init