import React from 'react';
import {Link} from 'react-router-dom';
import './style.less';

const HeaderContent = () => (
    <div className='header-content-wrap clearfix'>
        <h2 className='f-l'>
            <Link className='_brand' to="/" > nuonuo </Link>
        </h2>
        <div className='f-r _tools-bar'>
            <input className='_search-input'/>
            <ul className='n-tab'>
                <li className='n-tab-panel'>组件</li>
                <li className='n-tab-panel'>资源</li>
            </ul>
        </div>
    </div>

);


export default HeaderContent;