<template>
  <v-app>
    <v-speed-dial bottom right v-model="fab" direction="left" fixed class="float-btn">
      <template v-slot:activator>
        <v-btn dark color="rgba(34, 38, 75, 1)" fab>
          <span v-if="fab">
            <v-icon>mdi-close</v-icon>
          </span>
          <span v-else>加入</span>
        </v-btn>
      </template>
      <v-btn fab dark small color="green">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn fab dark small color="indigo">
        <v-icon>mdi-account-multiple-plus</v-icon>
      </v-btn>
    </v-speed-dial>
    <Navbar />
    <full-page :options="options">
      <div class="section">
        <Home />
      </div>
      <div class="section">
        <Introduce />
      </div>
      <div class="section">wwt 's part</div>
      <div class="section">
        <About />
      </div>
    </full-page>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Introduce from "./components/Introduce";
import About from "./components/About";

const change = () => {
  let names = document.getElementsByClassName("tab-name");
  let icons = document.getElementsByClassName("tab-icon");
  if (window.location.hash === "#home" || window.location.hash === "") {
    document.getElementById("header").classList.remove("header-bg");
    for (let i = 0; i < names.length; ++i) {
      names[i].classList.remove("change-black");
      icons[i].classList.remove("change-black");
    }
  } else {
    document.getElementById("header").classList.add("header-bg");
    for (let i = 0; i < names.length; ++i) {
      names[i].classList.add("change-black");
      icons[i].classList.add("change-black");
    }
  }
};
export default {
  name: "App",

  components: {
    Navbar,
    Home,
    Introduce,
    About,
  },

  data: () => ({
    options: {
      navigation: true,
      navigationPosition: "right",
      anchors: ["home", "introduce", "contribute", "about"],
      sectionsColor: ["#fff", "#fff", "#fff", "#fff"],
      navigationTooltips: ["首页", "简介", "建设", "成员"],
      css3: true,
      // afterLoad: () => {
      //   window.location.hash === "#home" || window.location.hash === ""
      //     ? document.getElementById("header").classList.remove("header-bg")
      //     : document.getElementById("header").classList.add("header-bg");
      // },
      afterLoad: change,
    },
    fab: false,
  }),
};
</script>

<style>
.float-btn {
  float: right !important;
  margin-right: 2%;
  margin-bottom: 2%;
}
.fp-tooltip,
.fp-right {
  color: #000 !important;
}
</style>
