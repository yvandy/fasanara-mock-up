import { Carousel, Col, Row } from 'antd';
import React from 'react';
import ButtonComponent from './ButtonComponent';
import './CarouselComponent.css';

const Slideshow = () => (
    <Carousel autoplay dots>
        <div className='slideContainer' >
            <div className='overlay' />
            <video className='videoCover' src="https://video.wixstatic.com/video/2bcfa3_4a5922b8683643729c692a3bac12dace/1080p/mp4/file.mp4" autoPlay loop muted>
            </video>
            <div className='carouselText'>
                <div>
                    <h2>
                        <span className='title'> Investing in a</span>
                    </h2>
                    <h2>
                        <span className='subtitle'>Digital Future</span>
                    </h2>
                    <div className='subscript'>Quant Fintech Investments</div>
                    <ButtonComponent buttonLink="#" value="EXPLORE" borderColor="white"></ButtonComponent>
                </div>
            </div>
        </div>
        <div className='slideContainer' >
            <div className='overlay scenarios' />
            <video className='videoCover' src="https://video.wixstatic.com/video/2bcfa3_ec64fea037f64585bd9d64ed28b67073/720p/mp4/file.mp4" autoPlay loop muted>
            </video>
            <div className='carouselText'>
                <Row>
                    <Col span={12}>
                        <div>
                            <h2>
                                <span className='title'>Scenarios</span>
                            </h2>
                            <h2>
                                <span style={{ fontSize: "20px" }} className='subtitle'>The Market Economy In 2025: A Visualization Exercise </span>
                            </h2>
                        </div>

                        <div className='subscript'>Emergence of New Capital Markets. To any market participant who has been more than 10 years in activity, financial markets are unrecognisable, lampooning the laws of physics...</div>
                        <ButtonComponent value="READ" borderColor="white" buttonLink="https://www.fasanara.com/22102019"></ButtonComponent>

                    </Col>
                </Row>
            </div>
        </div>
        <div className='slideContainer'>
            <img src="https://static.wixstatic.com/media/4a8f7229d14f42eec3ea40741c7dc7b0.jpg/v1/fill/w_1225,h_554,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4a8f7229d14f42eec3ea40741c7dc7b0.jpg" style={{ width: "100%", objectFit: "cover", height: "100%" }} alt='text' />
            <div className='carouselText'>
                <Row>
                    <Col span={12}>
                        <div>
                            <h2>
                                <span className='title'>Digital Future</span>
                            </h2>
                        </div>

                        <div className='subscript'>Use Of Digital Technology To Build Resilient Portfolios. Going Beyond 60/40 Traditional Asset Allocation.</div>
                        <ButtonComponent value="MORE" borderColor="white" buttonLink="https://www.fasanara.com/scenario04012021"></ButtonComponent>

                    </Col>
                </Row>
            </div>
        </div>
        <div className='slideContainer'>
            <img src="https://static.wixstatic.com/media/ed6b8a1f51e94bc18bc879c5240d9621.jpg/v1/fill/w_1225,h_554,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ed6b8a1f51e94bc18bc879c5240d9621.jpg" style={{ width: "100%", objectFit: "cover", height: "100%" }} alt='text' />
            <div className='carouselText'>
                <Row>
                    <Col span={12}>
                        <div>
                            <h2>
                                <span className='title'>Scenarios</span>
                            </h2>
                        </div>

                        <div className='subscript'>At a time in which bonds are no longer bonds but rather tax bills, and equities are as expensive as washing machines going on auction at 50 thousand dollars, what role is left to play for us rationale investors?</div>
                        <ButtonComponent value="READ" borderColor="white" buttonLink="https://www.fasanara.com/scenario-22102019"></ButtonComponent>

                    </Col>
                </Row>
            </div>
        </div>
        <div className='slideContainer'>
            <img src="https://static.wixstatic.com/media/2bcfa3_9bec298351de4720891e4f2c66242de0~mv2.png/v1/fill/w_1457,h_425,al_c,q_90,enc_auto/2bcfa3_9bec298351de4720891e4f2c66242de0~mv2.png" style={{ width: "100%", objectFit: "cover", height: "100%" }} alt='text' />
            <div className='carouselText'>
                <Row>
                    <Col span={12}>
                        <div>
                            <h2>
                                <span className='title'>Podcast</span>
                            </h2>
                        </div>

                        <div className='subscript'>Fasanara discusses the unreliability of asset prices. Tech stocks, market intervention. Incidental triggers for a big market correction. Non-linearity, Risk-Parity and fake markets.</div>
                        <ButtonComponent value="WATCH" borderColor="white" buttonLink="#"></ButtonComponent>
                    </Col>
                </Row>
            </div>
        </div>
    </Carousel>
);

export default Slideshow;