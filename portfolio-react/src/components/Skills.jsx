const skills = [
  { icon: 'H', name: 'HTML5', desc: 'Semantic markup' },
  { icon: 'C', name: 'CSS3', desc: 'Responsive design' },
  { icon: 'JS', name: 'JavaScript', desc: 'ES6+ / DOM' },
  { icon: 'Re', name: 'React', desc: 'Components / Hooks' },
  { icon: 'No', name: 'Node.js', desc: 'REST APIs' },
  { icon: 'Py', name: 'Python', desc: 'Scripting / ML' },
  { icon: 'Gi', name: 'Git', desc: 'Version control' },
  { icon: 'DB', name: 'Databases', desc: 'SQL / NoSQL' },
];

function Skills() {
  return (
    <section id="skills">
      <h2 className="section-title">My <span>Skills</span></h2>
      <p className="section-subtitle">Technologies and tools I work with</p>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <div className="skill-icon">{skill.icon}</div>
            <h4>{skill.name}</h4>
            <p>{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
