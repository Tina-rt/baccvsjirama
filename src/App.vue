<script>
import ScoreSection from "./components/ScoreSection.vue";
import Matiere from "./components/Matiere.vue";
import ProgressBar from "./components/ProgressBar.vue";
import { useGameAreaStore } from "@/stores/game_area"

export default {
  components: {
    ScoreSection,
    Matiere,
    ProgressBar
  },
  data() {
    const game_area = useGameAreaStore()
    return {
      game_dim: 500,
      game_area,
      math: {
        label: 'Math'
      }
    }
  },
  mounted() {
  },

  methods: {

  }
}

</script>



<template>
  <main>
    <div class="body-col">
      <div class="logo">
        <img src="@/assets/logo.png" alt="">
      </div>
      <div class="game">
        <div class="main-game">
          <div class="header-section">
            <ScoreSection />
            <div class="nav">
              <div class="btn"> <i class="fa fa-question"></i> </div>
            </div>
          </div>
          <div class="main" :style="{ width: game_area.width + 'px', height: game_area.height + 'px' }">
            <Matiere :matiere=math></Matiere>
          </div>
          <div class="aside-info">

            <ProgressBar></ProgressBar>
          </div>
        </div>

      </div>
    </div>
  </main>
</template>

<style scoped>
.body-col{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}
.game {
  display: flex;
  height: fit-content;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.main-game {

  width: fit-content;
  padding: 10px;
}

.header-section {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}




.main {
  width: 100%;
  height: fit-content;
  background-color: #fdfaf5;

}

.logo {
  max-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;

}

.logo img {
  max-width: 100%;
  height: auto;
  width: auto\9;
}

.nav{
  padding: 0 10px
}

.btn{
  /* width: 100px; */
  background-color: #f78200;
  color: white;
  text-align: center;
  border-radius: 10px;
  padding: 10px 20px
}

@media (max-width: 500px){
  .logo img{
    width: 200px;
  }

  .body-col{
    justify-content: center;
    height: 90vh
  }


}

.aside-info {
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
}

.jirama-progress-bar {
  margin-left: 10px;
  padding: 2px;
  width: 20px;
  height: 500px;
  border: 1px solid grey;
  display: flex;
  flex-flow: column-reverse;
  border-radius: 10px;

}

@keyframes progress {
  from {
    height: 100%;
  }

  to {
    height: 0%;
  }
}

/* .progress-bar {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: orange;
} */


@media (min-width: 1024px) {


  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }



  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }


}
</style>
