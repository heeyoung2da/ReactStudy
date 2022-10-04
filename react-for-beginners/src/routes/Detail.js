import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
function Detail() {
  const { id } = useParams();
  const [loading, setLoding] = useState(true);
  const [detail, setDetail] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);
    setLoding(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1> Loading...</h1>
      ) : (
        <div>
          <h1>Detail</h1>
          {detail.description_full}
        </div>
      )}
    </div>
  );
}

export default Detail;
