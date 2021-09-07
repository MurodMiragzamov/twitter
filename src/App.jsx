import React from 'react';
import './App.scss';
//components

//images
import TwitterLogo from './Assets/Images/twitter-logo.png';
import HomeIcon from './Assets/Images/home.png';
import SharpIcon from './Assets/Images/sharp.png';
import ColocolIcon from './Assets/Images/kolokolchik.png';
import MessageIcon from './Assets/Images/message.png';
import ZakladkaIcon from './Assets/Images/zakladka.png';
import ListIcon from './Assets/Images/lists.png';
import ProfileIcon from './Assets/Images/profil.png';
import MoreIcon from './Assets/Images/more.png';
import ProfileBro from './Assets/Images/profile-brat.png';
import Tochka from './Assets/Images/tochki.png';
import content from "./Localization/Content";



import Comments from './Assets/Images/comments.png';
import Like from './Assets/Images/like.png';
import LikeRed from './Assets/Images/like-red.png';
import Strelka from './Assets/Images/stdr.png';
import StrelkaGreen from './Assets/Images/st.png';
import Download from './Assets/Images/podel.png';
import Theme from './Assets/Images/tema.png';
import Smile from './Assets/Images/smile.png';
import Shashli from './Assets/Images/wawli.png';
import Shkala from './Assets/Images/shkala.png';
import ProfileKam from './Assets/Images/profile-kam.png';
import ProfileOchki from './Assets/Images/profile-ochki.png';
import ProfileHappy from './Assets/Images/profile-happy.png';
import Gif from './Assets/Images/gif.png';
import GifRight from './Assets/Images/gif-right.png';
import Img from './Assets/Images/img.png';
import Kalendar from './Assets/Images/kalendar.png';




import Settings from './Assets/Images/settings.png';
import Search from './Assets/Images/search.png';
import ProfileGirl from './Assets/Images/profile-girl.png';
import ProfileBoy from './Assets/Images/profile-boy.png';

import { Context } from './Context/Theme';


//components
function App (){

  const [lang,setLang]=React.useState(JSON.parse(window.localStorage.getItem('lg'))||'en')

  const {theme,setTheme} = React.useContext(Context)
  

      return (
          <>

          <section className={`global-section ${theme}`}>
          <div className="container">
            <div className="nav-div">
  
                <img src={TwitterLogo} alt="logo" className="logo-img" />
  
                <select
                onChange={(evt)=>{
                  setLang(evt.target.value);

                  window.localStorage.setItem('lg',JSON.stringify(evt.target.value))
                }}
                value={lang}
                 className="select" >
                  <option value="en">en</option>
                  <option value="ru">ru</option>
                </select>


                <select value={theme} className='select-theme' onChange={(evt)=>{
                    setTheme(evt.target.value) 
                    window.localStorage.setItem('th',JSON.stringify(evt.target.value))
                    }}>

                    <option value="light">Light</option>
                    <option value="dark">Dark</option>

                </select>
  
                <ul className="nav-list">
                    <li className="nav-item">  
                    <a href="index.html" className="icon-link">
                      <img src={HomeIcon} alt="logo" className="home-icon" />
                      <h4 className={`nav-text ${theme}`}>{content[lang].home}</h4>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="index.html" className="icon-link">
                      <img src={SharpIcon} alt="logo" className="sharp-icon" />
                      <h4 className={`nav-text ${theme}`}>{content[lang].sharp}</h4>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="index.html" className="icon-link">
                      <img src={ColocolIcon} alt="logo" className="colocol-icon" />
                      <h4 className={`nav-text ${theme}`}>{content[lang].colocol}</h4>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="index.html" className="icon-link">
                      <img src={MessageIcon} alt="logo" className="message-icon" />
                      <h4 className={`nav-text ${theme}`}>{content[lang].message}</h4>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="index.html" className="icon-link">
                      <img src={ZakladkaIcon} alt="logo" className="zakladka-icon" />
                      <h4 className={`nav-text ${theme}`}>{content[lang].zakladka}</h4>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="index.html" className="icon-link">
                      <img src={ListIcon} alt="logo" className="list-icon" />
                      <h4 className={`nav-text ${theme}`}>{content[lang].list}</h4>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="index.html" className="icon-link">
                      <img src={ProfileIcon} alt="logo" className="profile-icon" />
                      <h4 className={`nav-text ${theme}`}>{content[lang].profile}</h4>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="index.html" className="icon-link">
                      <img src={MoreIcon} alt="logo" className="more-icon" />
                      <h4 className={`nav-text ${theme}`}>{content[lang].more}</h4>
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



        {/* /////////////////// */}




            <div className={`div-central ${theme}`}>
               <h1 >{content[lang].home}</h1>
               <img src={Theme} alt="logo" className="theme-icon" />
               <form  className={`central-form ${theme}`}>
                   <img src={ProfileBro} alt="profilelogo" className='central-input-profile' />

                   <input autocomplete="off" type="text" name='input-post' placeholder={content[lang].inputone} className={`central-input ${theme}`} />

                  <button type="button" className="logo-btn"> <img src={Img} alt="logo" className='form_img' /></button>
                  <button type="button" className="logo-btn"> <img src={Gif} alt="logo" className='form_gif' /></button>
                   <button type="button" className="logo-btn"><img src={GifRight} alt="logo" className='form_gif-right' /></button>
                  <button type="button" className="logo-btn"> <img src={Smile} alt="logo" className='form_smile' /></button>
                   <button type="button" className="logo-btn"><img src={Kalendar} alt="logo" className='form_kalendar' /></button>

                    <div className="div-button">
                    <button type='submit' className="form_btn">{content[lang].tweetbtn}</button>
                    </div>
                 

               </form>

               <ul className="central-list">
                   <li className="central-item">
                       <img src={ProfileKam} alt="profile" className="central_profile-users" />
                       <div className="li_div">
                       <h3 className="users-name">Designsta</h3>
                       <span className="user-cam-id">@inner · 25m</span>
                       </div>
                       <p className="central_users-text ">Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?</p>

                       <img src={Tochka} alt="icon" className="central_tochka" />

                       <div className="popularnosti">
                           <span className="comments">
                               <img src={Comments} alt="icon" className="comments-icon" />
                               <p className="comments-number">
                                    10
                               </p>
                           </span>

                           <span className="st">
                               <img src={Strelka} alt="icon" className="st-icon" />
                               <p className="st-number">
                                   1
                               </p>
                           </span>

                           <span className="like">
                               <img src={Like} alt="icon" className="like-icon" />
                               <p className="like-number">
                                   8
                               </p>
                           </span>

                           <span className="downloads">
                               <img src={Download} alt="icon" className="downloads-icon" />
                              
                           </span>

                           <span className="shkala">
                               <img src={Shkala} alt="icon" className="shkala-icon" />
                               
                           </span>
                       </div>
                    </li>

                    <li className="central-item">
                       <img src={ProfileOchki} alt="profile" className="central_profile-users" />
                        <div className="li_div">
                        <h3 className="users-name">cloutexhibition</h3>
                        <span className="user-ochki-id">@RajLahoti · 22m</span>
                        </div>
                        <p className="central_users-text ">YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va <br /> yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.</p>

                        <img src={Tochka} alt="icon" className="central_tochka" />

                        <div className="popularnosti">
                           <span className="comments">
                               <img src={Comments} alt="icon" className="comments-icon" />
                               <p className="comments-number">

                               </p>
                           </span>

                           <span className="st">
                               <img src={StrelkaGreen} alt="icon" className="st-icon" />
                               <p className="st-number-green green">
                                   5
                               </p>
                           </span>

                           <span className="like">
                               <img src={LikeRed} alt="icon" className="like-icon" />
                               <p className="like-number-red red">
                                   9
                               </p>
                           </span>

                           <span className="downloads">
                               <img src={Download} alt="icon" className="downloads-icon" />
                              
                           </span>

                           <span className="shkala">
                               <img src={Shkala} alt="icon" className="shkala-icon" />
                               
                           </span>
                       </div>

                    </li>

                    <li className="central-item">
                       <img src={ProfileHappy} alt="profile" className="central_profile-users" />
                      <div className="li_div">
                            <h3 className="users-name">CreativePhoto</h3>
                        <span className="user-happy-id">@cloutexhibition · 1h</span>
                      </div>
                        <p className="central_users-text ">Обетда..... <br/>
                        Кечиринглар</p>

                        <img src={Tochka} alt="icon" className="central_tochka" />

                        <img src={Shashli} alt="icon" className="wawli-img" />

                         <div className="popularnosti">
                           <span className="comments">
                               <img src={Comments} alt="icon" className="comments-icon" />
                               <p className="comments-number">
                                    10
                               </p>
                           </span>

                           <span className="st">
                               <img src={Strelka} alt="icon" className="st-icon" />
                               <p className="st-number">
                                   1
                               </p>
                           </span>

                           <span className="like">
                               <img src={Like} alt="icon" className="like-icon" />
                               <p className="like-number">
                                   8
                               </p>
                           </span>

                           <span className="downloads">
                               <img src={Download} alt="icon" className="downloads-icon" />
                              
                           </span>

                           <span className="shkala">
                               <img src={Shkala} alt="icon" className="shkala-icon" />
                               
                           </span>
                       </div>

                    </li>
               </ul>
            </div>


{/* ///////////////////////// */}




            <div className="end-div">
                <div className="div-input-search">
                <input autocomplete="off" type="text" name="search-imput" placeholder={content[lang].inputtwo} className='search-imput' />
                <img src={Search} alt="icon" className="search-icon" />
                </div>

                <ul className="end-list">
                    <li className="end-item">
                        <h2 className="end-header">{content[lang].trendsheader}</h2>
                        <img src={Settings} alt="icon" className="settings-icon" />
                    </li>
                    <li className="end-item">
                        <span className="end-item_span">{content[lang].trending}</span>
                        <h3 className="end-item_header">{content[lang].trends_revolution}</h3>
                        <span className="end-item_span">{content[lang].revolution_tweet}</span>
                        <img src={Tochka} alt="icon" className="end-tochka" />
                    </li>
                    <li className="end-item">
                        <span className="end-item_span">{content[lang].trending}</span>
                        <h3 className="end-item_header">{content[lang].trends_revolution}</h3>
                        <span className="end-item_span">{content[lang].revolution_tweet}</span>
                        <img src={Tochka} alt="icon" className="end-tochka" />
                    </li>
                    <li className="end-item">
                        <span className="end-item_span">{content[lang].trending}</span>
                        <h3 className="end-item_header">{content[lang].trends_revolution}</h3>
                        <span className="end-item_span">{content[lang].revolution_tweet}</span>
                        <img src={Tochka} alt="icon" className="end-tochka" />
                    </li>
                    <li className="end-item">
                       <button className="end-button">
                       {content[lang].showbtn}
                       </button>
                    </li>
                </ul>

                <ul className="might-list">
                    <li className="might-item">
                        <h2 className="might-header">{content[lang].mightheader}</h2>
                    </li>
                    <li className="might-item">
                        <img src={ProfileGirl} alt="img" className="might-profile-img" />
                        <div className="might-profile">
                            <h4 className="profile_header">Mushtariy</h4>
                            <span>@Mushtar565266</span>
                        </div>
                        <button className="profile_btn"> {content[lang].blackbtn}</button>
                    </li>
                    <li className="might-item">
                    <img src={ProfileBoy} alt="img"                 className="might-profile-img" />
                        <div className="might-profile">
                            <h4 className="profile_header">Shuhratbek</h4>
                            <span>@mrshukhrat</span>
                        </div>
                        <button className="profile_btn">  {content[lang].blackbtn}</button>
                    </li>
                    <li className="might-item">
                    <button className="end-button">
                    {content[lang].showbtn}
                       </button>
                    </li>
                </ul>

              <ul className="footer-list">
                    <li className="footer-item"> {content[lang]. footer_terms}</li>
                    <li className="footer-item"><a href="profile.html"> {content[lang]. footer_privacy}</a></li>
                    <li className="footer-item"> {content[lang]. footer_cookie}</li>
                    <li className="footer-item"> {content[lang]. footer_imprint}</li>
                    <li className="footer-item"> {content[lang]. footer_info}</li>
                    <li className="footer-item"> {content[lang]. footer_more}</li>
                    <li className="footer-item">© 2021 Twitter, Inc.</li>
              </ul>
              
            </div>
          </div>
          </section>
          
          </>
      )
  }
  
  export default App;
