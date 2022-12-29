import React from 'react';
import "./Spinner.css";

function Spinner() {
    return (
        <div className="main-spinner">
            <div className="spinner-flipper-container">
                <div className="spinner-flipper flip-animation">
                    <img className="spinner-flip-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ceK4DRKMgME3VEXa-oi9IAQl8WiJkFsac3iIx0edOpU8T5RZKYKwTxSdpZrSo7LT_lA&usqp=CAU" />
                </div>
                <div className="spinner-flipper overlap-flip-animation">
                    <img className="spinner-flip-img rotate-180-y" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ceK4DRKMgME3VEXa-oi9IAQl8WiJkFsac3iIx0edOpU8T5RZKYKwTxSdpZrSo7LT_lA&usqp=CAU" />

                </div>
            </div>
        </div>
            )
}

            export default Spinner