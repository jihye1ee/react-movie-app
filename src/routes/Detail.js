import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import style from "./Detail.module.css"

function Detail () {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [detailMovie, setDetailMovie] = useState({});
  const getMovie = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();

    setDetailMovie(json.data.movie);
    setLoading(false);
  }

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
    {loading ? <p className="load-txt">Loading...</p> : (
      <div className={style.detail_wrap}>
        <Link to={`${process.env.PUBLIC_URL}/`} className={style.home_btn}>← GO TO HOME</Link>
        <h3 className={style.tit}>{detailMovie.title} ({detailMovie.year})</h3>
        <p className={style.rate}>★ {detailMovie.rating}</p>
        <ul className={style.movie_genres}>
          {detailMovie.genres.map((item, key) => {
            return <li key={key}>{item}</li>;
          })}
        </ul>
        <div className={style.poster_box}>
          <img src={detailMovie.large_cover_image} alt={`영화 <${detailMovie.title}> 포스터`} />
        </div>
        <p className={style.desc}>{detailMovie.description_full.length > 0 ? detailMovie.description_full : "No Summary"}</p>
      </div>
    )}
    </>
  );
}

export default Detail;

// await는 async 함수 내부에 있지 않으면 사용할 수 없음
