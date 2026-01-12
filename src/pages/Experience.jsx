function Experience() {
  return (
    <div className="page">
      <h1>My Experience</h1>

      <div className="experience-section">
        <h2>Professional History</h2>
        <div className="job">
          <h3>Senior Developer</h3>
          <h4>Tech Solutions Inc. | 2023 - Present</h4>
          <ul>
            <li>Leading the frontend team in migrating legacy apps to React.</li>
            <li>Implementing modern CI/CD pipelines and improving code quality.</li>
            <li>Mentoring junior developers.</li>
          </ul>
        </div>

        <div className="job">
          <h3>Web Developer</h3>
          <h4>Web Corp | 2020 - 2023</h4>
          <ul>
            <li>Developed responsive websites for various clients.</li>
            <li>Integrated third-party APIs and payment gateways.</li>
            <li>Optimized application performance and SEO.</li>
          </ul>
        </div>
      </div>

      <div className="skills-section">
        <h2>Skills</h2>
        <div className="skills-grid">
          <p>JavaScript (ES6+) • React • Node.js • Python • PostgreSQL/PostGIS • Leaflet/MapLibre • Git</p>
        </div>
      </div>
    </div>
  );
}

export default Experience;