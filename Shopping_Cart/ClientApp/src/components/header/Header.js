import React from 'react'
import { useSelector } from 'react-redux';

const Header = () => {
    const profile = useSelector(state => state.products.userProfile)
    return (
        <div className="App-header row">
            <div className="col-sm-10" >`Welcome {profile.name} to this App`</div>
        </div>
    )
}

export default Header;
