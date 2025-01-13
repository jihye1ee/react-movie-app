import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import style from "./Movie.module.css"

function Movie ({ coverImg, title, id, year, genres, summary }) {
  // coverImg, title, year, genres, summary ➡️ props (object)
  return (
    <Link to={`${process.env.PUBLIC_URL}/movie/${id}`} className={style.movie_item}>
      <div className={style.thumb_img_box}>
        <img src={coverImg} alt={`${title} poster`} />
      </div>
      <div className={style.txt_box}>
        <p className={style.movie_tit}>{title} ({year})</p>
        <ul className={style.movie_genres}>
          {genres.map((genre) => <li key={genre}>{genre}</li>)}
        </ul>
        <p className={style.movie_desc}>{summary.length > 0 ? summary : "No Summary"}</p>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired, // string을 가진 배열
  summary: PropTypes.string.isRequired
}

export default Movie;
