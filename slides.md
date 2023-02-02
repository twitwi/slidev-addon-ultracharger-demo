---
theme: seriph
addons:
  - slidev-addon-ultracharger
addonsConfig:
  ultracharger: {}
  ultracharger:
    inlineSvg: 
      markersWorkaround: false
NObackground: >-
  https://images.unsplash.com/photo-1511149755252-35875b273fd6?ixlib=rb-4.0.3&dl=leon-contreras-qpdfU6vehgs-unsplash.jpg&w=1920&q=80&fm=jpg&crop=entropy&cs=tinysrgb
background: https://source.unsplash.com/qpdfU6vehgs
highlighter: shiki
info: >
  ## Slidev ultracharger demo

  A doc / demo presentation for the ultracharger set of
  [Sli.dev](https://sli.dev) addons.

  It also acts as an experimental area for some features I can imagine.


  NB: [Source code
  available](https://github.com/twitwi/slidev-addon-ultracharger)
css: windicss # or unocss
title: Slidev Ultracharger
subtitle: ...used as both a test page and a quick documentation
date: '2022-11-23'
venue: Online
author: Rémi Emonet
ghPrefix: https://github.com/twitwi/slidev-addon-ultracharger/blob/main/
ghSelf: https://github.com/twitwi/slidev-addon-ultracharger-demo/blob/main/
---

# <span v-html="$slidev.configs.title?.replaceAll(' ', '<br/>')"></span>

A doc/demo for the ultracharger set of [Sli.dev](https://sli.dev) addons.

<c type="div">(this is a div comment)</c>

Each feature is illustrated in its own part.<c>(this is a comment)</c>

Some guidance is also given about usage/limitations/evolutions/improvements/TODO/etc.

<!--
NB: This demo uses a custom syntax (using preparser extensions), with all the @@@@.
-->

@@@@@FEATURE@@@@@ a/z keys for slide browsing


Use <kbd>a</kbd> and <kbd>z</kbd> to navigate from slide to slide, showing the slides as they look after all clicks (animations) contrary to up/down arrows.

- defined in <gh href="./setup/shortcuts.ts"/>
- NB: the two next slides are just for you to try these <kbd>a</kbd> and <kbd>z</kbd> and how they differ from the default 4 arrow keys

---

## Trying a/z: Slide 1

<v-clicks>

- Step 1.1
- Step 1.2
- Step 1.3

</v-clicks>

- Reminder:
  - <kbd>&rarr;</kbd> step forward
  - <kbd>&larr;</kbd> step backward
  - <kbd>z</kbd> jump to next slide's end
  - <kbd>a</kbd> jump to previous slide's end
  - <kbd>&darr;</kbd> jump to next slide's beginning
  - <kbd>&uarr;</kbd> jump to previous slide's beginning

---

## Trying a/z: Slide 2

<v-clicks>

- Step 2.1
- Step 2.2
- Step 2.3

</v-clicks>

- Reminder:
  - <kbd>&rarr;</kbd> step forward
  - <kbd>&larr;</kbd> step backward
  - <kbd>z</kbd> jump to next slide's end
  - <kbd>a</kbd> jump to previous slide's end
  - <kbd>&darr;</kbd> jump to next slide's beginning
  - <kbd>&uarr;</kbd> jump to previous slide's beginning





@@@@@FEATURE@@@@@ b key to blackout


Use <kbd>b</kbd> to blackout remote clients' views (from presenter).

- defined as a component in <gh href="./components/Blackout.vue"/>
- instantiated by default in <gh href="./global-top.vue"/>
- can be disabled with <opt disable="blackout"/>
- registration of the keyboard shortcut in <gh href="./setup/shortcuts.ts"/>
- NB: to test, open a client and a presenter view and press <kbd>b</kbd> in the presenter view.
- NB: the presenter view is **not available** if you view from a hosted (e.g. github pages) version






@@@@@FEATURE@@@@@ Title page / Closing page


In a slide, one can use metadata (defined in the headmatter).

This allows to regroup some kind of global variables at the beginning of the file, in the headmatter.

These can then be used and reused in the presentation, without needing to replace everywhere.

This can be done either in the native slidev way or using a helper component. 
(see the links in the next two slides to compare both approaches)


---
background: https://source.unsplash.com/9Y9I1T4yOvo/medium
attribution: >-
  Photo by <a
  href="https://unsplash.com/@jackywatt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jacky
  Watt</a> on <a
  href="https://unsplash.com/collections/338595/walls?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
layout: cover
src: example-title-manual.md
---
(replace by src:)
(in a separate file to allow for easy linking to the code)

---
background: https://source.unsplash.com/9Y9I1T4yOvo/medium
attribution: >-
  Photo by <a
  href="https://unsplash.com/@jackywatt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jacky
  Watt</a> on <a
  href="https://unsplash.com/collections/338595/walls?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
layout: cover
src: example-title-component.md
---
(replace by src:)
(in a separate file to allow for easy linking to the code)




@@@@@FEATURE@@@@@ Default Footer
Which also displays metadata
(see any footer)

The addons also comes with a **default footer** with
- a centered footer with some metadata and the slide number
  - can be disabled with <opt disable="metaFooter" />
- a right footer with the TOC as dots
  - can be disabled with <opt disable="tocFooter" />
- defined in <gh href="./global-top.vue" />

The footer can be tuned with
- <opt name="fakeEnds" value="'5 -2'" /> with a list of slide index to use as fake ends, negative numbers being counted from the end (e.g. -2 if you have 2 extra slides to hide)
- <opt name="metaFooter" value="'date name'" /> (space-separated list of metadata)


@@@@@FEATURE@@@@@ Make KaTeX remember definitions

With proper configuration, one can use gdef in KaTeX/LaTeX code and reuse them in other blocks or even slides.

- defined in <gh href="./setup/katex.vue"/> (might work by default in some contexts?) (but it is still cool)

Also have KaTeX errors inline in color as in $a^2 + 2\ab + b^2$.

---

# KaTeX memory across slides

We can have a KaTeX block with our macro definitions

$$
\gdef\xy{\green{X,y}}
\text{we can define macros and use them in a block: } \xy{}
$$

And use them in our text $\xy{}$

or in some block

<p></p>

$$
\text{we can use in a block: } \xy{}
$$


---

# KaTeX memory across slides

even in another slide, we can reuse definitions $\xy{}$





@@@@@FEATURE@@@@@ SVG Inlining
Loading SVG into the DOM

Use like an `img` but it is inlined: the SVG ends up in the DOM.

This allows CSS styling and js interactions. \
For instance, we set css :hover to blur.

Move the pointer on any part of the image to test.
<InlineSvg src="/nn-deep.svg" />

<style>
  /* need :deep() as the loading happens after the automatic addition of scoped css */
  :deep(svg) {  background: white; }
  :deep(svg) :is(path,text):hover { filter: blur(1px); transition: filter 300ms linear; }
</style>

---

# InlineSvg, specifying dimensions

The height and/or width can be specified, and will get inserted in the root `svg` element

<InlineSvg src="/nn-deep.svg" width="100%" wrap title="width=100%"/>

<InlineSvg src="/nn-deep.svg" height="50px"  wrap title="height=50px"/>

<InlineSvg src="/nn-deep.svg" height="100px" width="75%" wrap title="height=100px width=75%" />


<style>
  :deep(svg) { border: 1px solid red; background: white; }
</style>

---

# InlineSvg, wrapping

By default, the `InlineSvg` directly ends up as `svg` (with no added properties)
<InlineSvg src="/nn-deep.svg" class="blurry is not considered" height="130px" />

... `<InlineSvg wrap src=.../>` wraps it (inside a `div`), that inherits the properties (e.g. a `blurry` class)
<InlineSvg src="/nn-deep.svg" class="blurry" wrap height="130px"/>
NB: height and/or width are applied to the `svg` element

<style>
  :deep(svg) {  background: white; }
  .blurry {
    filter: blur(2px);
  }
</style>


---

# InlineSvg, automated id rewrite (et al.)

Two SVG images, here as `img`, with funky arrows in the second one.
<img src="/arrows1.svg" width="100"/>
<img src="/arrows2.svg" width="100"/>

<p>
As inlined SVG (both use the same ids, so there is a contamination problem)
<InlineSvg src="/arrows1.svg" height="120px" :opts="{idRewrite: false}"/>
<InlineSvg src="/arrows2.svg" height="120px" :opts="{idRewrite: false}"/>
</p>

<p>
Fixed using idRewrite (set by default)
<InlineSvg src="/arrows1.svg" height="120px" />
<InlineSvg src="/arrows2.svg" height="120px" />
</p>

(more on the next slide)

<style>
  :deep(svg), img { display: inline-block; background: white; }
  :deep(svg) { border: 1px solid red; }
</style>

---

# InlineSvg, options and workarounds
Configuring the InlineSvg element.

In addition to width/height/wrap attributed, more advanced options like `idRewrite` can be specified as
  - `<InlineSvg :opts="{...}" />`
  - a list of options can be found at <gh href="./components/InlineSvg.vue" line="51"/>


NB: In case **missing arrows in your SVG** <img src="/arrows1-notfixed.svg" width="50" title="img tag"/><InlineSvg src="/arrows1-notfixed.svg" width="50px"  wrap class="svg" title="InlineSvg tag, option is not set by default"/>, <InlineSvg src="/arrows1-notfixed.svg" width="50px" :opts="{markersWorkaround: true}" wrap class="svg" title="InlineSvg tag, setting markersWorkaround"/>, <img src="/arrows1.svg" width="50" title="img tag, modified svg file"/><InlineSvg src="/arrows1.svg" width="50px" wrap class="svg" title="InlineSvg tag, modified svg file"/>
- set `:opts="{markersWorkaround: true}"`
- this is caused for instance by Inkscape exporting with SVG2 constructs (context-fill, context-stroke), that are not handled by browsers (chrome ignores it, firefox do not render markers at all).

**Default options** can also be set globally in your presentation with
<opt name="inlineSvg" value="{ markersWorkaround: true }"/>

<style>
  img, .svg, .svg :deep(svg) { display: inline !important; }
</style>
