import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../utils/api";

const Results = () => {
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [token, setToken] = useState();
  const [data, setData] = useState([]);

  //* URL'den aratılan kelimeyi al
  const query = searchParams.get("search_query");

  useEffect(() => {
    const params = {
      query: query,
      /*
        Eğer ki sayfa değeri 1den büyükse yeni yapılacak istekte önceki isteğin 
        tokenını ekleyerek bir sonraki sayfanın verilerini alabiliyoruz
      */
      token: page > 1 ? token : undefined,
    };

    api.get(`/search`, { params }).then((res) => {
      setToken(res.data.continuation);
      setData(res.data.data);
    });
  }, []);

  return <div>Results</div>;
};

export default Results;
