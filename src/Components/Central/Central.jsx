import React from "react";
import './Central.scss'
//images
import Tochka from '../../Assets/Images/tochki.png';
import Comments from '../../Assets/Images/comments.png';
import Like from '../../Assets/Images/like.png';
import LikeRed from '../../Assets/Images/like-red.png';
import Strelka from '../../Assets/Images/stdr.png';
import StrelkaGreen from '../../Assets/Images/st.png';
import Download from '../../Assets/Images/podel.png';
import Theme from '../../Assets/Images/tema.png';
import Smile from '../../Assets/Images/smile.png';
import Shashli from '../../Assets/Images/wawli.png';
import Shkala from '../../Assets/Images/shkala.png';
import ProfileKam from '../../Assets/Images/profile-kam.png';
import ProfileOchki from '../../Assets/Images/profile-ochki.png';
import ProfileHappy from '../../Assets/Images/profile-happy.png';
import Gif from '../../Assets/Images/gif.png';
import GifRight from '../../Assets/Images/gif-right.png';
import Img from '../../Assets/Images/img.png';
import Kalendar from '../../Assets/Images/kalendar.png';
import ProfileBro from '../../Assets/Images/profile-brat.png';
//components
import End from "../EndSection/End";






function Central (){


    return(
        <>
            <div className="div-central">
               <h1 className='dark'>Home</h1>
               <img src={Theme} alt="logo" className="theme-icon" />
               <form  className="central-form">
                   <img src={ProfileBro} alt="profilelogo" className='central-input-profile' />

                   <input autocomplete="off" type="text" name='input-post' placeholder='What’s happening' className="central-input" />

                  <button type="button" className="logo-btn"> <img src={Img} alt="logo" className='form_img' /></button>
                  <button type="button" className="logo-btn"> <img src={Gif} alt="logo" className='form_gif' /></button>
                   <button type="button" className="logo-btn"><img src={GifRight} alt="logo" className='form_gif-right' /></button>
                  <button type="button" className="logo-btn"> <img src={Smile} alt="logo" className='form_smile' /></button>
                   <button type="button" className="logo-btn"><img src={Kalendar} alt="logo" className='form_kalendar' /></button>

                    <div className="div-button">
                    <button type='submit' className="form_btn">Tweet</button>
                    </div>
                 

               </form>

               <ul className="central-list">
                   <li className="central-item">
                       <img src={ProfileKam} alt="profile" className="central_profile-users" />
                       <div className="li_div">
                       <h3 className="users-name">Designsta</h3>
                       <span className="user-cam-id">@inner · 25m</span>
                       </div>
                       <p className="central_users-text dark">Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?</p>

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
                        <p className="central_users-text dark">YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va <br /> yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.</p>

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
                        <p className="central_users-text dark">Обетда..... <br/>
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
            <End/>
        </>
    )
}


export default Central;