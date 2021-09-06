import React from "react";
import "./Nav.scss";
//images
import TwitterLogo from '../../Assets/Images/twitter-logo.png';
import HomeIcon from '../../Assets/Images/home.png';
import SharpIcon from '../../Assets/Images/sharp.png';
import ColocolIcon from '../../Assets/Images/kolokolchik.png';
import MessageIcon from '../../Assets/Images/message.png';
import ZakladkaIcon from '../../Assets/Images/zakladka.png';
import ListIcon from '../../Assets/Images/lists.png';
import ProfileIcon from '../../Assets/Images/profil.png';
import MoreIcon from '../../Assets/Images/more.png';
import ProfileBro from '../../Assets/Images/profile-brat.png';
import Tochka from '../../Assets/Images/tochki.png';
import Central from "../Central/Central";
import content from "../../Localization/Content";



function Nav (){

const [lang,setLang]=React.useState('en')
 
    return (
        <>
        <div className="container">
          <div className="nav-div">

              <img src={TwitterLogo} alt="logo" className="logo-img" />

              <select
              onChange={(evt)=>{
                setLang(evt.target.value);
              }}
              value={lang}
               className="select" >
                <option value="en">en</option>
                <option value="ru">ru</option>
              </select>

              <ul className="nav-list">
                  <li className="nav-item">  
                  <a href="index.html" className="icon-link">
                    <img src={HomeIcon} alt="logo" className="home-icon" />
                    <h4 className="nav-text dark">{content[lang].home}</h4>
                  </a>
                  </li>
                  <li className="nav-item">
                  <a href="index.html" className="icon-link">
                    <img src={SharpIcon} alt="logo" className="sharp-icon" />
                    <h4 className="nav-text dark">{content[lang].sharp}</h4>
                  </a>
                  </li>
                  <li className="nav-item">
                  <a href="index.html" className="icon-link">
                    <img src={ColocolIcon} alt="logo" className="colocol-icon" />
                    <h4 className="nav-text dark">{content[lang].colocol}</h4>
                  </a>
                  </li>
                  <li className="nav-item">
                  <a href="index.html" className="icon-link">
                    <img src={MessageIcon} alt="logo" className="message-icon" />
                    <h4 className="nav-text dark">{content[lang].message}</h4>
                  </a>
                  </li>
                  <li className="nav-item">
                  <a href="index.html" className="icon-link">
                    <img src={ZakladkaIcon} alt="logo" className="zakladka-icon" />
                    <h4 className="nav-text dark">{content[lang].zakladka}</h4>
                  </a>
                  </li>
                  <li className="nav-item">
                  <a href="index.html" className="icon-link">
                    <img src={ListIcon} alt="logo" className="list-icon" />
                    <h4 className="nav-text dark">{content[lang].list}</h4>
                  </a>
                  </li>
                  <li className="nav-item">
                  <a href="index.html" className="icon-link">
                    <img src={ProfileIcon} alt="logo" className="profile-icon" />
                    <h4 className="nav-text dark">{content[lang].profile}</h4>
                  </a>
                  </li>
                  <li className="nav-item">
                  <a href="index.html" className="icon-link">
                    <img src={MoreIcon} alt="logo" className="more-icon" />
                    <h4 className="nav-text dark">{content[lang].more}</h4>
                  </a>
                  </li>
                  <li className="nav-item">
                    <button className="nav-btn">{content[lang].tweetbtn}</button>
                  </li>
                  <li className="nav-item profile-item">
                    <img src={ProfileBro} alt="profile-img" className="profile-bro" />
                    <h4 className="profile-name-bro">Bobur</h4>
                    <p className="bro-username">@bobur_mavlonov</p>
                    <img src={Tochka} alt="icon" className="tochka-icon" />
                  </li>
              </ul>
          </div>
          <Central/>
        </div>
        </>
    )
}

export default Nav;