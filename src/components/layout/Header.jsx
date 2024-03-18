import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// components
import { NavLink } from 'react-router-dom';
import logo from 'assets/svg/logo.svg';
import menu from 'assets/svg/icon_menu.svg';
import info from 'assets/svg/icon_info.svg';
import challange from 'assets/svg/icon_challenge.svg';
import memo from 'assets/svg/icon_memo.svg';
import icon_close from 'assets/svg/icon_close.svg';

const Logo = () => {
  return (
    <NavLink to='/top' className='pt-[16px] pb-[8px] pr-[19px] pl-[6px] h-full cursor-pointer'>
      <img src={logo} alt='Logo' className='h-full' />
    </NavLink>
  );
};

const HeaderItem = ({ src, alt, text, imgClassName, to }) => {
  return (
    <NavLink to={to} className={`flex items-center justify-center cursor-pointer w-[160px] gap-2`}>
      <img src={src} alt={alt} className={`w-8 h-8 ${imgClassName}`} />
      <span className='text-light'>{text}</span>
    </NavLink>
  );
};
HeaderItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  text: PropTypes.string,
  imgClassName: PropTypes.string,
  to: PropTypes.string
};
const HamburgerIcon = ({ src, onClick }) => {
  return (
    <span className='flex items-center justify-center cursor-pointer ml-8' onClick={onClick}>
      <img src={src} alt='Menu' className='w-8 h-8' />
    </span>
  );
};
HamburgerIcon.propTypes = {
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func
};
const DropdownItem = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className='header-dropdown-item flex items-center justify-start px-[32px] py-[23px] w-[280px] border-t border-t-light border-opacity-15 border-b border-b-dark-600 text-light hover:bg-primary-300'>
      {children}
    </NavLink>
  );
};
DropdownItem.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string
};

const Dropdown = ({ isMenuOpen }) => {
  return (
    <div className={`absolute z-10 right-0 top-[100%] ${isMenuOpen ? 'block' : 'hidden'}`}>
      <div className='flex flex-col items-start justify-center bg-gray-400'>
        <DropdownItem to='/my-record'>自分の記録</DropdownItem>
        <DropdownItem>体重グラフ</DropdownItem>
        <DropdownItem>目標</DropdownItem>
        <DropdownItem>選択中のコース</DropdownItem>
        <DropdownItem to='/'>コラム一覧</DropdownItem>
        <DropdownItem>設定</DropdownItem>
      </div>
    </div>
  );
};
Dropdown.propTypes = {
  isMenuOpen: PropTypes.bool
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest('.header-dropdown-item') || isMenuOpen) {
        return;
      }
      handleMenuClose();
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className='bg-dark-500'>
      <div className='flex items-center justify-between h-[64px] px-[160px]'>
        <Logo />
        <div className='relative flex items-center space-x-2 flex-row-reverse'>
          <Dropdown isMenuOpen={isMenuOpen} />
          <HamburgerIcon src={isMenuOpen ? icon_close : menu} onClick={handleMenuToggle} />
          <HeaderItem src={info} alt='Info' text='お知らせ' />
          <HeaderItem src={challange} alt='Challenge' text='チャレンジ' />
          <HeaderItem src={memo} alt='Memo' text='自分の記録' to='/my-record' />
        </div>
      </div>
    </header>
  );
};

export default Header;
