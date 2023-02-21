---
layout: custom_devpg
---

{% for post in site.categories["content"] %}
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