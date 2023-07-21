import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useScoreStore = defineStore('score', () => {
  const score = ref(0)
  let multiplier = ref(100)
  let change = ref(false)
  let mentions_list = ref(['Passable', 'Assez Bien', 'Bien', 'Tres Bien'])
  let mention = ref("")

  let best_score = ref(0)
  if (localStorage.getItem('best_score')) {
    best_score.value = getBestScore()
  }
  else {
    setBestScore(0)
  }

  function getBestScore() {
    let currnbest = localStorage.getItem("best_score")
    return parseFloat(currnbest)
  }

  function setBestScore(best_score_) {
    localStorage.setItem('best_score', best_score_)
    best_score.value = getBestScore()
    // console.log(best_score.value)
  }

  function increment() {
    score.value++

    if (getBestScore() < score.value) {
      setBestScore(score.value)
    }

    if (score.value % 5 == 0) {
      increment_multiplier()
    }
    if (score.value / 2 < 9.5) {
      mention.value = mentions_list.value[0]
    }
    else if (score.value / 2 < 14) {
      mention.value = mentions_list.value[1]
    }
    else if (score.value / 2 < 16) {
      mention.value = mentions_list.value[2]

    }
    else {
      mention.value = mentions_list.value[3]

    }
  }

  function increment_multiplier() {
    multiplier.value += 100
    console.log(multiplier.value)
    change.value = true
  }



  function restart() {
    multiplier.value = 0
    score.value = 0
  }

  return { score, increment, restart, multiplier, increment_multiplier, change, mention, best_score }
})
