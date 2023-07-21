import { defineStore } from "pinia";
import {ref} from "vue";
import {useTimerStore} from '@/stores/timer'


export const useGameStateStore = defineStore('game_state', ()=>{
    let started = ref(false)
    const timer = useTimerStore()
    function start() {
        timer.start()
        started.value = true
        console.log("Started")
    }
    function stop(){
        timer.stop()
        started.value = false
    }
    return {started, start, stop}
})