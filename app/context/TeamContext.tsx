import React, { createContext, FC, useState } from 'react';
import PokemonApi from '../api/PokemonApi';
import { IPokemon } from '../interface/PokemonInterface';

export type TeamContextType = {
    team: IPokemon[];
    addToTeam: (newTeamMember: IPokemon) => void;
    deleteFromTeam: (name: string) => void;
};

export const TeamContext = createContext<TeamContextType | null>(null);

export const TeamProvider: FC = ({ children }) => {
    const [team, setTeam] = useState<IPokemon[]>([]);

    const addToTeam = (newTeamMember: IPokemon) => {
        let check = team.some((pokemon) => pokemon.name === newTeamMember.name);
        if (!check) {
            setTeam([...team, newTeamMember]);
        }
    };

    const deleteFromTeam = (name: string) => {
        let _team = [...team];
        _team.forEach((pokemon, index) => {
            if (pokemon.name === name) {
                _team.splice(index, 1);
            }
        });
        setTeam(_team);
    };

    return (
        <>
            <TeamContext.Provider value={{ team, addToTeam, deleteFromTeam }}>
                {children}
            </TeamContext.Provider>
        </>
    );
};
