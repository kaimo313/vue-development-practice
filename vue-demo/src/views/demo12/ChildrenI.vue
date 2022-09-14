<template functional>
  <div class="border2">
    <!-- 函数式组件使用injections -->
    <h3 :style="{ color: injections.theme.color }">I 结点（第三级）</h3>
  </div>
</template>
<script>
export default {
  inject: {
    theme: {
      default: () => ({})
    }
  }
};
</script>
