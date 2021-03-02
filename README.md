# Noknok

A white-based theme for portfolios.

The demo can be seen here: https://noknok.netlify.app

## Features
* Responsive
* Google Analytics
* Yandex Metrica
* RSS Feeds

## Recommended font settings

### English
You don't have to do anything. :)

### 日本語
以下のコードをminifyして、```static/css/style.min.css```の冒頭部分と置き換えてください。

```
@font-face {
  font-family: NotoSansJP;
  src: url("/fonts/NotoSansJP-Regular.otf") format("opentype");
  font-weight: 400;
}
@font-face {
  font-family: NotoSansJP;
  src: url("/fonts/NotoSansJP-Bold.otf") format("opentype");
  font-weight: 700;
}
```

## Prerequisites

Make sure to install `postcss-cli` and `autoprefixer` globally in your environment, as Hugo Pipe’s PostCSS requires it. This is mentioned in the [Hugo Docs](https://gohugo.io/hugo-pipes/postcss/).

```bash
$ npm install -g postcss-cli
$ npm install -g autoprefixer
```

## Installation
Inside the folder of your Hugo site run:

```bash
$ git submodule add https://github.com/opera7133/noknok.git themes/noknok
$ cd themes/noknok
$ npm install
```

For more information read the official [setup guide](https://gohugo.io/overview/installing/) of Hugo.

## Getting started
After installing the theme successfully it requires a just a few more steps to get your site running.

### Update config file
Copy the config.toml in the exampleSite to the root of your Hugo site. Change strings as you like.

### Check your site
In order to see your site in action, run Hugo's built-in local server.
```bash
$ hugo server
```
Now enter `localhost:1313` in the address bar of your browser.

### Update the theme
Inside the folder of your Hugo site run:

```bash
$ git submodule update --remote --merge
```

## Contributing
If you find a bug or have an idea for a feature, feel free to write an [issue](https://github.com/opera7133/noknok/issues) or make a PR.

## License
This theme is released under the [MIT license](https://github.com/opera7133/noknok/blob/master/LICENSE).
