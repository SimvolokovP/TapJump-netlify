import './WalletPage.css';
import tonIcon from '../../assets/ton.png';
import tonSvg from '../../assets/ton.svg';

const WalletPage = () => {
  return (
    <div className="page wallet-page">
        <div className='blur1'></div>
      <div className="container wallet-page__container">
        <img className='ton-image' src={tonSvg} alt="ton" />
        <div>Connect Wallet</div>
        <button className='wallet-page__btn'>Soon</button>
      </div>
    </div>
  );
};

export default WalletPage;