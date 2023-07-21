import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@fortawesome/fontawesome-free/css/all.css';

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faArrowsRotate, faCheck, faXmark, faFaceAngry, faFaceLaughBeam, faFaceGrinTears, faFaceFrown } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faArrowsRotate)
library.add(faFaceAngry)
library.add(faCheck)
library.add(faXmark)
library.add(faFaceLaughBeam)
library.add(faFaceGrinTears)
library.add(faFaceFrown)
import App from './App.vue'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
