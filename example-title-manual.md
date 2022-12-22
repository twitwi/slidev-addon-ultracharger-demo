
# <span v-html="$slidev.configs.title?.replaceAll(' ', '<br/>')"></span>

<p v-html="$slidev.configs.subtitle?.replaceAll(' ', '<br/>')" class="bg-black py-5 py-2"></p>

<p
v-html='"date author venue"
        .split(" ")
        .map(k =>$slidev.configs[k]).join(" <br/> ")'>
</p>

<div style="position: absolute; left:10px; bottom:10px; width: 350px;">
    Here, we access the config variables (headmatter) directly in the slide, see <gh href="./example-title-manual.md" :prefix="$slidev.configs.ghSelf" />
</div>
