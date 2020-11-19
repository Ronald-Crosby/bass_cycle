document.addEventListener('DOMContentLoaded', function () {
	const menu = document.getElementById('mobile-nav')
	const btn = document.getElementById('menu-btn')
	const burger = document.getElementById('burger-icon')
	const close = document.getElementById('close-icon')

	function toggleMenu() {
		menu.classList.toggle('hidden')
		burger.classList.toggle('hidden')
		close.classList.toggle('hidden')
	}

	btn.addEventListener('click', function () {
		toggleMenu()
	})
})