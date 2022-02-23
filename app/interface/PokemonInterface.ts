export interface IPokemon {
    name: string;
    order?: number;
    sprites?: {front_default: string}
    types?: [{name: string}]
    stats?: [{
        base_stat: number, 
        stat: {name: string}}]
    weight?: number
}

export interface IPokemonList {
    results: [{
        name: string, 
        url: string}]
}