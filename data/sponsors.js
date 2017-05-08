import KirbyLogo from '../images/sponsors/kirby.svg';
import SeegnoLogo from '../images/sponsors/seegno.svg';
import AdorableLogo from '../images/sponsors/adorable.svg';
import PixelMattersLogo from '../images/sponsors/pixelmatters.svg';
import UsersnapLogo from '../images/sponsors/usersnap.svg';
import BuroLogo from '../images/sponsors/buro.png';
import MinderaLogo from '../images/sponsors/mindera.png';

export default [
  {
    title: 'Gold',
    logos: [
      { id: 1, alt: 'Seegno logo', src: SeegnoLogo, href: 'https://seegno.com/' },
    ],
  },
  {
    title: 'Wi-fi',
    logos: [
      { id: 7, alt: 'Mindera', src: MinderaLogo, href: 'https://www.mindera.com/' },
    ],
  },
  {
    title: 'Stone',
    logos: [
      { id: 2, alt: 'Kirby logo', src: KirbyLogo, href: 'https://getkirby.com/' },
      { id: 3, alt: 'Adorable logo', src: AdorableLogo, href: 'http://adorable.io/' },
      { id: 4, alt: 'Pixelmatters logo', src: PixelMattersLogo, href: 'http://pixelmatters.com/' },
      { id: 6, alt: 'Bürocratik', src: BuroLogo, href: 'http://www.burocratik.com/' },
    ],
  },
  {
    title: 'Media',
    logos: [
      { id: 5, alt: 'Usersnap logo', src: UsersnapLogo, href: 'https://usersnap.com/' },
    ],
  },
];
