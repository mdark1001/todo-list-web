import { createStore } from "vuex" 
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})

export default createStore({
    state(){
        return{
            token:undefined,
            user:{}
        }
    },
    mutations:{
        set_totken(state,token){
            state.token = token
        },
        set_user(state,user){
            state.user = user;
        }
        
    },
    getters: {
        get_token(state,getters){
          return getters.token  
        }
    },
    plugins: [vuexLocal.plugin]

});