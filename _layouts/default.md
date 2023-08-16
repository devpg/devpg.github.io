{% include header.md %}
  <header>
    <div id=hero-image><img src="{{site.logo | relative_url}}" alt="Logo" /></div>
    <p class="headline">
      Experienced tailwind leader, tech' enthusiast, strategist and opponent of standstill.<br>
      CTO@TrustedShops, Tech advisor
    </p>
  </header>  
  {% include navigation.md %}
  <section>
    {{ content }}
  </section>
{% include footer.md %}
