import axios from "axios";
import React, { createContext, useState, useEffect } from "react";
import data from "../data";
import AuthorService from "../services/AuthorService";
const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
   
    const authorService = new AuthorService();
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
      // const url = "http://localhost:8080/api/v1/authors";
      // axios.get(url).then(resp=> {setAuthors(resp.data.data)});
       authorService.getAllAuthors().then(resp => setAuthors(resp.data));
    }, [])
    
    const values = {
    message: "selam",
    numbers: 5,
    authors,
    setAuthors
  };
  
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
export default AppContext;
