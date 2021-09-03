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





function Central (){


    return(
        <>
            <div className="div-central">
               <h1 className='dark'>Home</h1>
               <img src={Theme} alt="logo" className="theme-icon" />
               <form  className="central-form">
                   <img src={ProfileBro} alt="profilelogo" className='central-input-profile' />

                   <input type="text" name='input-post' placeholder='What’s happening' className="central-input" />

                   <img src={Img} alt="logo" className='form_img' />
                   <img src={Gif} alt="logo" className='form_gif' />
                   <img src={GifRight} alt="logo" className='form_gif-right' />
                   <img src={Smile} alt="logo" className='form_smile' />
                   <img src={Kalendar} alt="logo" className='form_kalendar' />

                    <div className="div-button">
                    <button type='submit' className="form_btn">Tweet</button>
                    </div>
                 

               </form>

               <ul className="central-list">
                   <li className="central-item">
                       <img src={ProfileKam} alt="profile" className="central_profile-users" />
                       <h3 className="users-name">Designsta</h3>
                       <span className="user-cam-id">@inner · 25m</span>
                       <p className="central_users-text">Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?</p>

                       <img src={Tochka} alt="icon" className="central_tochka" />

                       <div className="popularnosti">
                           <span className="comments">
                               <img src="" alt="icon" className="comments-icon" />
                               <p className="comments-number">
                                    10
                               </p>
                           </span>

                           <span className="st">
                               <img src="" alt="icon" className="st-icon" />
                               <p className="st-number">
                                   1
                               </p>
                           </span>

                           <span className="like">
                               <img src="" alt="icon" className="like-icon" />
                               <p className="like-number">
                                   8
                               </p>
                           </span>

                           <span className="downloads">
                               <img src="" alt="icon" className="downloads-icon" />
                              
                           </span>

                           <span className="shkala">
                               <img src="" alt="icon" className="shkala-icon" />
                               
                           </span>
                       </div>
                    </li>

                    <li className="central-item">
                       <img src={ProfileOchki} alt="profile" className="central_profile-users" />
                       <h3 className="users-name">cloutexhibition</h3>
                        <span className="user-ochki-id">@RajLahoti · 22m</span>
                        <p className="central_users-text">YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va <br /> yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.</p>

                        <img src={Tochka} alt="icon" className="central_tochka" />

                        <div className="popularnosti">
                           <span className="comments">
                               <img src="" alt="icon" className="comments-icon" />
                               <p className="comments-number">

                               </p>
                           </span>

                           <span className="st">
                               <img src="" alt="icon" className="st-icon" />
                               <p className="st-number-green">
                                   5
                               </p>
                           </span>

                           <span className="like">
                               <img src="" alt="icon" className="like-icon" />
                               <p className="like-number-red">
                                   9
                               </p>
                           </span>

                           <span className="downloads">
                               <img src="" alt="icon" className="downloads-icon" />
                              
                           </span>

                           <span className="shkala">
                               <img src="" alt="icon" className="shkala-icon" />
                               
                           </span>
                       </div>

                    </li>

                    <li className="central-item">
                       <img src={ProfileHappy} alt="profile" className="central_profile-users" />
                       <h3 className="users-name">CreativePhoto</h3>
                        <span className="user-happy-id">@cloutexhibition · 1h</span>
                        <p className="central_users-text">Обетда..... <br/>
                        Кечиринглар</p>

                        <img src={Tochka} alt="icon" className="central_tochka" />

                        <img src="" alt="photo" className="wawli-img" />

                         <div className="popularnosti">
                           <span className="comments">
                               <img src="" alt="icon" className="comments-icon" />
                               <p className="comments-number">
                                    10
                               </p>
                           </span>

                           <span className="st">
                               <img src="" alt="icon" className="st-icon" />
                               <p className="st-number">
                                   1
                               </p>
                           </span>

                           <span className="like">
                               <img src="" alt="icon" className="like-icon" />
                               <p className="like-number">
                                   8
                               </p>
                           </span>

                           <span className="downloads">
                               <img src="" alt="icon" className="downloads-icon" />
                              
                           </span>

                           <span className="shkala">
                               <img src="" alt="icon" className="shkala-icon" />
                               
                           </span>
                       </div>

                    </li>
               </ul>
            </div>
        </>
    )
}


export default Central;