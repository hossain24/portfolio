import React from "react";
import moment from "moment";

const Notifications = props => {
  const { notifications } = props;

  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <div className="card-title">Notifications</div>
          <ul className="notifications">
            {notifications &&
              notifications.map(item => {
                return (
                  <li key={item.id}>
                    <span className="green-text"> {item.user} </span>
                    <span> {item.content} </span>
                    <div className="grey-text note-date">
                      <span>{moment(item.time.toDate()).fromNow()}</span>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notifications;