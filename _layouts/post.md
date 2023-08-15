---
layout: default
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

{% for content_piece in page.content_pieces %}
  {% case content_piece.type %}
  {% when 'youtube' %}
    <p class="yt-container">
      <iframe width="560" height="315" src="{{content_piece.url}}"></iframe>
    </p>
  {% when 'speakerdeck' %}
    <p class="sd-container">
      <iframe src="{{content_piece.url}}" allowfullscreen="true" data-ratio="1.78343949044586"></iframe>
    </p>
  {% when 'podigee' %}
    <p>
      <script class="podigee-podcast-player" src="https://player.podigee-cdn.net/podcast-player/javascripts/podigee-podcast-player.js" data-configuration="{{content_piece.url}}"></script>
    </p>
  {% when 'soundcloud' %}
    <p>
      <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url={{content_piece.url}}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
    </p>
  {% when 'buzzsprout' %}
    <p>
      <iframe src="{{content_piece.url}}?client_source=small_player&iframe=true" loading="lazy" width="100%" height="200" frameborder="0" scrolling="no" title="The Story of Software, 10. The Evolution of Software Architecture"></iframe>
    </p>
  {% when 'audio' %}
    <p><audio controls>
      <source src="{{content_piece.url}}" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio></p>
  {% else %}
  {% endcase %}
{% endfor %}

{% if content != "" %}
  <p>{{content}}</p>
{% endif %}