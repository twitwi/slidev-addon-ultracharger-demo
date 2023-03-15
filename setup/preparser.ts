import { definePreparserSetup } from '@slidev/types'

let _match: string|undefined = undefined
let _rest: string|undefined = undefined

function match(l: String, reg: RegExp): any {
  let res = l.match(reg);
  _match = _rest = undefined
  if (res) {
    _match = res[0]
    _rest = l.replace(reg, '')
    return res
  }
}

const FEATURE = (name, frontmatter) => `
---
background: https://source.unsplash.com/JgOeRuGD_Y4/medium
layout: cover
attibution: Photo by <a href="https://unsplash.com/@heytowner?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">JOHN TOWNER</a> on <a href="https://unsplash.com/s/photos/dark-background?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
---
# NEXT FEATURE
<div style="font-size: 200%; color: grey; font-style: italic;">
${name}
</div>

${frontmatter}

# ${name}
`

export default definePreparserSetup(() => {
  return [
    {
      name: 'FEATURE',
      transformRawLines(lines) {
        let i = 0
        let frontmatter = '---'
        while (i < lines.length) {
          const l = lines[i]
          if (match(l, /^@@@@@FRONTMATTER@ +/i)) {
            lines.splice(i, 1)
            frontmatter = '---\n' + _rest?.replace('%n', '\n') + '\n---'
            continue
          }
          if (match(l, /^@@@@@FEATURE@@@@@ +/i)) {
            lines.splice(i, 1, ...FEATURE(_rest, frontmatter).split('\n'))
            frontmatter = '---'
            continue
          }
          i++
        }
      }
    },
  ]
})
