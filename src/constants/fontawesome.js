// fontawesome.js
import { library } from '@fortawesome/fontawesome-svg-core';

// Solid Icons
import {
  faStethoscope, faUserMd, faHospital, faEnvelope, // Medical
  faChalkboardUser, faGraduationCap, faBookOpen,   // Teaching
  faBriefcase, faLaptopCode, faChartLine,         // Works
  faCamera, faCameraRetro, faImages,               // Photography
  faDumbbell, faFutbol, faPersonRunning,           // Sports
  faLocationDot, faMapLocationDot, faCity          // Places
} from '@fortawesome/free-solid-svg-icons';

// Brand Icons
import {
  faGithub,
  faLinkedin,
  faGoogle // Often used for Email/Gmail
} from '@fortawesome/free-brands-svg-icons';

library.add(
  faStethoscope, faUserMd, faHospital, faEnvelope,
  faChalkboardUser, faGraduationCap, faBookOpen,
  faBriefcase, faLaptopCode, faChartLine,
  faCamera, faCameraRetro, faImages,
  faDumbbell, faFutbol, faPersonRunning,
  faLocationDot, faMapLocationDot, faCity,
  // Social/Contact
  faGithub,
  faLinkedin,
  faGoogle
);