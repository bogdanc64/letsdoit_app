import React from 'react'
import Navbar from './Navbar'
import MainWrapper from './MainWrapper'
import Footer from './Footer'

function App()
{
    return(
        <main>
            <div className="Main">
                <Navbar />
                <MainWrapper />
                
            </div>
            <Footer />
        </main>
    )
}

export default App