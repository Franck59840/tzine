import React  from "react";
import logo from "../SlideBar/assets/Logo.png";
import youtube from "../SlideBar/assets/youtube.png";
import twitter from "../SlideBar/assets/twitter.png";
import discord from "../SlideBar/assets/discord.png";
import twitch from "../SlideBar/assets/twitch.png";

function SliderBar (){
    return (
        <div className='side-menu inactive'>
            <div className='top-section'>
                <div className='logo'>
                    <img src={logo} alt='logo'/>
                </div>
                <div className='toggle-menu-button'>
                    <i class="bi bi-arrow-left-square-fill"></i>
                </div>
            </div>
            <div className='menu-social'>
                <img src={youtube} alt='logoYoutube'/>
                <img src={twitter} alt='logoTwitter'/>
                <img src={discord} alt='logoDiscord'/>
                <img src={twitch} alt='logoTwitch'/>
            </div>
                <div className='separation'>
            </div>
            
        </div>
    )
}

export default SliderBar;
