<template>
    <div class="progress-bar" :style="{width: game_area.width}">
        <div class="progress-bar-inner" :style="{ width: progress + '%' }"></div>
    </div>
</template>
  
<script>
import { useGameAreaStore } from '@/stores/game_area';

import {useTimerStore} from '@/stores/timer'

export default {

    data() {
        const timer = useTimerStore()
        const game_area = useGameAreaStore()
        return {
            timer,
            progress: 100,
            game_area
        };
    },
    mounted() {
        // this.timer.start()
        setInterval(()=>{
            this.updateProgress(this.timer.time*100/this.timer.time_dest)

        },1000)
    },
    methods: {
        updateProgress(value) {
            this.progress = value;
        },
    },
};
</script>
  
<style>
.progress-bar {
    height: 20px;
    width: 100%;
    background-color: #f0f0f0;
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    flex-flow: column-reverse;
}

.progress-bar-inner {
    height: 100%;
    background-color: #f78200;
    transition: width 0.3s ease;
}
</style>
  