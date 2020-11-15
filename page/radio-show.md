---
title: Radio shows
permalink: "/radio"
order: "2"
---
<h1>{{ page.title }}</h1>

<div class="container">
	<div class="row">
		<div class="col w-2/3">
			<!--{% assign shows = site.radio_shows | sort: 'show_date' %}
			{% for show in site.radio_shows %}
				<p>{{ show.show_name }}</p>
				<p>{{ show.mixcloud_widget_code }}</p>
			{% endfor %}-->
			{% assign shows = site.radio_shows | sort: 'show_date' %}
			{% for show in shows %}
				<p>Name: {{ show.show_name }}</p>
				<p>Date: {{ show.show_date }}</p>
			{% endfor %}
		</div>
	</div>
</div>