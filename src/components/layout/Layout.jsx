import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';
import icon_scroll from 'assets/svg/icon_scroll.svg';

const Layout = ({ children }) => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      <div className='flex-1'>{children}</div>
      <img
        src={icon_scroll}
        alt='Scroll to top'
        className='z-11 fixed bottom-[178px] right-8 h-12 w-12 cursor-pointer rounded-full bg-light bg-opacity-80 transition-all duration-300 ease-in-out active:bg-primary-400'
        onClick={handleScrollToTop}
      />
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};
export default Layout;
