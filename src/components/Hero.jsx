import { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (heroRef.current) {
            observer.observe(heroRef.current);
        }

        return () => {
            if (heroRef.current) {
                observer.unobserve(heroRef.current);
            }
        };
    }, []);

    return (
        <section id="home" className="hero section" ref={heroRef}>
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <div className="hero-greeting animate-fadeInUp">
                            <span className="wave">👋</span> Hello, I'm
                        </div>
                        <h1 className="hero-title animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                            <span className="gradient-text">Pankaj Ugale</span>
                        </h1>
                        <h2 className="hero-subtitle animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                            Full Stack Developer & Designer
                        </h2>
                        <p className="hero-description animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                            I craft beautiful, functional, and user-centric digital experiences.
                            Passionate about turning ideas into reality through clean code and elegant design.
                        </p>
                        <div className="hero-buttons animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
                            <a href="#projects" className="btn btn-primary">
                                View My Work
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.16669 10H15.8334M15.8334 10L10 4.16669M15.8334 10L10 15.8334" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                            <a href="#contact" className="btn btn-secondary">
                                Get In Touch
                            </a>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <div className="floating-card card-1 glass-card">
                            <div className="card-icon">💻</div>
                            <div className="card-text">Web Development</div>
                        </div>
                        <div className="floating-card card-2 glass-card">
                            <div className="card-icon">🎨</div>
                            <div className="card-text">UI/UX Design</div>
                        </div>
                        <div className="floating-card card-3 glass-card">
                            <div className="card-icon">⚡</div>
                            <div className="card-text">Front-end</div>
                        </div>
                        <div className="floating-card card-4 glass-card">
                            <div className="card-icon">👨‍💻</div>
                            <div className="card-text">Back-end</div>
                        </div>
                        <div className="floating-card card-5 glass-card">
                            <div className="card-icon">🤖</div>
                            <div className="card-text">Generative AI</div>
                        </div>
                        <div className="hero-circle circle-1"></div>
                        <div className="hero-circle circle-2"></div>
                        <div className="hero-circle circle-3"></div>
                        <div className="hero-circle circle-4"></div>
                        <div className="hero-circle circle-5"></div>

                    </div>
                </div>
            </div>
            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
