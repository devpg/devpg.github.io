---
layout: custom_hmze
---

{{ page.description }}
<p>
  <span><a href="https://open.spotify.com/show/4z2WgPzv2tXcYMHcmdnwVZ" target="_blank">Spotify</a></span> //
  <span><a href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkLnBvZGJlYW4uY29tL2htemUvZmVlZC54bWw" target="_blank">Google Podcasts</a></span> //
  <span>Apple Podcast</span> //
  <span><a href="{{ page.feed_url | absolute_url }}" target="_blank">RSS Feed</a></span>
</p>

{% for post in site.categories["hmze"] %}
  {% assign currentYear = post.date | date: "%Y" %}
  {% assign currentMonth = post.date | date: "%B" %}
  
  {% if currentYear != year %}
  <h1 id="{{ currentYear }}" class="section">{{ currentYear }}</h1>
  {% assign year = currentYear %}
  {% endif %}
  
  {% if currentMonth != month %}
  <h2 id="{{ currentMonth }}">{{ currentMonth }}</h2>
  {% assign month = currentMonth %}
  {% endif %}

  <p>
    <a href="{{ post.url }}">{{ post.title }}</a>
  </p>
{% endfor %}