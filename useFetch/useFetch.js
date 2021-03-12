import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
  const isMountend = useRef(true);
  const [state, setstate] = useState({
    data: null,
    loading: true,
    error: null
  });

  //UseEffect que retorna isMounted = false cuando el componente se desmonta, luego hago una condicional
  //para no asignar el state y evitar problemas con el state cuando se desmonta el componente
  useEffect(() => {
    return () => {
      isMountend.current = false;
    };
  }, []);

  useEffect(() => {
    setstate({ data: null, loading: true, error: null });

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (isMountend.current) {
          setstate({
            loading: false,
            error: null,
            data
          });
        }
      })
      .catch(() => {
        setstate({
          data: null,
          loading: false,
          error: "No se pudo cargar la información"
        });
      });
  }, [url]);

  return state;
};
