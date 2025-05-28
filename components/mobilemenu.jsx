import React, { useState } from 'react';

import { Menu } from 'antd';


const { SubMenu } = Menu;
const items = [
    {
      label: '1. Startseite',
      key: '',
    },
    {
      label: '2. Sortiment',
      key: 'sortiment',
    },
    {
        label: '3. Weinfachhandel',
        key: 'weinfachhandel',
      },
    {
      label:'4. Partyservice',
      key: 'partyservice',
    },
    {
        label: '5. Lieferservice',
        key: 'lieferservice',
      },
    {
        label: '6. Anfahrt',
        key: 'anfahrt',
    },
    {
        label: '7. Kontakt',
        key: '#contact',
    },
  ];

const MobileMenu = () => {
  const [openKeys, setOpenKeys] = useState(['sub1']);

  const onOpenChange = (keys) => {
    setOpenKeys(keys);
  };

  const handleSubmenuClick = ({ key, domEvent }) => {
    if (domEvent.target.className.includes('ant-menu-submenu-title')) {
      setOpenKeys((prevKeys) => {
        if (prevKeys.includes(key)) {
          return prevKeys.filter((k) => k !== key);
        } 

        return [...prevKeys, key];
        
      });
    }
  };

  return (
    <div >
        {/* Mobile menu */}
        <Menu
          className='bg-transparent border border-transparent hover:text-black hover:text-100'
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          onClick={handleSubmenuClick}
          style={{
            width: '100%', // Set the width to 100%
          }}
        >
          {items.map((item) => {
            if (item.children) {
              return (
                <SubMenu key={item.key}  title={item.label}>
                  {item.children.map((child) => (
                    <Menu.Item key={child.key}>
                      <a href={`/${child.key}`} className="hover:underline hover:text-black hover:text-100">{child.label}</a>
                    </Menu.Item>
                  ))}
                </SubMenu>
              );
            }
            return (
              <Menu.Item key={item.key} className="hover:underline hover:text-black hover:text-100">
                <a href={`/${item.key}`}>{item.label}</a>
              </Menu.Item>
            );
          })}
        </Menu>
      </div>

  );
};

export default MobileMenu;