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
            </div>
        </>
    )
}


export default Central;