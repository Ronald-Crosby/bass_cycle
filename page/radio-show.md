---
title: Radio shows
permalink: "/radio"
order: "2"
description: |-
  On the 3rd Monday of every month we’re in the mix for Music Box Radio, a community radio station based in London.

  Listen to all the shows here:

---

<section class="mt-6">
	<div class="container">
		<div class="row">
			<div class="col w-full lg:w-2/3">
				<h1 class="mb-3">{{ page.title }}</h1>
				<p>{{ page.description }}</p>
				<div class="mt-5">
					{% assign shows = site.radio_shows | sort: 'show_date' | reverse %}
					{% for show in shows %}
						<div class="mb-4">
							<p class="mb-1 font-bold">{{ show.show_name }}</p>
							{{ show.content }}
						</div>
					{% endfor %}
				</div>
			</div>
		</div>
	</div>
</section>