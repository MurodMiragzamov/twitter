import React from "react";
import './End.scss'
//images
import Tochka from '../../Assets/Images/tochki.png';
import Settings from '../../Assets/Images/settings.png';
import Search from '../../Assets/Images/search.png';
import ProfileGirl from '../../Assets/Images/profile-girl.png';
import ProfileBoy from '../../Assets/Images/profile-boy.png';


function End (){


    return(
        <>
            <div className="end-div">
                <div className="div-input-search">
                <input autocomplete="off" type="text" name="search-imput" placeholder='Search Twitter' className='search-imput' />
                <img src={Search} alt="icon" className="search-icon" />
                </div>

                <ul className="end-list">
                    <li className="end-item">
                        <h2 className="end-header">Trends for you</h2>
                        <img src={Settings} alt="icon" className="settings-icon" />
                    </li>
                    <li className="end-item">
                        <span className="end-item_span">Trending in Germany</span>
                        <h3 className="end-item_header">Revolution</h3>
                        <span className="end-item_span">50.4K Tweets</span>
                        <img src={Tochka} alt="icon" className="end-tochka" />
                    </li>
                    <li className="end-item">
                        <span className="end-item_span">Trending in Germany</span>
                        <h3 className="end-item_header">Revolution</h3>
                        <span className="end-item_span">50.4K Tweets</span>
                        <img src={Tochka} alt="icon" className="end-tochka" />
                    </li>
                    <li className="end-item">
                        <span className="end-item_span">Trending in Germany</span>
                        <h3 className="end-item_header">Revolution</h3>
                        <span className="end-item_span">50.4K Tweets</span>
                        <img src={Tochka} alt="icon" className="end-tochka" />
                    </li>
                    <li className="end-item">
                       <button className="end-button">
                       Show more
                       </button>
                    </li>
                </ul>

                <ul className="might-list">
                    <li className="might-item">
                        <h2 className="might-header">You might like</h2>
                    </li>
                    <li className="might-item">
                        <img src={ProfileGirl} alt="img" className="might-profile-img" />
                        <div className="might-profile">
                            <h4 className="profile_header">Mushtariy</h4>
                            <span>@Mushtar565266</span>
                        </div>
                        <button className="profile_btn">Follow</button>
                    </li>
                    <li className="might-item">
                    <img src={ProfileBoy} alt="img"                 className="might-profile-img" />
                        <div className="might-profile">
                            <h4 className="profile_header">Shuhratbek</h4>
                            <span>@mrshukhrat</span>
                        </div>
                        <button className="profile_btn">Follow</button>
                    </li>
                    <li className="might-item">
                    <button className="end-button">
                       Show more
                       </button>
                    </li>
                </ul>

              <ul className="footer-list">
                    <li className="footer-item">Terms of Service</li>
                    <li className="footer-item"><a href="profile.html">Privacy Policy</a></li>
                    <li className="footer-item">Cookie Policy</li>
                    <li className="footer-item">Imprint</li>
                    <li className="footer-item">Ads Info</li>
                    <li className="footer-item">More ···</li>
                    <li className="footer-item">© 2021 Twitter, Inc.</li>
              </ul>
              
            </div>
        </>
    )
}


export default End;