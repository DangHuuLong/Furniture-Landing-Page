import { createContext, useState, useContext } from 'react';

export const ComparisonContext = createContext();

export const ComparisonProvider = ({ children }) => {
  const [productsToCompare, setProductsToCompare] = useState([null, null]);

  const addProductToCompare = (product) => {
    setProductsToCompare(prevProducts => {
      const newProducts = [...prevProducts];
      if (!newProducts[0]) {
        newProducts[0] = product;
      } else if (!newProducts[1]) {
        newProducts[1] = product;
      } else {
        newProducts[0] = newProducts[1];
        newProducts[1] = product;
      }
      return newProducts;
    });
  };

  const value = {
    productsToCompare,
    addProductToCompare
  };

  return (
    <ComparisonContext.Provider value={value}>
      {children}
    </ComparisonContext.Provider>
  );
};

export const useComparison = () => useContext(ComparisonContext);