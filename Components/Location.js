import React, { PropTypes } from 'react';

import '../css/Components/Location';

import Text from '../Components/Text';
import Link from '../Components/Link';
import TextHighlight from '../Components/TextHighlight';
import SubSectionTitle from '../Components/SubSectionTitle';

class Location extends React.Component {
  static propTypes = {
    singlePrice: PropTypes.string,
    doublePrice: PropTypes.string,
    minutes: PropTypes.number,
    email: PropTypes.string,
    phone: PropTypes.string,
    address: PropTypes.string,
    addressUrl: PropTypes.string,
    description: PropTypes.string,
    stars: PropTypes.number,
    name: PropTypes.string,
    url: PropTypes.string,
  }

  static defaultProps = {
    singlePrice: null,
    doublePrice: null,
    minutes: null,
    phone: null,
    email: null,
    address: null,
    addressUrl: null,
    stars: null,
    name: null,
    description: null,
    url: null,
  }

  renderPrices() {
    if (!this.props.singlePrice) {
      return null;
    }

    return (
      <div className="Location-prices">
        <div className="Location-price">
          <div className="Location-priceValue">{this.props.singlePrice}€</div>
          <Text>Single</Text>
        </div>
        <div className="Location-price">
          <div className="Location-priceValue">{this.props.doublePrice}€</div>
          <Text>Double</Text>
        </div>
      </div>
    );
  }

  renderAddress() {
    return (
      <div className="Location-address">
        <Text>{this.props.address}</Text>
        <Text>
          <span className="Location-transparentText">
            Walking distance to the venue:&nbsp;
          </span>
          <Link target="_blank" href={this.props.addressUrl} noHover>
            <TextHighlight>{this.props.minutes} minutes</TextHighlight>
          </Link>
        </Text>
      </div>
    );
  }

  renderPhone() {
    return (
      <div className="Location-phone">
        <Text>{this.props.phone}</Text>
      </div>
    );
  }

  renderEmail() {
    if (!this.props.email) {
      return null;
    }

    return (
      <div className="Location-email">
        <Text>{this.props.email}</Text>
      </div>
    );
  }

  renderDescription() {
    if (!this.props.description) {
      return null;
    }

    return (
      <div className="Location-description">
        <Text>{this.props.description}</Text>
      </div>
    );
  }

  renderStars() {
    if (!this.props.stars) {
      return null;
    }

    return (
      <div className="Location-stars">
        <div className="Location-star" />
        <div className="Location-star" />
        <div className="Location-star" />
      </div>
    );
  }

  render() {
    return (
      <div className="Location">
        <Link noHover href={this.props.url} target="_blank">
          <SubSectionTitle>{this.props.name}</SubSectionTitle>
        </Link>
        {this.renderDescription()}
        {this.renderStars()}
        {this.renderPrices()}
        {this.renderAddress()}
        {this.renderPhone()}
        {this.renderEmail()}
      </div>
    );
  }
}

export default Location;
