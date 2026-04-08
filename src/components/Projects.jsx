import { useState } from 'react';
import './Projects.css';

const Projects = () => {
    const [filter, setFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            category: 'web',
            description: 'A full-stack e-commerce platform with payment integration, user authentication, and admin dashboard.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            image: '🛒',
            link: '#',
            github: '#'
        },
        {
            id: 2,
            title: 'Task Management App',
            category: 'web',
            description: 'Collaborative task management application with real-time updates and team collaboration features.',
            technologies: ['React', 'Firebase', 'Tailwind CSS'],
            image: '✅',
            link: '#',
            github: '#'
        },
        {
            id: 3,
            title: 'Weather Dashboard',
            category: 'web',
            description: 'Beautiful weather dashboard with location-based forecasts and interactive maps.',
            technologies: ['React', 'OpenWeather API', 'Chart.js'],
            image: '🌤️',
            link: '#',
            github: '#'
        },
        {
            id: 4,
            title: 'Portfolio Website',
            category: 'design',
            description: 'Modern portfolio website with smooth animations and responsive design.',
            technologies: ['React', 'CSS3', 'Framer Motion'],
            image: '💼',
            link: '#',
            github: '#'
        },
        {
            id: 5,
            title: 'Social Media Dashboard',
            category: 'web',
            description: 'Analytics dashboard for social media metrics with beautiful data visualizations.',
            technologies: ['React', 'D3.js', 'Express'],
            image: '📊',
            link: '#',
            github: '#'
        },
        {
            id: 6,
            title: 'Chat Application',
            category: 'web',
            description: 'Real-time chat application with group chats, file sharing, and emoji support.',
            technologies: ['React', 'Socket.io', 'Node.js'],
            image: '💬',
            link: '#',
            github: '#'
        }
    ];

    const categories = [
        { id: 'all', label: 'All Projects' },
        { id: 'web', label: 'Web Apps' },
        { id: 'design', label: 'Design' }
    ];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <section id="projects" className="projects section">
            <div className="container">
                <div className="section-header">
                    <h2 className="animate-fadeInUp">
                        My <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="section-subtitle animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                        Some of my recent work and side projects
                    </p>
                </div>

                <div className="project-filters">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            className={`filter-btn ${filter === category.id ? 'active' : ''}`}
                            onClick={() => setFilter(category.id)}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                <div className="projects-grid">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className="project-card glass-card animate-fadeInUp"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="project-image">
                                <div className="project-emoji">{project.image}</div>
                                <div className="project-overlay">
                                    <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                    <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tech">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
