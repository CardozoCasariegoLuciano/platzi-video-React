import React, {useEffect} from 'react';
import { connect } from "react-redux";
import {getVideoSouerce} from '../actions/index'
import '../assets/styles/Player.css'
import NotFound from '../containers/NotFound'

const Player = (props) => {

    const { id } = props.match.params
    const hasPlaying = Object.keys(props.playing).length > 0

    useEffect(() => {

        props.getVideoSouerce(id)
        
    }, [])

    return hasPlaying ? (
        <div className="Player"> 
            <video controls autoPlay>
                <source src={props.playing.source} type="video/mp4"/>
            </video>

            <div className="Player-back">
                <button type="button" onClick={ () => {props.history.goBack()}}>
                    Regresar
                </button>
            </div>
        </div>

    ) : <NotFound/>
}

const mapStateToProps = state => {
    return {
        playing: state.playing,
    }
}

const mapDispachToProps = {

    getVideoSouerce,
    
}

export default connect(mapStateToProps, mapDispachToProps)(Player)    