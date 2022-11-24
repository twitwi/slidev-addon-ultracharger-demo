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

const FEATURE = (name) => `
---
background: https://source.unsplash.com/JgOeRuGD_Y4/medium
layout: cover
attibution: Photo by <a href="https://unsplash.com/@heytowner?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">JOHN TOWNER</a> on <a href="https://unsplash.com/s/photos/dark-background?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
---
# NEXT FEATURE
<div style="font-size: 200%; color: grey; font-style: italic;">
${name}
</div>

---

# ${name}
`

export default definePreparserSetup(() => {
  return [
    {
      name: 'FEATURE',
      transformRawLines(lines) {
        let i = 0
        while (i < lines.length) {
          const l = lines[i]
          if (match(l, /^@@@@@FEATURE@@@@@ +/i)) {
            lines.splice(i, 1, ...FEATURE(_rest).split('\n'))
            continue
          }
          i++
        }
      }
    },
  ]
})
