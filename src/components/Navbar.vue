<template>
  <v-app-bar class="header" id="header" elevation="0">
    <v-row justify="space-around">
      <v-col sm="2" md="2" lg="4" cols="2">
        <v-row align="center" justify="flex-start">
          <v-col lg="2">
            <v-avatar>
              <v-img src="../assets/logo.png"></v-img>
            </v-avatar>
          </v-col>
          <v-col class="title-hidden" lg="10">
            <v-toolbar-title>创新学院软件创新班</v-toolbar-title>
          </v-col>
        </v-row>
      </v-col>
      <v-col sm="8" md="8" lg="8" class="tabs" align-self="center">
        <v-row>
          <v-col>
            <ul>
              <li v-for="(item, index) in tabs" :key="index">
                <a :href="item.href" class="tab">
                  <v-row>
                    <v-col cols="4">
                      <v-icon class="tab-icon" v-bind:color="iconColor">{{item.icon}}</v-icon>
                    </v-col>
                    <v-col class="name-hidden tab-name">{{item.name}}</v-col>
                  </v-row>
                </a>
              </li>
            </ul>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-app-bar>
</template>
<script>
export default {
  name: "NavBar",
  data: () => ({
    iconColor: "white",
    tabs: [
      { name: "首页", icon: "mdi-home", href: "#home" },
      { name: "简介", icon: "mdi-android-messages", href: "#introduce" },
      { name: "建设", icon: "mdi-tools", href: "#contribute" },
      {
        name: "成员",
        icon: "mdi-account-group",
        href: "#about",
      },
    ],
  }),
  mounted() {
    onhashchange = () => {
      let names = document.getElementsByClassName("tab-name");
      if (window.location.hash === "#home" || window.location.hash === "") {
        this.iconColor = "white";
        document.getElementById("header").classList.remove("header-bg");
        for (let i = 0; i < names.length; ++i) {
          for (let i = 0; i < names.length; ++i) {
            names[i].classList.remove("change-black");
          }
        }
      } else {
        this.iconColor = "black";
        document.getElementById("header").classList.add("header-bg");
        for (let i = 0; i < names.length; ++i) {
          for (let i = 0; i < names.length; ++i) {
            names[i].classList.add("change-black");
          }
        }
      }
    };
  },
};
</script>

<style scoped>
.change-black {
  display: block;
  color: #000 !important;
}
.tab {
  text-decoration: none;
}
.tabs ul li {
  list-style: none;
  display: inline-block;
}
.tabs ul {
  display: flex;
  justify-content: flex-end;
}
.tab-name {
  color: white;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  color: rgb(255, 255, 255) !important;
  background-color: rgba(255, 255, 255, 0) !important;
}
.header-bg {
  background: rgba(222, 222, 222, 0.5) !important;
  color: rgb(0, 0, 0) !important;
}

/* xs */
@media screen and (max-width: 600px) {
  .title-hidden {
    display: none;
  }
  .name-hidden {
    display: none;
  }
  .tab {
    display: inline-block;
    width: 3rem;
  }
}
/* sm */
@media screen and (max-width: 960px) and (min-width: 600px) {
  .title-hidden {
    display: none;
  }
  .name-hidden {
    display: none;
  }
  .tab {
    display: inline-block;
    width: 3rem;
  }
}
/* md */
@media screen and (max-width: 1264px) and (min-width: 960px) {
  .title-hidden {
    display: none;
  }
  .tab {
    display: inline-block;
    width: 6rem;
  }
  .tabs ul li {
    margin-left: 20px;
  }
}
/* lg */
@media screen and (min-width: 1264px) {
  .tab {
    display: inline-block;
    width: 6rem;
  }
  .tabs ul li {
    margin-left: 20px;
  }
}
</style>