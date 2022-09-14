<template>
  <div class="border2">
    <h3 :style="{ color: theme1.color }">F 结点（第三级）</h3>
  </div>
</template>
<script>
export default {
  components: {},
  inject: {
    // 可以通过 from 命别名
    theme1: {
      from: "theme",
      default: () => ({})
    }
  }
};
</script>
