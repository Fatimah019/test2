import React from "react";
import "./index.css";
import CalendarSection from "./calendarSection";
import { Link } from "react-router-dom";
import LineChart from "./lineChart";
import ReactLogo from "./mami.svg";
import CustomSwitch from "./switch";

const contactData = [
  {
    name: "Martins Black",
    title: "Coach",
    picture: "/assets/images/user-3.png",
  },
  {
    name: "Jane Cooper",
    title: "Manager",
    picture: "/assets/images/user-4.png",
  },
  {
    name: "Jacob Gate",
    title: "Player",
    picture: "/assets/images/user-2.png",
  },
  {
    name: "Albert Fox",
    title: "Player",
    picture: "/assets/images/user-1.png",
  },
];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h3 className="content-title">Dashboard</h3>
      <div className="dashboard">
        <div className="left">
          <div className="top">
            <div className="card">
              <div className="card-inner">
                <div>
                  <h2>Good Morning, Eleanor</h2>
                  <p>
                    Welcome to your daily event calendar. Here you can see all
                    the upcoming events, meeting and create new events.
                  </p>
                </div>
                <div>
                  <button>+ Create event</button>
                </div>
                <img src={ReactLogo} alt="user-img" className="user-img" />
                <img
                  src="/assets/images/ball.png"
                  alt="ball-img"
                  className="ball-img"
                />
              </div>
            </div>
            <div className="reminder">
              <h3>Reminder</h3>
              <div className="inner">
                <div className="info">
                  <div className="switch">
                    <CustomSwitch checkChecked={false} />
                  </div>
                  <div>
                    <p>Training session </p>
                    <p>10:00 am</p>
                  </div>
                </div>
                <div className="info">
                  <div className="switch">
                    <CustomSwitch checkChecked={true} />
                  </div>
                  <div>
                    <p>Team meetings </p>
                    <p>1:00 pm</p>
                  </div>
                </div>
              </div>
              <div className="add-reminder">
                <button className="add-reminder-btn">+ Add new</button>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="contact">
              <div className="header">
                <p>Contacts</p>
                <Link to="/view-all" className="view-all">
                  View all
                </Link>
              </div>
              <div className="body">
                {contactData.map((data, index) => {
                  return (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div className="contact-box">
                        <img src={data.picture} alt="contactimg" />
                        <div>
                          <p className="contact-name">{data.name}</p>
                          <p className="contact-title">{data.title}</p>
                        </div>
                      </div>
                      <img src="/assets/icons/elipsis.png" alt="seemore" />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="graph">
              <div className="graph-inner">
                <div className="header">
                  <p>Half Year Work Results</p>
                  <Link to="/browse-more" className="view-all">
                    Browse more
                  </Link>
                </div>
                <div className="body">
                  <LineChart />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <CalendarSection />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
