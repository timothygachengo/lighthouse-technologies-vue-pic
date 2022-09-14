<template>
  <div class="bottom-nav">
    <router-link to="/" class="nav-item">
      <img
        v-if="route.path === '/'"
        class="nav-img"
        src="@/assets/images/ho_ho1@3x.png"
        alt="bottom nav"
      />
      <img
        v-else
        class="nav-img"
        src="@/assets/images/ho_ho2@3x.png"
        alt="bottom nav"
      />
    </router-link>

    <router-link to="/promotion" class="nav-item">
      <img
        v-if="route.path === '/promotion'"
        class="nav-img"
        src="@/assets/images/ho_ac1@3x.png"
        alt="bottom nav"
      />
      <img
        v-else
        class="nav-img"
        src="@/assets/images/ho_ac2@3x.png"
        alt="bottom nav"
      />
    </router-link>

    <router-link to="/wallet" class="nav-item">
      <img
        v-if="route.path === '/wallet'"
        class="nav-img"
        src="@/assets/images/ho_wa1@3x.png"
        alt="bottom nav"
      />
      <img
        v-else
        class="nav-img"
        src="@/assets/images/ho_wa2@3x.png"
        alt="bottom nav"
      />
    </router-link>

    <router-link to="/customService" class="nav-item">
      <img
        v-if="route.path === '/customService'"
        class="nav-img"
        src="@/assets/images/ho_co1@3x.png"
        alt="bottom nav"
      />
      <img
        v-else
        class="nav-img"
        src="@/assets/images/ho_co2@3x.png"
        alt="bottom nav"
      />
    </router-link>

    <router-link to="/profile" class="nav-item">
      <img
        v-if="route.path === '/profile'"
        class="nav-img"
        src="@/assets/images/ho_my1@3x.png"
        alt="bottom nav"
      />
      <img
        v-else
        class="nav-img"
        src="@/assets/images/ho_my2@3x.png"
        alt="bottom nav"
      />
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "BottomNavLayout",
  setup() {
    const route = useRoute();

    return {
      route,
    };
  },
});
</script>

<style lang="scss" scoped>
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 13vw;
  box-shadow: 1px 0 1.06667vw 1px #1a1a1a;
  background-color: var(--bg-secondary-color);
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #333;
  z-index: 100;

  .nav-item {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    .nav-img {
      width: 6vw;
      height: 6vw;
    }
  }
}
</style>
