// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'yahya077',
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false,
          projects: [],
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['yahya077/flutterping', 'WEG-Technology/room', 'yahya077/flutterping-laravel', 'yahya077/portfolio-microservice-app'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [],
    },
  },
  seo: {
    title: 'Portfolio of Yahya Hindioğlu',
    description: 'Yahya Hindioğlu is a Software Developer. Currently working at Wingie Enuygun.',
    imageURL: '',
  },
  social: {
    linkedin: 'yahyahindioglu',
    twitter: 'yahyahindioglu',
    mastodon: '',
    researchGate: '',
    facebook: 'yahyahindioglu',
    instagram: 'yahyahindioglu',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '14990718/yahya007',
    skype: '',
    telegram: '',
    website: 'https://yahyahindioglu.com',
    phone: '',
    email: 'business@yahyahindioglu.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'GO',
    'PHP',
    'Kubernetes',
    'Docker',
    'Distributed Systems',
    'Laravel',
    'JavaScript',
    'Dart',
    'Vue.js',
    'Node.js',
    'MySQL',
    'PostgreSQL',
    'Mongo',
    'Redis',
    'Memcached',
    'RabbitMQ',
    'Kafka',
    'Traefik',
    'Git',
    'Docker',
    'PHPUnit',
    'CSS',
    'Tailwind',
    'Livewire',
  ],
  experiences: [
    {
      company: 'Wingie Enuygun',
      position: 'Software Developer',
      from: 'Jun 2022',
      to: 'Present',
      companyLink: 'https://www.enuygun.com',
    },
    {
      company: 'Kumsal Ajans',
      position: 'Full Stack Developer',
      from: 'Apr 2021',
      to: 'Jun 2022',
      companyLink: '',
    },
    {
      company: 'Freelance',
      position: 'Full Stack Developer',
      from: 'Jan 2020',
      to: 'Apr 2021',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'MIS',
      degree: 'Master',
      from: '2021',
      to: '2017',
    },
  ],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-XRV2379CL2', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: ``,

  enablePWA: true,
};

export default CONFIG;
