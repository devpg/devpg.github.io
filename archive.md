---
layout: default
---

{% for post in site.posts %}
  {% assign currentYear = post.date | date: "%Y" %}
  
  {% if currentYear != year %}
  <h1 id="{{ currentYear }}" class="section">{{ currentYear }}</h1>
  {% assign year = currentYear %}
  {% endif %}

  <p>
    <a href="{{ post.url }}">{{ post.title }}</a>
  </p>
{% endfor %}