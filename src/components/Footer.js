import React from 'react'
import '../styles/Footer.css'

function Footer()
{
    let date = new Date();
    let year = date.getFullYear();

    return(
        
        <footer>
            <h3 className="Copyright">© {year}</h3>
        </footer>
    )
}
export default Footer