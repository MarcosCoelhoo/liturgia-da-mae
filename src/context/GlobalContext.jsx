import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const getData = async (url) => {
      const json = await (await fetch(url)).json();

      setData(json);
    };

    getData('https://liturgiadiaria.site/');
  }, []);

  if (data === null) return null;
  return (
    <GlobalContext.Provider value={{ data, setData }}>
      {children}
    </GlobalContext.Provider>
  );
};
