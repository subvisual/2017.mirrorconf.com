import React from 'react';

import EventDescription, { Text, Title } from '../Components/EventDescription';

import atomicImage from '../images/workshops/atomic_workshop.jpg';
import productImage from '../images/workshops/product_workshop.jpg';
import saraImage from '../images/workshops/sara_workshop.jpg';
import vitalyImage from '../images/workshops/vitaly_workshop.jpg';

/* eslint-disable max-len, react/no-unescaped-entities */
export default [
  {
    id: 'product-roadmapping',
    name: 'Roadmapping Your Product Roadmap',
    instructor: 'C Todd Lombardo',
    datetime: 'Oct. 10 - 5:00 PM',
    location: 'GNRation',
    locationUrl: 'https://www.google.pt/maps/place/GNRation/@41.5531265,-8.4284087,17z/data=!3m1!4b1!4m5!3m4!1s0xd24fee9ae15fe63:0xf715da419f911455!8m2!3d41.5531265!4d-8.42622?hl=en',
    image: productImage,
    attendeePrice: 150,
    nonAttendeePrice: 200,
    isExpanded: true,
    description: <EventDescription>
      <Text>Ask 10 people what a product roadmap is and you will get 10 different answers! This artifact is an often misunderstood component of product development, but an incredibly important one to get right. Creating a great one is part art and part science. In this session we will talk through the real purpose of a roadmap and how it can be used to get the most out of your project and team. We'll unpack the key steps in the process such as product visioning, themes, prioritization and stakeholder buy-in and alignment as well as and shed some light on the tools and frameworks that can be used to ensure a successful roadmapping effort.</Text>
    </EventDescription>,
  },

  {
    id: 'front-end-espresso',
    name: 'The Front-End Espresso Shot',
    instructor: 'Sara Soueidan',
    image: saraImage,
    datetime: 'Oct. 10 - 5:00 PM',
    location: 'GNRation',
    locationUrl: 'https://www.google.pt/maps/place/GNRation/@41.5531265,-8.4284087,17z/data=!3m1!4b1!4m5!3m4!1s0xd24fee9ae15fe63:0xf715da419f911455!8m2!3d41.5531265!4d-8.42622?hl=en',
    attendeePrice: 150,
    nonAttendeePrice: 200,
    description: <EventDescription>
      <Text>CSS has seen a lot of new feature releases in the last few years. Keeping up with everything can sometimes be overwhelming. It’s even harder for many designers and developers to ditch the tools and frameworks they’re already familiar with and relying on, in favor of new, native “frameworks” with a less than familiar syntax. But doing so is the way forward. CSS’s native features like Flexbox and Grid as well as CSS Variables provide a lot more power and flexibility than any previous frameworks or tools did—power than we should embrace and put to good use today moving forward.</Text>
      <Text>In this workshop, we will cover a range of topics from SVG usage as an image system to CSS features, building progressively enhanced page layouts with the newest CSS layout techniques, creating truly scalable, responsive typography, theming using CSS Variables, and creative visual effects using CSS transformations, blend modes and filters, and making sure our components have at least the minimum level of accessibility.</Text>
      <Text>Attendees will walk away with knowledge they can apply right away, including:</Text>

      <ul>
        <li className="EventDescription-listItem"><Text>Creating creative page layouts with the new CSS Grid framework.</Text></li>
        <li className="EventDescription-listItem"><Text>Component-level layout enhancements using CSS Flexbox.</Text></li>
        <li className="EventDescription-listItem"><Text>Using CSS’s native feature detection @supports to leverage the new layout techniques, all the while providing basic fallback for non-supporting browsers.</Text></li>
        <li className="EventDescription-listItem"><Text>Using CSS custom properties to create and support multiple themes, including providing an accessible theme for less accessible designs.</Text></li>
        <li className="EventDescription-listItem"><Text>Using math in CSS to create scalable, responsive typography for our responsive designs: CSS viewport and relative units inside calc().</Text></li>
        <li className="EventDescription-listItem"><Text>Using CSS transforms and shapes to break out of the box and create creative, non-rectangular layouts.</Text></li>
        <li className="EventDescription-listItem"><Text>Make peace with the occasional responsible usage of CSS hacks, without compromising the accessibility of the user interface.</Text></li>
        <li className="EventDescription-listItem"><Text>Implementing SVGs in a responsive workflow, including basic icon animations.</Text></li>
        <li className="EventDescription-listItem"><Text>Enhancing and styling UI elements (such as form elements) accessibly and using animated SVGs.</Text></li>
        <li className="EventDescription-listItem"><Text>Learn how to use SVG to display, style and apply powerful image effects to other image formats!</Text></li>
        <li className="EventDescription-listItem"><Text>Strong focus on semantics and accessibility using ARIA roles and attributes where needed.</Text></li>
        <li className="EventDescription-listItem"><Text>Learning how all the new CSS features open up more flexible possibilities for designing and making decisions in the browser.</Text></li>
        <li className="EventDescription-listItem"><Text>We'll also be getting an overview of CSS graphical effects such as filters and blend modes, allowing us to give our designs that extra punch, making design and experimenting in the browser more accessible to us.</Text></li>
      </ul>

      <Text>Attendees will be challenged with a series of creative exercises, implying all the above techniques to solve real-world design challenges.</Text>

      <Text>Satisfaction guaranteed.</Text>
    </EventDescription>,
  },

  {
    id: 'atomic-design',
    name: 'Atomic Design: Patterns and Principles',
    instructor: 'Brad Frost',
    image: atomicImage,
    datetime: 'Oct. 11 - 10:00 AM',
    location: 'GNRation',
    locationUrl: 'https://www.google.pt/maps/place/GNRation/@41.5531265,-8.4284087,17z/data=!3m1!4b1!4m5!3m4!1s0xd24fee9ae15fe63:0xf715da419f911455!8m2!3d41.5531265!4d-8.42622?hl=en',
    attendeePrice: 150,
    nonAttendeePrice: 200,
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
      <Text>By the end of the day, you’ll be armed with all the insights and resources you need to create, sell, and maintain effective interface design systems.</Text>
    </EventDescription>,
  },

  {
    id: 'responsive-design',
    name: 'Responsive Interface Design Bootcamp',
    instructor: 'Vitaly Friedman',
    image: vitalyImage,
    datetime: 'Oct. 11 - 5:00 PM',
    location: 'GNRation',
    locationUrl: 'https://www.google.pt/maps/place/GNRation/@41.5531265,-8.4284087,17z/data=!3m1!4b1!4m5!3m4!1s0xd24fee9ae15fe63:0xf715da419f911455!8m2!3d41.5531265!4d-8.42622?hl=en',
    attendeePrice: 150,
    nonAttendeePrice: 200,
    description: <EventDescription>
      <Text>Are you ready for a design challenge? In this brand new workshop, Vitaly Friedman, editor-in-chief and co-founder of Smashing Magazine, will be taking a microscopic examination of common interface components and problems appearing in responsive user interfaces. In this workshop, we’ll be spending an entire day drawing and designing responsive interfaces, starting from accordions, to date/time pickers, sliders, feature comparisons, car configurators all the way to insurance calculators and trip planners.</Text>
      <Text>The workshop is intended for intermediate/advanced designers and developers who have an understanding of responsive design and how it works. </Text>
      <Text>Most techniques are borrowed from mid-size and large-scale real-life projects, such as large eCommerce projects, online magazines and web applications. We won't cover the basics, instead, the workshop covers more advanced — and often obscure and innovative techniques.</Text>
      <Title>What will the workshop cover?</Title>
      <Text>In this workshop, we’ll go hands-on into exploring:</Text>
      <ul>
        <li className="EventDescription-listItem"><Text>Responsive art direction techniques and advanced layouts, with many inspiring and memorable examples,</Text></li>
        <li className="EventDescription-listItem"><Text>Navigation, with mega-drop-downs, breadcrumbs, carousels, accordion and filters,</Text></li>
        <li className="EventDescription-listItem"><Text>Builders, with a car configurator and mobile plan builder,</Text></li>
        <li className="EventDescription-listItem"><Text>Forms, with email verification, password input, country selector, privacy issues, sliders and public transportation, and a banking transaction UI,</Text></li>
        <li className="EventDescription-listItem"><Text>Date pickers, date range picker and a time picker, incl. booking an appointment and booking an airline ticket,</Text></li>
        <li className="EventDescription-listItem"><Text>Tables, with a feature comparison table, currency exchange calculator, pricing plans,</Text></li>
        <li className="EventDescription-listItem"><Text>Search, with autocomplete, filters, search results,</Text></li>
        <li className="EventDescription-listItem"><Text>Calendars, with a multi-track schedule, TV Guide schedule, music festival schedule, exhibition calendar, spreadsheets and dashboard,</Text></li>
        <li className="EventDescription-listItem"><Text>Audio/Video, with a video player UI and audio-based input,</Text></li>
        <li className="EventDescription-listItem"><Text>Maps / Data Visualization, with a shopping mall map, election map, smart region input.</Text></li>
        <li className="EventDescription-listItem"><Text>Timelines, with a historical timelines, soccer game signature and live leaderboard and standings,</Text></li>
        <li className="EventDescription-listItem"><Text>Real-time experience with betting UI for soccer, poker and live video streaming,</Text></li>
        <li className="EventDescription-listItem"><Text>Footnotes and sidenotes in magazine articles,</Text></li>
        <li className="EventDescription-listItem"><Text>Seat selection, for a concert/theatre/exhibition and a perfect airplane check-in,</Text></li>
        <li className="EventDescription-listItem"><Text>Responsive PDF for documents and restaurant menus,</Text></li>
        <li className="EventDescription-listItem"><Text>Responsive upscaling, with eCommerce experience on large screens and article layout on large screens,</Text></li>
        <li className="EventDescription-listItem"><Text>Design anti-patterns to avoid to prevent running into maintenance issues and “slow UX decay”.</Text></li>
      </ul>

      <Title>What hardware/software do you need?</Title>
      <Text>You'll need to bring a lot of creativity with your preferred coffee mug. We’ll be spending a lot of time drawing, sketching, designing and thinking. Laptop is preferred but not absolutely necessary. You’ll need a lot of sleep reserves since it’s going to be a packed day. Bring a lot of attention to detail and non-standard thinking to this one! ;-)</Text>
    </EventDescription>,
  },
];
/* eslint-enable max-len */
