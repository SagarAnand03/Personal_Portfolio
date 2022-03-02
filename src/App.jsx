import React from 'react'

import { Contact , Experience , About , Header , Footer ,  Portfolio , Navbar} from './componentes'
/*import { Services  ,Testimonials} from './componentes'*/


const App = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <About/>
    <Experience/>
    {/*<Services/>*/}
    <Portfolio/>
    {/*<Testimonials/>*/}
    <Contact/>
    <Footer/>
    </>
  )
}

export default App