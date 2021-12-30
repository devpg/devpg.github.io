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
    <link rel="stylesheet" href="{{ "/assets/css/style.css?v="              | append: site.github.build_revision | relative_url }}">
    <link rel="stylesheet" href="{{ "/assets/css/custom.css" | relative_url }}">
    <!--[if lt IE 9]>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <div class="wrapper">
      <header>
        <p><img src="{{site.logo | relative_url}}" alt="Logo" /></p>

        <p class="social-media-list">
            <a rel="me" href="https://www.linkedin.com/in/andreneubauer/" target="_blank" title="André Neubauer (LinkedIn)"><svg class="svg-icon grey"><use xlink:href="{{ '/assets/minima-social-icons.svg#linkedin' | relative_url }}"></use></svg></a>
            <a rel="me" href="https://twitter.com/devpg" target="_blank" title="devpg"><svg class="svg-icon grey"><use xlink:href="{{ '/assets/minima-social-icons.svg#twitter' | relative_url }}"></use></svg></a>
            <a rel="me" href="https://github.com/devpg" target="_blank" title="devpg"><svg class="svg-icon grey"><use xlink:href="{{ '/assets/minima-social-icons.svg#github' | relative_url }}"></use></svg></a></li>
        </p>

      </header>
      <section>

      {{ content }}

      </section>
      <footer>
        <p><small>Hosted on GitHub Pages &mdash; Credits to <a href="https://github.com/orderedlist">orderedlist</a>, <a href="https://github.com/godalming123">godalming123</a>, <a href="https://github.com/jekyll/minima">minima</a> </small></p>
      </footer>
    </div>
    <script src="{{ "/assets/js/scale.fix.js" | relative_url }}"></script>
  </body>
</html>