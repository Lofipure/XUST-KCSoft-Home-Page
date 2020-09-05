<template>
  <div class="introduce-content">
    <v-container>
      <div class="content-title">
        <div class="content-title-cn">西安科技大学 软件创新实验室</div>
        <div class="content-title-en">Innovation Institute Software Innovation Class</div>
      </div>
      <div class="content-love-searching">
        <div class="content-searching-title">我们都喜欢研究这些。</div>
        <v-row>
          <v-col v-for="(item, index) in isSearching" v-bind:key="index" class="item-box" cols="4">
            <v-avatar color="rgb(34,38,75)">
              <v-icon color="rgb(255,255,255)">{{item.icon}}</v-icon>
            </v-avatar>
            <div class="item-box-title">{{item.title}}</div>
          </v-col>
        </v-row>
      </div>
      <div class="content-all-searching">
        <div class="content-searching-title">但研究的不止这些。</div>
        <v-row>
          <v-col
            v-for="(item, index) in loveSearching"
            v-bind:key="index"
            class="item-box"
            cols="4"
          >
            <v-avatar color="rgb(34,38,75)">
              <v-icon color="rgb(255,255,255)">{{item.icon}}</v-icon>
            </v-avatar>
            <div class="item-box-title">{{item.title}}</div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Introduce",
  data: () => ({
    isSearching: [
      {
        title: "前端",
        icon: "mdi-language-html5",
      },
      {
        title: "后端",
        icon: "mdi-buffer",
      },
      {
        title: "算法",
        icon: "mdi-brain",
      },
    ],
    loveSearching: [
      {
        title: "操作系统",
        icon: "mdi-keyboard",
      },
      {
        title: "数据结构",
        icon: "mdi-vector-circle",
      },
      {
        title: "计算机网络",
        icon: "mdi-ip-network",
      },
      {
        title: "组成原理",
        icon: "mdi-cpu-64-bit",
      },
      {
        title: "移动端",
        icon: "mdi-android-debug-bridge",
      },
      {
        title: "编译原理",
        icon: "mdi-code-array",
      },
    ],
  }),
};
</script>

<style scope>
.item-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.introduce-content {
  height: 100%;
  background: url("../assets/global.png") no-repeat;
}

@media screen and (min-width: 600px) {
  .introduce-content {
    background-size: 100% auto;
    background-position: 0rem 20rem;
    margin-top: 15%;
  }
  .content-title-cn {
    font-size: 2.4rem;
  }
  .content-title-en {
    font-size: 1.2rem;
  }
  .content-searching-title {
    font-size: 1.8rem;
    margin-top: 3rem;
  }
  .content-searching-title,
  .content-title-cn,
  .content-title-en {
    text-align: center;
  }
}

@media screen and (max-width: 600px) {
  .introduce-content {
    background-size: 100% auto;
    background-position-y: 50%;
    margin-top: 40%;
  }
  .content-title-cn {
    font-size: 1.4rem;
  }
  .content-title-en {
    font-size: 0.8rem;
  }
  .content-searching-title {
    font-size: 1rem;
    margin: 1.8rem 0;
  }
  .content-searching-title,
  .content-title-cn,
  .content-title-en {
    text-align: center;
  }
  .item-box-title {
    font-size: 0.8rem;
  }
}
</style>