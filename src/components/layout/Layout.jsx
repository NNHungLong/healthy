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
    <div className='min-h-screen flex flex-col'>
      <Header />
      <div className='flex-1'>{children}</div>
      <img
        src={icon_scroll}
        alt='Scroll to top'
        className='fixed bottom-[178px] right-8 w-12 h-12 cursor-pointer'
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
