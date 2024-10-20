import React from 'react';
import './Schedule.css';

export const Schedule = () => {
  return (
    <div className="schedule-wrapper">
      <div className="day-column dark-grey">
        <h2 className="green">Lu</h2>
        <p className="am-class">Hot Yoga<br />c/ Beto 7am</p>
        <p className="am-class">Slow Vinyasa<br />c/ Athenas 9am</p>
        <p className="pm-class">Mindful Vinyasa<br />c/ Maya 6pm</p>
      </div>
      <div className="spacer"></div>
      <div className="day-column">
        <h2 className="blue">Ma</h2>
        <p className="filler"></p> {/* Blank slot for 7am */}
        <p className="am-class">Yin Yoga<br />c/ Soco 9am</p>
        <p className="pm-class">Slow Vinyasa<br />c/ Athenas 6pm</p>
      </div>
      <div className="spacer"></div>
      <div className="day-column dark-grey">
        <h2 className="green">Mi</h2>
        <p className="am-class">Hot Yin<br />c/ Beto 7am</p>
        <p className="am-class">Slow Vinyasa<br />c/ Athenas 9am</p>
        <p className="pm-class">Mindful Vinyasa<br />c/ Maya 6pm</p>
      </div>
      <div className="spacer"></div>
      <div className="day-column">
        <h2 className="blue">Ju</h2>
        <p className="filler"></p> {/* Blank slot for 7am */}
        <p className="am-class">Yin Yoga<br />c/ Soco 9am</p>
        <p className="pm-class">Slow Vinyasa<br />c/ Athenas 6pm</p>
      </div>
      <div className="spacer"></div>
      <div className="day-column dark-grey">
        <h2 className="green">Vi</h2>
        <p className="am-class">Hot Yoga<br />c/ Beto 7am</p>
        <p className="am-class">Slow Vinyasa<br />c/ Athenas 9am</p>
        <p className="pm-class">Mindful Vinyasa<br />c/ Maya 6pm</p>
      </div>
    </div>
  );
};



