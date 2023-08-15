{% include header.md %}
  <header>
    <div id=hero-image><img src="{{site.logo | relative_url}}" alt="Logo" /></div>
    <p class="link-list">
      <a rel="me" href="/content" title="Content"><svg class="svg-icon"><use xlink:href="{{ '/assets/minima-social-icons.svg#home' | relative_url }}"></use></svg></a>
      <a rel="me" href="https://www.linkedin.com/in/andreneubauer/" target="_blank" title="André Neubauer (LinkedIn)"><svg class="svg-icon"><use xlink:href="{{ '/assets/minima-social-icons.svg#linkedin' | relative_url }}"></use></svg></a>
      <a rel="me" href="https://hmze.io" target="_blank" title="HMZE (Podcast)"><svg class="svg-icon"><use xlink:href="{{ '/assets/minima-social-icons.svg#podcast' | relative_url }}"></use></svg></a>
      <a rel="me" href="https://speakerdeck.com/devpg" target="_blank" title="devpg (speakerdeck)"><svg class="svg-icon"><use xlink:href="{{ '/assets/minima-social-icons.svg#speakerdeck' | relative_url }}"></use></svg></a>
    </p>
  </header>
  <section>
    {{ content }}
  </section>
{% include footer.md %}
