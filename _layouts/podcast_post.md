---
layout: custom
---

<h1>{{ page.title }}</h1>
<p>
  {{ page.date | date: "%d %B %Y" }}
  {% case page.tags %}
  {% when "", nil, false, 0, empty %}
  {% else %}
    <span id=tags> // {{ page.tags | join: " " }}</span>
  {% endcase %}
</p>


<p>
  <audio controls>
    <source src="{{page.episode_url}}" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
</p>

{{content}}