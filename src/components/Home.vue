<template>
  <div class="home">
    <div class="wrapper">
      <div class="top">
        <div class="title-ccontainer">
          <div class="title-container-cn">我摸到了梦，也看到了光。</div>
          <div class="title-container-en">KEEP CODING.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({}),
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.wrapper {
  background: rgba(115, 122, 184, 0.2);
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.top {
  background: rgba(255, 255, 255, 0.2);
  width: 100%;
  height: 35%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.title-container-cn,
.title-container-en {
  color: rgba(255, 255, 255, 1);
  text-align: center;
}
.home {
  height: 100vh;
  width: 100vw;
  background: url("../assets/home_bg.jpg") no-repeat;
}
@media screen and (max-width: 600px) {
  .home {
    background-size: auto 100%;
  }
  .title-container-cn {
    font-size: 1.6rem;
    line-height: 3rem;
  }
  .title-container-en {
    font-size: 1.2rem;
    line-height: 2rem;
  }
}
@media screen and (min-width: 600px) {
  .title-container-cn {
    font-size: 3.8rem;
    line-height: 6rem;
  }
  .title-container-en {
    font-size: 3rem;
    line-height: 5rem;
  }
  .home {
    background-size: 100% auto;
  }
}
</style>