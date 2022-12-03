import homepagemainimg from '../../Assets/homepagemainimg.jpg';
import {useNavigate} from 'react-router-dom';
import './HomePage.css';

function HomePage() {

    const redirect = useNavigate();

    return (<>
        <div className="home-page-main-div">
            <div className="home-page-first-div">
                <div className="home-page-first-div-child1">
                    <p className="home-page-first-div-title" >Peer To Peer Energy Trading Platform using Smart contarcts</p>
                    <p className="home-page-first-div-subtitle"> Investing and trading made simple, affordable and accessible for you. </p>
                    <div className="home-page-btn-div">
                        <button className="home-page-buy-btn" onClick={()=> redirect("/userlist/Buyer") } >Buy</button>
                        <button className="home-page-sell-btn" onClick={()=> redirect("/userlist/Seller") } >Sell</button>
                    </div>

                </div>
                <div className="home-page-first-div-child2">
                    <img className="home-page-main-img" src={homepagemainimg} />
                </div>
            </div>
        </div>

    </>);
}

export default HomePage;