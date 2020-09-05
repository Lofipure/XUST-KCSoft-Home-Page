<template>
  <div class="about-footer">
    <v-container>
      <v-row class="about-footer-title">正在从2020级新生和2019级老生中招募新成员</v-row>
      <v-row class="about-footer-title">欢迎加入2020级招新QQ群：1087849189</v-row>
      <v-row class="about-footer-title">地址：西安科技大学煤炭科技中心#306室</v-row>
      <v-row class="about-footer-title">
        <img src="../assets/beian.png" alt="备案" />
        <a href class="about-footer-link">陕ICP备 19005593号-3</a>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "AboutFooter",
};
</script>

<style scope>
.about-footer {
  background-color: rgb(34, 38, 75);
  bottom: 0;
  position: absolute;
  width: 100%;
}
.about-footer-title {
  align-items: center;
  justify-content: center;
  color: rgb(255, 255, 255);
}
.about-footer-link {
  color: rgb(255, 255, 255) !important;
  text-decoration: underline;
}
@media screen and (max-width: 600px) {
  .about-footer-title {
    font-size: 0.4rem;
    line-height: 180%;
  }
}
</style>