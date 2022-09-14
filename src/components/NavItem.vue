<template>
  <div class="nav-item">
    <i :class="icon" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavItem",
  props: ["icon"],
});
</script>

<style lang="scss" scoped>
.nav-item {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  i {
    font-size: 1.4rem;
    color: #646566;
    -webkit-text-stroke-color: #fff;
    stroke-width: 0.5px;
    -webkit-text-stroke-width: 1px;
    -webkit-text-fill-color: transparent;
    fill: transparent;
  }
}
</style>
