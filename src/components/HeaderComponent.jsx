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
            </nav>
        </div>
    )
}

export default HeaderComponent;