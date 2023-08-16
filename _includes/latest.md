<section>
  <h1>Lastest</h1>
  {% for post in site.posts | limit: 5 %}
  <p>
    <span class="tag"><small>{{ post.type }}</small></span>
    <a href="{{ post.url }}">{{ post.title }}</a>
    {% if post.language and post.language != '' %}
      <span>({{ post.language }})</span>
    {% endif %}
  </p>
  {% endfor %}
</section>