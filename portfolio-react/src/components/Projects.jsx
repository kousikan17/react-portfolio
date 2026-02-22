const projects = [
  {
    num: '01',
    title: 'E-Commerce Platform',
    desc: 'A full-featured online store with cart, checkout, and payment integration. Built for performance and accessibility.',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    num: '02',
    title: 'Task Management App',
    desc: 'A collaborative project management tool with real-time updates, drag-and-drop boards, and team features.',
    tags: ['TypeScript', 'Next.js', 'PostgreSQL'],
  },
  {
    num: '03',
    title: 'Weather Dashboard',
    desc: 'A beautiful weather app with animated visuals, 7-day forecast, and location-based auto-detection.',
    tags: ['JavaScript', 'API', 'CSS'],
  },
];

function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">My <span>Projects</span></h2>
      <p className="section-subtitle">A selection of things I&apos;ve built</p>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.num}>
            <div className="project-thumb">{project.num}</div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="tags">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
