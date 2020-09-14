<template>
  <div class="background">
    <div class="marquee-container">
      <dynamic-marquee
          reverse
          direction='row'
          :repeatMargin='50'
      >
        <div class="marquee-wrapper">
          <v-card
              v-for='photo in photos'
              :key='photo'
              class='mx-8'
          >
            <v-img
                height='240'
                :src='photo'
            >
            </v-img>
          </v-card>
        </div>
      </dynamic-marquee>
    </div>
  </div>
</template>

<script>
import DynamicMarquee from 'vue-dynamic-marquee';

// competition
import CCCCPrizesPhoto from "../assets/award/cccc-prizes-photo.jpg"; // CCCC 竞赛证书
import Wqh2018LanqiaoProvincalFirst from "../assets/award/wqh-2018-lanqiao-provincal-first.jpg"; // 王钦弘2018蓝桥省一
import Wqh2019LanqiaoProvincalFirst from "../assets/award/wqh-2019-lanqiao-provincal-first.jpg"; // 王钦弘2018蓝桥省一
import Wqh2019ACMNationalInvitationalThird from "../assets/award/wqh-2019-acm-national-invitational-third.jpg"; // 王钦弘2019ACM全国邀请赛铜
import Dl2018LanqiaoProvincalSecond from "../assets/award/dl-2018-lanqiao-provincal-second.jpg"; // 丁磊2018蓝桥省二
import Dl2019LanqiaoProvincalThird from "../assets/award/dl-2019-lanqiao-provincal-third.jpg"; // 丁磊2019蓝桥省三
import DlCCCCProvincalThird from "../assets/award/dl-cccc-provincal-third.jpg"; // 丁磊CCCC省三
import Jj2019CCCCProvincalThird from "../assets/award/jj-2019-cccc-provincal-third.jpg"; // 蒋佳CCCC省三
import Jj2019LanqiaoNationalHonorable from "../assets/award/jj-2019-lanqiao-national-honorable.jpg"; // 蒋佳蓝桥国优
import Jj2019LanqiaoProvincalThird from "../assets/award/jj-2019-lanqiao-provincal-third.jpg"; // 蒋佳蓝桥省一
import KinectCsiet from "../assets/award/kinect-csiet.jpg"; // 祖传Kinect
import Lx2019LanqiaoProvincalThird from "../assets/award/lx-2019-lanqiao-provincal-third.jpg"; // 刘鑫2019蓝桥省三
import Lxy2018LanqiaoProvincalSecond from "../assets/award/lxy-2018-lanqiao-provincal-second.jpg"; // 罗心怡2018蓝桥省二
import Lxy2019CCCCProvincalThird from "../assets/award/lxy-2019-cccc-provincal-third.jpg"; // 罗心怡CCCC省三
import Lxy2019LanqiaoProvincalSecond from "../assets/award/lxy-2019-lanqiao-provincal-second.jpg"; // 罗心怡2019蓝桥省二
import Lyq2019CCCCTeamThird from "../assets/award/lyq-2019-cccc-team-third.jpg"; // 刘尹强CCCC省三
import Lyq2019LanqiaoSecond from "../assets/award/lyq-2019-lanqiao-second.jpg"; // 刘尹强2019蓝桥省二
import Team2019ACMNationalHonorable from "../assets/award/team-2019-acm-national-honorable.jpg"; // 2019ACM省赛奖状证明
import Team2019ACMNationalInvitationalThird from "../assets/award/team-2019-acm-national-invitational-third.jpg"; // 2019ACM全国邀请赛铜牌队伍证明
import Team2019ACMProvincalThird from "../assets/award/team-acm-2019-provincal-third.jpg"; // 2019ACM省赛铜证明
import Wwt2019LanqiaoProvincalFirst from "../assets/award/wwt-2019-lanqiao-provincal-first.jpg"; // 吴文韬2019蓝桥省一
import Wzh2018LanqiaoProvincalThird from "../assets/award/wzh-2018-lanqiao-provincal-third.jpg"; // 王子涵2018蓝桥省三
import YycGplpBronze from "../assets/award/yyc-gplp-bronze.png"; // 余以春CCCC团三
import YycIcpcInvitationBronze from "../assets/award/yyc-icpc-invitation-bronze.png"; // 余以春2019ACM全国邀请赛铜

// prize
import Jyx2019CucdcThird from "../assets/award/jyx-2019-cucdc-third.jpg"; // 纪雨鑫2019计设三等
import Jyx2019NeccsSecond from "../assets/award/jyx-2019-neccs-second.jpg"; // 纪雨鑫2019英语国三
import Lxy2018FltrpProvincalThird from "../assets/award/lxy-2018-fltrp-provincal-third.jpg"; // 罗心怡2018外研社省三
import Lxy2018NeccsNationalFirst from "../assets/award/lxy-2018-neccs-national-first.jpg"; // 罗心怡2018NECCS国一
import Lxy2019NeccsNationalFirst from "../assets/award/lxy-2019-neccs-national-first.jpg"; // 罗心怡2019NECCS国一
import LxyEnglishReadingSpecial from "../assets/award/lxy-english-reading-special.png"; // 罗心怡2018外研社国特
import Lyq2018CmathcNationalSecond from "../assets/award/lyq-2018-cmathc-national-second.jpg"; // 刘尹强2018数学竞赛国二
import Lyq2018NECCSNationalThird from "../assets/award/lyq-2018-neccs-national-third.jpg"; // 刘尹强2018NECCS国三
import Lyq2019NECCSNationalThird from "../assets/award/lyq-2019-neccs-national-third.jpg"; // 刘尹强2019NECCS国三
import WzhZzqEiPaper from "../assets/award/wzh,zzq-ei-paper.png"; // 王子涵，张真谦EI论文
import Wzh2018NECCSNationalSecond from "../assets/award/wzh-2018-neccs-national-second.jpg"; // 王子涵2018NECCS国二
import YycNationalScholarship from "../assets/award/yyc-national-scholarship.png"; // 余以春国家奖学金


// contest
import CCCCPhoto from "../assets/award/cccc-photo.jpg"; // 2019CCCC团体照片
import ICPC2018ECFinal from "../assets/award/icpc-2018-ec-final.jpg"; // 2018ECFinal陈航队照片
import ICPC2018ECFinalPhoto from "../assets/award/icpc-2018-ec-final-photo.jpg"; // 2018ECFinal团体照片
import ICPC2019ACMNationalInvitationalThirdPhoto from "../assets/award/icpc-2019-acm-national-invitational-third-photo.jpg"; // 2019全国邀请赛王钦弘组
import ICPC2019ACMNationalPhoto from "../assets/award/icpc-2019-acm-national-photo.jpg"; // 2019ACM全国邀请赛团体照片
import ICPC2019ACMPhoto from "../assets/award/icpc-2019-acm-photo.jpg"; // 2019ACM陕西省赛团体照片
import NationalLanqiao2019Photo from "../assets/award/national-lanqiao-2019-photo.jpg"; // 2019蓝桥国赛背景照片
import ProvincalLanqiao2019Photo from "../assets/award/provincal-lanqiao-2019photo.jpg"; // 2019蓝桥省赛合照
import ICPCECFinalContest from "../assets/award/icpc-ec-final-contest.jpg"; // 2018ECFinal现场照片

const GLOBAL_PHOTO = [
      ///////////////////////
      // BEGIN competition //
      ///////////////////////

      // 丁磊2019蓝桥省三
      Dl2019LanqiaoProvincalThird,
      // 蒋佳CCCC省三
      Jj2019CCCCProvincalThird,
      // 王钦弘2019ACM全国邀请赛铜
      Wqh2019ACMNationalInvitationalThird,
      // CCCC 竞赛证书
      CCCCPrizesPhoto,
      // 祖传Kinect
      KinectCsiet,
      // 丁磊CCCC省三
      DlCCCCProvincalThird,
      // 余以春2019ACM全国邀请赛铜
      YycIcpcInvitationBronze,
      // 王钦弘2018蓝桥省一
      Wqh2018LanqiaoProvincalFirst,
      // 王钦弘2019蓝桥省一
      Wqh2019LanqiaoProvincalFirst,
      // 丁磊2018蓝桥省二
      Dl2018LanqiaoProvincalSecond,
      // 2019ACM省赛铜证明
      Team2019ACMNationalHonorable,
      // 2019ACM全国邀请赛铜牌队伍证明
      Team2019ACMNationalInvitationalThird,
      // 2019ACM省赛铜证明
      Team2019ACMProvincalThird,
      // 蒋佳蓝桥国优
      Jj2019LanqiaoNationalHonorable,
      // 蒋佳蓝桥省一
      Jj2019LanqiaoProvincalThird,
      // 刘鑫2019蓝桥省三
      Lx2019LanqiaoProvincalThird,
      // 罗心怡2018蓝桥省二
      Lxy2018LanqiaoProvincalSecond,
      // 罗心怡CCCC省三
      Lxy2019CCCCProvincalThird,
      // 罗心怡2019蓝桥省二
      Lxy2019LanqiaoProvincalSecond,
      // 刘尹强CCCC省三
      Lyq2019CCCCTeamThird,
      // 刘尹强2019蓝桥省二
      Lyq2019LanqiaoSecond,
      // 余以春CCCC团三
      YycGplpBronze,
      // 吴文韬2019蓝桥省一
      Wwt2019LanqiaoProvincalFirst,
      // 王子涵2018蓝桥省三
      Wzh2018LanqiaoProvincalThird,
      /////////////////////
      // END competition //
      /////////////////////

      ///////////////////////
      // BEGIN prize //
      ///////////////////////
      // 王子涵，张真谦EI论文
      WzhZzqEiPaper,
      // 余以春国家奖学金
      YycNationalScholarship,
      // 罗心怡2018外研社国特
      LxyEnglishReadingSpecial,
      // 纪雨鑫2019计设三等
      Jyx2019CucdcThird,
      // 纪雨鑫2019英语国三
      Jyx2019NeccsSecond,
      // 罗心怡2018外研社省三
      Lxy2018FltrpProvincalThird,
      // 罗心怡2018NECCS国一
      Lxy2018NeccsNationalFirst,
      // 罗心怡2019NECCS国一
      Lxy2019NeccsNationalFirst,
      // 刘尹强2018数学竞赛国二
      Lyq2018CmathcNationalSecond,
      // 刘尹强2018NECCS国三
      Lyq2018NECCSNationalThird,
      // 刘尹强2019NECCS国三
      Lyq2019NECCSNationalThird,
      // 王子涵2018NECCS国二
      Wzh2018NECCSNationalSecond,
      /////////////////////
      // END prize //
      /////////////////////

      ///////////////////
      // BEGIN photo   //
      ///////////////////

      // 2019CCCC团体照片
      CCCCPhoto,
      // 2018ECFinal陈航队照片
      ICPC2018ECFinal,
      // 2018ECFinal团体照片
      ICPC2018ECFinalPhoto,
      // 2019全国邀请赛王钦弘组
      ICPC2019ACMNationalInvitationalThirdPhoto,
      // 2019ACM全国邀请赛团体照片
      ICPC2019ACMNationalPhoto,
      // 2018ECFinal现场照片
      ICPCECFinalContest,
      // 2019蓝桥省赛合照
      ProvincalLanqiao2019Photo,
      // 2019蓝桥国赛背景照片
      NationalLanqiao2019Photo,
      // 2019ACM陕西省赛团体照片
      ICPC2019ACMPhoto,
      /////////////////
      // END photo   //
      /////////////////
    ]

export default {
  name: "Construction",
  components: {
    'dynamic-marquee': DynamicMarquee,
  },
  data() {
    return {
      speed: {
        type: 'pps',
        duration: 60,
      },
      pause: false,
      photos: GLOBAL_PHOTO,
    }
  }
}
</script>

<style scoped>
  .background {
    background: url("../assets/construction-background.png") no-repeat center;
    width: 100vw;
    height: 100vh;
    background-size: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;

  }
  .marquee-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    height: 60%;
    width: 100%;
  }
  .marquee-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

  }
</style>