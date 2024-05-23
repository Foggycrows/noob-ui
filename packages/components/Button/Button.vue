/*
 * Button.vue 组件逻辑
 * Button.test.tsx 测试用例
 * types.ts TS类型声明
 * style.css 样式声明
 * constants.ts 常量
*/

<script setup lang="ts">
import type { ButtonProps, ButtonEmits, ButtonInstance } from './types';
import { ref } from 'vue'
import { throttle } from 'lodash-es';

defineOptions({
  name: 'ErButton'
})
const props = withDefaults(defineProps<ButtonProps>(), {
  tag: "button",
  nativeType: "button",
  useThrottle: true,
  throttleDuration: 500
}) 

const emits = defineEmits<ButtonEmits>()

const slots = defineSlots()

const _ref = ref<HTMLButtonElement>()

const handleBtnClick = (e: MouseEvent) => emits("click", e)
const handleBtnClickThrottle = throttle(handleBtnClick, props.throttleDuration)

defineExpose<ButtonInstance>({
  ref: _ref
})
</script>

<template>
  <component 
    :is="props.tag"
    ref="_ref"
    class="er-button"
    :type="tag === 'button' ? nativeType : void 0"
    :disabled="disabled || loading ? true : void 0"
    :class="{
      [`er-button--${type}`]: type,
      [`er-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading,
    }"
    @click="
      (e: MouseEvent) => 
        useThrottle ? handleBtnClickThrottle(e) : handleBtnClick(e)
    "
  >
    <slot></slot>
  </component>
</template>

<style>
@import './style.css';
</style>