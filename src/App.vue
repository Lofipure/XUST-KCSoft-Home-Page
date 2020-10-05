<template>
  <v-app>
    <v-dialog v-model="joinModel" content-class="model-window">
      <v-card class="ma-auto">
        <v-card-title>校软件创新实验室</v-card-title>
        <v-card-text class="text-center">无论你来自哪里，是什么专业。</v-card-text>
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
    <!-- <v-dialog content-class="model-window" v-model="formModel">
      <v-card class="ma-auto">
        <v-card-title>2020招新考核报名</v-card-title>
        <v-card-text>
          <v-row justify="center" align-content="center">
            <v-col cols="10">
              <v-text-field label="姓名" v-model="userInfo.name" v-bind:rules="nameRules" @change="check"></v-text-field>
            </v-col>
          </v-row>
          <v-row justify="center" align-content="center">
            <v-col cols="10">
              <v-text-field label="学号" v-model="userInfo.student_id" v-bind:rules="studentNumberRules" @change="check"></v-text-field>
            </v-col>
          </v-row>
          <v-row justify="center" align-content="center">
            <v-col cols="5">
              <v-select label="学院" v-bind:items="collegeNameList" :rules="majorRules" v-model="collegeName" v-on:change="getMajorInfo"></v-select>
            </v-col>
            <v-col cols="5">
              <v-select label="专业" v-bind:items="majorNameList" :rules="collegeRules" v-model="majorName" @change="check"></v-select>
            </v-col>
          </v-row>
          <v-row justify="center" align-content="center">
            <v-col cols="10">
              <v-text-field label="电话号码" v-model="userInfo.telephone" v-bind:rules="telephoneRules" @change="check"></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn color="success" class="ma-auto" @click="signIn" :disabled="submitStat">提交</v-btn>
          <v-btn color="red" dark class="ma-auto" @click="reset">重置</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog> -->
    <v-speed-dial bottom right v-model="fab" direction="left" fixed class="float-btn">
      <template v-slot:activator>
        <v-btn dark color="indigo" fab large>
          <span v-if="fab">
            <v-icon>mdi-close</v-icon>
          </span>
          <span v-else>
            加入
          </span>
        </v-btn>
      </template>
      <v-btn fab dark color="green" href="http://recruit.xust-kcsoft.club/">
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
        <Construction />
      </div>
      <div class="section">
        <About />
      </div>
    </full-page>
  </v-app>
</template>

<script>
const postURL = "http://192.144.135.131:12020/";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Introduce from "./components/Introduce";
import About from "./components/About";
import Construction from "@/components/Construction";
import axios from "axios";

let stat = [false, false, false, false, false]

export default {
  name: "App",

  components: {
    Construction,
    Navbar,
    Home,
    Introduce,
    About,
  },

  mounted() {
    axios.get(postURL+"getAllCollege").then((res) => {
      // console.log(res.data);
      this.collegeList = res.data;
      for(let i=0 ; i<res.data.length ; ++i) {
        this.collegeNameList.push(res.data[i].college_name)
      }
    });
  },
  data: () => ({
    submitStat: true,
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
    userInfo: {name: "", major_id: "", telephone: "", student_id: ""},
    collegeName: null,
    majorList: null,
    collegeList: null,
    collegeNameList: [],
    majorNameList: [],
    majorName: null,
    nameRules: [
      v => !!v || "不能不写名字哦~",
      v => (v && v.length <=11) || "名字有这么长?",
      v => {stat[0] = (!!v && (v.length <=11)); return (!!v && (v.length <=11))}
    ],
    studentNumberRules: [
      v => !!v || "学号得写！",
      v => (v && v.length == 11) || "学号没有这么长吧~",
      v => {stat[1] = (!!v && v.length == 11); return (!!v && v.length == 11)}
    ],
    telephoneRules: [
      v => !!v || "不写我们没法联系你呀~",
      v => (v && /^1[3456789]\d{9}$/.test(v)) || "格式不对好好写！",
      v => {stat[2] = (!!v && /^1[3456789]\d{9}$/.test(v)); return ( /^1[3456789]\d{9}$/.test(v) && !!v)}
    ],
    majorRules: [
      v => !!v || "不能不写学院哦~",
      v => {stat[3] = !!v; return !!v}
    ],
    collegeRules: [
      v => !!v || "不能不写专业哦~",
      v => {stat[4] = !!v; return !!v}
    ]
  }),

  methods:{
    getMajorInfo() {
      this.majorNameList = []
      let selectID = null;
      for(let i=0 ; i<this.collegeList.length ; ++i) {
        if(this.collegeList[i].college_name == this.collegeName) {
          selectID = this.collegeList[i].id;
        }
      }
      axios.post(postURL+"getMajorFromCollege", {college_id: selectID})
      .then((res) => {
        this.majorList = res.data;
        for(let i=0 ; i < res.data.length ; ++i) {
          this.majorNameList.push(res.data[i].major_name);
        }
      })
    },
    reset() {
      this.userInfo = {name: null, major_id: null, telephone: null, student_id: null};
      this.majorName = '';
      this.collegeName = ''
      this.submitStat = true
    },
    signIn() {
      let postData = {
        name: this.userInfo.name,
        student_id: this.userInfo.student_id,
        telephone: this.userInfo.telephone
      }
      for(let i=0 ; i<this.majorList.length ; ++i) {
        if(this.majorList[i].major_name == this.majorName) {
          postData.major_id = this.majorList[i].id
        }
      }
      // console.log(postData);
      axios.post(postURL+"addNewStudent", postData)
      .then((res) => {
        if(res.data == "HAVE STUDENT") {
          alert("你已经报过名了哦~");
          this.reset();
          this.formModel=false;
        } else {
          alert("提交成功，好好复习哦~");
          this.reset();
          this.formModel=false;
        }
      })
    },
    check() {
      if(stat[0] && stat[1] && stat[2] && stat[3] && stat[4]) {
        this.submitStat = false;
      } else {
        this.submitStat = true;
      }
    }
  }

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
