<script>
import { useScoreStore } from "@/stores/score";
import { useTimerStore } from '@/stores/timer';
import { useGameAreaStore } from '@/stores/game_area';
import { useGameStateStore } from '@/stores/game_state';
import $ from 'jquery';

export default {
    props: ['matiere'],

    data() {
        const score = useScoreStore()
        const timer = useTimerStore()
        const game_area = useGameAreaStore()
        const game_state = useGameStateStore()
        const click_audio = new Audio("/click.m4a")
        const gameover_audio = new Audio("/gameover.m4a")
        gameover_audio.volume = 0.5
        const music_back = new Audio('/music.mp3')
        music_back.volume = 0.2



        return {
            score,
            dest_x: 0,
            dest_y: 0,

            matiere_id: 0,

            width: 400,
            height: 400,
            game_area,
            game_state,
            transform: "translate(20px, 20px)",

            timer,
            show_gameover: false,

            hide_startup_menu: false,
            btn_restart_disabled: true,

            click_audio,
            gameover_audio,
            music_back


        }

    },
    mounted() {
        // this.animate_matiere()
        $('.btn').on('click', () => {
            this.click_audio.play()
        })

    },

    methods: {

        start_game() {
            this.game_state.start()
            this.animate_matiere()
            this.hide_startup_menu = true
            this.music_back.play()
        },

        click_matiere() {
            if (this.timer.time > 0) {
                this.score.increment()
                this.click_audio.play()
                // this.change_position()
            }
        },
        animate_matiere() {
            this.matiere_id = setInterval(() => {
                this.change_position()

                if (this.score.change) {
                    clearInterval(this.matiere_id)
                    // console.log(1000 - this.score.multiplier)
                    this.animate_matiere()
                    this.score.change = false
                }
                if (this.timer.time <= 0) {
                    this.gameover_audio.play()
                    setTimeout(() => {
                        this.btn_restart_disabled = false
                        // console.log(this.btn_restart_disabled)
                    }, 2000);
                    clearInterval(this.matiere_id)
                    this.show_gameover = true
                    this.game_state.stop()
                    this.music_back.pause()
                    this.music_back.currentTime = 0
                }
            }, 1000 - this.score.multiplier)
        },

        change_position() {
            this.dest_x = parseInt(Math.random() * (this.game_area.width - 100));
            this.dest_y = parseInt(Math.random() * (this.game_area.height - 100))
            // console.log(this.dest_x, this.dest_y)
            this.transform = `translate(${this.dest_x}px, ${this.dest_y}px)`;
        },
        restart() {
            if (!this.btn_restart_disabled) {

                this.timer.restart()
                this.score.restart()
                this.show_gameover = false
                this.animate_matiere()

                this.btn_restart_disabled = true
            }
        }
    }

}
</script>

<template>
    <div class="matiere" :style="{ transform: transform }" @click="click_matiere">
        <!-- <div class="matiere-label">BACC</div> -->
        <img src="@/assets/hat.png" alt="">
    </div>
    <div :class="{ hide: this.hide_startup_menu }" class="startupmenu-parent">

        <div class="startupmenu">
            <div class="logo">
                <img src="@/assets/logo.png" width="200" alt="">
            </div>
            <div class="hint">
                <p>➡2023 isika zao, nisy fuite ny sujet dia lasa mirava @ 21h ny mpanala fanadinana <font-awesome-icon
                        color="yellow" :icon="['fas', 'fa-face-frown']" size="lg" class="icon" /></p>
                <p>Vitao ny fanadinana anao alohan'ny hatapan'ny Jiro ! <font-awesome-icon color="yellow"
                        :icon="['fas', 'fa-face-grin-tears']" size="lg" class="icon" /></p>
                <p>(Cliqueo lay sary misy soratra bacc)</p>
                <p>(Cliqueo kosa lay <span class="btn-help" @click="show_hint_fun()"> <i class="fa fa-question"></i> </span>
                    raha mila fanazavana fanampiny)</p>
            </div>
            <div class="btn" @click="start_game()">Hanomboka</div>
        </div>
    </div>
    <div class="game_over" :class="{ game_over_show: show_gameover }">
        <div class="img-blackout">
            <img src="@/assets/blackout.png" alt="blackout image">
        </div>
        <font-awesome-icon :icon="['fas', 'fa-face-angry']" size="lg" class="icon-angry" />
        <h2>OOoohh, Tapaka ndray ny Jiro</h2>
        <div class="score-section">
            <p>Ny naotinao : {{ this.score.score / 2 }} / 20 <br>
                <span v-if="parseFloat(this.score.score) <= 9">
                    Noho ny ezaka nataon'ny filoha de tsy afaka enao 😘

                </span>
                <span v-else>


                    Noho ny ezaka nataon'ny filoha de mba nahazo mention {{ this.score.mention }} enao 😘
                </span>
            </p>
        </div>
        <p>Amerina ? </p>
        <div class="row">
            <div class="btn" @click="restart()"> <font-awesome-icon :icon="['fas', 'fa-check']" size="lg" class="icon" />
                Eny</div>
            <div class="btn other-btn" @click="restart()"><font-awesome-icon :icon="['fas', 'fa-xmark']" size="lg"
                    class="icon" />Eny fa miloko hafa <font-awesome-icon color="yellow"
                    :icon="['fas', 'fa-face-grin-tears']" size="lg" class="icon" /> </div>

        </div>
    </div>
</template>

<style scoped>
.hide {
    display: none;
}

.matiere {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    /* background-color: grey; */
    transition: all 0.2s ease;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    color: white;
    position: absolute;
}

.hint {
    background-color: #798361;
    padding: 10px;
    border-radius: 10px;
}

.matiere img {
    width: 100%;
}

@keyframes fadein {
    from {
        background-color: #33333300;
        opacity: 0;

    }

    to {
        background-color: #333333;
        opacity: 1;
        display: block;
    }
}

.startupmenu-parent {
    position: absolute;
    top: 0;
    z-index: 99;
    background-color: #333333;
    width: 100%;
    height: 100%;

}

.startupmenu {

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
    padding: 5px;
}

.startupmenu p {
    color: white;
    text-align: center;
}

@media (min-width: 500px) {
    .startupmenu p {

        font-size: large;
    }
}

.game_over {
    width: 100%;
    height: 100%;
    background-color: #333333;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    opacity: 0;
    display: none;

}

.btn {
    padding: 10px;
    background-color: orange;
    margin: 10px;
    border-radius: 10px;
    /* text-align: center; */
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-weight: bold;
}

.btn .icon {
    margin-inline: 10px;
}

.btn:hover {
    background-color: rgb(102, 66, 0);
    transition: all 0.2s;
    color: white;
}

.other-btn {
    background-color: rgb(255, 94, 0);
}

.game_over_show {
    /* background-color: #333333; */
    animation: fadein 1s;
    opacity: 1;
    display: flex;
    /* transition: all 1s; */

}

.img-blackout {
    max-width: 100px;

}

.img-blackout img {
    max-width: 100%;
    height: auto;
    width: auto\9;
}

.icon-angry {
    font-size: 2em;
    color: rgb(255, 94, 0);

}

.score-section p {
    text-align: center;
}

@media (max-width: 500px) {
    p {
        font-size: 14px;
    }
}</style>