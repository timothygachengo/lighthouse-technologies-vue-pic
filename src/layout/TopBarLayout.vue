<template>
  <header>
    <div class="topbar-item notifications">
      <button>
        <img src="../assets/images/ho_me@2x.png" alt="Notifications icon" />
      </button>
    </div>
    <div class="topbar-item title">
      <img src="@/assets/images/ho_lo@3x.png" alt="list" />
    </div>
    <div class="topbar-item more">
      <button>
        <img src="@/assets/images/ho_li@2x.png" alt="list" />
      </button>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TopBar",
});
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 10px;
  height: 60px;
  width: 100%;
  background-color: var(--bg-color);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  .topbar-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    button {
      background: none;
      border: none;
      outline: none;
      cursor: pointer;

      img {
        width: 100%;
        height: 30px;
      }
    }
  }
  .notifications {
    width: 50px;
  }
  .title {
    flex: 1;
    display: flex;
    align-items: center;

    img {
      width: 100px;
      height: 60px;
    }
  }

  .more {
    width: 50px;
  }
}
</style>
