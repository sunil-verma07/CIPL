import brand_icon_1 from "../assets/brand_icon_1.png"
import brand_icon_2 from "../assets/brand_icon_2.png"
import brand_icon_3 from "../assets/brand_icon_3.png"
import brand_icon_4 from "../assets/brand_icon_4.png"

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  {
    label: 'Solutions', path: '/solutions',
    children: [
      { label: 'Digital Skills', path: '/solutions' },
      { label: 'Internship Program', path: '/solutions#internship' },
      { label: 'Enterprise Training', path: '/solutions#enterprise' },
    ]
  },
  { label: 'Brands', path: '/brands' },
  { label: 'Contact Us', path: '/contact' },
];

export const HERO_SLIDES = [
  {
    id: 1,
    eyebrow: 'The Holding Hub of Trusted Brands',
    title: 'One Holding.\nMultiple High',
    highlight: 'Crediple Brands',
    subtitle: 'Access specialised solutions, unified under one powerful ecosystem.',
    description: 'The Core That Connects Every Venture. Crediple brings clarity, control, and growth across all business verticals.',
    cta1: { label: 'Explore More', href: '/brands' },
    cta2: { label: 'Discover', href: '/about' },
    bg: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80',
  },
  {
    id: 2,
    eyebrow: 'Digital Transformation',
    title: 'Build, Scale,',
    highlight: 'and Solve.',
    subtitle: 'Whether it\'s Healthcare, Finance, Legal, or Data Intelligence or IT infrastructure',
    description: 'Credible delivers the sharpest digital solutions that drive real-world outcomes. We don\'t just solve problems—we engineer the future of professional services.',
    cta1: { label: 'Start Your Journey', href: '/solutions' },
    cta2: { label: 'Learn More', href: '/about' },
    bg: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80',
  },
  {
    id: 3,
    eyebrow: 'Our IT Services',
    title: 'We run all kinds of',
    highlight: 'IT Services',
    subtitle: 'That vow your success',
    description: 'With over 10 years of combined experience, we\'ve got a well-seasoned team delivering excellence across every vertical.',
    cta1: { label: 'View Solutions', href: '/solutions' },
    cta2: { label: 'Meet the Team', href: '/about' },
    bg: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&q=80',
  },
];

export const BRANDS = [
  {
    id: 1,
    name: 'My Doctor Capsule',
    category: 'Healthcare',
    icon: '🏥',
    color: '#1A6BFF',
    description: 'A complete healthcare intelligence and clinical management solution for modern healthcare providers, streamlining patient care.',
    date: 'January 18, 2024',
    image: brand_icon_1,
  },
  {
    id: 2,
    name: 'Loan Konnekt',
    category: 'Finance',
    icon: '₹',
    color: '#00C2A8',
    description: 'Seamlessly connect customers with top loan financiers and financial products with intelligent AI-powered matching.',
    date: 'January 18, 2024',
    image: brand_icon_2,
  },
  {
    id: 3,
    name: 'Lawyix',
    category: 'Legal',
    icon: '⚖️',
    color: '#C8933A',
    description: 'Revolutionary legal intelligence management with powerful workflow automation and case analytics.',
    date: 'January 18, 2024',
    image: brand_icon_3,
  },
  {
    id: 4,
    name: 'Inl',
    category: 'Technology',
    icon: '💡',
    color: '#8B5CF6',
    description: 'Next-generation infrastructure and data-driven solutions that transform digital operations.',
    date: 'January 18, 2024',
    image: brand_icon_4,
  },
];

export const BRAND_ARTICLES = [
  { id: 1, category: 'Healthcare', title: 'My Doctor Capsule', date: 'January 18, 2024', excerpt: 'Today, it is uncommon to not have access to high-speed wireless internet, regardless of your location on Earth.', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80' },
  { id: 2, category: 'Legal', title: 'Lawyix', date: 'January 18, 2024', excerpt: 'Today, it is uncommon to not have access to high-speed wireless internet, regardless of your location on Earth.', image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80' },
  { id: 3, category: 'Technology', title: '5 Ways Technology Has Improved Business Today', date: 'January 18, 2024', excerpt: 'Today, it is uncommon to not have access to high-speed wireless internet, regardless of your location on Earth.', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80' },
  { id: 4, category: 'Technology', title: '5 Ways Technology Has Improved Business Today', date: 'January 18, 2024', excerpt: 'Today, it is uncommon to not have access to high-speed wireless internet, regardless of your location on Earth.', image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80' },
  { id: 5, category: 'Technology', title: 'How Wireless Technology is Changing Business', date: 'January 18, 2024', excerpt: 'Today, it is uncommon to not have access to high-speed wireless internet, regardless of your location on Earth.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
  { id: 6, category: 'Finance', title: '5 Ways Technology Has Improved Business Today', date: 'January 18, 2024', excerpt: 'Today, it is uncommon to not have access to high-speed wireless internet, regardless of your location on Earth.', image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80' },
];

export const VALUES = [
  { title: 'Architectural Excellence', desc: 'We don\'t just build businesses; we build ecosystems. Every solution under the Crediple umbrella must be scalable, secure and sophisticated.' },
  { title: 'Uncompromising Integrity', desc: 'In health, finance, law, data and technology, trust is our primary currency. We lead with transparency and professional rigor in every transaction.' },
  { title: 'Strategic Synergy', desc: 'We believe the whole is greater than the sum of its parts. We leverage cross industry insights to create a unique competitive advantage for our partners.' },
  { title: 'Relentless Innovation', desc: 'We reject the status quo. We are committed to constant iteration, ensuring our SaaS platforms remain the gold standard in a rapidly shifting global economy.' },
];

export const MILESTONES = [
  { yearStart: 2018, yearEnd: 2019, label: 'Foundation of \nCrediple', sub: 'COVID-19', direction: 'up' },
  { yearStart: 2020, yearEnd: 2022, label: 'Healthcare service and \nFinances and digital Brands', sub: 'RECORD ENTRY', direction: 'down' },
  { yearStart: 2022, yearEnd: 2024, label: 'Focused on Future \nready solution', sub: 'FUTURE READY TECHNOLOGIES', direction: 'up' },
  { yearStart: 2025, yearEnd: 2026, label: 'Service across \nIndia', sub: 'INDIA', direction: 'down' },
];

export const WHO_WE_SERVE = [
  { title: 'Digital Health Users', desc: 'Empowering Personal Wellness. Through the Brands, we provide individuals with a diverse centralised digital wall to manage and track personal health ready for streamlining.', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80' },
  { title: 'Businesses', desc: 'Catalysing Small Business Growth. We bring the gap to profess every business, whether it\'s a tech startup or a family business, to compete with the best.', image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80' },
  { title: 'Hospitals & Healthcare Providers', desc: 'Optimising Clinical Workflows. We equip the Doctor spaces with cutting-edge innovations to streamline routine and clinical operations and manage critical service.', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80' },
  { title: 'Integrated Financial Institutions', desc: 'Architecting the Future of Lending. Loan Konnekt allows financial institutions and lenders of all types to offer financial solutions to their clients.', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80' },
  { title: 'Forward Thinking Legal Professionals', desc: 'Precision-Driven Legal Tech. For the modern legal firm, we enhance to increase time, operational efficiency, and case management quality.', image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80' },
  { title: 'Enterprises & Data-Driven Organizations', desc: 'Driving Global Digital Transformation. We empower ambitious organisations to achieve growth at scale.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80' },
];

export const TESTIMONIALS = [
  { id: 1, name: 'Virema Mwotna', role: 'Head of Operations', company: 'Precision Meds', text: 'Crediple has completely overhauled how our clinical team functions. Loan Konnekt has consistently matched us with premium digital platforms that have elevated the way we operate.', avatar: 'https://i.pravatar.cc/80?img=1' },
  { id: 2, name: 'Arjun Sharma', role: 'CEO', company: 'LegalTech India', text: 'The Lawyix platform transformed our entire case management workflow. What used to take days now happens in hours. The team at Crediple truly understands enterprise needs.', avatar: 'https://i.pravatar.cc/80?img=3' },
  { id: 3, name: 'Priya Nair', role: 'CFO', company: 'FinNext Corp', text: 'Loan Konnekt gave us a seamless way to connect with lenders. The AI-powered matching is remarkably accurate and saves us countless hours in due diligence.', avatar: 'https://i.pravatar.cc/80?img=5' },
  { id: 4, name: 'David Chen', role: 'CTO', company: 'HealthPlus', text: 'My Doctor Capsule has set a new standard for clinical digital infrastructure. The integration capabilities are unmatched and the support team is exceptional.', avatar: 'https://i.pravatar.cc/80?img=7' },
  { id: 5, name: 'Meera Kapoor', role: 'Partner', company: 'Kapoor & Associates', text: 'We have been using Lawyix for 18 months and the productivity gains have been remarkable. Our clients notice the difference in turnaround time.', avatar: 'https://i.pravatar.cc/80?img=9' },
];

export const TEAM_MEMBERS = [
  { name: 'Nimesh Srivastava', role: 'Co-Founder & Co-CEO', avatar: 'https://i.pravatar.cc/120?img=11' },
  { name: 'Rahul Mehta', role: 'Co-Founder & Co-CEO', avatar: 'https://i.pravatar.cc/120?img=13' },
  { name: 'Ananya Singh', role: 'Chief Technology Officer', avatar: 'https://i.pravatar.cc/120?img=15' },
];

export const COURSES = [
  { id: 1, title: 'Certified ScrumMaster (CSM)', duration: '16 Hrs', rating: 5, tag: 'Trending', icon: '🏅', info1: 'Short Info about the course - 1', info2: 'Short Info about the course - 2' },
  { id: 2, title: 'Leading SAF3 6.0 Certification', duration: '16 Hrs', rating: 5, tag: 'Trending', icon: '📋', info1: 'Short Info about the course - 1', info2: 'Short Info about the course - 2' },
  { id: 3, title: 'PMP Certification', duration: '16 Hrs', rating: 5, tag: 'Popular', icon: '🎯', info1: 'Short Info about the course - 1', info2: 'Short Info about the course - 2' },
  { id: 4, title: 'AWS Solutions Architect', duration: '24 Hrs', rating: 5, tag: 'New', icon: '☁️', info1: 'Short Info about the course - 1', info2: 'Short Info about the course - 2' },
];

export const INTERNSHIP_FEATURES = [
  { icon: '🎓', title: 'Live and Self Paced Learning', items: ['Expert Led Trainings', 'Professional Mentoring', 'Query Handling'] },
  { icon: '🏅', title: 'Internship Certificate', items: ['Training & Internship Certificate', 'Performance Assessment Certificate', 'Experience Certificate'] },
  { icon: '🔧', title: 'Technical Support', items: ['24/7 Query Assistance', 'Project Support'] },
  { icon: '💼', title: 'Live Projects', items: ['Client Based Projects', 'Assignments & Assessments'] },
  { icon: '♾️', title: 'Lifetime Access', items: ['Lifetime Course Access'] },
  { icon: '⏱️', title: 'Variable Program Duration', items: ['0-9 Month Internship Program'] },
  { icon: '📅', title: 'Program Details', items: ['Part 1: 3 Months Lifecycle Training on latest technologies', 'Part 2: 3 Months Advanced Training on Live Projects', 'Part 3: 3 Months Methodology and Process Training'] },
];

export const PROCESS_OUTCOMES = [
  'Lifecycle Training on Latest Technologies',
  'Complete Internship Program',
  'Lifetime Portal Access',
  'Live Projects',
  'Internship Certificate',
  '100% Placement',
  'Managed Services',
  'Soft Skills & Interpersonal Skills Training',
  'Interview Preparation (Mock Interviews)',
];

export const FOOTER_PORTFOLIO = ['My Doctor Capsule', 'Loan Konnekt', 'Lawrix', 'Inl'];
export const FOOTER_COMPANY = ['Legal', 'Strategic Partnerships'];