### Gatsby.js theme

# Elevator Pitch

![Elevator Pitch - Gatsby.js theme](https://github.com/greglobinski/gatsby-themes/raw/master/media/gatsby-theme-elevator-pitch.gif)

> [DEMO](https://greglobinski.github.io/gatsby-starter-elevator-pitch/)

## Get started

### Install

Create a new directory for your site and move into it.

```
mkdir mysite
cd mysite
```

Create a `package.json`.

```
yarn init -y
```

Install dependencies

```
yarn add react react-dom gatsby gatsby-theme-elevator-pitch
```

Create a `gatsby-config.js`.

```
touch gatsby-config.js
```

Inside `gatsby-config.js`, set up the theme:

```
module.exports = {
  __experimentalThemes: ['gatsby-theme-elevator-pitch']
};
```

And now you can open the site with demo content.

```
gatsby develop
```

### Starter

Instead installing a Gatsby.js site with the theme from scratch you can use the [Starter](https://github.com/greglobinski/gatsby-starter-elevator-pitch)

### Add content

#### Folders structure

Find folders `images` and `screens` inside the `content/elevator-pitch` folder.

```
root
  ├── content
  │   └── elevator-pitch
  │       ├── images
  │       │   └── ...
  │       └── screens
  │           └── ...
```

Put a `jpg` file named `avatar.jpg` into the `images` folder. Then add two or more `markdown` files to the `screens` folder.

```
root
  ├── content
  │   └── elevator-pitch
  │       ├── images
  │       │   └── avatar.jpg
  │       └── screens
  │           ├── 1___first-screen.md
  │           └── 2___second-screen.md
```

#### Files names

You can not use a different name for avatar than `avatar.jpg`.

The names of `markdown` files have to obey a pattern `X___slug.md`. Where `X` is a number indicating position of the screen. The number must be follewed by the `___` separator ( 3 x undescore ). The last part of the name, a `slug` is optional. Knowing that, you can name a file like this `1___.md` or `1__first-screen.md`. Take a look at the [demo content files](https://github.com/greglobinski/gatsby-themes/tree/master/packages/gatsby-theme-elevator-pitch/content/screens) of the theme in the repository.

#### Markdown `screen` files

This is example of a `markdown` file with content for one screen. Two sections: title (`#`) and a paragraph text below.

```
# This is the screen's title

And the screen's body copy.
```

You can add as many `screen` files as you want. But remember it should be an elevator pitch so less is better. ;)

#### Meta data and social links

Update your `gatsby-config.js`

```
module.exports = {
  siteMetadata: {
    title: `Gatsby.js 'Elevator Pitch' theme`,
    url: `https://github.com/jlengstorf/gatsby-theme-simple-docs`,
    image: 'preview.jpg',
    language: 'en',
    description: 'coming soon...',
    socialLinks: {
      github: 'https://github.com/greglobinski',
      twitter: 'https://twitter.com/greglobinski',
      mailto: 'mailto:greglobinski@gmail.com',
    },
  },
  module.exports = {
  __experimentalThemes: ['gatsby-theme-elevator-pitch']
};
```

### Start

Start the server:

```
gatsby develop
```

### Add Elevator Pitch to your Gatsby.js blog as a standard page

The above describe how to install the theme as a standalone one page website. If you want, you can add it to your Gatsby.js blog as a standard page.

For example, I have a blog built with the official `gatsby-starter-blog`. If you don't, install it now.

```
gatsby new gatsby-blog https://github.com/gatsbyjs/gatsby-starter-blog
```

Now, go to the newly created folder and install the theme

```
cd gatsby-blog
yarn add gatsby-theme-elevator-pitch
```

Then, open `gatsby-config.js` and setup the theme.

```
module.exports = {
  ...

  __experimentalThemes: ['gatsby-theme-elevator-pitch'],

  ...
```

Create a new page inside `src/pages`, with code like below. Let's call it `pitch.js`.

```
// src/pages/pitch.js

import React from 'react';
import { Viewer } from 'gatsby-theme-elevator-pitch';

const PitchPage = props => <Viewer />;

export default PitchPage;
```

Run `dev` server

```
gatsby develop
```

And open http://localhost:8000/pitch in your browser.

That's it!

However, there is an issue we have to fix.

If you open http://localhost8000 you will see that the starter renders the theme's screens as blog posts. And that is not what we want, right? To fix that we have to add filters to the `GraphQl` queries in `gatsby-node.js` and `index.js`.

```
// src/pages/index.js

...

  allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {

...
```

```
// gatsby-node.js

...

  allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1000
    ) {

...
```

Voila!

### License

The MIT License (MIT)

Copyright (c) 2018 greglobinski

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

```

```
