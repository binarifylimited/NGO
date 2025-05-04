// Website links and routes updated for Binarify Community Outreach
export const websiteLinks = [
    {
        label: 'Home',
        route: '/',
    },
    {
        label: 'About Us',
        route: '/who-we-are',
    },
    {
        label: 'Our Programs',
        route: '/our-programs',
        subLinks: [
            {
                label: 'Healthcare Initiatives',
                route: '/our-programs/healthcare-initiatives',
            },
            {
                label: 'Education for All',
                route: '/our-programs/education-for-all',
            },
            {
                label: 'Community Empowerment',
                route: '/our-programs/community-empowerment',
            },
            {
                label: 'Sustainable Development',
                route: '/our-programs/sustainable-development',
            },
        ],
    },
    {
        label: 'Volunteer With Us',
        route: '/volunteer',
    },
    {
        label: 'Upcoming Events',
        route: '/events',
    },
    {
        label: 'Contact Us',
        route: '/contacts',
    },
];

// Event details updated for Binarify Community Outreach events
export const events = [
    {
        title: 'Volunteer for Health Awareness Campaign',
        date: 'March 10 – March 15, 2024',
        description: 'Join us in raising awareness for health initiatives in underserved communities. Your participation will make a significant impact!',
        link: "/events/health-awareness-campaign",
        imgUrl: "/images/event1.jpg",
    },
    {
        title: 'Supporting Children’s Education: A Call for Action',
        date: 'April 5 – April 10, 2024',
        description: 'Help provide quality education for children in rural areas. Together, we can create better opportunities for the next generation.',
        link: "/events/education-support",
        imgUrl: "/images/event2.jpg",
    },
    {
        title: 'Sustainable Living for Future Generations',
        date: 'May 12 – May 18, 2024',
        description: 'Be part of a campaign promoting sustainable development and eco-friendly practices in communities across Nigeria.',
        link: "/events/sustainable-living",
        imgUrl: "/images/event3.webp",
    },
];

// Programs updated to reflect Binarify Community Outreach's mission and goals
export const programs = [
    {
        title: 'Empowering Communities through Healthcare',
        description: 'Providing access to essential healthcare services, including medical outreach and health education programs for vulnerable communities.',
        link: "/our-programs/healthcare-initiatives",
    },
    {
        title: 'Education for All: Breaking Barriers',
        description: 'Investing in education to provide quality learning environments for children, especially those from low-income families.',
        link: "/our-programs/education-for-all",
    },
    {
        title: 'Economic Empowerment through Skills Training',
        description: 'Supporting youth and adults with vocational training programs to help them develop marketable skills and improve livelihoods.',
        link: "/our-programs/community-empowerment",
    },
    {
        title: 'Sustainable Development for a Better Future',
        description: 'Promoting eco-friendly initiatives to help build resilient communities that are prepared for the challenges of the future.',
        link: "/our-programs/sustainable-development",
    },
];
