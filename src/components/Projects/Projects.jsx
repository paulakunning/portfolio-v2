import React from 'react'
import i18n from '../../i18n';
import './Projects.scss'
import { HiOutlineExternalLink } from "react-icons/hi";
import { HiCodeBracket } from "react-icons/hi2";
import { HiMiniPaintBrush } from "react-icons/hi2";

{/* <HiCodeBracket /> */}


export default function Projects() {
  return (
    <div id='projects'>
        <h3 className='section-title'>{i18n.t('projects.title')}</h3>
      <swiper-container navigation="true" >
        <swiper-slide> 
          <div className='slide-container'>
              <div className='left-col'>
                  <img src="https://i.postimg.cc/tJKQHKCm/olatrek.png" alt="olatrek project image" />
                  <div className='badges-container'>
                    <div className='badge'><p>WordPress</p></div>
                    <div  className='badge'><p>Elementor Pro</p></div>
                    <div  className='badge'><p>CSS</p></div>
                  </div>
              </div> 
              <div className='right-col'>
                  <p>{i18n.t('projects.project-title1')}</p>
                  <p>{i18n.t('projects.project-description1')}</p>
                  <div className='links-container'>
                    <div>
                      <HiOutlineExternalLink color='var(--text-primary)' size={50} />
                      <a href={i18n.t('projects.project-url1')} target="blank">
                         Live link</a>
                    </div>
                    <div>
                        <HiMiniPaintBrush  color='var(--text-primary)' size={50} />
                        <a href={i18n.t('projects.project-link1')} target="blank"> 
                        Design
                       </a>

                    </div>
                  </div>
              </div>
          </div>
        </swiper-slide>

        <swiper-slide> 
          <div className='slide-container'>
                <div className='left-col'>
                    <img src="https://i.postimg.cc/zGK1zJ9f/ags-inc2.png" alt="ags project image" />
                    <div className='badges-container'>
                      <div className='badge'><p>WordPress</p></div>
                      <div  className='badge'><p>Elementor Pro</p></div>
                      <div  className='badge'><p>CSS</p></div>
                    </div>
                </div> 
                <div className='right-col'>
                    <p>{i18n.t('projects.project-title2')}</p>
                    <p>{i18n.t('projects.project-description2')}</p>
                    <div className='links-container'>
                      <div>
                        <HiOutlineExternalLink color='var(--text-primary)' size={50} />
                        <a href={i18n.t('projects.project-url2')} target="blank">
                          Live link</a>
                      </div>
                      <div>
                          <HiMiniPaintBrush  color='var(--text-primary)' size={50} />
                          <a href={i18n.t('projects.project-link2')} target="blank"> 
                          Design
                        </a>

                      </div>
                    </div>
                </div>
            </div>
            
        </swiper-slide>

        <swiper-slide> 
          <div className='slide-container'>
                <div className='left-col'>
                    <img src="https://i.postimg.cc/cLMqV5qX/triumph-modular.png" alt="triumph modular project image" />
                    <div className='badges-container'>
                      <div className='badge'><p>WordPress</p></div>
                      <div  className='badge'><p>Bricks Builder</p></div>
                      <div  className='badge'><p>CSS</p></div>
                    </div>
                </div> 
                <div className='right-col'>
                    <p>{i18n.t('projects.project-title3')}</p>
                    <p>{i18n.t('projects.project-description3')}</p>
                    <div className='links-container'>
                      <div>
                        <HiOutlineExternalLink color='var(--text-primary)' size={50} />
                        <a href={i18n.t('projects.project-url3')} target="blank">
                          Live link</a>
                      </div>
                      <div>
                          <HiMiniPaintBrush  color='var(--text-primary)' size={50} />
                          <a href={i18n.t('projects.project-link3')} target="blank"> 
                          Design
                        </a>

                      </div>
                    </div>
                </div>
            </div>
            
        </swiper-slide>

        <swiper-slide> 
          <div className='slide-container'>
                <div className='left-col'>
                    <img src="https://i.postimg.cc/QM8Lskhs/friosur.png" alt="friosur project image" />
                    <div className='badges-container'>
                      <div className='badge'><p>WordPress</p></div>
                      <div  className='badge'><p>Bricks Builder</p></div>
                      <div  className='badge'><p>CSS</p></div>
                    </div>
                </div> 
                <div className='right-col'>
                    <p>{i18n.t('projects.project-title4')}</p>
                    <p>{i18n.t('projects.project-description4')}</p>
                    <div className='links-container'>
                      <div>
                        <HiOutlineExternalLink color='var(--text-primary)' size={50} />
                        <a href={i18n.t('projects.project-url4')} target="blank">
                          Live link</a>
                      </div>
                      <div>
                          <HiMiniPaintBrush  color='var(--text-primary)' size={50} />
                          <a href={i18n.t('projects.project-link4')} target="blank"> 
                          Design
                        </a>

                      </div>
                    </div>
                </div>
            </div>
            
        </swiper-slide>
        <swiper-slide> 
          <div className='slide-container'>
                <div className='left-col'>
                    <img src="https://i.postimg.cc/PrDnM5SG/aeropuerto-el-loa.png" alt="friosur project image" />
                    <div className='badges-container'>
                      <div className='badge'><p>WordPress</p></div>
                      <div  className='badge'><p>Bricks Builder</p></div>
                      <div  className='badge'><p>CSS</p></div>
                    </div>
                </div> 
                <div className='right-col'>
                    <p>{i18n.t('projects.project-title5')}</p>
                    <p>{i18n.t('projects.project-description5')}</p>
                    <div className='links-container'>
                      <div>
                        <HiOutlineExternalLink color='var(--text-primary)' size={40} />
                        <a href={i18n.t('projects.project-url5')} target="blank">
                          Live link</a>
                      </div>
                      <div>
                          <HiMiniPaintBrush  color='var(--text-primary)' size={40} />
                          <a href={i18n.t('projects.project-link5')} target="blank"> 
                          Design
                        </a>
                      </div>
                    </div>
                </div>
            </div>
            
        </swiper-slide>

      </swiper-container>
    </div>
  )
}
