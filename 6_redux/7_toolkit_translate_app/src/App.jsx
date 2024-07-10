import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { getLanguages, translateText } from "./redux/actions";

function App() {
  const dispatch = useDispatch();

  const { isLoading, error, languages } = useSelector(
    (store) => store.languageReducer
  );

  const translateState = useSelector((store) => store.translateReducer);
  console.log(translateState);

  const [sourceLang, setSourceLang] = useState({
    label: "Turkish",
    value: "tr",
  });
  const [targetLang, setTargetLang] = useState({
    label: "English",
    value: "en",
  });
  const [text, setText] = useState("");

  useEffect(() => {
    dispatch(getLanguages());
  }, []);

  /*
    * dil dizisini bizden istenilen formate çevirme
    * nesnelerin içerisindeki code ve name değerleri value ve label değerlerine çevirdik
    * Diziyi formatlama işlemi her render sırasında olmasını istemediğimiz için useMemo kullanarak
    * cache'e gönderdik
  
  */
  const formatted = useMemo(
    () =>
      languages.map((i) => ({
        label: i.name,
        value: i.code,
      })),
    [languages]
  );

  const handleTranslate = () => {
    dispatch(translateText({ sourceLang, targetLang, text }));
  };

  const handleSwap = () => {
    //* Select alanlarındaki verileri yer değiştirir
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
  };

  return (
    <div className="bg-zinc-900 h-screen text-white grid place-items-center">
      <div className=" w-[80vw] max-w-[1100px] flex flex-col justify-center">
        <h1 className="text-center text-4xl font-semibold mb-7">Çeviri +</h1>
        {/* Üst Kısım */}
        <div className="flex gap-2 text-black">
          <Select
            value={sourceLang}
            isDisabled={isLoading}
            options={formatted}
            onChange={(e) => setSourceLang(e)}
            className="flex-1"
          />
          <button
            onClick={handleSwap}
            className="bg-zinc-700 py-2 px-6 hover:bg-zinc-800 transition rounded text-white"
          >
            Değiş
          </button>
          <Select
            value={targetLang}
            isDisabled={isLoading}
            options={formatted}
            onChange={(e) => setTargetLang(e)}
            className="flex-1"
          />
        </div>

        {/* Text alanlaır */}
        <div className="flex gap-3 mt-5 md:gap-[105px] max-md:flex-col">
          <div className="flex-1">
            <textarea
              onChange={(e) => setText(e.target.value)}
              className="w-full min-h-[300px] max-h-[500px] text-black text-[20px] rounded p-[10px]"
            ></textarea>
          </div>
          <div className="flex-1">
            <textarea
              disabled
              value={translateState.answer}
              className="w-full min-h-[300px] max-h-[500px] text-black text-[20px] rounded p-[10px] text-gray-300"
            ></textarea>
          </div>
        </div>

        {/* buton */}
        <button
          onClick={handleTranslate}
          className="bg-zinc-700 px-5 py-3 rounded-md font-semibold hover:ring-2 hover:bg-zinc-900 cursor-pointer transition mt-3"
        >
          Çevir
        </button>
      </div>
    </div>
  );
}

export default App;
