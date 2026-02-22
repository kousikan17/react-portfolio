const experiences = [
  {
    role: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    date: 'Jan 2024 \u2013 Present',
    desc: 'Leading the frontend team, building scalable component libraries, and improving performance across the product suite.',
  },
  {
    role: 'Full-Stack Developer',
    company: 'WebStudio',
    date: 'Mar 2022 \u2013 Dec 2023',
    desc: 'Developed end-to-end web applications for clients across fintech, healthcare, and e-commerce industries.',
  },
  {
    role: 'Junior Developer',
    company: 'StartupXYZ',
    date: 'Jun 2020 \u2013 Feb 2022',
    desc: 'Built responsive UIs, integrated APIs, and collaborated in an agile team to ship features weekly.',
  },
];

function Experience() {
  return (
    <section id="experience">
      <h2 className="section-title">Work <span>Experience</span></h2>
      <p className="section-subtitle">My professional journey so far</p>
      <div className="timeline">
        {experiences.map((exp) => (
          <div className="timeline-item" key={exp.company}>
            <h3>{exp.role}</h3>
            <span className="company">{exp.company}</span>
            <div className="date">{exp.date}</div>
            <p>{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
