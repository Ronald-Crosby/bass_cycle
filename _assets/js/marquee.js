document.addEventListener('DOMContentLoaded', function () {
	const marqueeWrapper = document.getElementById('repeating-text')
	const textSpan = document.createElement('span')
	const text = document.createTextNode('basscycle')

	textSpan.appendChild(text)

	const marquee = new Array(5000).fill(textSpan)

	marquee.forEach(span => {
		marqueeWrapper.append(span.cloneNode(true))
	})
})
