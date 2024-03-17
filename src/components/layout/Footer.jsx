import PropTypes from 'prop-types';
const FooterItem = ({ children }) => {
  return <div className='text-light font-light text-sm'>{children}</div>;
};
const Footer = () => {
  return (
    <footer className='bg-dark-500 min-h-[128px] flex items-center justify-start gap-20 pl-[10%]'>
      <FooterItem>会員登録</FooterItem>
      <FooterItem>運営会社</FooterItem>
      <FooterItem>利用規約</FooterItem>
      <FooterItem>個人情報の取扱について</FooterItem>
      <FooterItem>特定商取引法に基づく表記</FooterItem>
      <FooterItem>お問い合わせ</FooterItem>
    </footer>
  );
};

FooterItem.propTypes = {
  children: PropTypes.node.isRequired
};

export default Footer;
