<template>
  <v-app>
    <v-dialog v-model="joinModel" content-class="model-window">
      <v-card class="ma-auto">
        <v-card-title>校软件创新实验室</v-card-title>
        <v-card-text class="text-center">只要你热爱学习、热爱计算机软件编程、热爱创新，我们就欢迎你的加入！</v-card-text>
        <v-card-text class="text-center">扫描以下二维码加入招新群了解更多。</v-card-text>
        <v-card-text class="text-center">
          <v-img src="./assets/group-code.png" width="150px" class="ma-auto"></v-img>
        </v-card-text>
        <v-card-text class="text-center">招新群号:1087849189</v-card-text>
        <v-card-actions>
          <v-btn color="primary" class="ma-auto" @click="joinModel=false">我知道了，这就去参加!</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog content-class="model-window" v-model="formModel">
      <v-card class="ma-auto">
        <v-card-title>校软件创新实验室</v-card-title>
        <v-card-text>还未到报名时间，请注意群通知。</v-card-text>
        <v-card-actions>
          <v-btn color="primary" class="ma-auto" @click="formModel=false">好哒，我这就去看群！</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-speed-dial bottom right v-model="fab" direction="left" fixed class="float-btn">
      <template v-slot:activator>
        <v-btn dark color="indigo" fab large>
          <span v-if="fab">
            <v-icon>mdi-close</v-icon>
          </span>
          <span v-else>加入<br>我们</span>
        </v-btn>
      </template>
      <v-btn fab dark color="green" @click.stop="formModel = true">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn fab dark color="indigo" @click.stop="joinModel = true">
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
      <div class="section">
        <Construction/>
      </div>
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
import Construction from '@/components/Construction';

export default {
  name: "App",

  components: {
    Construction,
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
    },
    fab: false,
    joinModel: false,
    formModel: false,
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

@media screen and (min-width: 600px) {
  .model-window {
    width: 50% !important;
  }
}
</style>
