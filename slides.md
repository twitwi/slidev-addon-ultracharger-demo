---
theme: seriph
addons:
  - slidev-addon-ultracharger
addonsConfig:
  ultracharger:
    inlineSvg: 
      markersWorkaround: false
NObackground: >-
  https://images.unsplash.com/photo-1511149755252-35875b273fd6?ixlib=rb-4.0.3&dl=leon-contreras-qpdfU6vehgs-unsplash.jpg&w=1920&q=80&fm=jpg&crop=entropy&cs=tinysrgb
background: https://source.unsplash.com/qpdfU6vehgs
highlighter: shiki
routerMode: hash
lineNumbers: true
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

In addition to width/height/wrap attributes, more advanced options like `idRewrite` can be specified as
  - `<InlineSvg :opts="{...}" />`
  - a list of options can be found at <gh href="./components/InlineSvg.vue" line="51"/>


NB: In case **missing arrows in your SVG**
 <img src="/arrows1-notfixed.svg" width="50" title="img tag"/>
 <InlineSvg src="/arrows1-notfixed.svg" width="50px"  wrap class="svg" title="InlineSvg tag, option is not set by default"/>,
 <InlineSvg src="/arrows1-notfixed.svg" width="50px" :opts="{markersWorkaround: true}" wrap class="svg" title="InlineSvg tag, setting markersWorkaround"/>,
 <img src="/arrows1.svg" width="50" title="img tag, modified svg file"/>
 <InlineSvg src="/arrows1.svg" width="50px" wrap class="svg" title="InlineSvg tag, modified svg file"/>
- set `:opts="{markersWorkaround: true}"`
- this is caused for instance by Inkscape exporting with SVG2 constructs (context-fill, context-stroke), that are not handled by browsers (chrome ignores it, firefox do not render markers at all).

**Default options** can also be set globally in your presentation with
<opt name="inlineSvg" value="{ markersWorkaround: true }"/>

<style>
  img, .svg, .svg :deep(svg) { display: inline !important; }
</style>





@@@@@FEATURE@@@@@  Click animations (fine grained clicks)
Animating (clicks) more precisely.


---

# v-clicks every="2"

(feature from slidev)

Can make children appear several at a time.

(demo content) E.g., slidev is

<v-clicks :every="2">

- 📝 **Text-based** - focus...
- 🎨 **Themable** - theme ...
- 🧑‍💻 **Developer Friendly** - code highlighting, ...
- 🤹 **Interactive** - embedding Vue components ...
- 🎥 **Recording** - built-in recording and camera view
- 📤 **Portable** - export into PDF, ...
- 🛠 **Hackable** - anything possible on a webpage

</v-clicks>

They appear 2 by 2

---

<Anim spec="li:nth-child(2n) | strong | h1 | li:nth-child(2n+1),a">

# `<Anim spec="...">`, basic appearance

`spec="li:nth-child(2n) | strong | h1 | li:nth-child(2n+1),a"`

(it uses a custom syntax to decide what to show, step by step, steps are separated by `|`, \
each step is here a css selector of the elements to show at this step \
these elements are automatically hidden at the beginning of the slide

(demo content) Slidev is

- 📝 **Text-based** - focus...
- 🎨 **Themable** - theme ...
- 🧑‍💻 **Developer Friendly** - code highlighting, ...
- 🤹 **Interactive** - embedding Vue components ...
- 🎥 **Recording** - built-in recording and camera view
- 📤 **Portable** - export into PDF, ...
- 🛠 **Hackable** - anything possible on a webpage

Read more about [Why Slidev?](https://sli.dev/guide/why)

</Anim>

---

NB:

- defined in <gh href="./components/Anim.vue"/>
- some style in <gh href="./style.css" line="14"/>
- more features in the next slides (and in section animating SVG)

---

# `<Anim>`: Hide things, add/remove classes

spec=\
`"-.test | @+class bg-red-500 li | @+class blurry li li, code | @-class bg-red-500 li"`

<Anim spec="-.test | @+class bg-red-500 li | @+class blurry li li, code | @-class bg-red-500 li">

- NB: we can add a `-` to hide an element <span class="test">, e.g. this one</span>
- NB: bg-red-500 is a class that comes from windicss, blurry is defined in the slide
- NB: no problem with css selectors that contain spaces like `li li, code`
- test
  - test2
  - test2
- test

</Anim>

<style>
  .blurry { filter: blur(5px); }
</style>

---

# `<Anim>`: several actions in a step/click

spec=\
`"a | -a ^ strong | -strong ^ em ^ @+class blur div | a,strong ^ @+class blur strong,em"`

<Anim spec="a | -a ^ strong | -strong ^ em ^ @+class blur div | a,strong ^ @+class blur strong,em">

<div>some div here</div>

A link (a) [here is an a](https://sli.dev/guide/why)

Some bold (strong) **here is a strong**

Some italic (em) *here is an em*

</Anim>

<style>
  .blur { filter: blur(3px); }
</style>







@@@@@FEATURE@@@@@  SVG animations (and related)

(using `<Anim>` and `<InlineSvg>`)

---

# `<Anim>` works with (inline) SVG elements

`spec="#rect846 | #path930 | @+class blur text | @-class blur #text26519"`

<Anim spec="#rect846 | #path930 | @+class blur text | @-class blur #text26519">
<InlineSvg src="/nn-deep.svg" />
</Anim>

<style>
  /* need :deep() as the loading happens after the automatic addition of scoped css */
  :deep(svg) .blur { filter: blur(2px); }
</style>

---

# `<Anim>` allows any mix

`spec=".svg2 | .svg1 | #fr1,#fr2 | .svg1 #fr3 | .svg2 #fr3 | -text | em"`

<Anim spec=".svg2 | .svg1 | #fr1,#fr2 | .svg1 #fr3 | .svg2 #fr3 | -text | em">

<InlineSvg src="/test-anim.svg" width="420px" height="400px" wrap class="half svg1"/>

<InlineSvg src="/test-anim.svg" width="420px" height="400px" wrap class="half svg2"/>

*And voila!*

</Anim>

<style>
  :deep(svg) { border: 1px solid red; }
  .half { width: 50%; display: inline-block; }
  em { font-size: 30px; background: white; padding: 0 0.5em; margin-left: 1em; display: inline-block; transform: translate(0, -1.1em)}
</style>

---

# `<Anim>`: move along SVG path

`spec="@along #path1 #sh1,#sh2
| @along #path1 #sh3
| @along #path1 #sh1-1,#sh2-1,#sh3-1"`

<Anim spec="@along #path1 #sh1,#sh2
| @along #path1 #sh3
| @along #path1 #sh1-1,#sh2-1,#sh3-1">
<InlineSvg src="/test-anim.svg" height="400px"/>
</Anim>


---

# `<Anim>`: move along, control speed

`dur="700ms"` \
`spec="@along #path1 #sh1,#sh2
| @alongd #path1 2.5s #sh3
| @along #path1 #sh1-1,#sh2-1"`

`dur="..."` to set the default duration + `@alongd` instead of `@along` to specify a duration for the step.

<Anim dur="700ms" spec="@along #path1 #sh1,#sh2
| @alongd #path1 2.5s #sh3
| @along #path1 #sh1-1,#sh2-1">
<InlineSvg src="/test-anim.svg" height="350px"/>
</Anim>

---

# `<Anim>`: successive move along and backward move

`spec="@along #path1 #sh1,#sh3-1
 | @along #path1 #sh1,#sh3-1` \
`     | @along -#path1 #sh1,#sh3-1
| @along #path1 #sh1,#sh3-1`

NB: newlines are ok in `spec`

<Anim spec="@along #path1 #sh1,#sh3-1
| @along #path1 #sh1,#sh3-1
| @along -#path1 #sh1,#sh3-1
| @along #path1 #sh1,#sh3-1">
<InlineSvg src="/test-anim.svg" height="330px"/>
</Anim>


---

# `<Anim>`: move along on non-SVG elements

`spec="
 @along #path1   .stuff
| @along #path1-1 .stuff
| @along #path1-1 .stuff"`

NB: still needs an SVG path, also svg vs html units can be tricky.

<Anim spec="
 @along #path1   .stuff
| @along #path1-1 .stuff
| @along #path1-1 .stuff
">
...
<span style="display: inline-block" class="stuff">stuff</span>
...
<span style="display: inline-block" class="stuff">evolve <ExampleCounter /></span>
...
<InlineSvg src="/test-anim.svg" wrap style="display:none"/>
</Anim>

<style>
  .stuff { border: 1px solid red; }
</style>





@@@@@FEATURE@@@@@  Playing with the (SVG) viewBox

(still using `<Anim>`)

---

# `<Anim>`: Playing with the SVG viewBox, zooming

`spec="@viewbox #fr1 | @alongd #sh1-1 1500 #sh1-2` \
`    | @viewbox #rect6173 | @viewbox svg | @viewbox #rect6173` \
`    | @viewbox #sh3-1 | @viewboxd #sh1-2 1500 | @viewbox svg"`

NB: using `@viewbox` for default duration or `@viewboxd` to specify the duration.

<Anim spec="@viewbox #fr1 | @alongd #sh1-1 1500 #sh1-2 | @viewbox #rect6173 | @viewbox svg | @viewbox #rect6173 | @viewbox #sh3-1 | @viewboxd #sh1-2 1500 | @viewbox svg">
<InlineSvg src="/test-anim.svg" height="300px"/>
</Anim>


---

# `<Anim>`: TODO

- TODO: allow specifying ease-in-out etc (like duration)
- TODO: ^ maybe need special steps that set defaults for all coming steps (as in the original @anim)
- TODO: not necessarily possible: fix the @step issue with opacity animation on nested elements
- TODO: might use [:nth-child(... of ...)](https://caniuse.com/?search=nth-child%20of) when/if available in browsers
- TODO: implement viewBox-like anim for non-SVG








@@@@@FEATURE@@@@@  Marker-based steps/clicks

(still using `<Anim>`)

- defined in <gh href="./components/Anim.vue"/> with some CSS in <gh href="./style.css"/>

---

# Marker-based steps, raw, verbose

`spec="@step 1 | @step 2 | @step 3 | @step 4 | @step 5` \
`    | -strong | @step 6 | @step 7 | @step 99"`

NB: using class "step" on the marks \
NB: here some CSS to show the mark \
NB: the content starts hidden (low opacity) \
NB: any big number is ok to show everything

<Anim spec="@step 1 | @step 2 | @step 3 | @step 4 | @step 5 | -strong | @step 6 | @step 7 | @step 99">

- first level
- hum <span class="step"/>
- ok <span class="step"/> <span>now we'll **nest**</span>
  - nested 1 <span class="step"/>
  - nested 2 <span class="step"/> <span>and 2.5</span><span class="step"/>
  - and 3 <span class="step"/>
- voila! <span class="step"/>
- tada!

</Anim>

<style>
  span.anim-now::before { content: ''; outline: 2px solid blue;}
</style>

---

# Marker-based steps, control what is initially shown

`spec="@step 1 | @step 2 | -strong | @step 42"`

NB: use a mark with class `step0` (or just `<s0/>`) to decide up to where it is initially shown

<Anim spec="@step 1 | @step 2 | -strong | @step 42">

- first level
- hum
- ok now we'll <span class="step0"/> **nest**
  - nested 1
  - nested 2 <span class="step"/> <span>and 2.5</span>
  - and 3
- voila! <span class="step"/>
- tada!

</Anim>

<style>
  span.anim-now::before { content: ''; outline: 2px solid green;}
</style>

---

# Marker-based steps, `@step` shortcut + special `&|`

`spec="@step 1-4 | -strong | @step 5-"`

NB: can use `@step` with a range to simplify writing several `@step` \
NB: can use an open range as in `@step 5-` to go until the end \
NB: spec defaults to `@step 1-` \
NB: (TODO UPDATE) can use `&|` to insert a span with class `step` (implemented in <gh href="./vite.config.ts"/>)

<Anim spec="@step 1-4 | -strong | @step 5-">

- first level
- hum &|
- ok &| <span>now we'll **nest**</span>
  - nested 1 &|
  - nested 2 &| <span>and 2.5</span>&|
  - and 3 &|
- voila! &|
- tada!

</Anim>

<style>
  span.anim-now::before { content: ''; outline: 2px solid orange;}
</style>






@@@@@FEATURE@@@@@  Katex "align" (equation block) and code animation

`spec="@math 1-"`

$$
\gdef\lnp{\ln p}
\gdef\mcol{\blue}
\gdef\m{\mcol{μ}}
\gdef\pcol{\green}
\gdef\p{\pcol{π}}
\gdef\zcol{\red}
\gdef\z{\zcol{z}}
\gdef\Z{\zcol{Z}}
\gdef\s{σ}
\gdef\ndist#1#2{\mathcal{N}(#1,#2)}
\gdef\ndens#1#2#3{\mathcal{N}(#1,#2)(#3)}
\gdef\E{\mathbb{E}}
\gdef\comm#1{\text{\textcolor{gray}{#1} } }
$$

<Anim spec="@math 1-">

$$
\begin{align*}
\ln q_π(\p)
& = \E_{\neg π}[\lnp(X,\Z,\p,\m)] + K_1 \\
& \;\;\;\;\; \comm{(remove what is constant (and thus remains after expectation) with respect to $\p$)} \\
& = \E_{\neg π}\left[\ln prior(\p) + \sum_i \ln \p_{\z_i}\right] + K_2 \\
& \;\;\;\;\; \comm{(simplifying the expectations)} \\
& = \ln prior(\p) + \sum_i \E_{\z_i}[\ln \p_{\z_i}] + K_2 \\
& = \ln prior(\p) + \sum_i \sum_k q_z^i(k) \ln \p_k + K_2 \\
& \;\;\;\;\; \comm{($Dir(α)$ prior + swap sums)} \\
& = \sum_k (α_k -1 ) \ln \p_k + \sum_k \sum_i q_z^i(k) \ln \p_k + K_3 
\;\; \comm{with $q_z^i(k)$ the responsibility, i.e. $R_{ik}$} \\
& = \sum_k ((α_k+\sum_i R_{ik}) -1 ) \ln \p_k + K_3
\;\; \comm{(once reorganized)}
\end{align*}
$$

</Anim>

---

# `<Anim>` katex, specifying a context

`spec="@math 1- .my>:nth-child(1) | em | @math 1-3 .my>:nth-child(3)"`

<Anim spec="@math 1- .my>:nth-child(1) | em | @math 1-3 .my>:nth-child(3)" class="my">

$$
\begin{align*}
\ln q_π(\p)
& = \E_{\neg π}[\lnp(X,\Z,\p,\m)] + K_1 \\
& \;\;\;\;\; \comm{(remove what is constant (and thus remains after expectation) with respect to $\p$)} \\
& = \E_{\neg π}\left[\ln prior(\p) + \sum_i \ln \p_{\z_i}\right] + K_2 \\
& = \ln prior(\p) + \sum_i \E_{\z_i}[\ln \p_{\z_i}] + K_2
\end{align*}
$$

... <em>And we can rewrite the expectation</em>

$$
\begin{align*}
\ln q_π(\p)
& = \ln prior(\p) + \sum_i \sum_k q_z^i(k) \ln \p_k + K_2 \\
& = \sum_k (α_k -1 ) \ln \p_k + \sum_k \sum_i q_z^i(k) \ln \p_k + K_3 
\;\; \comm{with $q_z^i(k)$ the responsibility, i.e. $R_{ik}$} \\
& = \sum_k ((α_k+\sum_i R_{ik}) -1 ) \ln \p_k + K_3
\;\; \comm{(once reorganized)}
\end{align*}
$$

</Anim>


---

# `<Anim>` ordering and grouping (also for `@code`)

`spec="@math 2-3|1 .my>:nth-child(3) | em | @math [1|4|2-3] .my>:nth-child(1)` <br/>
`|`: for ordering a sequence, and `[]`: to show ranges at once (`2-3` vs `[2-3]`)

<Anim spec="@math 2-3|1 .my>:nth-child(3) | em | @math [1|4|2-3] .my>:nth-child(1)" class="my">

$$
\begin{align*}
\ln q_π(\p)
& = \E_{\neg π}[\lnp(X,\Z,\p,\m)] + K_1 \\
& \;\;\;\;\; \comm{(remove what is constant (and thus remains after expectation) with respect to $\p$)} \\
& = \E_{\neg π}\left[\ln prior(\p) + \sum_i \ln \p_{\z_i}\right] + K_2 \\
& = \ln prior(\p) + \sum_i \E_{\z_i}[\ln \p_{\z_i}] + K_2
\end{align*}
$$

... <em>And we can rewrite the expectation</em>

$$
\begin{align*}
\ln q_π(\p)
& = \ln prior(\p) + \sum_i \sum_k q_z^i(k) \ln \p_k + K_2 \\
& = \sum_k (α_k -1 ) \ln \p_k + \sum_k \sum_i q_z^i(k) \ln \p_k + K_3 
\;\; \comm{with $q_z^i(k)$ the responsibility, i.e. $R_{ik}$} \\
& = \sum_k ((α_k+\sum_i R_{ik}) -1 ) \ln \p_k + K_3
\;\; \comm{(once reorganized)}
\end{align*}
$$

</Anim>


---

# `<Anim>` code, each as a step, with context (highlight is on next slide)

`spec="@code 1,3 .c2 | @code [1|2-4|5-] .c1 | @code 2 .c2"`
<!-- or -->

<Anim spec="@code 1,3 .c2 | @code [1|2-4|5-] .c1 | @code 2 .c2" class="grid grid-cols-2 gap-4">
<div class="c1">

And more code later on the left

```ts
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
```

</div>
<div class="c2">

Some code later on the right

```css
h1 {
  color: red
}
```

</div>
</Anim>

---

# `<Anim>` code line highlight, with context

`spec="@code {0} ^ .c1,.c2 | @code {1|3} .c2 | @code {3-} .c1 | @code {2} .c2"`

<Anim spec="@code {0} ^ .c1,.c2 | @code {1|3} .c2 | @code {3-} .c1 | @code {2} .c2" class="grid grid-cols-2 gap-4">
<div class="c1">

And more code later on the left

```ts
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
```

</div>
<div class="c2">

Some code later on the right

```css
h1 {
  color: red
}
```

</div>
</Anim>


---

# `<Anim>` code, customizing CSS

`spec="@code 1,3 .c2 | @code [1|2-4|5-] .c1 | @code 2 .c2"`
<!-- or -->

<Anim spec="@code 1,3 .c2 | @code [1|2-4|5-] .c1 | @code 2 .c2" class="grid grid-cols-2 gap-4">
<div class="c1">

And more code later on the left

```ts
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
```

</div>
<div class="c2">

Some code later on the right

```css
h1 {
  color: red
}
```

</div>
</Anim>

<style>
/* Fold hidden code lines */
code .line.anim-hidden {
	display: block;
	overflow: hidden;
	margin-bottom: calc(-1 * var(--slidev-code-line-height)) !important;
}
code span.anim-hidden:not(:last-child) {
	height: 0;
}

/* Change line numbers based on visible lines only */
.slidev-code-line-numbers .slidev-code code .line.anim-hidden::before {
	counter-increment: none;
}
</style>






@@@@@FRONTMATTER@  layout: anim%nspec: '@step 1 | @step 2 | -strong | @step 42'
@@@@@FEATURE@@@@@  Anim Layout (shortcut)


Defined in <gh href="layouts/anim.vue"/>

It wraps the content into an anim, and expects a `spec` header as in

```yaml
layout: anim
spec: '@step 1 | @step 2 | -strong | @step 42'
```

- first level
- hum
- ok now we'll <s0/> **nest**
  - nested 1
  - nested 2 <span class="step"/> <span>and 2.5</span>
  - and 3
- voila! <span class="step"/>
- tada!

