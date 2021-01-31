import Header from '../components/header'
import Search from '../components/Search'
import Carrousel from '../components/Carrousel'
import Categories from '../components/Categories'
import CarrouselItem from '../components/CarrouselItem'
import Footer from '../components/Footer'
import useInitialState from '../hooks/useInitialState'

import '../assets/styles/App.css';


const API = 'http://localhost:3000/initialState'

const App = () => {

    const initialState = useInitialState(API)

    return initialState.length === 0 ? <h1>Loading...</h1> : (

        <div className="app">

            <Header/>
            <Search/>

            {initialState.mylist.length > 0 &&

                <Categories title="Mi lista">
                    <Carrousel>
                    {initialState.mylist.map(item =>
                        <CarrouselItem key={item.id} {...item}/>
                    )}
                    </Carrousel>
                </Categories>
            }


            <Categories title="Tendecias">
                <Carrousel>
                    {initialState.trends.map(item =>
                        <CarrouselItem key={item.id} {...item}/>
                    )}
                </Carrousel>
            </Categories>

            <Categories title="Originales">
                <Carrousel>
                     {initialState.originals.map(item =>
                        <CarrouselItem key={item.id} {...item}/>
                    )}                                 
                </Carrousel>
            </Categories>

            <Footer/>

        </div>
    )
}


export default App;