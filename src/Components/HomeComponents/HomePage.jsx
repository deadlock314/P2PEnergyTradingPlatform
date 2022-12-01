import homepagemainimg from '../../Assets/homepagemainimg.jpg';
import './HomePage.css';

function HomePage() {
    return (<>
        <div className="home-page-main-div">
            <div className="home-page-first-div">
                <div className="home-page-first-div-child1">
                    <p className="home-page-first-div-title" >Peer To Peer Energy Trading Platform using Smart contarcts</p>
                    <p className="home-page-first-div-subtitle"> Investing and trading made simple, affordable and accessible for you. </p>
                    <div className="home-page-btn-div">
                        <button className="home-page-buy-btn">Buy</button>
                        <button className="home-page-sell-btn">Sell</button>
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