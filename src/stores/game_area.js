import { defineStore } from "pinia";
import {ref} from "vue";

export const useGameAreaStore = defineStore('game_area', ()=>{
    let width = ref(500)
    let height = ref(500)

    function updateDim() {
        if (window.innerWidth < 800){
            width = window.innerWidth -20
            
        }
        else if(window.innerWidth > 800 && window.innerWidth < 1200){
            width = 800
        }
        else if (window.innerWidth > 1200){
            width = 1000
        }
        else{
            width = 500
            height = 500
        }
        if (window.innerHeight > 800){
            height = 600
        }
        else{
            height = 400
        }
    }

    window.addEventListener('resize', updateDim())

    return {updateDim, width, height}
})