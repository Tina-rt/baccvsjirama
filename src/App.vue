<script>
import ScoreSection from "./components/ScoreSection.vue";
import Matiere from "./components/Matiere.vue";
import ProgressBar from "./components/ProgressBar.vue";
import { useGameAreaStore } from "@/stores/game_area";
import $ from 'jquery';

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
      },

      show_hint: false,
    }
  },
  mounted() {
    $('.help').hide()
    
  },

  methods: {
    show_hint_fun(){
      this.show_hint = true;
      $('.help').fadeIn()
    },
    close_hint_fun(){
      $('.help').fadeOut()
      this.show_hint = false;
    }
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
              <div class="btn" @click="show_hint_fun()"> <i class="fa fa-question"></i> </div>
              
            </div>
          </div>
          <div class="main" :style="{ width: game_area.width + 'px', height: game_area.height + 'px' }">
            <Matiere :matiere=math></Matiere>
            <div class="help" >
              <img src="@/assets/imagebacc.jpg" lazy="true" alt="">
              <div class="btn-close" @click="close_hint_fun()">&times; Hakatona</div>
              </div>
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
  padding: 10px 20px;
  cursor: pointer;
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


.help{
  max-width: 100%;
  position: absolute;
  width: 100%;
  height: fit-content;
  top: 30px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}

.help img{
  max-width: 100%;
  height: auto;
  width: auto\9;
}

.btn-close{
  
  transform: translateY(-110%);
  cursor: pointer;
  border-radius: 10px;
  color: white;
  padding: 10px;
  background-color: #f78200;
}


.show{
  
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
