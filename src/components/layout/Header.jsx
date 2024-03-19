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
    <NavLink to='/top' className='h-full cursor-pointer pb-[8px] pl-[6px] pr-[19px] pt-[16px]'>
      <img src={logo} alt='Logo' className='h-full' />
    </NavLink>
  );
};

const HeaderItem = ({ src, alt, text, imgClassName, to }) => {
  return (
    <NavLink to={to} className={`flex w-[160px] cursor-pointer items-center justify-center gap-2`}>
      <img src={src} alt={alt} className={`h-8 w-8 ${imgClassName}`} />
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
    <span className='ml-8 flex cursor-pointer items-center justify-center' onClick={onClick}>
      <img src={src} alt='Menu' className='h-8 w-8' />
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
      className='header-dropdown-item flex w-[280px] items-center justify-start border-b border-t border-b-dark-600 border-t-light border-opacity-15 px-[32px] py-[23px] text-light hover:bg-primary-300'
    >
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
    <div className={`absolute right-0 top-[100%] z-10 ${isMenuOpen ? 'block' : 'hidden'}`}>
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
      <div className='flex h-[64px] items-center justify-between px-[160px]'>
        <Logo />
        <div className='relative flex flex-row-reverse items-center space-x-2'>
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
