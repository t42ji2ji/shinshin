<template lang="pug">
.view.flex
  .bg
    .triangle
    .circle
  .task.flex
    .title {{ feelMe }}
    .textWrapper 
      //- .patternbox.pattern-dots-sm.bg-blue
      .textSection.pattern-grid-md 
        .titleType {{ type }}
        p 我不滿意自己無法存款的習慣，這讓自己感到低人一等，沒辦法聰明、理性地安排生活，每隔一段時間就會出現帳單比預期數字多的狀況，讓生活處在暴露金錢危機的狀態。「每個人都有缺點，但換個角度看，缺點正是你的獨特之處。」 也許，我可以從不同的角度來看待、理解這項缺點，與自己分享心境的轉變。
    .iconWrapper
      font-awesome-icon.fa-lg.icon(icon="play", color="white")
  .bottom
    img.avatar(src="@/assets/svg/avatar1.svg")
    .bottomCard 
      .divider
      .practiceDay {{ date }}
      .talkSection 
        //- vue-typed-js(:strings="[desc1]")
        span.userName {{ userName }} &nbsp
          span.typing {{ desc1 }}
      .spacer
      .buttons
        .sound 說說話
        .text 寫下心情
  //- .flatButton 
  //-   font-awesome-icon.fa-lg.icon(icon="microphone", color="white")
</template>

<script>
// @ is an alias to /src
import anime from "animejs";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      userName: "Xylia",
      feelMe: "我覺得自己是...",
      type: "寅吃卯糧",
      date: "今天是 2021年5月24號 星期一，是練習的第一天。",
      desc1:
        "xxx，今天的你，注意到了「用怎樣的思維」去解讀的話，這缺點在某些情況下其實也算是一種優點呢?",
    };
  },
  mounted() {
    // this.go();
  },
  methods: {
    go() {
      anime({
        targets: ".bg",
        translateY: [
          { value: -400, duration: 0 },
          { value: -200, duration: 2000, delay: 200 },
        ],
        scale: 1.4,
        duration: 0,
      });
    },
  },
};
</script>

<style lang="scss">
@import "../assets/css/pattern.css";

.view {
  height: 100vh;
  width: 100vw;
  justify-content: space-between;
  overflow: hidden;
  background-color: #fffbf0;
  position: relative;
  box-sizing: border-box;
  padding: 10px 0px 0px 0px;

  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    height: 50px;
    width: 100%;
    box-sizing: border-box;
    color: white;
    font-weight: bold;
    .sound {
      flex: 1;
      margin: 5px;
      padding: 10px;
      background-color: #46843f;
      border-radius: 10px;
      box-sizing: border-box;
    }
    .text {
      flex: 1;
      margin: 5px;
      padding: 10px;
      background-color: #f5b35d;
      border-radius: 10px;
      box-sizing: border-box;
    }
  }

  .bg {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 0;
    .circle {
      position: fixed;
      top: 200px;
      left: -100px;
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background-color: #fdaea5;
    }
    .triangle {
      position: fixed;
      right: -50px;
      top: -30px;
      width: 0;
      height: 0;
      transform: rotate(-22.57deg);
      border-style: solid;
      border-width: 0 86.5px 149.8px 86.5px;
      border-color: transparent transparent #f5b35e transparent;
    }
    // z-index: -999;
  }

  .task {
    position: relative;
    width: 100vw;
    box-sizing: border-box;
    padding: 0px 30px 0px 30px;
    z-index: 2;
    justify-content: center;
    .title {
      margin: 2rem 0px 5px 0px;
      align-self: flex-start;
      animation: fadeInDown; /* referring directly to the animation's @keyframe declaration */
      animation-duration: 1s; /* don't forget to set a duration! */
    }
    .iconWrapper {
      opacity: 0;
      animation: fadeInDown2 forwards; /* referring directly to the animation's @keyframe declaration */
      animation-duration: 1s; /* don't forget to set a duration! */
      animation-delay: 0.5s;
      align-self: center;
      z-index: 999;
      margin: -15px 0px 30px 0px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: #44833e;
      display: flex;
      justify-content: center;
      align-items: center;
      .icon {
        font-size: 1.5rem;
        padding-top: 1px;
        padding-left: 5px;
      }
    }

    .textWrapper {
      height: 35vh;
      position: relative;
    }
    .patternbox {
      position: absolute;
      height: 100%;
      width: 100%;
      top: 10px;
      left: -5px;
      z-index: -1;
    }
    .pattern-diagonal-lines-sm {
      color: rgb(152, 124, 255);
    }
    @keyframes fadeInDown2 {
      from {
        opacity: 0;
        transform: translate3d(0, -10%, 0);
      }

      to {
        opacity: 1;
        transform: none;
      }
    }
    .textSection {
      opacity: 0;
      position: relative;
      animation: fadeInDown2 forwards; /* referring directly to the animation's @keyframe declaration */
      animation-duration: 1s; /* don't forget to set a duration! */
      animation-delay: 0.5s;
      // left: 5px;
      display: flex;
      flex-direction: column;
      background-color: white;
      height: 35vh;
      width: 100%;
      overflow-y: scroll;
      padding: 36px 15px;
      border-radius: 5px;
      box-sizing: border-box;
      box-shadow: 5px 6px 20px 2px rgb(170 170 170 / 28%);
      font-size: 0.95rem;
      .titleType {
        align-self: flex-start;
        padding: 2px 5px;
        background-color: #298add;
        color: white;
        border-radius: 5px;
      }
    }

    .playerButton {
      align-self: center;
      border-radius: 50%;
      background: #000;
      width: 3rem;
      height: 3rem;
    }
  }
  .bottom {
    position: relative;
  }
  .avatar {
    animation: popUp forwards cubic-bezier(0.68, -0.6, 0.32, 1.6);
    // animation: fadeInDown2 forwards; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 1.1s; /* don't forget to set a duration! */
    position: absolute;
    top: -80px;
    right: 15px;
  }
  @keyframes popUp {
    from {
      transform: translateY(100px);
    }

    to {
      transform: translateY(0px);
    }
  }
  .bottomCard {
    position: relative;
    color: $textColor;
    background-color: white;
    box-shadow: 0px -5px 20px 2px rgba(211, 211, 211, 0.452);
    height: 50vh;
    width: 100vw;
    border-radius: 20px 20px 0px 0px;
    padding: 15px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    .divider {
      height: 2px;
      width: 60vw;
      background-color: rgb(207, 207, 207);
    }
    .practiceDay {
      margin-top: 1rem;
      color: $darkGrey;
      font-size: 0.8rem;
    }
    .talkSection {
      margin-top: 1.5rem;
    }
    .userName {
      color: #4f59b6;
    }
    .typing {
      color: #2c3e50;
      font-size: 1rem;
    }
  }
  .pattern-grid-md {
    background-image: linear-gradient(#e1ebff88 1px, transparent 1px),
      linear-gradient(to right, #e1ebff88 1px, transparent 1px);
  }
  .flatButton {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    bottom: 10vh;
    right: 0px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #0d6aba;
    box-shadow: 0px 3px 0px #36546d;
  }
}
</style>
