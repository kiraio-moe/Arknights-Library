source "https://rubygems.org"

# gem "rails"
gem "jekyll", "~> 3.9.2" # See GitHub dependecy: https://pages.github.com/versions/
gem "webrick", "~> 1.4.0"
# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.0", :install_if => Gem.win_platform?

group :ui_plugins do
    gem "bootstrap", "~> 5.2.0"
    gem "jquery-rails", "~> 4.5.0"
end

group :jekyll_plugins do
    gem "github-pages", "~> 227"
    gem "jekyll-seo-tag", "~> 2.8.0"
    gem "jekyll-sitemap", "~> 1.4.0"
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
    gem "tzinfo", "~> 1.2"
    gem "tzinfo-data"
  end
