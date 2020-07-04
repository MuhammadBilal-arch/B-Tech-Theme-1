
import React from 'react'
import "./Prices.css"
import Pcard from "./PricesCard"


export default function Prices() {
    return (             
    <section className="PricePage">

        <ul className="PricePage_ul">
            <li className="PricePage_Li_1">
                <h1>Check out our most popular choises</h1>
                <p>We can make responsive website that can work on smart phone.</p>
            </li>
            <li><Pcard 
                          head= "Startup"
                          PriceID= "$58"
                          PricePara= "We can make responsive website that can work on smart phone."
                          List_1="+ &nbsp;&nbsp; Picture library"
                          List_2="+ &nbsp;&nbsp; 24h support"
                          List_3="+ &nbsp;&nbsp; Advanced search"
                          List_4="+ &nbsp;&nbsp; Template library"
                          List_5="+ &nbsp;&nbsp; 400 GB cloud storage"
                          B_Border="2px solid Blue"
                          B_Color="white"
                          B_Text_Color ="grey"
            />
            </li> 
          <li><Pcard 
                          head= "Bussiness"
                          PriceID= "$120"
                          PricePara= "We can make responsive website that can work on smart phone."
                          List_1="+ &nbsp;&nbsp; Picture library"
                          List_2="+ &nbsp;&nbsp; 24h support"
                          List_3="+ &nbsp;&nbsp; Advanced search"
                          List_4="+ &nbsp;&nbsp; Template library"
                          List_5="+ &nbsp;&nbsp; 800 GB cloud storage"
                          B_Border="none"
                          B_Color="blue"
                          B_Text_Color ="white"
            
            />
                                    
            </li> 
        </ul>
    </section>
    )
}
