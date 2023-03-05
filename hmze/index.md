---
layout: custom
---

{{ page.description }}
<p>
  <span><a href="https://open.spotify.com/show/4z2WgPzv2tXcYMHcmdnwVZ">Spotify</a></span> //
  <span><a href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkLnBvZGJlYW4uY29tL2htemUvZmVlZC54bWw">Google Podcasts</a></span> //
  <span><a href="https://podcasts.apple.com/de/podcast/hmze/id1552441029">Apple Podcast</a></span> //
  <span><a href="{{ page.feed_url | absolute_url }}">RSS Feed</a></span>
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