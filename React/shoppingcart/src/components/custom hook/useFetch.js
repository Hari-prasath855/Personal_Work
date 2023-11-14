import { useState, useEffect } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);

  useEffect(() => {    
    import('../../products.json')
    .then(response => { setData(response.products)})    
  }, []);

  return [data];
};

export default useFetch;