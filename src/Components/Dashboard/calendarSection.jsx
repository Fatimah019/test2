import React, { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "sassy-datepicker";
// import "./index.css";

const scheduleData = [
  {
    title: "Team meetings",
    title_color: "#39BD45",
    desc: "BD & Treatment Centre",
    from: "4:15 pm",
    to: "6:00 pm",
  },
  {
    title: "Medical checks",
    title_color: "#505DD6",
    desc: "BD & Treatment Centre",
    from: "4:15 pm",
    to: "6:00 pm",
  },
];

const ScheduleCards = ({ title, desc, from, to, bgColor }) => {
  return (
    <div className="schedule-card">
      <span className="title" style={{ backgroundColor: bgColor }}>
        {title}
      </span>
      <p className="desc">{desc}</p>
      <p className="time">
        {from} - {to}
      </p>
    </div>
  );
};

const CalendarSection = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };
  return (
    <div className="calendar-section">
      <DatePicker onChange={onChange} selected={date} />

      <div className="bottom">
        <div className="header">
          <p className="schedule-text">Schedule</p>
          <Link to="/all" className="view-all">
            View all
          </Link>
        </div>
        <div className="body">
          {scheduleData.map((item, index) => {
            return (
              <ScheduleCards
                key={index}
                title={item.title}
                desc={item.desc}
                from={item.from}
                to={item.to}
                bgColor={item.title_color}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CalendarSection;
