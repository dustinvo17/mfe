import React , {useRef, useEffect }from 'react'
import {BrowserRouter} from 'react-router-dom'
import MarketingApp from './components/MarketingApp'
import {createGenerateClassName, StylesProvider} from '@material-ui/core/styles'
import Header from './components/Header'
const generateClassname = createGenerateClassName({
  productionPrefix:'co'
})
export default () => {
  return <BrowserRouter>
     <StylesProvider generateClassName={generateClassname}>
      <div>
     
        <Header/>
        <MarketingApp/>
   

      </div>
      </StylesProvider>
  </BrowserRouter>

}
