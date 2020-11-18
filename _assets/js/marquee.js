document.addEventListener('DOMContentLoaded', function () {
	const marqueeWrapper = document.getElementById('repeating-text')
	const textSpan = document.createElement('span')
	const text = document.createTextNode('basscycle')

	textSpan.appendChild(text)

	const marquee = new Array(50).fill(textSpan)

	const docFrag = document.createDocumentFragment();
	for (var i = 0; i < marquee.length; i++) {
		docFrag.appendChild(marquee[i]);
	}

	marqueeWrapper.appendChild(docFrag);
})
