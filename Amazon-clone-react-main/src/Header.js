import React from 'react'
import './Header.css'
import logo from './amazon_logo.png';
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from "./StateProvider";
import {auth} from "./firebase";

function Header() {
    const [{ basket,user }, dispatch] = useStateValue();
    const handleAuthentication = ()=>{
        if(user){
            auth.signOut();
        }
    }
    
    return (
        <div div className='header'>
            <Link to='/'>
                <img
                    className='header_logo'
                    src={logo} />
            </Link>


            <div className='header_search'>
                <input type='text' className='header_searchInput' />
                <SearchIcon className='header_searchIcon' />
            </div>

            <div className='header_nav'>
                <Link to={!user && "/login"}  style={{ textDecoration:'none'}}>
                    <div  onClick ={handleAuthentication}className='header_option'>
                        <span className='header_optionLineOne'>
                            Hello {!user ? 'Guest':user.email}
                    </span>
                        <span className='header_optionLineTwo'>
                            {user ? 'Sign Out':'Sign In'}
                    </span>

                    </div>
                </Link>

                <div className='header_option'>
                    <span className='header_optionLineOne'>
                        Returns
                    </span>
                    <span className='header_optionLineTwo'>
                        & Orders
                    </span>
                </div>

                <div className='header_option'>
                    <span className='header_optionLineOne'>
                        Try
                    </span>
                    <span className='header_optionLineTwo'>
                        Prime
                    </span>
                </div>
                <Link to='/checkout'  style={{ textDecoration:'none'}}>
                    <div className='header_optionBasket'>
                        <AddShoppingCartIcon />
                        <span className='header_optionLineTwo header_basketCount'>{basket?.length}</span>


                    </div>
                </Link>




            </div>

        </div>
    )
}

export default Header
