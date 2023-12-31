import {useState} from 'react';
import './coin-flip-styles.css';
import Coin from './coin/coin.jsx';
import PrimaryButton from "../button/primary-button/index.jsx";

const options = ['yazi', 'tura'];

const getRandomElFromArr = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};
const CoinFlip = () => {
  const [rotate, setRotate] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(options[0]);
  const [prepareStatus, setPrepareStatus] = useState(options[0]);
  const [results, setResults] = useState([]);

  const flipCoin = () => {
    setIsFlipping(true)
    setRotate(true);
    const randomElement = getRandomElFromArr(options);
    setPrepareStatus(randomElement);
    setTimeout(() => {
      setCurrentStatus(randomElement);
      setResults([...results, randomElement]);
      setRotate(false);
      setIsFlipping(false)
    }, 1000);
  };

  return (
    <section className="section">
     <div className="card">
         <h1 className="section-title">Heads or Tails</h1>
         <Coin currentStatus={currentStatus} prepareStatus={prepareStatus} rotate={rotate} />
         <PrimaryButton className="coinflip-button" disabled={isFlipping} onClick={flipCoin} >Flip</PrimaryButton>
         <div>
             <p>
                 <span className="font-semibold mr-2">{results.length}</span>
                 flips were made
             </p>
             <p>
                 <span className="font-semibold mr-2">{results.filter(result => result === 'yazi').length}</span>
                 times heads
             </p>
             <p>
                 <span className="font-semibold mr-2">{results.filter(result => result === 'tura').length}</span>
                 times tails
             </p>
         </div>
     </div>
    </section>
  );
};

export default CoinFlip;
