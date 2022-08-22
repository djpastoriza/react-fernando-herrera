// @flow
import * as React from "react";
import { Link } from "react-router-dom";

// componente dentro de otro ( sin exportar )
const CharactersByHero = ({ alter_ego, characters }) => {
  return alter_ego === characters ? <></> : <p>{characters}</p>;
};

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImageUrl = `assets/heroes/${id}.jpg`;

  return (
    <div className="col">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={heroImageUrl} className="card-img" alt={superhero} />
          </div>
          <div className="col-8">
            <h5 className="card-title">{superhero}</h5>
            <p className="card-text">{alter_ego}</p>
            <CharactersByHero
              characters={characters}
              alter_ego={alter_ego}
            ></CharactersByHero>
            <p className="card-text">
              <small className="text-muted">{first_appearance}</small>
            </p>
            <Link to={`/hero/${id}`}>Mas..</Link>
          </div>
        </div>
      </div>
    </div>
  );
};