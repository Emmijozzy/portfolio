import React from 'react';
import './MenuButton.scss';

export default function MenuButton({ setMenuMood, toggleMenu }) {
	const menuTag = toggleMenu
		? 'toggle__menu close'
		: 'toggle__menu open ';

    const toggleMenuMood = () => {
      setMenuMood((prevMood => !prevMood))
    }

	return (
      <div className={menuTag} onClick={toggleMenuMood} >
        <p className="toggle__command">Menu</p>
      </div>
	);
}
