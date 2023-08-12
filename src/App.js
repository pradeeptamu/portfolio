import React, { useEffect } from "react";
import "./App.css";
import suva from "./images/suvalaxmi.png";
import msn from "./images/messanger.png";
import garjoo from "./images/garjoo.png";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        console.log(entry);
        if (entry.intersectionRatio > 0) {
          document
            .querySelector(`nav li a[href="#${id}"]`)
            .parentElement.classList.add("active");
        } else {
          document
            .querySelector(`nav li a[href="#${id}"]`)
            .parentElement.classList.remove("active");
        }
      });
    });

    // Track all sections that have an `id` applied
    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });
  }, []);

  return (
    <main>
      {/* intro section  */}
      <div className="title-section">
        <div className="intro-section">
          <h1>Pradeep Gurung</h1>
          <h3>Frontend Developer</h3>
          <span>"Crafting Digital Experiences </span>
          <span>Through Code and Creativity"</span>
        </div>
        <nav className="section-nav">
          <ol>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#education">Education & Certification</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#project">Projects</a>
            </li>
            {/* ... (other navigation items) */}
          </ol>
        </nav>
        <div className="contact-section">
          <i classNAme="fa-brands fa-square-gitlab"></i>
          <i classNAme="fa-brands fa-linkedin"></i>
          <i classNAme="fa-brands fa-github"></i>
        </div>
      </div>

      {/* content section */}
      <div className="contents-section">
        <section id="about">
          <h1>ABOUT</h1>
          <p>
            A dedicated web developer with over 2 years of experience in
            developing dynamic web applications specializing in Laravel, Vue.js,
            Nuxt.js and React. A strong communicator with the ability to convey
            ideas clearly with an emphasis on client satisfaction and delivering
            project related work in challenging environment via strong technical
            attitude and collaboration.
          </p>
          <p>
            I leverage strong skills in problem identification, implementation
            of effective solutions in time-driven contexts with a good
            professional conduct at all times. I would welcome the opportunity
            to build on this foundation in an inspiring, challenging, and open
            team-based environment.
          </p>
        </section>
        <section id="education">
          <h1>EDUCATION AND CERTIFICATION</h1>
          <p>
            <strong>Bachelor’s (2018):</strong>{" "}
            <i>
              Bachelor of Information Management | Tribhuvan University, Nepal
            </i>
          </p>
          <p>
            Master’s (2021):
            <i>
              {" "}
              MSc Computing and Technology with Advanced Practice | Northumbria
              University London Campus, United Kingdom
            </i>
          </p>
          <p>
            Certification (2023):{" "}
            <i>
              {" "}
              Meta Front-End Developer Professional Certificate | Coursera{" "}
            </i>
          </p>
        </section>
        <section id="experience">
          <h1>EXPERIENCE</h1>
          <div className="experience">
            <div className="timeline">2019-2020</div>
            <div className="contents">
              <p className="company-title">YASHRI SOFT PVT. LTD</p>
              <p>FullStack Developer</p>
              <p>
                Adeptly overseeing the maintenance and optimization of existing
                client websites, proactively diagnosing and resolving
                performance issues. Creating robust REST APIs capable of
                handling diverse requests, including CRUD operations, intricate
                filtering, and seamless data retrievals. Beyond individual
                tasks, I've had the privilege of guiding and mentoring interns,
                fostering their growth and technical advancement.
              </p>
              <div className="skills">
                <span>Laravel</span>
                <span>Vue.js</span>
                <span>Nuxt.js</span>
                <span>sass</span>
                <span>bootstrap</span>
                <span>javascript</span>
                <span>Git</span>
                <span>MySQL</span>
              </div>
            </div>
          </div>
          <div className="experience">
            <div className="timeline">2018-2019</div>
            <div className="contents">
              <p className="company-title">IT GLANCE PVT.LTD.</p>
              <p>Intern</p>
              <p>
                Primarily tasked with creating code segments for the frontend of
                websites and executing CRUD operations. Providing assistance in
                generating reports and preparing documentation. Actively
                expanding skill sets for personal development. Conducting
                website audits and promptly reporting performance concerns to
                senior developers. Collaborating closely with SEO developers to
                enhance the search engine performance of websites.
              </p>
              <div className="skills">
                <span>Laravel</span>
                <span>html</span>
                <span>scss</span>
                <span>bootstrap</span>
                <span>javascript</span>
                <span>WordPress</span>
                <span>Git</span>
                <span>MySQL</span>
              </div>
            </div>
          </div>
        </section>
        <section id="project">
          <h1>PROJECTS</h1>
          <div className="project-section">
            <div className="image">
              <img src={garjoo} alt="garjoo" />
            </div>
            <div className="contents">
              <p className="company-title">GARJOO NEPAL</p>
              <div className="description">
                Developed Laravel REST APIs and created reusable components in
                Nuxt.js. Worked in filter section of each attribute. Products
                and advertisement CRUD operation. Worked with designers for
                frontend development. Laravel JWT authentication and Social
                Logins. Managed hosting and server (cPanel)
              </div>
              <div className="skills">
                <span>Laravel</span>
                <span>Nuxt.js</span>
                <span>bootstrap</span>
              </div>
            </div>
          </div>

          <div className="project-section">
            <div className="image">
              <img src={suva} alt="suva" />
            </div>
            <div className="contents">
              <p className="company-title">SUVLAXMI REALESTATE</p>
              <div className="description">
                Developed Laravel REST APIs and created reusable components in
                Nuxt.js. Worked in filter section of each attribute. Products
                and advertisement CRUD operation. Worked with designers for
                frontend development. Laravel JWT authentication and Social
                Logins. Managed hosting and server (cPanel)
              </div>
              <div className="skills">
                <span>Laravel</span>
                <span>Vue.js</span>
                <span>bootstrap</span>
              </div>
            </div>
          </div>

          <div className="project-section">
            <div className="image">
              <img src={msn} alt="messanger" />
            </div>
            <div className="contents">
              <p className="company-title">MESSANGER TOURS & TRAVELS</p>
              <div className="description">
                Developed Laravel REST APIs and created reusable components in
                Nuxt.js. Worked in filter section of each attribute. Products
                and advertisement CRUD operation. Worked with designers for
                frontend development. Laravel JWT authentication and Social
                Logins. Managed hosting and server (cPanel)
              </div>
              <div className="skills">
                <span>Laravel</span>
                <span>bootstrap</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
