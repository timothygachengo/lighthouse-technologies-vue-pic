<template>
  <div v-cloak class="home">
    <div class="carousel">
      <Splide
        :options="{ rewind: true, arrows: false, autoplay: true, speed: 3 }"
        aria-label="My Favorite Images"
      >
        <SplideSlide
          class="banner-images-container"
          v-for="image in bannerImages"
          :key="image"
        >
          <img class="banner-image" :src="image" alt="My Favorite Images" />
        </SplideSlide>
      </Splide>
    </div>

    <div class="home-container hot-game">
      <div class="title">Hot Game</div>
      <div class="game-list">
        <div class="game" v-for="game in gameList" v-bind:key="game">
          <img :src="game" alt="Game" />
        </div>
      </div>
    </div>

    <div class="home-container bottom-wrap">
      <div class="login">
        <div class="login-left">
          <img
            class="login-left-img"
            src="@/assets/images/ho_mo@3x.png"
            alt="user"
          />
          <div class="login-left-text">
            <div class="login-left-top">
              <p>KEN</p>
              <img src="@/assets/images/ho_vi@3x.png" alt="crown" />
              <p>7</p>
            </div>
            <p><span>$</span>122121233</p>
          </div>
        </div>
        <div class="login-right">
          <img src="@/assets/images/ho_no@3x.png" alt="alerts" />
          <p>
            Dragon Boat Festival holiday!holiday!holiday! holiday!Dragon Boat
            Festival
          </p>
        </div>
      </div>
      <div class="game-swiper">
        <div class="sidebar">
          <div class="nav-item live" @click="() => setCategory('used')">
            <div class="nav-item-img">
              <img
                v-if="currentCategory === 'used'"
                class="nav-img"
                src="@/assets/images/ho_us1@3x.png"
                alt="live"
              />
              <img
                v-else
                class="nav-img"
                src="@/assets/images/ho_us2@3x.png"
                alt="live"
              />
            </div>
          </div>

          <div class="nav-item live" @click="() => setCategory('live')">
            <div class="nav-item-img">
              <img
                v-if="currentCategory === 'live'"
                class="nav-img"
                src="@/assets/images/ho_li1@3x.png"
                alt="live"
              />
              <img
                v-else
                class="nav-img"
                src="@/assets/images/ho_li2@3x.png"
                alt="live"
              />
            </div>
          </div>

          <div class="nav-item" v-on:click="() => setCategory('sport')">
            <div class="nav-item-img">
              <img
                v-if="currentCategory === 'sport'"
                class="nav-img active-img"
                src="@/assets/images/ho_sp1@3x.png"
                alt="live"
              />
              <img
                v-else
                class="nav-img"
                src="@/assets/images/ho_sp2@3x.png"
                alt="live"
              />
            </div>
          </div>

          <div class="nav-item" @click="() => setCategory('lottery')">
            <div class="nav-item-img">
              <img
                v-if="currentCategory === 'lottery'"
                class="nav-img"
                src="@/assets/images/ho_lo1@3x.png"
                alt="live"
              />
              <img
                v-else
                class="nav-img"
                src="@/assets/images/ho_lo2@3x.png"
                alt="live"
              />
            </div>
          </div>

          <div class="nav-item" @click="() => setCategory('poker')">
            <div class="nav-item-img">
              <img
                v-if="currentCategory === 'poker'"
                class="nav-img active-img"
                src="@/assets/images/ho_po1@3x.png"
                alt="live"
              />
              <img
                v-else
                class="nav-img"
                src="@/assets/images/ho_po2@3x.png"
                alt="live"
              />
            </div>
          </div>

          <div class="nav-item" @click="() => setCategory('slot')">
            <div class="nav-item-img">
              <img
                v-if="currentCategory === 'slot'"
                class="nav-img active-img"
                src="@/assets/images/ho_ga1@3x.png"
                alt="live"
              />
              <img
                v-else
                class="nav-img"
                src="@/assets/images/ho_ga2@3x.png"
                alt="live"
              />
            </div>
          </div>
        </div>

        <div class="game-brands">
          <div class="game-brand-category">
            <button
              class="game-brand"
              v-for="brand in currentGameBrandList"
              v-bind:key="brand.id"
            >
              <div class="game-img-container">
                <img :src="brand.url" alt="brand" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";

import "@splidejs/vue-splide/css";

export default defineComponent({
  name: "HomeView",
  components: {
    Splide,
    SplideSlide,
  },

  setup() {
    // reactive value to hold the current category
    const currentCategory = ref("used");

    // Data that will be used in the template for the game brands
    const gameBrandImages = [
      {
        id: 1,
        category: "live",
        url: "https://res.cloudinary.com/timothymugo2323/image/upload/v1663064313/game-brands/ea8593120644694a996c62cb6dddaa321657126216_d81igc.png",
      },
      {
        id: 2,
        category: "live",
        url: "https://res.cloudinary.com/timothymugo2323/image/upload/v1663064311/game-brands/e39a73e1a9c0740798000c5f7809d9f21657126112_oeqksc.png",
      },
      {
        id: 3,
        category: "live",
        url: "https://res.cloudinary.com/timothymugo2323/image/upload/v1663064309/game-brands/46969f693dfc58a2afc3b2fde6762a871657126202_y3vsfn.png",
      },
      {
        id: 4,
        category: "live",
        url: "https://res.cloudinary.com/timothymugo2323/image/upload/v1663064302/game-brands/4ea86ecb019f2d1d3bff6e22638a8aaa1662716140_e8abgx.png",
      },
      {
        id: 5,
        category: "live",
        url: "https://res.cloudinary.com/timothymugo2323/image/upload/v1663064302/game-brands/3e1aa044ebbc905ca6eb7817f66b5b3d1657126002_db2dwe.png",
      },
      {
        id: 6,
        category: "live",
        url: "https://res.cloudinary.com/timothymugo2323/image/upload/v1663064304/game-brands/7e2c9af0d26a1c3e22459940f603f8521657126187_sncrch.png",
      },
      {
        id: 7,
        category: "sport",
        url: "https://res.cloudinary.com/timothymugo2323/image/upload/v1663064311/game-brands/f2da81c70f71e80d5867a4329a43b03a1657126267_r5ktxh.png",
      },
      {
        id: 8,
        category: "sport",
        url: "https://res.cloudinary.com/timothymugo2323/image/upload/v1663064312/game-brands/c79f37bbb15d8287e71487e15a2607401657126252_xxqsds.png",
      },
      {
        id: 9,
        category: "sport",
        url: "https://res.cloudinary.com/timothymugo2323/image/upload/v1663064310/game-brands/dfa73262f1b19cc665bd78a14c9b6a451657126358_nnzmez.png",
      },
      {
        id: 10,
        category: "sport",
        url: "https://res.cloudinary.com/timothymugo2323/image/upload/v1663064310/game-brands/188daed50e8bab8e496ddc0722849c191657126346_ngywtw.png",
      },
      {
        id: 11,
        category: "lottery",
        url: "https://res.cloudinary.com/timothymugo2323/image/upload/v1663064310/game-brands/d63975ef804ce8e58ff2947e20e284dc1657125878_vk7pzt.png",
      },
      {
        id: 12,
        category: "sport",
        url: "https://res.cloudinary.com/timothymugo2323/image/upload/v1663064304/game-brands/7c934cdf3e66654f76bf58c4e59378341657126298_bacgng.png",
      },
      {
        id: 13,
        category: "sport",
        url: "https://res.cloudinary.com/timothymugo2323/image/upload/v1663064304/game-brands/63ef37f20cdbcf6441fcc34e1455da6b1657126283_taqmff.png",
      },
      {
        id: 14,
        category: "sport",
        url: "https://res.cloudinary.com/timothymugo2323/image/upload/v1663064308/game-brands/9577aea814a52f384dca9fd3494799c51657126328_t8qxik.png",
      },
      {
        id: 15,
        category: "teenpatti",
        url: "https://res.cloudinary.com/timothymugo2323/image/upload/v1663064305/game-brands/95b6fcf56de8ecb028aa0b5820c6983a1657126528_rh1kl5.png",
      },
      {
        id: 16,
        category: "teenpatti",
        url: "https://res.cloudinary.com/timothymugo2323/image/upload/v1663064314/game-brands/ac1cd6e9f41b4e54a8c49575ac7ac6ba1657126545_eixtyv.png",
      },
      {
        id: 17,
        category: "poker",
        url: "https://res.cloudinary.com/timothymugo2323/image/upload/v1663064312/game-brands/f50074a991abe476e7d5afcf28f53d1e1657126417_uqg4g4.png",
      },
      {
        id: 18,
        category: "slot",
        url: "https://res.cloudinary.com/timothymugo2323/image/upload/v1663064312/game-brands/cfc0dee333f38b02bcd443bfb12523e41657126377_tcg6a8.png",
      },
      {
        id: 19,
        category: "slot",
        url: "https://res.cloudinary.com/timothymugo2323/image/upload/v1663064306/game-brands/63b16f1758a3af5355a3806dae58fbe51657126388_ilejfe.png",
      },
      {
        id: 20,
        category: "used",
        url: "https://res.cloudinary.com/timothymugo2323/image/upload/v1663141132/game-brands/alldldkd_v6laf8.png",
      },
      {
        id: 21,
        category: "used",
        url: "https://res.cloudinary.com/timothymugo2323/image/upload/v1663141134/game-brands/app29_oe5l30.png",
      },
      {
        id: 22,
        category: "used",
        url: "https://res.cloudinary.com/timothymugo2323/image/upload/v1663141219/game-brands/sjskjskjsk_gwfxug.png",
      },
    ];

    const getInitialGameBrands = gameBrandImages.filter(
      (gameBrand) => gameBrand.category === currentCategory.value
    );

    const currentGameBrandList = ref(getInitialGameBrands);

    const setCategory = (category: string) => {
      currentCategory.value = category;
      currentGameBrandList.value = gameBrandImages.filter(
        (gameBrand) => gameBrand.category === category
      );
    };

    return {
      currentCategory,
      setCategory,
      currentGameBrandList,
    };
  },

  data() {
    const gameList: Array<string> = [
      "https://res.cloudinary.com/timothymugo2323/image/upload/v1663053801/games/game_1_livle7.jpg",
      "https://res.cloudinary.com/timothymugo2323/image/upload/v1663053801/games/game_2_usp1gh.jpg",
      "https://res.cloudinary.com/timothymugo2323/image/upload/v1663053801/games/game_3_q7ytsq.jpg",
      "https://res.cloudinary.com/timothymugo2323/image/upload/v1663053802/games/game_4_lcglwb.jpg",
      "https://res.cloudinary.com/timothymugo2323/image/upload/v1663053802/games/game_5_vxhkhi.jpg",
      "https://res.cloudinary.com/timothymugo2323/image/upload/v1663053802/games/game_6_omo10h.jpg",
    ];

    const bannerImages = [
      "https://res.cloudinary.com/timothymugo2323/image/upload/v1663088369/banner/79907cbad4d9b58a76e889fa1060b8d71661592977_ed8nyx.jpg",
      "https://res.cloudinary.com/timothymugo2323/image/upload/v1663088391/banner/b950292f5fe84fd3dc60888f965f3fb21662203685_gmdtgz.jpg",
      "https://res.cloudinary.com/timothymugo2323/image/upload/v1663088316/banner/4a85308bb0696034f83cf3c390a4f1301661872668_hzyum7.png",
      "https://res.cloudinary.com/timothymugo2323/image/upload/v1663088344/banner/57618ab792efc58ea11d6bc894e8f4bd1661949242_lsth6k.png",
    ];

    return {
      gameList,
      bannerImages,
    };
  },
});
</script>

<style lang="scss" scoped>
.home {
  padding: 10px;
}

.banner-images-container {
  border-radius: var(--border-radius);
  height: 45vw;
}

.banner-image {
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius);
}

.home-container {
  width: 100%;
  height: 100%;
  background-color: var(--bg-secondary-color);
  border-radius: 2vw;
  margin: 2.13333vw 0;
  padding: 2vw;

  .title {
    color: var(--primary-text-color);
    font-size: 3.73333vw;
  }
}

.game-list {
  display: flex;
  flex-direction: row;
  margin-top: 3%;
  padding-bottom: 5%;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  .game {
    margin: 0 1.06667vw;

    img {
      width: 16vw;
      height: 16vw;
      border-radius: 2.13333vw;
    }
  }
}

.bottom-wrap {
  margin-top: -6vw;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  position: relative;
}

.login {
  display: flex;
  align-items: center;
  height: 14vw;

  .login-left {
    flex: 1;
    display: flex;
    align-items: flex-end;

    .login-left-img {
      width: 28px;
      height: 28px;
    }

    .login-left-text {
      margin-left: 2vw;

      .login-left-top {
        display: flex;
        margin-bottom: 2vw;

        img {
          width: 5vw;
          height: 4vw;
          margin: 0 1vw;
        }
      }

      p {
        font-size: 3.5vw;
        color: #e6b24e;
        cursor: pointer;

        span {
          color: #8b8780;
        }
      }
    }
  }

  .login-right {
    display: flex;
    flex: 1;
    align-items: flex-start;
    justify-content: flex-start;
    border-left: 1px solid #8b8780;
    height: 7.5vh;
    padding-left: 2.5vw;

    img {
      width: 3.2vw;
      margin-top: -4%;
    }

    p {
      font-size: 2.5vw;
      color: #8b8780;
      margin-left: 1vw;
      margin-top: -5%;
    }
  }
}

.game-swiper {
  position: relative;
  margin-top: 1%;
  display: flex;
  flex-grow: 1;

  .sidebar {
    height: 80vw;
    overflow-x: hidden;
    overflow-y: scroll;
    padding-right: 2.2vw;
    margin-bottom: 10%;

    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    .nav-item {
      width: 13.33333vw;
      height: 13.33333vw;
      cursor: pointer;
      margin: 1.2vh 0;

      &:first-child {
        margin-top: 0;
      }

      .nav-item-img {
        width: 13.33333vw;
        height: 13.33333vw;

        .nav-img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .game-brands {
    position: relative;
    flex-grow: 1;
    margin-bottom: 11.5%;

    .game-brand-category {
      width: 100%;
      height: 100%;
      position: absolute;
      overflow-x: hidden;
      overflow-y: scroll;
      -ms-overflow-style: none;
      scrollbar-width: none;

      &::-webkit-scrollbar {
        display: none;
      }

      .game-brand {
        margin: 1% 0;
        .game-img-container {
          width: 77vw;
          height: 18.4vw;
          border-radius: 10px;

          img {
            object-fit: fill;
            width: 100%;
            height: 100%;
            border-radius: 10px;
          }
        }
      }
    }
  }
}

.active-item {
  display: none;
}
</style>
