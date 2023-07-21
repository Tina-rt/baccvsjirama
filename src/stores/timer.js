import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTimerStore = defineStore('timer', () => {
  const time_dest = ref(18)
  let time = ref(time_dest.value)
  let chrono_id = ref(0)
  function start() {
    // time.value = time_dest
    chrono_id = setInterval(()=>{
        if (time.value <= 0){
            clearInterval(chrono_id)
        }
        // console.log(time.value)
        time.value--
        

    }, 1000)
  }

  function restart() {
    // time = time_dest
    time.value = time_dest.value
    start() 
  }

  function stop(){
    clearInterval(chrono_id.value)
  }

  return { time, time_dest, start, stop, restart}
})