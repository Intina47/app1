export const exploreMore = [
  {
    id: 'event-1',
    imgUrl: '/tnt.png',
    title: 'TNT Tuedays',
    day: 'From 8:00 PM, Tuesday',
    time: '8:00 PM',
    url: '?type=TNTTuedaysReservation',
  },
  {
    id: 'event-2',
    imgUrl: '/event2.png',
    title: 'THIRSTY Thursdays',
    day: 'From 8:00 PM,Thursday',
    time: '8:00 PM',
    url: '?type=ThirstyThursdaysReservation',
  },
  {
    id: 'event-3',
    imgUrl: '/afro2.png',
    title: 'Urban Sound',
    day: 'From 8:00 PM,Friday',
    time: '8:00 PM',
    url: '?type=UrbanSoundReservation',
  },
  {
    id: 'event-4',
    imgUrl: '/good.png',
    title: 'Good Vibes',
    day: 'From 8:00 PM,Saturday',
    time: '8:00 PM',
    url: '?type=GoodVibesReservation',

  },
];

export const startingFeatures = [
  'Find a world that suits you and you want to enter',
  'Enter the world by reading basmalah to be safe',
  'No need to beat around the bush, just stay on the gas and have fun',
];

export const newFeatures = [
  {
    imgUrl: '/vrpano.svg',
    title: 'A new world',
    subtitle:
        'we have the latest update with new world for you to try never mind',
  },
  {
    imgUrl: '/headset.svg',
    title: 'More realistic',
    subtitle:
        'In the latest update, your eyes are narrow, making the world more realistic than ever',
  },
];

export const insights = [

];

export const socials = [
  {
    name: 'instagram',
    url: '/instagram.svg',
    link: 'https://www.instagram.com/afrobeatsdundee/',
  },
  {
    name: 'facebook',
    url: '/facebook.svg',
    link: 'https://www.facebook.com/afrobreatsdundee',
  },
];

export const menuIcon = {
  name: 'menu',
  Url: '/menu.svg',
};
export const closeIcon = {
  name: 'close',
  Url: '/close.svg',
};
export const arrowIcon = {
  name: 'arrow',
  Url: '/arrow.svg',
};
export const navlinks = [
  {
    id: 'home',
    title: 'Home',
    url: '/',
  },
  {
    id: 'contact-section',
    title: 'Contact us',
    onClick: () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  },
  },
  {
    id: 'ourNights',
    title: 'ourNights',
    onClick: () => {
      const ourNightsSection = document.getElementById('ourNights');
      if (ourNightsSection) {
        ourNightsSection.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
];

export const navlink = [
  {
    id: 'home',
    title: 'Home',
    url: '/',
  },
  {
    id: 'reservation',
    title: 'Join Guest List',
    url: '/reservation?type=Guestlist',
  },
  {
    id: 'guest',
    title: 'Make a Booth Reservation',
    url: '/reservation?type=Reservation',
  },
  {
    id: 'ourNights',
    title: 'ourNights',
    url: '#ourNights',
  },
];
