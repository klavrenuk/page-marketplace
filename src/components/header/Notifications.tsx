import React from 'react';

import './styles/notifications.css'

const Notifications = () => {
    const openNotifications = () => console.log('open');

    return (
        <div className={'notifications'}>
            <button className={'notifications-btn'} onClick={openNotifications}>
                <img src={'/images/notification.svg'} alt={'Notifications'} />

                <span className={'notifications-count'}>16</span>
            </button>
        </div>
    )
}

export default Notifications;