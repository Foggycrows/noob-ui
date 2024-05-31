<script setup lang="ts">
import type { CollapseProps, CollapseEmits, CollapseItemName, CollapseContext, } from './types'
import { ref, provide, watch, watchEffect } from 'vue';
import { debugWarn } from '@noob-ui/utils';
import { COLLAPSE_CTX_KEY } from './constants';

const COMP_NAME = 'ErCollapse' as const

defineOptions({
  name: COMP_NAME
})

const props = defineProps<CollapseProps>()
const emits = defineEmits<CollapseEmits>()
const activeNames = ref<CollapseItemName[]>(props.modelValue)

// if (props.accordion && activeNames.value.length > 1) {
//   console.warn('accordion mode should only have one active item')
// }

function handleItemClick(item: CollapseItemName) {
  let _activeNames = [...activeNames.value]
  if (props.accordion) {
    // 开启手风琴模式
    _activeNames = [_activeNames[0] === item ? "" : item]
  } else {
    // 未开启手风琴模式
    const index = _activeNames.indexOf(item)
    if (index > -1) {
      _activeNames.splice(index, 1)
    } else {
      _activeNames.push(item)
    }
  }
  // 更新ActiveNames
  updateActiveNames(_activeNames)
}

function updateActiveNames(newNames: CollapseItemName[]) {
  activeNames.value = newNames
  emits("update:modelValue", newNames)
  emits("change", newNames)
}

watchEffect(() => {
  if (props.accordion && activeNames.value.length > 1) {
    debugWarn(COMP_NAME, 'accordion mode should only have one active item')
  }
})

watch (
  () => props.modelValue,
  (newNames) => updateActiveNames(newNames)
)

provide<CollapseContext>(COLLAPSE_CTX_KEY, {
  activeNames,
  handleItemClick
})

</script>

<template>
  <div class="er-collapse">
    <slot></slot>
  </div>
</template>

<style scoped>
@import "./style.css";
</style>
