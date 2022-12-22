
# <config-var name="title"/>

<config-var type="p" name="subtitle" nbsp="<br/>" class="bg-black py-5 py-2"/>

<p>
  <template v-for="v in 'date author venue'.split(' ')">
  <config-var :name="v"/><br/>
  </template>
</p>

<div style="position: absolute; left:10px; bottom:10px; width: 350px;">
    Here, we some helper component to access the config variables (headmatter), see <gh href="./example-title-component.md" :prefix="$slidev.configs.ghSelf" />
</div>
