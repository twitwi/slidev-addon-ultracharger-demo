---
theme: seriph
addons:
  - slidev-addon-ultracharger
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
---

# <span v-html="$slidev.configs.title?.replaceAll(' ', '<br/>')"></span>

A doc/demo for the ultracharger set of [Sli.dev](https://sli.dev) addons.

<c type="div">(this is a div comment)</c>

Each feature is illustrated in its own part.<c>(this is a comment)</c>

Some guidance is also given about usage/limitations/evolutions/improvements/TODO/etc.

<!--
NB: This demo uses a custom syntax (using preparser extensions).bbb
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
- should be instantiated in <gh href="./global-top.vue"/> (in your presentation)
- registration of the keyboard shortcut in <gh href="./setup/shortcuts.ts"/>
- NB: to test, open a client and a presenter view and press <kbd>b</kbd> in the presenter view.
- NB: the presenter view is **not available** if you view from a hosted (e.g. github pages) version






@@@@@FEATURE@@@@@ title page / closing page


Displays metadata
(see next slide)


---
background: https://source.unsplash.com/9Y9I1T4yOvo/medium
attribution: >-
  Photo by <a
  href="https://unsplash.com/@jackywatt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jacky
  Watt</a> on <a
  href="https://unsplash.com/collections/338595/walls?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
layout: cover
---
(here, access the config variables (headmatter) directly in the slides)

# <span v-html="$slidev.configs.title?.replaceAll(' ', '<br/>')"></span>

<p v-html="$slidev.configs.subtitle?.replaceAll(' ', '<br/>')" class="bg-black py-5 py-2"></p>

<p v-html='"date author venue".split(" ").map(k => $slidev.configs[k]).join(" <br/> ")'></p>

---
background: https://source.unsplash.com/9Y9I1T4yOvo/medium
attribution: >-
  Photo by <a
  href="https://unsplash.com/@jackywatt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jacky
  Watt</a> on <a
  href="https://unsplash.com/collections/338595/walls?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
layout: cover
---

(here, use some helper component to access the config variables)
# <config-var name="title"/>

<config-var type="p" name="subtitle" nbsp="<br/>" class="bg-black py-5 py-2"/>

<p>
  <template v-for="v in 'date author venue'.split(' ')">
  <config-var :name="v"/><br/>
  </template>
</p>




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
