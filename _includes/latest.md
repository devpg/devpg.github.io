<section>
  <h1>Lastest</h1>
  {% for post in site.categories["content"] | limit: 5 %}
  <p><a href="{{ post.url }}">{{ post.title }}</a></p>
  {% endfor %}
</section>