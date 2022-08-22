import React from 'react';
import { HeroCard } from './';
import { getHeroesByPublisher } from '../helpers';



export const HeroList = ({publisher}) => {

    const heroes = getHeroesByPublisher(publisher);

    return ( 
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                heroes.map(heroe => (
                    <HeroCard key={heroe.id} {...heroe}></HeroCard>
                ))
            }
        </div>
     );
}
 