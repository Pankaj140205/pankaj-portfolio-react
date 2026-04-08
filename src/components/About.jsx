import './About.css';

const About = () => {
    return (
        <section id="about" className="about section">
            <div className="container">
                <div className="section-header">
                    <h2 className="animate-fadeInUp">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <p className="section-subtitle animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                        Get to know more about who I am and what I do
                    </p>
                </div>

                <div className="about-content">
                    <div className="about-image animate-slideInLeft">
                        <div className="image-wrapper glass-card">
                            <div className="profile-placeholder">
                                <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="100" cy="100" r="100" fill="url(#gradient1)" />
                                    <circle cx="100" cy="80" r="30" fill="white" opacity="0.3" />
                                    <path d="M60 140 Q100 120 140 140 L140 200 L60 200 Z" fill="white" opacity="0.3" />
                                    <defs>
                                        <linearGradient id="gradient1" x1="0" y1="0" x2="200" y2="200">
                                            <stop offset="0%" stopColor="#6366f1" />
                                            <stop offset="50%" stopColor="#8b5cf6" />
                                            <stop offset="100%" stopColor="#ec4899" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="about-text animate-slideInRight">
                        <div className="about-description">
                            <p>
                                I'm a passionate <strong>Full Stack Developer</strong> with a keen eye for design
                                and a love for creating seamless user experiences. With expertise in modern web
                                technologies, I bring ideas to life through clean, efficient code.
                            </p>
                            <p>
                                My journey in web development started with a curiosity about how things work on
                                the internet, and it has evolved into a career where I get to solve complex
                                problems and build innovative solutions every day.
                            </p>
                            <p>
                                When I'm not coding, you can find me exploring new technologies, contributing to
                                open-source projects, or sharing my knowledge with the developer community.
                            </p>
                        </div>

                        <div className="stats-grid">
                            <div className="stat-card glass-card">
                                <div className="stat-number gradient-text">1+</div>
                                <div className="stat-label">Years Experience</div>
                            </div>
                            <div className="stat-card glass-card">
                                <div className="stat-number gradient-text">10+</div>
                                <div className="stat-label">Projects Completed</div>
                            </div>
                            <div className="stat-card glass-card">
                                <div className="stat-number gradient-text">10+</div>
                                <div className="stat-label">Happy Clients</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
