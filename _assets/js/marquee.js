document.addEventListener('DOMContentLoaded', function () {

	function createVerticalMarquee(parentEl, textContent) {
		const textSpan = document.createElement('span')
		textSpan.appendChild(textContent)

		const marquee = new Array(1000).fill(textSpan)
		marquee.forEach(span => {
			parentEl.append(span.cloneNode(true))
		})
	}

	const marquees = document.querySelectorAll('.js-vertical-marquee')
	marquees.forEach(marquee => {
		const textContent = marquee.firstElementChild
		createVerticalMarquee(marquee, textContent)
	})
})

