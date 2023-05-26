import MoonImgPng from "../assets/destination/image-moon.png";
import MoonImgWebp from "../assets/destination/image-moon.webp";
import MarsImgPng from "../assets/destination/image-mars.png";
import MarsImgWebp from "../assets/destination/image-mars.webp";
import EuropaImgPng from "../assets/destination/image-europa.png";
import EuropaImgWebp from "../assets/destination/image-europa.webp";
import TitanImgPng from "../assets/destination/image-titan.png";
import TitanImgWebp from "../assets/destination/image-titan.webp";
import HurleyImgPng from "../assets/crew/image-douglas-hurley.png";
import HurleyImgWebp from "../assets/crew/image-douglas-hurley.webp";
import ShuttleworthImgPng from "../assets/crew/image-mark-shuttleworth.png";
import ShuttleworthImgWebp from "../assets/crew/image-mark-shuttleworth.webp";
import GloverImgPng from "../assets/crew/image-victor-glover.png";
import GloverImgWebp from "../assets/crew/image-victor-glover.webp";
import AnsariImgPng from "../assets/crew/image-anousheh-ansari.png";
import AnsariImgWebp from "../assets/crew/image-anousheh-ansari.webp";
import VehiclePortrait from "../assets/technology/image-launch-vehicle-portrait.jpg";
import VehicleLandscape from "../assets/technology/image-launch-vehicle-landscape.jpg";
import SpaceportPortrait from "../assets/technology/image-spaceport-portrait.jpg";
import SpaceportLandscape from "../assets/technology/image-spaceport-landscape.jpg";
import CapsulePortrait from "../assets/technology/image-space-capsule-portrait.jpg";
import CapsuleLandscape from "../assets/technology/image-space-capsule-landscape.jpg";

import {
  NavLinksProps,
  Destination,
  CrewMember,
  Technology,
} from "../types/types";

export const NAVLINKS: NavLinksProps[] = [
  {
    id: "00",
    name: "home",
    path: "/",
  },
  {
    id: "01",
    name: "destination",
    path: "/destination",
  },
  {
    id: "02",
    name: "crew",
    path: "/crew",
  },
  {
    id: "03",
    name: "technology",
    path: "/technology",
  },
];

export const CONTENT: {
  destinations: Destination[];
  crew: CrewMember[];
  technology: Technology[];
} = {
  destinations: [
    {
      name: "Moon",
      images: {
        png: MoonImgPng,
        webp: MoonImgWebp,
      },
      description:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 km",
      travel: "3 days",
    },
    {
      name: "Mars",
      images: {
        png: MarsImgPng,
        webp: MarsImgWebp,
      },
      description:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 mil. km",
      travel: "9 months",
    },
    {
      name: "Europa",
      images: {
        png: EuropaImgPng,
        webp: EuropaImgWebp,
      },
      description:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 mil. km",
      travel: "3 years",
    },
    {
      name: "Titan",
      images: {
        png: TitanImgPng,
        webp: TitanImgWebp,
      },
      description:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 bil. km",
      travel: "7 years",
    },
  ],
  crew: [
    {
      name: "Douglas Hurley",
      images: {
        png: HurleyImgPng,
        webp: HurleyImgWebp,
      },
      role: "Commander",
      bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    },
    {
      name: "Mark Shuttleworth",
      images: {
        png: ShuttleworthImgPng,
        webp: ShuttleworthImgWebp,
      },
      role: "Mission Specialist",
      bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    },
    {
      name: "Victor Glover",
      images: {
        png: GloverImgPng,
        webp: GloverImgWebp,
      },
      role: "Pilot",
      bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    },
    {
      name: "Anousheh Ansari",
      images: {
        png: AnsariImgPng,
        webp: AnsariImgWebp,
      },
      role: "Flight Engineer",
      bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    },
  ],
  technology: [
    {
      name: "Launch vehicle",
      images: {
        portrait: VehiclePortrait,
        landscape: VehicleLandscape,
      },
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
    {
      name: "Spaceport",
      images: {
        portrait: SpaceportPortrait,
        landscape: SpaceportLandscape,
      },
      description:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    },
    {
      name: "Space capsule",
      images: {
        portrait: CapsulePortrait,
        landscape: CapsuleLandscape,
      },
      description:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    },
  ],
};
