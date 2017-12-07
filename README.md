# gatsby-starter-blog
Gatsby starter for creating a blog

Install this starter (assuming Gatsby is installed) by running from your CLI:
`gatsby new gatsby-blog https://github.com/gatsbyjs/gatsby-starter-blog`

## Running in development
`gatsby develop`

https://toddmotto.com/typescript-setters-getter

## TODO:
* [x] Install google-analytics plugin
* [ ] Move static pages, like _L-system to github_, _rescuetime redirect_, and adapt links in the markdown files
    * [x] redirects
    * [x] projects/d3-bubble-chart
    * [x] fractals-LSystem
* [x] Check if feed is correct
* [ ] Add drip widget?
* [x] Make mobile responsive
* [ ] Write plugin that reads markdown svgs and copies them over modifying the markdown. like `gatsby-remark-images`. Done by `copy` plugin.
* [ ] Write plugin that copies over un-digested markdown-images without modifying the markdown according to the post's *slug*! (Needed solely for cross posting)

## Cross post
* [ ] Write command that publishes posts to medium + steemit
* [ ] Do custom markdown parse, set relative image + url paths to absolute ones
* [ ] Add custom footer backlinking to homepage
* [ ] Check if post is already published by checking url
* [ ] Trigger it by CI, make a `git diff` to grep *newly added* markdown files.