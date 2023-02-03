---
layout: custom_devpg
---

{{ page.date | date: "%-d %B %Y" }}
<h1>{{ page.title }}</h1>

<p>
  <audio controls>
    <source src="{{page.episode_url}}" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
</p>

{{content}}

{% case page.tags %}
  {% when "", nil, false, 0, empty %}
  {% else %}
    <small>tags: {{ page.tags | join: " " }}</small>
{% endcase %}