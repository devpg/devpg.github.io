{% include header.md %}
  <header>
    <div id=hero-image><img src="{{site.logo | relative_url}}" alt="Logo" /></div>
  </header>
  <section class="link-list">
    <a rel="me" href="archive.html">Archive</a>
    <a rel="me" href="https://www.linkedin.com/in/andreneubauer/" target="_blank">LinkedIn <i class="gg-external"></i></a>
    <a rel="me" href="https://hmze.io" target="_blank">HMZE Podcast <i class="gg-external"></i></a>
    <a rel="me" href="https://techfightclub.com" target="_blank">techfightclub <i class="gg-external"></i></a>
    <a rel="me" href="https://speakerdeck.com/devpg" target="_blank" >Speakerdeck <i class="gg-external"></i></a>
  </section>
  <section>
    {{ content }}
  </section>
{% include footer.md %}
