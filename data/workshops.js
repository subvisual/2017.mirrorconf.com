import React from 'react';

import SubSectionTitle from '../Components/SubSectionTitle';
import EventDescription, { Text, Title } from '../Components/EventDescription';

import atomicImage from '../images/workshops/atomic_workshop.jpg';
import productImage from '../images/workshops/product_workshop.jpg';
import saraImage from '../images/workshops/sara_workshop.jpg';
import vitalyWorkshop from '../images/workshops/vitaly_workshop.jpg';
import responsiveDesignImage from '../images/workshops/product_workshop.jpg';

/* eslint-disable max-len, react/no-unescaped-entities */
export default [
  {
    id: 'atomic-design',
    name: 'Atomic Design: Patterns and Principles',
    instructor: 'Brad Frost',
    image: atomicImage,
    datetime: 'Oct. 11 - 04:00 PM',
    location: 'Gnration',
    locationUrl: '#',
    ticketUrl: '#',
    price: 250,
    description: <EventDescription>
      <Text>Style guides, design systems, and pattern libraries provide solid ground for us to stand on as we tackle the increasingly diverse and fast-moving web landscape. This full-day session will tackle all that goes into making and maintaining successful interface design systems, including:</Text>
      <Title>Atomic Design Principles</Title>
      <Text>We’ll cover core principles of modular UI interface design and discuss considerations around atomic design, a methodology for crafting robust, deliberate design systems.</Text>
      <Title>Selling Design Systems</Title>
      <Text>We all know design systems and pattern libraries are great, but how do you get your clients, bosses, and teammates on board? We’ll cover tactics and tools for selling pattern libraries to clients and stakeholders, and detail how to create an interface inventory to pave the way for style guide success.</Text>
      <Title>A Pattern-Based Process</Title>
      <Text>Making modular interfaces requires massive shifts in our design and development process. We’ll discuss why front-end development is an essential part of the design process and demonstrate how tools like lo-fi sketches, style tiles, element collages, Pattern Lab, and others facilitate collaboration—and result in successful design systems.</Text>
      <Title>Style Guide Maintenance</Title>
      <Text> Like a fine wine, a design system increases in value over time. We’ll discuss tactics and techniques to ensure that your pattern library stays in sync, and your design system provides lasting value to your organization.</Text>
      <Title>UI Patterns</Title>
      <Text>Creating modular interfaces is challenging, but thankfully the web community is hard at work creating flexible, downright innovative UI design patterns. We’ll look at patterns for tackling layout, navigation, images, data tables, and really anything else you can include in an interface.</Text>
      <Title>What hardware/software do you need?</Title>
      <Text>Please bring your own notebook with you to be able to follow along.</Text>
    </EventDescription>,
  },

  {
    id: 'product-roadmapping',
    name: 'Roadmapping Your Product Roadmap',
    instructor: 'C Todd Lombardo',
    price: 'xxx',
    datetime: 'Oct. 11 - 04:00 PM',
    location: '',
    locationUrl: '',
    ticketUrl: '',
    image: productImage,
    price: 200,
    description: <EventDescription>
      <Text>TODO</Text>
    </EventDescription>,
  },
  {
    id: 'responsive-design',
    name: 'Smart Responsive Design Patterns',
    instructor: 'Vitaly Friedman',
    image: responsiveDesignImage,
    datetime: 'Oct. 11 - 04:00 PM',
    location: 'Gnration',
    locationUrl: '#',
    ticketUrl: '#',
    price: 200,
    description: <EventDescription>
      <Text>In this brand new workshop, Vitaly Friedman (editor-in-chief of Smashing Magazine), will cover practical techniques, clever tricks and useful strategies you need to be aware of when working on responsive websites. From responsive modules to clever navigation patterns and web form design techniques; the workshop will provide you with everything you need to know today to start designing better responsive experiences tomorrow.</Text>
      <Text>The workshop is intended for intermediate/advanced designers and developers who have an understanding of responsive design and how it works.</Text>
      <Text>Most techniques are borrowed from mid-size and large-scale real-life projects, such as large eCommerce projects, online magazines and web applications. We won't cover the basics, instead, the workshops covers more advanced techniques used in responsive design.</Text>
      <Title>This workshop will cover:</Title>
      <ul>
        <li><Text>- Effective tools and techniques that can support and enhance your personal workflow when working on any responsive design project;</Text></li>
        <li><Text>- An overview of clever practical techniques for improving UX of responsive sites including navigation and search;</Text></li>
        <li><Text>- Responsive Design Patterns and innovative approaches to designing ‘responsive modules’ such as mega-drop downs, tables, calendars, multi-level menus, maps, carousels and web forms;</Text></li>
        <li><Text>- How to apply clever patterns such as improved off-canvas navigation, assistant pattern, smart URL design, priority+ pattern, vertical media queries, ‘view mode’ approach, lazy loading, autocomplete, type-ahead search, filters, portrait/landscape orientation change, inventory-based sliders, the country selector and responsive iconography;</Text></li>
        <li><Text>- How to craft delightful interfaces with smooth transitions, clever animations and improve perceived performance along the way;</Text></li>
        <li><Text>- How to optimize responsive websites for better mobile UX, faster data input and higher conversion rates;</Text></li>
        <li><Text>- Design anti-patterns to avoid when designing a responsive site to prevent running into performance issues and “slow UX decay”;</Text></li>
        <li><Text>- How the design processes should adapt in terms of the project management, deliverables, performance budgets, team organization and strategy.</Text></li>
      </ul>
      <Title>What hardware/software do you need?</Title>
      <Text>You'll need to bring a lot of creativity with your preferred coffee mug. Laptop is preferred but not absolutely necessary. You’ll need a lot of sleep reserves since it’s going to be a packed day.</Text>
    </EventDescription>,
  },
  {
    id: 'front-end-espresso',
    name: 'The Front-End Espresso Shot',
    instructor: 'Sara Soueidan',
    image: saraImage,
    datetime: 'asdasd',
    location: 'Gnration',
    locationUrl: '#',
    ticketUrl: '#',
    price: 200,
    description: <EventDescription>
      <Text>asd</Text>
    </EventDescription>,
  },
];
/* eslint-enable max-len */
