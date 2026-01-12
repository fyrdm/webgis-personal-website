function About() {
  return (
    <div className="page">
      <h1>About Me</h1>
      <div className="about-content">
        <p>
          Hello! I'm Alex Developer, a software engineer with a passion for building beautiful and functional web applications.
          With a background in Geography and Computer Science, I specialize in bringing spatial data to life on the web.
        </p>

        <h3>Education</h3>
        <ul className="education-list">
          <li>
            <strong>B.S. in Computer Science</strong><br />
            University of Technology, 2016 - 2020
          </li>
          <li>
            <strong>Minor in Geographic Information Systems (GIS)</strong>
          </li>
        </ul>

        <h3>Interests</h3>
        <p>
          When I'm not coding, you can find me hiking local trails, photographing landscapes, or experimenting with new coffee brewing methods.
        </p>
      </div>
    </div>
  );
}

export default About;