---
title: Radio shows
permalink: "/radio"
order: "2"
description: |-
  On the 3rd Monday of every month we’re in the mix for Music Box Radio, a community radio station based in London.

  Listen to all the shows here:

---

<div class="container">
  <div class="row">
    <div class="col w-2/3">
			<h1>{{ page.title }}</h1>
			<p>{{ page.description }}</p>
    	{% assign shows = site.radio_shows | sort: 'show_date' | reverse %}
    	{% for show in shows %}
    		<p>{{ show.show_name }}</p>
    		{{ show.content }}
    	{% endfor %}
    </div>
  </div>
</div>