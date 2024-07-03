import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../utils/api";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { baseImgUrl } from "../constants";

const DetailPage = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  //* URL'den filmin idsini almak için useParams kullandık
  const { id } = useParams();

  useEffect(() => {
    api
      //* URL'den gelen idye göre filmin detayını aldık
      .get(`/movie/${id}`)
      //* Gelen veriyi state aktardık
      .then((res) => setMovie(res.data))
      //* Hata olursa hatayı state aktardık
      .catch((err) => setError(err.message));
  }, []);
  console.log(movie);
  return (
    <div>
      {!movie ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        // {/* üst alan */}
        <div className="h-[20vh] relative">
          <img
            src={baseImgUrl + movie.backdrop_path}
            className="h-full w-full object-cover"
          />
          <div className="absolute bg-black bg-opacity-50 inset-0 grid place-items-center">
            <h2 className="text-3xl font-semibold">{movie.title}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPage;
