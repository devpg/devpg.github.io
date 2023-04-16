{% case site.color-scheme %}
  {% when "", nil, false, 0, empty %}
    {% assign ColorScheme = "auto" %}
  {% else %}
    {% assign ColorScheme = site.color-scheme %}
{% endcase %}

<!DOCTYPE html>
<html lang="{{ site.lang | default: "en-US" }}">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

{% seo %}
    <link rel="stylesheet" href="{{ "/assets/css/colors-ColorScheme.css?v=" | append: site.github.build_revision | relative_url | replace: "ColorScheme", ColorScheme }}">
    <link rel="stylesheet" href="{{ "/assets/css/style.css?v=" | append: site.github.build_revision | relative_url }}">
    <link rel="stylesheet" href="{{ "/assets/css/custom.css" | relative_url }}">
    <!--[if lt IE 9]>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <div class="wrapper">
      <header>
        <!-- {{page.layout}} -->
        {% if page.layout != "content_post" %}
          <div id=hero-image><img src="{{site.logo | relative_url}}" alt="Logo" /></div>
        {% endif %}
         <p class="social-media-list">
            <a rel="me" href="/" title="Home"><svg class="svg-icon"><use xlink:href="{{ '/assets/minima-social-icons.svg#home' | relative_url }}"></use></svg></a>
            <a rel="me" href="https://www.linkedin.com/in/andreneubauer/" target="_blank" title="André Neubauer (LinkedIn)"><svg class="svg-icon"><use xlink:href="{{ '/assets/minima-social-icons.svg#linkedin' | relative_url }}"></use></svg></a>
            <a rel="me" href="https://hmze.io" target="_blank" title="HMZE (Podcast)"><svg class="svg-icon"><use xlink:href="{{ '/assets/minima-social-icons.svg#podcast' | relative_url }}"></use></svg></a>
            <a rel="me" href="https://speakerdeck.com/devpg" target="_blank" title="devpg (speakerdeck)"><svg class="svg-icon"><use xlink:href="{{ '/assets/minima-social-icons.svg#speakerdeck' | relative_url }}"></use></svg></a>
        </p>
      </header>
      <section>
        {{ content }}
      </section>
      <footer>
        <p><small>Hosted on GitHub Pages &mdash; Credits to <a href="https://github.com/godalming123">godalming123 (Basic theme)</a>, <a href="https://github.com/jekyll/minima">minima (Icons)</a> </small></p>
      </footer>
    </div>
  </body>
</html>