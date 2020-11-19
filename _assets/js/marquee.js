document.addEventListener('DOMContentLoaded', function () {

	function createVerticalMarquee(parentEl, textContent, repeatNum) {
		const textSpan = document.createElement('span')
		textSpan.appendChild(textContent)

		const marquee = new Array(Number(repeatNum)).fill(textSpan)
		marquee.forEach(span => {
			parentEl.append(span.cloneNode(true))
		})
	}

	const marquees = document.querySelectorAll('.js-marquee')
	marquees.forEach(marquee => {
		const textContent = marquee.firstElementChild
		const repeatNum = marquee.dataset.repeatNum
		createVerticalMarquee(marquee, textContent, repeatNum)
	})
})

