import React, { useState } from 'react';
import logo from '../SlideBar/assets/Logo.png';
import youtube from '../SlideBar/assets/youtube.png';
import twitter from '../SlideBar/assets/twitter.png';
import discord from '../SlideBar/assets/discord.png';
import twitch from '../SlideBar/assets/twitch.png';

function SliderBar() {
  const [inactive, setInactive] = useState(false);
  return (
    <div className={`sideMenu ${inactive ? 'inactive' : ''}`}>
      <div className='topSection'>
        <div className='logo'>
          <img src={logo} alt='logo' />
        </div>
        <div
          onClick={() => setInactive(!inactive)}
          className='toggleMenuButton'
        >
          {' '}
          {inactive ? (
            <i class='bi bi-arrow-right-square-fill'></i>
          ) : (
            <i class='bi bi-arrow-left-square-fill'></i>
          )}{' '}
        </div>
      </div>
      <div className='menuSocial'>
        <img className='logoSocial' src={youtube} alt='logoYoutube' />
        <img className='logoSocial' src={twitter} alt='logoTwitter' />
        <img className='logoSocial' src={discord} alt='logoDiscord' />
        <img className='logoSocial' src={twitch} alt='logoTwitch' />
      </div>
      <div className='separation'></div>
      <div className='mainMenu'>
        <ul>
          <li>
            <a href='#' className='menuItem'>
              <div className='menuIcon'>
                <i class='bi bi-house-fill'></i>
              </div>
              Accueil
            </a>
          </li>
          <li>
            <a href='#' className='menuItem'>
              <div className='menuIcon'>
                <i class='bi bi-info-circle'></i>
              </div>
              Qui suis-je ?
            </a>
          </li>
          <li>
            <a href='#' className='menuItem'>
              <div className='menuIcon'>
                <i class='bi bi-house-fill'></i>
              </div>
              Tournoi
            </a>
          </li>
          <li>
            <a href='#' className='menuItem'>
              <div className='menuIcon'>
                <i class='bi bi-house-fill'></i>
              </div>
              Nos partenaires
            </a>
          </li>
          <li>
            <a href='#' className='menuItem'>
              <div className='menuIcon'>
                <i class='bi bi-envelope-fill'></i>
              </div>
              Nous contacter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SliderBar;
