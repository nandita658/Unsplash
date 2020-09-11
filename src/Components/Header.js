import React, {Component} from 'react';

class Header extends React.Component {
    render(){
        return(
            <div>
                <header>
                <div className="container">
                    <nav>
                        <div className="row">
                            <i className="fa fa-camera icon" aria-hidden="true"></i>
                            <img src="Asests/images/29.jpg" className="image"/>
                            <i className="fa fa-bell icon-right" aria-hidden="true"></i>
                            <button>Submit a photo</button>
                            <ul className="main-nav">
                                <li>Home</li>
                                <li>Collections</li>
                                <li>Explore</li>
                            </ul>
                        </div>
                    </nav>
                    <div className="text">
                        <h1>Unsplash</h1>
                        <p>Beautiful, free photos.<br/>Gifted by the world's most generous community of photogeaphers.<br/></p>
                        <div className="form">
                            <input className="bar" type="text" name="box" placeholder="Search free high-resolution photos"/>
                            <input className="button" type="submit" value="Search"/>
                        </div>
                        <p className="p"><span>Trending searches: </span>business, computer, nature, love, house</p>
                    </div>
                    <p className="p1"><span>Photo of the Day by </span>Koushik C</p>
                </div>
                <div className="container1"></div>
            </header>
            </div>
        );
    }
}

export default Header;