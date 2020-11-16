---
title: Mix series
permalink: "/mixes"
order: 3
---

<section class="mt-6">
	<div class="container">
		<div class="row">
			<div class="col w-2/3">
				<h1>{{ page.title }}</h1>
				{% for mix in site.mixes %}
					<p>{{ mix.title }}</p>
					<p>{{ mix.guest }}</p>
					<p>{{ mix.content | markdownify }}</p>
				{% endfor %}
			</div>
		</div>
	</div>
</section>