<template>
    <code title="Click to toggle long form" :class="{pre: long}" @click="long = !long">{{ content }}</code>
    <span class="copy" @click="copy(content.trim())" title="copy to clipboard">(copy)</span>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useClipboard, usePermission } from '@vueuse/core'

const { copy } = useClipboard()
const permissionRead = usePermission('clipboard-read')

const props = defineProps({
    name: {type: String, default: undefined},
    value: {type: String, default: undefined},
    disable: {type: String, default: undefined}
})
const long = ref(false)
const path = computed(() => props.disable ? 'disable.'+props.disable : props.name)
const content = computed(() => {
    if (props.disable) {
        if (long.value) {
            return [
                'addonsConfig:',
                '  ultracharger:',
                '    disable:',
                '      - '+props.disable
            ].join('\n')
        } else {
            return `addonsConfig: { ultracharger: { disable: ['${ props.disable }'] } }`
        }
    } else {
        if (long.value) {
            return [
                'addonsConfig:',
                '  ultracharger:',
                `    ${props.name}: ${props.value}`
            ].join('\n')
        } else {
            return `addonsConfig: { ultracharger: { ${props.name}: ${props.value} } }`
        }
    }
})
</script>
<style scoped>
code {
    color: darkcyan;
}
.dark code {
    color: cyan;
}
code.pre {
    white-space: pre;
    border: 1px solid lightgray;
    display: block;
    line-height: 1.25em;
}
.copy:not(:hover) {
}
.copy {
    cursor: copy;
    font-size: 70%;
    display: inline-block;
    position: relative;
    padding: 0;
    line-height: 1em;
    box-sizing: border-box;
    margin-right: -3.8em;
    width: 4em;
    height: 1.1em;
    text-align: center;
    top: -1.5em;
    left: -4em;
    border: 1px solid gray;
    border-bottom-width: 0;
}
code.pre~.copy {
    border-width: 1px;
    border-right-width: 0;
    top: -2.3em;
    height: 1.4em;
}
</style>