import React from 'react';

import Section from './Section';

import '../css/Components/Event.scss';
import '../css/Components/ScheduleTable.scss';

const WorkshopsSchedule = () => (
  <div className="WorkshopsSchedule">
    <Section>
      <div className="ScheduleTable">
        <h2 className="ScheduleTable-header">10</h2>
        <div className="ScheduleTable-row">
          <div className="ScheduleTable-column pushLeft">
            <div className="ScheduleTable-cell duration240">
              <p className="Event-time">10:00</p>
            </div>
          </div>

          <div className="ScheduleTable-column">
            <h3 className="ScheduleTable-columnHeader">
              Gnration<br />Room 1
            </h3>
            <div className="ScheduleTable-cell duration240">
              <p className="Event-heading">Roadmapping Your Product Roadmap</p>
              <p className="Event-subHeading">pt. 1</p>
              <p className="Event-text">C. Todd Lombardo</p>
            </div>
          </div>

          <div className="ScheduleTable-columnGutter">
            <div className="ScheduleTable-cell duration240" />
          </div>

          <div className="ScheduleTable-column">
            <h3 className="ScheduleTable-columnHeader">
              Gnration<br />Room 2
            </h3>
            <div className="ScheduleTable-cell duration240">
              <p className="Event-heading">The Front-End Espresso Shot</p>
              <p className="Event-subHeading">pt. 1</p>
              <p className="Event-text">Sara Soueidan</p>
            </div>
          </div>
        </div>

        <div className="ScheduleTable-rowGutter" />

        <div className="ScheduleTable-row">
          <div className="ScheduleTable-column pushLeft">
            <div className="ScheduleTable-cell duration120">
              <p className="Event-time">12:00</p>
            </div>
          </div>

          <div className="ScheduleTable-column">
            <div className="ScheduleTable-cell duration120">
              <p className="Event-text">Lunch</p>
            </div>
          </div>

          <div className="ScheduleTable-columnGutter">
            <div className="ScheduleTable-cell duration120" />
          </div>

          <div className="ScheduleTable-column">
            <div className="ScheduleTable-cell duration120">
              <p className="Event-text">Lunch</p>
            </div>
          </div>
        </div>

        <div className="ScheduleTable-rowGutter" />

        <div className="ScheduleTable-row">
          <div className="ScheduleTable-column pushLeft">
            <div className="ScheduleTable-cell duration240">
              <p className="Event-time">13:00</p>
            </div>
          </div>

          <div className="ScheduleTable-column">
            <div className="ScheduleTable-cell duration240">
              <p className="Event-heading">Roadmapping Your Product Roadmap</p>
              <p className="Event-subHeading">pt. 2</p>
              <p className="Event-text">C. Todd Lombardo</p>
            </div>
          </div>

          <div className="ScheduleTable-columnGutter">
            <div className="ScheduleTable-cell duration240" />
          </div>

          <div className="ScheduleTable-column">
            <div className="ScheduleTable-cell duration240">
              <p className="Event-heading">The Front-End Espresso Shot</p>
              <p className="Event-subHeading">pt. 2</p>
              <p className="Event-text">Sara Soueidan</p>
            </div>
          </div>
        </div>

        <div className="ScheduleTable-row">
          <div className="ScheduleTable-column pushLeft">
            <div className="ScheduleTable-cell duration60">
              <p className="Event-time">18:30</p>
            </div>
          </div>

          <div className="ScheduleTable-column">
            <h3 className="ScheduleTable-columnHeader">Braga.io</h3>

            <div className="ScheduleTable-cell duration60">
              <p className="Event-text bold">Meetup</p>
              <p className="Event-text">Braga.Design + Braga.JS</p>
            </div>
          </div>
        </div>
      </div>

      <div className="ScheduleTable">
        <h2 className="ScheduleTable-header">11</h2>
        <div className="ScheduleTable-row">
          <div className="ScheduleTable-column pushLeft">
            <div className="ScheduleTable-cell duration240">
              <p className="Event-time">10:00</p>
            </div>
          </div>

          <div className="ScheduleTable-column">
            <h3 className="ScheduleTable-columnHeader">
              Gnration<br />Room 1
            </h3>
            <div className="ScheduleTable-cell duration240">
              <p className="Event-heading">Atomic Design: Patterns and Principles</p>
              <p className="Event-subHeading">pt. 1</p>
              <p className="Event-text">Brad Frost</p>
            </div>
          </div>

          <div className="ScheduleTable-columnGutter">
            <div className="ScheduleTable-cell duration240" />
          </div>

          <div className="ScheduleTable-column">
            <h3 className="ScheduleTable-columnHeader">
              Gnration<br />Room 2
            </h3>
            <div className="ScheduleTable-cell duration240">
              <p className="Event-heading">Smart Responsive Design Patterns</p>
              <p className="Event-subHeading">pt. 1</p>
              <p className="Event-text">Vitaly Friedman</p>
            </div>
          </div>
        </div>

        <div className="ScheduleTable-rowGutter" />

        <div className="ScheduleTable-row">
          <div className="ScheduleTable-column pushLeft">
            <div className="ScheduleTable-cell duration120">
              <p className="Event-time">12:00</p>
            </div>
          </div>

          <div className="ScheduleTable-column">
            <div className="ScheduleTable-cell duration120">
              <p className="Event-text">Lunch</p>
            </div>
          </div>

          <div className="ScheduleTable-columnGutter">
            <div className="ScheduleTable-cell duration120" />
          </div>

          <div className="ScheduleTable-column">
            <div className="ScheduleTable-cell duration120">
              <p className="Event-text">Lunch</p>
            </div>
          </div>
        </div>

        <div className="ScheduleTable-rowGutter" />

        <div className="ScheduleTable-row">
          <div className="ScheduleTable-column pushLeft">
            <div className="ScheduleTable-cell duration240">
              <p className="Event-time">13:00</p>
            </div>
          </div>

          <div className="ScheduleTable-column">
            <div className="ScheduleTable-cell duration240">
              <p className="Event-heading">Atomic Design: Patterns and Principles</p>
              <p className="Event-subHeading">pt. 2</p>
              <p className="Event-text">Brad Frost</p>
            </div>
          </div>

          <div className="ScheduleTable-columnGutter">
            <div className="ScheduleTable-cell duration240" />
          </div>

          <div className="ScheduleTable-column">
            <div className="ScheduleTable-cell duration240">
              <p className="Event-heading">Smart Responsive Design Patterns</p>
              <p className="Event-subHeading">pt. 2</p>
              <p className="Event-text">Vitaly Friedman</p>
            </div>
          </div>
        </div>

        <div className="ScheduleTable-row">
          <div className="ScheduleTable-column pushLeft">
            <div className="ScheduleTable-cell duration60">
              <p className="Event-time">19:30</p>
            </div>
          </div>

          <div className="ScheduleTable-column">
            <h3 className="ScheduleTable-columnHeader">Gnration</h3>
            <div className="ScheduleTable-cell duration60">
              <p className="Event-heading">Welcome Drinks</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  </div>
);

export default WorkshopsSchedule;
