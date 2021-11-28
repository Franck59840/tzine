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
            <i className='bi bi-arrow-right-square-fill'></i>
          ) : (
            <i className='bi bi-arrow-left-square-fill'></i>
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
      <section className='mainMenu'>
        <ul>
          <li>
            <a href='1' className='menuItem'>
              <div className='menuIcon'>
                <img
                  className='icon'
                  src='https://img.icons8.com/bubbles/40/000000/home-page.png'
                  alt='acceuil'
                />
                <span>Accueil</span>
              </div>
            </a>
          </li>
          <li>
            <a href='2' className='menuItem'>
              <div className='menuIcon'>
                <img
                  className='icon'
                  src='https://img.icons8.com/bubbles/40/000000/about.png'
                  alt='infos'
                />
                <span>Qui suis-je ?</span>
              </div>
            </a>
          </li>
          <li>
            <a href='2' className='menuItem'>
              <div className='menuIcon'>
                <img
                  className='icon'
                  src='https://img.icons8.com/external-victoruler-linear-colour-victoruler/40/000000/external-swords-chess-victoruler-linear-colour-victoruler.png'
                  alt='tournoi'
                />
                <span>Tournoi</span>
              </div>
            </a>
          </li>
          <li>
            <a href='3' className='menuItem'>
              <div className='menuIcon'>
                <img
                  className='icon'
                  src='https://img.icons8.com/bubbles/40/000000/handshake.png'
                  alt=' partenaires'
                />
                <span>Nos partenaires</span>
              </div>
            </a>
          </li>
          <li>
            <a href='4' className='menuItem'>
              <div className='menuIcon'>
                <img
                  className='icon'
                  src='https://img.icons8.com/bubbles/40/000000/apple-mail.png'
                  alt='contact'
                />
                <span>Nous contacter</span>
              </div>
            </a>
          </li>
        </ul>
      </section>
      <section className='sideMenuFooter'>
        <div className='textFooter'>
          <h2>Copyight 2021</h2>
          <h2>Made by Depoorter Franck</h2>
        </div>
      </section>
    </div>
  );
}

export default SliderBar;
