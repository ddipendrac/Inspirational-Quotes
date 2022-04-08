import { createContext, useState, useEffect } from "react";

const QuotesContext = createContext()

export const QuotesProvider = ({children}) => {

  const [quotes, setQuotes] = useState()

  useEffect(() => {
    getQuotes()
  }, [])
  
  const getQuotes = async () => {
    const response = await fetch('https://type.fit/api/quotes')

    const data = await response.json()

    setQuotes(data)
  }

  return (
    <QuotesContext.Provider value={{
      quotes,
    }}>
      {children}
    </QuotesContext.Provider>
  )
}

export default QuotesContext