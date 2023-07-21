<script>

import {useScoreStore} from '@/stores/score';


export default{
    setup(){
        console.log("score setup")

    },
    data(){
        const score = useScoreStore()
        return {
            score
        }
    },

    methods:{
        
    }
}
</script>

<template>
    <div class="score-section">
        
        <div class="current-score">
            <span>Moyenne anao  </span>
            <span class="score"> {{ score.score /2}} / 20</span>
        </div>
        <div class="best-score">
            Note-nao tsara indrindra : <span class="orange">{{ score.best_score/2 }} / 20</span>
        </div>
    </div>
</template>

<style scoped>
.score-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  
  align-items: start;
  justify-content: start;
}

.current-score{
    display: flex;
    flex-direction: row;
    font-size: 20px;
}

.score {
  /* font-size: 1.4rem; */
  padding-left: 10px;
  font-weight: bold;
}

.best-score{
    font-weight: bold;
    margin: 10px 0px;
}
.orange{
    color: white;
    padding: 5px;
    border-radius: 5px;
    background-color: #f78200;
}
</style>