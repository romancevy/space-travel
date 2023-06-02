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

const destinationImages = {
  moon: {
    png: MoonImgPng,
    webp: MoonImgWebp,
  },
  mars: {
    png: MarsImgPng,
    webp: MarsImgWebp,
  },
  europa: {
    png: EuropaImgPng,
    webp: EuropaImgWebp,
  },
  titan: {
    png: TitanImgPng,
    webp: TitanImgWebp,
  },
};

const crewImages = {
  hurley: {
    png: HurleyImgPng,
    webp: HurleyImgWebp,
  },
  shuttleworth: {
    png: ShuttleworthImgPng,
    webp: ShuttleworthImgWebp,
  },
  glover: {
    png: GloverImgPng,
    webp: GloverImgWebp,
  },
  ansari: {
    png: AnsariImgPng,
    webp: AnsariImgWebp,
  },
};

const technologyImages = {
  vehicle: {
    portrait: VehiclePortrait,
    landscape: VehicleLandscape,
  },
  spaceport: {
    portrait: SpaceportPortrait,
    landscape: SpaceportLandscape,
  },
  capsule: {
    portrait: CapsulePortrait,
    landscape: CapsuleLandscape,
  },
};

export const CONTENT: {
  destinations: Destination[];
  crew: CrewMember[];
  technology: Technology[];
} = {
  destinations: [
    {
      name: "Moon",
      images: destinationImages.moon,
      description: "See our planet as you've never seen it before...",
      distance: "384,400 km",
      travel: "3 days",
    },
    {
      name: "Mars",
      images: destinationImages.mars,
      description:
        "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons...",
      distance: "225 mil. km",
      travel: "9 months",
    },
    {
      name: "Europa",
      images: destinationImages.europa,
      description:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream...",
      distance: "628 mil. km",
      travel: "3 years",
    },
    {
      name: "Titan",
      images: destinationImages.titan,
      description:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home...",
      distance: "1.6 bil. km",
      travel: "7 years",
    },
  ],
  crew: [
    {
      name: "Douglas Hurley",
      images: crewImages.hurley,
      role: "Commander",
      bio: "Douglas Gerald Hurley is an American engineer...",
    },
    {
      name: "Mark Shuttleworth",
      images: crewImages.shuttleworth,
      role: "Mission Specialist",
      bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical...",
    },
    {
      name: "Victor Glover",
      images: crewImages.glover,
      role: "Pilot",
      bio: "Pilot on the first operational flight of the SpaceX Crew Dragon...",
    },
    {
      name: "Anousheh Ansari",
      images: crewImages.ansari,
      role: "Flight Engineer",
      bio: "Anousheh Ansari is an Iranian American engineer...",
    },
  ],
  technology: [
    {
      name: "Launch vehicle",
      images: technologyImages.vehicle,
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space...",
    },
    {
      name: "Spaceport",
      images: technologyImages.spaceport,
      description:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft...",
    },
    {
      name: "Space capsule",
      images: technologyImages.capsule,
      description:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere...",
    },
  ],
};
