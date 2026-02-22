function About() {
  return (
    <section id="about">
      <h2 className="section-title">About <span>Me</span></h2>
      <p className="section-subtitle">Get to know the person behind the code</p>
      <div className="about-grid">
        <div className="about-image">&#128187;</div>
        <div className="about-text">
          <h3>Full-Stack Developer &amp; UI Enthusiast</h3>
          <p>
            I have 5+ years of experience building web applications with modern
            technologies. I love clean code, thoughtful design, and solving
            complex problems.
          </p>
          <p>
            When I&apos;m not coding, you&apos;ll find me exploring new tech,
            contributing to open-source, or hiking in the mountains.
          </p>
          <ul className="info-list">
            <li><strong>Name:</strong> kousikan</li>
            <li><strong>Location:</strong> San Francisco, CA</li>
            <li><strong>Email:</strong> kousikan@example.com</li>
            <li><strong>Availability:</strong> Open to work</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
