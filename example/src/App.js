import React from 'react'

import { Button } from 'nur-button-ui'
import 'nur-button-ui/dist/index.css'

const App = () => {
  return(
  <div className='buttonApp'>
    <Button text="Primary Button" type="primary"/>
    <br/>
    <Button text="Default Button " type="default"/>
    <br/>
    <Button text="Dashed Button" type="dashed"/>
    <br/>
    <Button text="Text Button" type="text"/>
    <br/>
    <a href="#" classNme="my-button">
     <Button text="Link Button" type = "link"/></a>

  </div>
  )
}

export default App
