import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'

//MI IMPORTO LE INCON DA FONT AWSOME
/* import the fontawesome core */ //PRIMA IMPORTO LA LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome' //RECUPERIAMO IL COMPONENTE


//import icons
import { faStar, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import {faStar as faStarEmp} from '@fortawesome/free-regular-svg-icons'

library.add(faStar, faStarEmp, faChevronDown)

const app = createApp(App)


//REGISTRIAMO IL COMPONENTE GLOBALMENTE
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
