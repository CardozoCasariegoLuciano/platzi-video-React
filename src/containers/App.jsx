import React, {useState , useEffect} from 'react'

import Header from '../components/header'
import Search from '../components/Search'
import Carrousel from '../components/Carrousel'
import Categories from '../components/Categories'
import CarrouselItem from '../components/CarrouselItem'
import Footer from '../components/Footer'

import '../assets/styles/App.css';



const App = () => {

    const [videos, setVideos] = useState([])

    useEffect ( () => {
        fetch('http://localhost:3000/initialState')
            .then(response => response.json())
            .then(data => setVideos(data))
    }, [])
    
    
    return(

        <div className="app">
            
            <Header/>
            <Search/>

            {videos.mylist.length > 0 &&

                <Categories title="Mi lista">
                    <Carrousel>
                       <CarrouselItem/>
                    </Carrousel>
                </Categories>
            }


            <Categories title="Tendecias">
                <Carrousel>
                    {videos.trends.map(item =>
                        <CarrouselItem key={item.id} {...item}/>
                    )}
                </Carrousel>
            </Categories>

            <Categories title="Originales">
                <Carrousel>
                     {videos.originals.map(item =>
                        <CarrouselItem key={item.id} {...item}/>
                    )}                                 
                </Carrousel>
            </Categories>

            <Footer/>

        </div>
    )
}


export default App;