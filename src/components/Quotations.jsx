import React, { useContext} from 'react'
import Card from './Card'
import QuotesContext from './QuotesContext'

function Quotations() {
  const { quotes } = useContext(QuotesContext)

  
  if(quotes)
  return (
    <div className='h-full w-full bg-slate-300 flex flex-wrap  p-10 mt-20 justify-evenly'>
      {quotes.map(quote => (
        <Card key={quote.author} text={quote.text} author={quote.author} />
      ))}
    </div>
  )
}

export default Quotations