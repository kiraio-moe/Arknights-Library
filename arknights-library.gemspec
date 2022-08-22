Gem::Specification.new do |spec|
    spec.name = "Arknights Library"
    spec.version = "0.0.1"
    spec.authors = "Doctors (https://github.com/kiraio-moe/Arknights-Library/graphs/contributors)"
    # spec.email = ""

    spec.summary  = "A collections of Assets, Resources and Tools to boost up your experiences with Arknights."
    spec.homepage = "https://kiraio-moe.github.io/Arknights-Library"
    spec.license  = "MIT"

    spec.files = `git ls-files -z`.split("\x0").select do |f|
      f.match(%r!^(assets|_(includes|layouts)/|(CODE_OF_CONDUCT|LICENSE|README)((\.(txt|md|markdown)|$)))!i)
    end

    spec.add_runtime_dependency "jekyll"
    spec.add_runtime_dependency "jekyll-seo-tag"
    spec.add_runtime_dependency "jekyll-sitemap"
    spec.add_runtime_dependency "jekyll-feed"
    # spec.add_runtime_dependency "bootstrap", "~> 5.1.0"  # In the future

    spec.add_development_dependency "Jekyll"
    spec.add_development_dependency "jekyll-seo-tag"
    spec.add_development_dependency "bundler"
  end
