# frozen_string_literal: true

source "https://rubygems.org"

# GitHub Pages builds this site with its own pinned gem set and ignores this
# Gemfile entirely -- it exists only to reproduce that build locally. Keep the
# version in step with https://pages.github.com/versions/ so local output
# matches production.
#
# github-pages already pins jekyll-remote-theme and jekyll-include-cache, so
# they are deliberately not listed here: declaring them unconstrained lets
# bundler satisfy them with an older github-pages release.
gem "github-pages", "~> 232", group: :jekyll_plugins

# Jekyll's built-in server. Not a default gem since Ruby 3.0.
gem "webrick", "~> 1.8"

# Leaving the standard library in Ruby 3.4. Declared explicitly so this keeps
# resolving -- and stays warning-free -- on newer rubies.
gem "bigdecimal"
gem "csv"

# Silences octokit's "To use retry middleware with Faraday v2.0+" notice
# during the github-metadata step of every build.
gem "faraday-retry"
