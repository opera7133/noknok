# Noknok

![78105b82-e1ac-48d9-81ba-a2be8e8b998d](https://user-images.githubusercontent.com/39876629/109757633-844ddd00-7c2d-11eb-83ed-bada9fd29990.png)

A white-based theme for portfolios.

The demo can be seen here: https://noknok.netlify.app

## Features
* Responsive
* Google Analytics
* Yandex Metrica
* RSS Feeds

## Recommended font settings

### English
You don't have to do anything :)

### 日本語
以下のコード（diff）の通りに```static/css/style.css```を置き換え、minifyしてください。
```diff
-@font-face {
-  font-family: OpenSans;
-  src: url("/fonts/OpenSans-Regular.ttf") format("truetype");
-  font-weight: 400;
-}
-@font-face {
-  font-family: OpenSans;
-  src: url("/fonts/OpenSans-Bold.ttf") format("truetype");
-  font-weight: 700;
-}
+@font-face {
+  font-family: NotoSansJP;
+  src: url("/fonts/NotoSansJP-Regular.otf") format("opentype");
+  font-weight: 400;
+}
+@font-face {
+  font-family: NotoSansJP;
+  src: url("/fonts/NotoSansJP-Bold.otf") format("opentype");
+  font-weight: 700;
+}
```

```diff
-html {
-  font-family: "Raleway", "OpenSans", sans-serif;
-  font-weight: 400;
-  font-style: normal;
-}
-.content {
-  font-family: "OpenSans", sans-serif;
-  font-weight: 400;
-  font-style: normal;
-}
+html {
+  font-family: "Raleway", "NotoSansJP", sans-serif;
+  font-weight: 400;
+  font-style: normal;
+}
+.content {
+  font-family: "NotoSansJP", sans-serif;
+  font-weight: 400;
+  font-style: normal;
+}
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
