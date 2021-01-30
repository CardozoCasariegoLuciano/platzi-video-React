import React from 'react'

import Header from '../components/header'
import Search from '../components/Search'
import Carrousel from '../components/Carrousel'
import Categories from '../components/Categories'
import CarrouselItem from '../components/CarrouselItem'
import Footer from '../components/Footer'

import '../assets/styles/App.css';



const App = () => (

    <div className="app">
        <Header/>
        <Search/>
        
        <Categories title="Mas vistos">
            <Carrousel>
                <CarrouselItem title="Pelicula01" year="2020" contentRating="Que es esto?" duration="2hs 40min"/>
                <CarrouselItem title="Pelicula01" year="2020" contentRating="Que es esto?" duration="2hs 40min"/>
                <CarrouselItem title="Pelicula01" year="2020" contentRating="Que es esto?" duration="2hs 40min"/>
                <CarrouselItem title="Pelicula01" year="2020" contentRating="Que es esto?" duration="2hs 40min"/>
            </Carrousel>
        </Categories>

        <Categories title="Mejor puntuados">
            <Carrousel>
                <CarrouselItem title="Pelicula01" year="2020" contentRating="Que es esto?" duration="2hs 40min"/>              
                <CarrouselItem title="Pelicula01" year="2020" contentRating="Que es esto?" duration="2hs 40min"/>
            </Carrousel>
        </Categories>

        <Categories title="Seleecion personal">
            <Carrousel>
                <CarrouselItem title="Pelicula117" year="2021" contentRating="Que es esto?" duration="4hs 40min"/>               
            </Carrousel>
        </Categories>

        <Footer/>

    </div>
);

export default App;