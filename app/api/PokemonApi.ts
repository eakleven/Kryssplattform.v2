import axios from "axios"
import Axios from "axios"
import { IPokemon, IPokemonList } from "../interface/PokemonInterface"

Axios.defaults.baseURL = "https://pokeapi.co/api/v2"



const getRegionOffset = (region: string) => {
    let offset = 0;
    let limit = 151;
    switch (region){
        case "Kanto":

            offset = 0
            limit = 151
            break;
        case "Johto":
 
            
            offset = 151
            limit = 100
            break;
        case "Hoenn":
   
            
            offset = 251
            limit = 135
            break;
        case "Sinnoh":

            
            offset = 386
            limit = 107
            break;
        case "Unova":
  
            
            offset = 493
            limit = 156
            break;
        case "Kalos":

            
            offset = 649
            limit = 72
            break;
        case "Alola":

            
            offset = 721
            limit = 88
            break;
        case "Galar":

            
            offset = 808
            limit = 96
            break;
                        
            
        }
        return {limit, offset}


}

const getPokemon = async (pokemon: string | number) => {
    try {
        const res = await axios.get<IPokemon>(`/pokemon/${pokemon}`)
        return res.data
    } catch (e){
        return e

    }
}

const getRegion = async (region: string) => {

    let {limit, offset} = getRegionOffset(region)
    

    try{
        const res = await axios.get<IPokemonList>(`/pokemon?offset=${offset}&limit=${limit}`)
        return res.data
    } catch (e){
        return e
    }
}

const getAll = async () => {
    try{
        const res = await axios.get<IPokemonList>(`/pokemon?offset=0&limit=904`)
        return res.data
    }
    catch(e){return e}

}

export default {
    getPokemon,
    getRegion,
    getAll
}