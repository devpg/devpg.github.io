{% include header.md %}
  <header>
    <div id=hero-image><img src="{{site.logo | relative_url}}" alt="Logo" /></div>
  </header>
  {% include navigation.md %}
  <section>
    {{ content }}
  </section>
{% include footer.md %}
