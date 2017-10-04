import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';

import Section from './Section';

import { conference } from '../data/schedule';
import '../css/Components/ScheduleTable.scss';

const renderLocations = locations =>
  _.map(locations, location => (
    <p key={location} className="ScheduleTable-locationName">
      {location}
    </p>
  ));

const renderHeader = (day, entries) => {
  const locations = _(entries)
    .uniqBy('location')
    .map('location')
    .value();

  return (
    <div key={day} className="ScheduleTable-headerColumn">
      <h2 className="ScheduleTable-day">{day}</h2>
      <div className="ScheduleTable-headerRow">{renderLocations(locations)}</div>
    </div>
  );
};

const renderFringeHeader = entries =>
  _(entries)
    .map('location')
    .uniq()
    .map(location => (
      <div key={location} className="ScheduleTable-headerColumn">
        <div className="ScheduleTable-headerRow">{renderLocations([location])}</div>
      </div>
    ))
    .value();

const renderItems = items =>
  _.map(items, ({ name, speaker, subtitle, duration, filler }) => {
    const className = classNames({
      'ScheduleTable-entry': true,
      'ScheduleTable-filler': filler,
      [`ScheduleTable-${duration}hours`]: duration,
    });

    return (
      <div className={className}>
        <h3 className="ScheduleTable-entryTitle">{name}</h3>
        <p className="ScheduleTable-entrySubtitle">{subtitle}</p>
        <h3 className="ScheduleTable-entrySpeaker">{speaker}</h3>
      </div>
    );
  });

const renderBody = entries =>
  _(entries)
    .groupBy('time')
    .map((items, time) => (
      <div className="ScheduleTable-row">
        <div className="ScheduleTable-time">{time}</div>
        {renderItems(items)}
      </div>
    ))
    .value();

const renderSchedule = events =>
  _.map(events, day => (
    <div key={day} className="ScheduleTable-dayWrapper">
      <div className="ScheduleTable-header">{renderHeader(day.day, day.entries)}</div>
      <div className="ScheduleTable-body">{renderBody(day.entries)}</div>
      <div className="ScheduleTable-fringe">
        <div className="ScheduleTable-header">{renderFringeHeader(day.fringe)}</div>
        <div className="ScheduleTable-body">{renderBody(day.fringe)}</div>
      </div>
    </div>
  ));

const ConferenceSchedule = () => (
  <div className="ConferenceSchedule">
    <Section>
      <div className="ScheduleTable ScheduleTable--conference">{renderSchedule(conference)}</div>
    </Section>
  </div>
);

export default ConferenceSchedule;
