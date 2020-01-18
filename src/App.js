import React from 'react'
import axios from 'axios'
import { Link, Route, useHistory } from 'react-router-dom'

import SureLogo from './SureLogo'
import SureLogoMobile from './SureLogoMobile'
import Rating from './Rating'
import Quote from './Quote'

function App() {
  const history = useHistory()
  const [quote, setQuote] = React.useState({})

  const fetchQuote = payload => {
    axios
      .post('https://fed-challenge-api.sure.now.sh/api/v1/quotes', payload)
      .then(res => {
        setQuote(res.data.quote)
        history.push('/quote')
      })
  }

  return (
    <div className="bg-blue-100 min-h-screen pb-6">
      <header className="container mx-auto sm:mb-8 pt-4 px-4">
        <Link to="/">
          <SureLogo />
          <SureLogoMobile />
        </Link>
        <h1 className="text-2xl sm:text-right text-center pt-2 pb-6">
          <span role="img" aria-label="rocket">
            🚀
          </span>{' '}
          Rocket Insurance
        </h1>
      </header>

      <Route path="/" exact>
        <Rating onSubmit={fetchQuote} />
      </Route>
      <Route path="/quote">
        <Quote quote={quote} />
      </Route>
    </div>
  )
}

export default App
