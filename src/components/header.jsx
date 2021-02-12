import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import '../assets/styles/components/Header.css';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';
import gravatar from '../utils/gravatar';
import {logoutRequest} from '../actions';


const Header = (props) => {

    const {user} = props

    const hashUser = Object.keys(user).length > 0

    const handleLogout = () =>{            
      props.logoutRequest({})
    }

    return (

      <header className="header">

      <Link to= "/">
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>

      <div className="header__menu">
        <div className="header__menu--profile">

        { hashUser ?
          <img src={gravatar(user.email)} alt="" /> :
          <img src={userIcon} alt="" />
        }

          <p>Perfil</p>
        </div>
        <ul>
          { hashUser ?            
              <li><a href="/">{user.name}</a></li>              
            :
            null
          }

          { hashUser ?
            <li><a href="#logout" onClick={handleLogout}>Cerrar sesion</a></li> :
            <li>
                <Link to="/logIn">Iniciar Sesión</Link>
            </li>
          }
        </ul>
      </div>
      </header>

)}

const mapStateToProps = state => {
  return{
    user: state.user
  } 
}

const mapDispachToProps = {
  
  logoutRequest,
}

export default connect(mapStateToProps, mapDispachToProps)(Header);