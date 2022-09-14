<script lang="ts">
import { defineComponent } from "vue";
import TopBarLayout from "./TopBarLayout.vue";
import BottomNavLayout from "./BottomNavLayout.vue";

export default defineComponent({
  components: {
    TopBarLayout,
    BottomNavLayout,
  },
});
</script>

<template>
  <div>
    <TopBarLayout />
    <BottomNavLayout />
    <router-view></router-view>
  </div>
</template>

<style></style>
