import React from 'react';
import { BsGrid1X2Fill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs';
import { Link } from 'react-router-dom'; 

const Sidebar = ({ openSidebarToggle, OpenSidebar }) => {
  return (
    <aside id="sidebar" style={{ backgroundColor: '#ccc', color: '#008000', height: openSidebarToggle ? '150px' : '80px', transition: 'height 0.5s ease', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #888', padding: '0 20px', fontFamily: "'Roboto Mono', monospace" }}>
      <div className='sidebar-brand' style={{ fontWeight: 'bold', fontSize: '20px' }}>
      </div>
      <ul className='sidebar-list' style={{ listStyleType: 'none', display: 'flex', alignItems: 'center', padding: 0 }}>
        <li className='sidebar-list-item' style={{ margin: '0 10px' }}>
          {/* Changed anchor tag to Link */}
          <Link to="/home" style={{ color: '#008000', textDecoration: 'none', fontWeight: 'bold', fontSize: '16px', display: 'flex', alignItems: 'center' }}>
            <BsGrid1X2Fill className='icon' style={{ marginRight: '10px', marginLeft: '5px' }} />
            <span>HOMEPAGE</span>
          </Link>
        </li>
        <li className='sidebar-list-item' style={{ margin: '0 10px' }}>
          <a href="" style={{ color: '#008000', textDecoration: 'none', fontWeight: 'bold', fontSize: '16px', display: 'flex', alignItems: 'center' }}>
            <BsPeopleFill className='icon' style={{ marginRight: '10px', marginLeft: '5px' }} />
            <span>ROLES</span>
          </a>
        </li>
        <li className='sidebar-list-item' style={{ margin: '0 10px' }}>
          <a href="" style={{ color: '#008000', textDecoration: 'none', fontWeight: 'bold', fontSize: '16px', display: 'flex', alignItems: 'center' }}>
            <BsListCheck className='icon' style={{ marginRight: '10px', marginLeft: '5px' }} />
            <span>INVENTORY</span>
          </a>
        </li>
        <li className='sidebar-list-item' style={{ margin: '0 10px' }}>
          <a href="" style={{ color: '#008000', textDecoration: 'none', fontWeight: 'bold', fontSize: '16px', display: 'flex', alignItems: 'center' }}>
            <BsMenuButtonWideFill className='icon' style={{ marginRight: '10px', marginLeft: '5px' }} />
            <span>REPORTS</span>
          </a>
        </li>
        <li className='sidebar-list-item' style={{ margin: '0 10px' }}>
          <a href="" style={{ color: '#008000', textDecoration: 'none', fontWeight: 'bold', fontSize: '16px', display: 'flex', alignItems: 'center' }}>
            <BsFillGearFill className='icon' style={{ marginRight: '10px', marginLeft: '5px' }} />
            <span>SETTINGS</span>
          </a>
        </li>
      </ul>
      <span className='icon close_icon' style={{ color: '#008000', cursor: 'pointer' }} onClick={OpenSidebar}></span>
    </aside>
  );
}

export default Sidebar;
