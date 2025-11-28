export interface PersonalInfo {
  name: string;
  title: string;
  yearsExperience: string;
  summary: string;
  linkedin: string;
  github: string;
}

export interface SkillCategory {
  name: string;
  items: string[];
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  duration: string;
  responsibilities: string[];
  skills: string[];
}

export interface NavItem {
  id: string;
  label: string;
}

export const personalInfo: PersonalInfo = {
  name: 'Daniel Cser',
  title: 'Software Engineer specializing in Mobile & Embedded Systems',
  yearsExperience: '16+',
  summary: '16+ years of experience building innovative solutions across mobile applications, embedded systems, and web technologies. Currently at Teledyne FLIR developing cutting-edge radiation detection platforms.',
  linkedin: 'https://www.linkedin.com/in/daniel-cser/',
  github: 'https://github.com/viperelectric'
};

export const skills: SkillCategory[] = [
  {
    name: 'Mobile Development',
    items: ['C#', '.NET MAUI', 'Xamarin', 'Swift', 'SwiftUI', 'iOS', 'Android']
  },
  {
    name: 'Web Development',
    items: ['JavaScript', 'TypeScript', 'Vue.js', 'Vue 3', 'Electron', 'SPA', 'Tailwind CSS']
  },
  {
    name: 'Embedded & Desktop',
    items: ['.NET Core', 'Embedded Systems', 'Firmware', 'Bluetooth', 'Hardware Integration']
  }
];

export const experience: Experience[] = [
  {
    title: 'Mobile Application Engineer',
    company: 'Teledyne FLIR',
    location: 'Oak Ridge, Tennessee',
    duration: 'Feb 2022 - Present (3 years 10 months)',
    responsibilities: [
      'Developed mobile applications using C#, .NET MAUI, Xamarin, and Swift/SwiftUI for radiation detection platforms',
      'Developed C++ embedded applications for handheld radiation detection/identification products',
      'Ongoing QT application support running on embedded detection products',
      'Built applications for data transfer over Bluetooth and tethered connections to embedded handheld devices',
      'Created desktop applications in .NET and Electron frameworks as product support tools',
      'Developed JavaScript and Vue 3 SPA web applications for ongoing projects',
      'Earned Part 107 Remote Pilot certification for drone-mounted radiation detection payload testing'
    ],
    skills: ['C#', '.NET MAUI', 'Xamarin', 'Swift', 'SwiftUI', 'Vue.js', 'Electron', 'Bluetooth']
  },
  {
    title: 'V&V Test Engineer',
    company: 'Teledyne FLIR',
    location: 'Oak Ridge, Tennessee',
    duration: 'Apr 2016 - Feb 2022 (5 years 11 months)',
    responsibilities: [
      'Performed verification and validation of software and embedded firmware for radiation detection products',
      'Developed faster and more efficient manual testing processes for handheld devices',
      'Conducted regression testing to ensure product stability for critical customer applications',
      'Implemented automated testing architecture for more reliable and repeatable test processes'
    ],
    skills: ['.NET Core', 'Test Automation', 'QA', 'Embedded Systems']
  },
  {
    title: 'Electronics Technician / IT Support',
    company: 'Teledyne FLIR',
    location: 'Oak Ridge, Tennessee',
    duration: 'Jun 2009 - Apr 2016 (6 years 11 months)',
    responsibilities: [
      'Provided local IT support for corporate infrastructure and managed off-network systems',
      'Coordinated on-site infrastructure repairs, upgrades, and new installations',
      'Performed inspection, assembly, and testing of radiation measurement devices',
      'Conducted complex troubleshooting and repair of surface mount electronic circuits',
      'Managed work orders and parts for repair operations with focus on timely delivery'
    ],
    skills: ['Electronics', 'IT Support', 'Hardware', 'Troubleshooting', 'SMT Repair']
  }
];

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' }
];
