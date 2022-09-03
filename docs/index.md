# Typora Themeable

[![NPM](https://img.shields.io/npm/v/typora-themeable.svg?style=flat-square)](https://www.npmjs.com/package/typora-themeable)
[![GitHub Workflow Status (main)](https://img.shields.io/github/workflow/status/jhildenbiddle/typora-themeable/Build%20&%20Test/main?label=checks&style=flat-square)](https://github.com/jhildenbiddle/typora-themeable/actions?query=branch%3Amain+)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://github.com/jhildenbiddle/typora-themeable/blob/main/LICENSE)
[![jsDelivr](https://data.jsdelivr.com/v1/package/npm/typora-themeable/badge)](https://www.jsdelivr.com/package/npm/typora-themeable)
[![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?url=https%3A%2F%2Fgithub.com%2Fjhildenbiddle%2Ftypora-themeable&hashtags=developers,frontend,javascript)
<a class="github-button" href="https://github.com/jhildenbiddle/typora-themeable" data-icon="octicon-star" data-show-count="true" aria-label="Star jhildenbiddle/typora-themeable on GitHub">Star</a>

A beautiful, customizable, typography-focused theme for the markdown editor, [Typora](https://typora.io).

<picture>
    <source srcset="assets/img/screenshot-dark.webp" media="(prefers-color-scheme:dark)">
    <img src="assets/img/screenshot-light.webp">
</picture>

## Features

- Fast and flexible customization using CSS custom properties
- Light mode, dark mode, and auto-switching theme variants
- Based on the [Inter](https://rsms.me/inter/) typeface family by [Rasmus Andersson](https://rsms.me) ([@rsms](https://twitter.com/rsms))
- Includes color presets from [Tailwind CSS](https://tailwindcss.com/docs/customizing-colors)
- Compatible with all Typora platforms (macOS, Windows, Linux)

## Installation

1. Download Typora Themeable: <a href="https://github.com/jhildenbiddle/typora-themeable/archive/main.zip" download="typora-themeable.zip">typora-themeable.zip</a>
2. Extract files from the archive
3. Copy the contents of the `dist` directory into Typora's `themes` directory
   - Open Typora's preferences
   - Select **Appearance**
   - Click **Open Theme Folder**
4. Delete the archive and the remaining extracted files
5. Restart Typora
6. Select a **Themeable** theme  from Typora's **Preferences** or **Themes** menu

Alternatively, command line users can perform the same download, extract, copy, and delete actions in a single step using one of the following commands:

<!-- tabs:start -->

#### **macOS**

```shell
cd ~/Library/Application Support/abnerworks.Typora/themes/ \
  && curl -L https://github.com/jhildenbiddle/typora-themeable/tarball/master -o themeable.tgz \
  && tar -f themeable.tgz -xzv --strip-components=2 "*/dist/*" \
  && rm themeable.tgz
```

#### **Windows**

Command Prompt:

```shell
cd /d "%USERPROFILE%\AppData\Roaming\Typora\themes" ^
  && curl -L https://github.com/jhildenbiddle/typora-themeable/tarball/master -o themeable.tgz ^
  && tar -f themeable.tgz -xzv --strip-components=2 "*/dist/*" ^
  && rm themeable.tgz
```

Powershell:

```shell
cd ~\AppData\Roaming\Typora\themes;
if ($?) { curl https://github.com/jhildenbiddle/typora-themeable/tarball/master -o themeable.tgz };
if ($?) { tar -f themeable.tgz -xzv --strip-components=2 "*/dist/*" };
if ($?) { rm themeable.tgz };
```

#### **Linux**

1. Determine the path to Typora's `themes` folder:
   - Open Typora's preferences
   - Select **Appearance**
   - Click **Open Theme Folder**
2. Navigate to Typora's `themes` folder

   ```shell
   cd ~/path/to/Typora/themes/
   ```

3. Execute the following command

   ```shell
   curl -L https://github.com/jhildenbiddle/typora-themeable/tarball/master -o themeable.tgz \
     && tar -f themeable.tgz -xzv --strip-components=2 "*/dist/*" \
     && rm themeable.tgz
   ```

<!-- tabs:end -->

!> **Don't forget to update Typora Themeable!**<br>Typora current does not auto-update third-party themes when new versions are released. To ensure you are running the latest version of Typora Themeable, check this site periodically or follow [@jhildenbiddle](https://twitter.com/jhildenbiddle) for update notifications.

## Customization

Typora Themeable offers customizable [theme properties](#theme-properties) defined using [CSS custom properties](https://jhildenbiddle.github.io/docsify-themeable/#/customization). These properties allow style changes to be made quickly and confidently without the need to navigate and modify complex CSS.

Typora provides built-in support for modifying theme styles using a `[theme].user.css` stylesheet. This stylesheet is automatically loaded *after* the `[theme].css` stylesheet, which allows for theme customization without there need to modify the theme's CSS (see [official documentation](https://support.typora.io/Add-Custom-CSS/) for details).

### Adding Custom Styles

1. Review the [Theme Properties](#theme-properties) below for complete list of customizable theme styles.
2. Add a `[theme].user.css` stylesheet in Typora's theme directory:
   - For **Themeable**, create or download <a href="data:text/plain;charset=utf-8,%3Aroot%20%7B%0A%0A%7D%0A%0A%2F%2A%20Dark%20Mode%20%28OS-level%29%20%2A%2F%0A%40media%20screen%20and%20%28prefers-color-scheme%3A%20dark%29%20%7B%0A%20%20%3Aroot%20%7B%0A%0A%20%20%7D%0A%7D" download="themeable.user.css" title="Download CSS">themeable.user.css</a>
   - For **Themeable Dark**, create or download <a href="data:text/plain;charset=utf-8,%3Aroot%20%7B%0A%0A%7D%0A%0A%2F%2A%20Dark%20Mode%20%28OS-level%29%20%2A%2F%0A%40media%20screen%20and%20%28prefers-color-scheme%3A%20dark%29%20%7B%0A%20%20%3Aroot%20%7B%0A%0A%20%20%7D%0A%7D" download="themeable-dark.user.css" title="Download CSS">themeable-dark.user.css</a>
   - For **Themeable Light**, create or download <a href="data:text/plain;charset=utf-8,%3Aroot%20%7B%0A%0A%7D%0A%0A%2F%2A%20Dark%20Mode%20%28OS-level%29%20%2A%2F%0A%40media%20screen%20and%20%28prefers-color-scheme%3A%20dark%29%20%7B%0A%20%20%3Aroot%20%7B%0A%0A%20%20%7D%0A%7D" download="themeable-light.user.css" title="Download CSS">themeable-light.user.css</a>
3. Set custom theme property values using the `:root` selector. These values will be applied regardless of the operating system's light/dark mode setting. Note that because this is a standard stylesheet you are free to `@import` other stylesheets, define new `@font-face` rules, override existing CSS rulesets, etc.

   ```css
   @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap');

   :root {
     --color-primary   : var(--pink-500);
     --font-family-mono: "Fira Code", monospace;
   }
   ```

4. Custom theme properties values that should only be applied in dark or light mode should be nested within the corresponding `@media` rule.

   ```css
   /* Dark Mode (OS-level) */
   @media screen and (prefers-color-scheme: dark) {
     :root {
         --color-primary: var(--violet-500);
     }
   }

   /* Light Mode (OS-level) */
   @media screen and (prefers-color-scheme: light) {
     :root {
         --color-primary: var(--violet-500);
     }
   }
   ```

### Colors

### Theme Properties

<!-- [vars-basic.css](src/core/vars-basic.css ':include') -->

<!-- [vars-advanced.css](src/core/vars-advanced.css ':include') -->

## Contact & Support

- Create a [GitHub issue](https://github.com/jhildenbiddle/typora-themeable/issues) for bug reports, feature requests, or questions
- Follow [@jhildenbiddle](https://twitter.com/jhildenbiddle) for announcements
- Add a ⭐️ [star on GitHub](https://github.com/jhildenbiddle/typora-themeable) or 🐦 [tweet](https://twitter.com/intent/tweet?url=https%3A%2F%2Fgithub.com%2Fjhildenbiddle%2Ftypora-themeable&hashtags=typora,markdown,css,developers) to support the project!

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/jhildenbiddle/typora-themeable/blob/master/LICENSE) for details.

Copyright (c) John Hildenbiddle ([@jhildenbiddle](https://twitter.com/jhildenbiddle))
