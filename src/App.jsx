import {
  Link,
  NavLink,
  Outlet,
  useParams,
  useRouteError,
} from "react-router-dom";

import film_data from "/src/data/films.json";
import people_data from "/src/data/people.json";
import planet_data from "/src/data/planets.json";

export function Home() {
  return (
    <>
      <h1>A long time ago, in a galaxy far, far away...</h1>
    </>
  );
}

export function PersonData() {
  const params = useParams();
  console.log("==Params", params);

  const personData = people_data[params.personData];
  const films = personData.films;
  return (
    <>
      <h1>{personData.name}</h1>
      <p>Height: {personData.height}</p>
      <p>Mass: {personData.mass}</p>
      <p>Hair Color: {personData.hair_color}</p>
      <p>Skin Color: {personData.skin_color}</p>
      <p>Eye Color: {personData.eye_color}</p>
      <p>Birth Year: {personData.birth_year}</p>
      <p>Gender: {personData.gender}</p>
      <p>
        Homeworld: <Link to={personData.homeworld}>{personData.homeworld}</Link>
      </p>
      <p>
        Films:{" "}
        {Object.values(films).map((film) => (
          <li key={film}>
            <Link to={film}>{film}</Link>
          </li>
        ))}
      </p>
      <p>
        Url: <Link to={personData.url}>{personData.url}</Link>
      </p>
    </>
  );
}

export function PeoplePage() {
  return <h1>Meet The Characters From Star Wars!!</h1>;
}

export function People() {
  return (
    <>
      <div className="container">
        <aside className="sidebar">
          <ul>
            {Object.values(people_data).map((person) => (
              <li key={person.url}>
                <NavLink to={person.url}>{person.name}</NavLink>
              </li>
            ))}
          </ul>
        </aside>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export function PlanetData() {
  const params = useParams();
  const planetData = planet_data[params.planetData];
  const residents = planetData.residents;
  const films = planetData.films;

  return (
    <>
      <h1>{planetData.name}</h1>
      <p>Rotation Period: {planetData.rotation_period}</p>
      <p>Orbital Period: {planetData.orbital_period}</p>
      <p>Diameter: {planetData.diameter}</p>
      <p>Climate: {planetData.climate}</p>
      <p>Gravity: {planetData.gravity}</p>
      <p>Terrain: {planetData.terrain}</p>
      <p>Surface Water: {planetData.surface_water}</p>
      <p>Population: {planetData.population}</p>
      <p>
        Residents:
        {Object.values(residents).map((resident) => (
          <li key={resident}>
            <Link to={resident}>{resident}</Link>
          </li>
        ))}
      </p>
      <p>
        Films:
        {Object.values(films).map((film) => (
          <li key={film}>
            <Link to={film}>{film}</Link>
          </li>
        ))}
      </p>
      <p>
        URL: <Link to={planetData.url}>{planetData.url}</Link>
      </p>
    </>
  );
}

export function PlanetPage() {
  return <h1>Meet The Planets From Star Wars!!</h1>;
}

export function Planets() {
  return (
    <>
      <div className="container">
        <aside className="sidebar">
          <ul>
            {Object.values(planet_data).map((planet) => (
              <li key={planet.url}>
                <NavLink to={planet.url}>{planet.name}</NavLink>
              </li>
            ))}
          </ul>
        </aside>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export function FilmData() {
  const params = useParams();
  const filmData = film_data[params.filmData];
  const characters = filmData.characters;
  const planets = filmData.planets;
  return (
    <>
      <h1>{filmData.title}</h1>
      <p>Episode ID: {filmData.episode_id}</p>
      <p>Opening Crawl: {filmData.opening_crawl}</p>
      <p>Director: {filmData.director}</p>
      <p>Producer: {filmData.producer}</p>
      <p>Release Date; {filmData.release_date}</p>
      <p>
        Character:{" "}
        {Object.values(characters).map((character) => (
          <li key={character}>
            <Link to={character}>{character}</Link>
          </li>
        ))}
      </p>
      <p>
        Planets:
        {Object.values(planets).map((planet) => (
          <li key={planet}>
            <Link to={planet}>{planet}</Link>
          </li>
        ))}
      </p>
      <p>
        URL: <Link to={filmData.url}>{filmData.url}</Link>
      </p>
    </>
  );
}

export function FilmPage() {
  return <h1>Checkout the Star Wars Movies!!</h1>;
}

export function Films() {
  return (
    <>
      <div className="container">
        <aside className="sidebar">
          <ul>
            {Object.values(film_data).map((film) => (
              <li key={film.url}>
                <NavLink to={film.url}>{film.title}</NavLink>
              </li>
            ))}
          </ul>
        </aside>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default function App() {
  return (
    <>
      <nav className="navbar">
        <NavLink to="/">Star Wars</NavLink>
        <NavLink to="/people">People</NavLink>
        <NavLink to="/planets">Planets</NavLink>
        <NavLink to="/films">Films</NavLink>
      </nav>
      <main>{<Outlet />}</main>
    </>
  );
}

export function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <>
      <h1>Error</h1>
      <p>{error.statusText || error.message}</p>
    </>
  );
}
