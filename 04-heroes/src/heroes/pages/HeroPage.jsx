import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Publisher } from "../constant";
import { getHeroById } from "../helpers";

export const HeroPage = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // revisa los params de la url ( no los queary params )
  const hero = getHeroById(id);

  const onNavigateBack = () => {
    if (hero.publisher === Publisher.DC) {
      navigate("/dc");
      return;
    }
    navigate("/marvel");
  };

  if (!hero) {
    return <Navigate to="/marvel" />;
  }
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`/assets/heroes/${id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail"
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego:</b> {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b> {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>First appearence:</b> {hero.first_appearance}
          </li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>
        <button className="btn btn-outline-primary" onClick={onNavigateBack}>
          Volver
        </button>
      </div>
    </div>
  );
};
