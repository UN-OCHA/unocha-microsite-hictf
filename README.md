# unocha-microsite-hictf

Static site for the Humanitarian ICT Forum 2017.

A Jekyll site running on GitHub pages.

## Running locally

# Requirements

* [Ruby](https://www.ruby-lang.org/en/)
* [Bundler](http://bundler.io/)
* [Node](https://nodejs.org/)
* [Jekyll](https://jekyllrb.com)

### Installing

Clone the repo

```
git@github.com:UN-OCHA/unocha-microsite-hictf.git
```

Install the required gems

```
cd unocha-microsite-hictf
bundle
```

Install the front end dependencies

```
npm install
```

### Running

To run the Jekyll site and watch for changes to sass and js:

```
grunt serve
```

Go to http://localhost:4000/unocha-microsite-hictf/

### Deploying

## Content changes

Simple content changes can be made directly to the HTML and Markdown files in GitHub, any changes committed to the master branch will be deployed automatically to the live site.

## Styling / layout changes

1. Compile the front end resources (Grunt is used for this instead of the standard Jekyll way).
```
grunt
```

2. Check your changes (especially for style removed by uncss) locally by running `jekyll serve` and checking the site

3. Commit your changes, including the minified css and js files.

4. Push to the master branch.
