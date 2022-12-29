import homepagemainimg from '../../Assets/homepagemainimg.jpg';
import {useNavigate} from 'react-router-dom';
import './HomePage.css';
import { useSelector } from 'react-redux';

function HomePage() {

    const redirect = useNavigate();
    const reduxState=useSelector((state)=>state);
    const auth = reduxState.userAuth;

    const handleSell = ()=>{
        if(auth.value && auth.isMailVerfied && auth.isWalletConnected) redirect("/createpackage")
        else if( auth.value){

            if(!auth.userData.isNode){
                alert("connect wallet first");
                redirect(`private/user/${auth.userData.email}`)
            }
            
            else if(!auth.userData.verifiedMail){
                  alert("verify mail");
                  redirect(`private/user/${auth.userData.email}`)
            }
          
            else{
                redirect("/createpackage");
            }

            
        } 
        else redirect("/login")

    }

    return (<>
        <div className="home-page-main-div">
            <div className="home-page-first-div">
                <div className="home-page-first-div-child1">
                    <p className="home-page-first-div-title" >Peer To Peer Energy Trading Platform using Smart contarcts</p>
                    <p className="home-page-first-div-subtitle"> Utilizing and trading made simple, affordable and accessible for you and your peers and also save Environment. </p>
                    <div className="home-page-btn-div">
                        <button className="home-page-buy-btn" onClick={()=>  redirect("/packagelist") } >Buy</button>
                        <button className="home-page-sell-btn" onClick={handleSell } >Sell</button>
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