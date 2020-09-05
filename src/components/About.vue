<template>
  <div class="about-container">
    <v-container class="about-wrapper">
      <v-row align="center" justify="center" class="mobile-text">
        <v-col cols="6" class="text-content">如果你也想加入。</v-col>
      </v-row>
      <v-sheet
        v-for="(group, i) in member"
        color="rgba(255,255,255,0.7)"
        v-bind:key="i"
        width="100%"
      >
        <v-slide-group v-model="model[i]" active-class class="pa-2" show-arrows>
          <v-slide-item
            v-for="(item,index) in group.people"
            v-bind:key="index"
            v-slot:default="{ active, toggle }"
          >
            <v-card
              :color="active ? 'rgba(115, 122, 184, 1)':'gray lighten-1'"
              @click="toggle"
              class="ma-4 member-card"
            >
              <v-row justify="center" align="center" class="fill-height">
                <v-scale-transition>
                  <span v-if="active">
                    <v-row class="member-name" align-content="center" justify="center">{{item.name}}</v-row>
                    <v-row class="member-info" align-content="center" justify="center">{{item.info}}</v-row>
                    <v-row
                      class="member-other"
                      :v-if="item.other"
                      align-content="center"
                      justify="center"
                    >{{item.other}}</v-row>
                  </span>
                  <span v-else-if="!active">
                    <v-img :src="item.avatar" class="member-avatar" />
                  </span>
                </v-scale-transition>
              </v-row>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </v-container>
    <AboutFooter />
  </div>
</template>

<script>
import AboutFooter from "./AboutFooter";

export default {
  name: "About",
  data: () => ({
    member: [
      {
        name: "指导",
        people: [
          {
            name: "史晓楠",
            avatar: require("../assets/sxn-avatar.jpg"),
            other: "指导老师",
            info: "计算机学院",
          },
          {
            name: "王子童",
            avatar: require("../assets/y3-wzt-avatar.jpg"),
            info: "软工 研三",
          },
        ],
      },
      {
        name: "管理",
        people: [
          {
            name: "王子恒",
            avatar: require("../assets/18-wzh-avatar.png"),
            info: "软工 18级",
            other: "班长 ",
          },
          { name: "蒋佳", avatar: "", info: "软工 18级", other: "副班长 " },
          {
            name: "周佳宁",
            avatar: require("../assets/18-zjn-avatar.jpg"),
            info: "软工 18级",
            other: "财务部长",
          },
        ],
      },
      {
        name: "成员",
        people: [
          {
            name: "王钦弘",
            avatar: require("../assets/17-wqh-avatar.jpg"),
            info: "软工 17级",
          },
          {
            name: "刘鑫",
            avatar: require("../assets/17-lx-avatar.jpg"),
            info: "计科 17级",
          },
          {
            name: "王子涵",
            avatar: require("../assets/17-wzh-avatar.jpg"),
            info: "软工 17级",
          },
          {
            name: "丁磊",
            avatar: require("../assets/17-dl-avatar.jpg"),
            info: "网工 17级",
          },
          {
            name: "刘尹强",
            avatar: require("../assets/17-lyq-avatar.jpg"),
            info: "软工 17级",
          },
          {
            name: "冯娜",
            avatar: require("../assets/17-fn-avatar.jpg"),
            info: "网工 17级",
          },
          {
            name: "罗心怡",
            avatar: require("../assets/17-lxy-avatar.jpg"),
            info: "软工 17级",
          },
          {
            name: "吴文韬",
            avatar: require("../assets/18-wwt.jpg"),
            info: "计科 18级",
          },
          {
            name: "刘新尧",
            avatar: require("../assets/18-lxy-avatar.jpg"),
            info: "物联网 18级",
          },
          {
            name: "王尉陶",
            avatar: require("../assets/18-wwt-avatar.jpg"),
            info: "电信 18级",
          },
          { name: "陈佳", avatar: "", info: "电信 18级" },
          { name: "赵文强", avatar: "", info: "电科 18级" },
          {
            name: "汪子阳",
            avatar: require("../assets/18-wzy.avatar.jpg"),
            info: "软工 18级",
          },
          {
            name: "李佳怡",
            avatar: require("../assets/18-ljy-avatar.jpg"),
            info: "软工 18级",
          },
        ],
      },
    ],
    model: [null, null, null],
  }),
  components: { AboutFooter },
};
</script>

<style scope>
.about-container {
  height: 100%;
}
.member-avatar {
  border-radius: 100%;
}
.member-card {
  border-radius: 100% !important;
}
.member-name,
.member-info,
.member-other {
  color: white;
}
.member-card::before {
  border-radius: 100%;
}
.v-slide-group__content {
  display: flex;
  justify-content: center;
  align-items: center;
}
@media screen and (max-width: 600px) {
  .member-avatar {
    width: 60px;
    height: 60px;
  }
  .member-card {
    width: 60px;
    height: 60px;
    font-size: 0.1rem;
  }
  .about-container {
    background: url("../assets/about-bg.png") no-repeat;
    background-size: 100% auto;
    padding-top: 8%;
    background-position-y: 40%;
  }
  .about-wrapper {
    margin-top: 40%;
  }
  .mobile-text {
    text-align: center;
    font-size: 1.2rem;
  }
}
@media screen and (min-width: 600px) {
  .member-avatar {
    width: 100px;
    height: 100px;
  }
  .member-card {
    width: 100px;
    height: 100px;
  }
  .about-container {
    background: url("../assets/about-bg.png");
    background-size: 100% auto;
    padding-top: 8%;
  }
  .mobile-text {
    display: none;
  }
}
</style>