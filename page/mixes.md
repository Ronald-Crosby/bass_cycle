---
title: Mix series
permalink: "/mixes"
order: 3
---

<section class="mt-6">
	<div class="container">
		<div class="row">
			<div class="col w-2/3 pb-6">
				<h1 class="mb-3">{{ page.title }}</h1>
				{% for mix in site.mixes %}
					<div class="mb-4">
						<p class="mb-2">{{ mix.title }}: <span class="font-bold">{{ mix.guest }}</span></p>
						{{ mix.content | markdownify }}
					</div>
				{% endfor %}
			</div>
		</div>
	</div>
</section>