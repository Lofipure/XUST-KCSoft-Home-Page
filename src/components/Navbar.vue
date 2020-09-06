<template>
  <v-app-bar class="header" id="header" elevation="0">
    <v-row justify="space-around">
      <v-col sm="4" md="1" lg="4">
        <v-row align="center" justify="flex-start">
          <v-col sm="2">
            <v-avatar>
              <v-img src="../assets/logo.png" sizes="40 40"></v-img>
            </v-avatar>
          </v-col>
          <v-col class="title-hidden">
            <v-toolbar-title>创新学院软件创新班</v-toolbar-title>
          </v-col>
        </v-row>
      </v-col>
      <v-col sm="6" md="9" lg="6">
        <v-row justify="flex-end">
          <v-col>
            <v-tabs class="nav-bar-tab-list" background-color="rgba(255,255,255,0)" dark>
              <v-tab
                class="nav-bar-tab"
                v-for="(element,index) in tabs"
                :key="index"
                :href="element.href"
              >
                <v-row align-content="space-between" class="nav-bar-tab-row">
                  <v-col sm="3" md="3" lg="3">
                    <v-icon>{{element.icon}}</v-icon>
                  </v-col>
                  <v-col class="title-hidden">{{element.name}}</v-col>
                </v-row>
              </v-tab>
            </v-tabs>
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
};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  color: rgb(255, 255, 255) !important;
  background-color: rgba(255, 255, 255, 0) !important;
}

.header-bg {
  background: rgba(112, 112, 112, 0.5) !important;
  color: rgb(0, 0, 0) !important;
}
.nav-bar-tab-bg {
  color: rgba(0, 0, 0, 1) !important;
}
.nav-bar-tab-list {
  display: flex;
  justify-content: flex-end;
}
@media screen and (max-width: 600px) {
  .title-hidden {
    display: none;
  }
  .nav-bar-tab {
    font-size: 0.5rem;
  }
  .nav-bar-tab-row {
    width: 20px;
  }
}
</style>