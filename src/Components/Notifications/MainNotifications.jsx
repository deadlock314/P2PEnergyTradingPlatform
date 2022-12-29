import React from 'react';
import "./Notifications.css";
import Notifications from './NotificationCard';


function MainNotifications() {

    const NotificationArr = [
    //     {
    //     _id: 1, imgLink: "https://letstalkscience.ca/sites/default/files/2020-12/solar_power_illustration.png",
    //     title: "New purchase Request", subtitle: "you have a new purchase request please check your mail for more details", status: false
    // },
    // {
    //     _id: 2, imgLink: "https://letstalkscience.ca/sites/default/files/2020-12/solar_power_illustration.png",
    //     title: "New purchase Request", subtitle: "you have a new purchase request please check your mail for more details", status: false
    // },
    // {
    //     _id: 3, imgLink: "https://letstalkscience.ca/sites/default/files/2020-12/solar_power_illustration.png",
    //     title: "New purchase Request", subtitle: "you have a new purchase request please check your mail for more details", status: false
    // }
];



    return (
        <>

            {
                (NotificationArr.length > 0) ?
                    <div className="noti-card-div">
                    {
                        NotificationArr.map((notification) => {
                            return <Notifications key={notification._id} state={notification} />
                        })
                    }
                    </div>
                    :
                    <div className="noti-img-div">
                        <img src="https://cdn.dribbble.com/users/1590794/screenshots/5822231/media/849b7810e9246c7b5fb928e75a81a666.png?compress=1&resize=800x600&vertical=top" />
                    </div>
            }
        </>
    )
}

export default MainNotifications;