import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend',
            icon: '🎨',
            skills: [
                { name: 'React', level: 90 },
                { name: 'JavaScript', level: 95 },

                { name: 'HTML/CSS', level: 95 },
                { name: ' CSS', level: 90 }
            ]
        },
        {
            title: 'Backend',
            icon: '⚙️',
            skills: [
                { name: 'Node.js', level: 85 },
                { name: 'Express', level: 80 },
                { name: 'Python', level: 75 },
                { name: 'MongoDB', level: 80 },
                { name: 'PostgreSQL', level: 75 }
            ]
        },
        {
            title: 'Tools & Others',
            icon: '🛠️',
            skills: [
                { name: 'Git', level: 90 },


                { name: 'REST APIs', level: 90 }
            ]
        }
    ];

    return (
        <section id="skills" className="skills section">
            <div className="container">
                <div className="section-header">
                    <h2 className="animate-fadeInUp">
                        My <span className="gradient-text">Skills</span>
                    </h2>
                    <p className="section-subtitle animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                        Technologies and tools I work with
                    </p>
                </div>

                <div className="skills-grid">
                    {skillCategories.map((category, categoryIndex) => (
                        <div
                            key={categoryIndex}
                            className="skill-category glass-card animate-fadeInUp"
                            style={{ animationDelay: `${categoryIndex * 0.2}s` }}
                        >
                            <div className="category-header">
                                <span className="category-icon">{category.icon}</span>
                                <h3>{category.title}</h3>
                            </div>
                            <div className="skills-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="skill-item">
                                        <div className="skill-info">
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-percentage">{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar">
                                            <div
                                                className="skill-progress"
                                                style={{
                                                    width: `${skill.level}%`,
                                                    animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
