import React from 'react';
import { 
  Globe, 
  Smartphone, 
  Palette, 
  Megaphone, 
  Search, 
  Layers 
} from 'lucide-react';
import { Service, Project, BlogPost, Stat } from './types';

export const SERVICES: Service[] = [
  {
    id: 'web-dev',
    title: 'Website Development',
    description: 'We create high-performance, responsive websites tailored to your business needs, ensuring a seamless user experience across all devices.',
    icon: <Globe className="w-8 h-8" />
  },
  {
    id: 'app-dev',
    title: 'App Development',
    description: 'Transform your ideas into powerful mobile applications. We build intuitive iOS and Android apps that engage users and drive growth.',
    icon: <Smartphone className="w-8 h-8" />
  },
  {
    id: 'graphic-design',
    title: 'Graphic Designing',
    description: 'Our creative team brings your brand to life with stunning visuals, logos, and marketing materials that resonate with your audience.',
    icon: <Palette className="w-8 h-8" />
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Scale your business with data-driven marketing strategies, including social media management and conversion-focused campaigns.',
    icon: <Megaphone className="w-8 h-8" />
  },
  {
    id: 'seo',
    title: 'Search Engine Optimization',
    description: 'Improve your online visibility and drive organic traffic with our expert SEO services, helping you rank higher on search engines.',
    icon: <Search className="w-8 h-8" />
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'We focus on user-centric design principles to create interfaces that are not only beautiful but also functional and easy to navigate.',
    icon: <Layers className="w-8 h-8" />
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
    location: 'Ludhiana, India'
  },
  {
    id: '2',
    title: 'Fitness Tracker App',
    category: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1510511459019-5dee997ddfdf?auto=format&fit=crop&q=80&w=800',
    location: 'Remote'
  },
  {
    id: '3',
    title: 'Corporate Branding',
    category: 'Graphic Design',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800',
    location: 'Delhi, India'
  },
  {
    id: '4',
    title: 'Real Estate Portal',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
    location: 'Ludhiana, India'
  }
];

export const BLOGS: BlogPost[] = [
  {
    id: 'b1',
    title: 'The Future of Web Development in 2024',
    excerpt: 'Explore the latest trends and technologies shaping the future of the web industry.',
    date: 'Dec 15, 2023',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'b2',
    title: 'Why UI/UX Design is Critical for Success',
    excerpt: 'Understanding the impact of user experience on customer retention and brand loyalty.',
    date: 'Jan 10, 2024',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800'
  }
];

export const STATS: Stat[] = [
  { label: 'Project Completed', value: '250+' },
  { label: 'Happy Customers', value: '100+' },
  { label: 'Client Satisfaction', value: '99%' }
];