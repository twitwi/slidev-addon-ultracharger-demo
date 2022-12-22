---
theme: seriph
addons:
  - slidev-addon-ultracharger
addonsConfig:
  ultracharger: {}
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
