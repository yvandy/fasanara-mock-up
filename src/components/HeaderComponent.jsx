import React from 'react';
import './HeaderComponent.css';
import logo from '../assets/logoFasanara.png';
import { Menu } from 'antd';
import { useState } from 'react';

const HeaderComponent = () => {

    const items = [
        {
            label: 'Funds',
            key: 'Funds',
            children: [
                {
                    label: 'ESG',
                    key: 'ESG',
                }
            ]
        },
        {
            label: 'Insights',
            key: 'Insights',
            children: [
                {
                    label: 'Intelligence',
                    key: 'Intelligence'
                },
                {
                    label: 'VC Blog',
                    key: 'VC Blog'
                }
            ]
        },
        {
            label: 'Podcasts',
            key: 'Podcasts'
        },
        {
            label: 'Media',
            key: 'Media'
        },
        {
            label: 'Seed',
            key: 'Seed',
        },
        {
            label: 'Info',
            key: 'Info',
            children: [
                {
                    label: 'Team',
                    key: 'Team',
                },
                {
                    label: 'Timeline',
                    key: 'Timeline',
                },
                {
                    label: 'Careers',
                    key: 'Careers',
                },
                {
                    label: 'Contact',
                    key: 'Contact'
                }
            ]
        },
    ]

    const [current, setCurrent] = useState('');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <div>
            <nav className='navbar'>
                <div className='logo'>
                    <img className='logoImg' src={logo} alt='logo' />
                </div>
                <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
                {/* <ul className='nav-links'>
                    <div className='menu'>
                        <li> <a href="#funds" style={{ color: 'black' }} > Funds</a>
                            <ul className="dropdown">
                                <li><a href="/">Dropdown 1 </a></li>
                                <li><a href="/">Dropdown 2</a></li>
                                <li><a href="/">Dropdown 2</a></li>
                                <li><a href="/">Dropdown 3</a></li>
                                <li><a href="/">Dropdown 4</a></li>
                            </ul>

                        </li>
                        <li> <a href="#insights" style={{ color: 'black' }}  > Insights</a></li>
                        <li> <a href="#podcasts" style={{ color: 'black' }}  >Podcasts </a></li>
                        <li> <a href="#media" style={{ color: 'black' }} >Media</a> </li>
                        <li> <a href="#seed" style={{ color: 'black' }} >Seed</a></li>
                        <li> <a href="#info" style={{ color: 'black' }}  > Info</a> </li>
                    </div>
                </ul> */}
            </nav>
        </div>
    )
}

export default HeaderComponent;