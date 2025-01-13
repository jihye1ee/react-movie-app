import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import style from "./Home.module.css"

function Home () {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)).json();

    setLoading(false);
    setMovies(json.data.movies)
  };

  useEffect(() => {
    getMovies();

    /*
      fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)
        .then((response) => response.json())
        .then((json) => {
          setLoading(false);
          setMovies(json.data.movies)
        });

      ➡️ 요즈음은 then보다 async, await를 더 보편적으로 사용함
    */
  }, []);

  return (
    <>
      {loading ? <p className="load-txt">Loading...</p> : (
        <div className={style.wrap}>
          {movies.map(movie => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.large_cover_image}
              title={movie.title}
              year={movie.year}
              genres={movie.genres}
              summary={movie.summary}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Home;

/*
  {movie.genres.map((genre) => <li key={genre}>{genre}</li>)}
  여기에서 movie.genres의 배열에는 id 등 어떤 고유값이 없기 때문에 원한다면 genre를 줄 수 있음 (genre가 고유한 값이 한 괜찮음)
*/
// ⭐️ map 함수 사용 시 key값을 꼭 부여해야 한다는 점 잊지 말기! (key는 React.js에서만, map 안에서 컴포넌트들을 render할 때 사용하는 것)
