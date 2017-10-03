import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';

import '../css/Components/Grid.scss';
import '../css/Components/Tabs.scss';

import Section from './Section';
import SubSectionTitle from './SubSectionTitle';

export default class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = { activeTab: props.tabs[0] };
  }

  switchTabTo(component) {
    return () => this.setState({ activeTab: component });
  }

  renderLink = (tab) => {
    const { activeTab } = this.state;

    const className = classNames({
      'Tabs-link': true,
      'is-active': activeTab.id === tab.id,
    });

    return (
      <button className={className} onClick={this.switchTabTo(tab)}>
        <div className="Tabs-background" />
        <div className="Tabs-linkLabel">
          <SubSectionTitle edge>{tab.label}</SubSectionTitle>
        </div>
      </button>
    );
  };

  render() {
    const { tabs } = this.props;
    const { activeTab } = this.state;

    return (
      <div className="Tabs">
        <Section>
          <div className="Tabs-navigation">{tabs.map(this.renderLink)}</div>
        </Section>
        <div className="Tabs-content">{activeTab.component}</div>
      </div>
    );
  }
}

const Tab = PropTypes.shape({
  id: PropTypes.number,
  label: PropTypes.string,
  component: PropTypes.node,
});

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(Tab),
};

Tabs.defaultProps = {
  tabs: [],
};
