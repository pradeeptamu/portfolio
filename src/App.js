import React, { useEffect } from "react";
import "./App.css";
import suva from "./images/suvalaxmi.png";
import msn from "./images/messanger.png";
import garjoo from "./images/garjoo.png";
import trends from "./images/thenextrends.jpg";

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
              <a href="#about">About Me</a>
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
          <a href="https://gitlab.com/pradeep_tamu" target="_blank">
            <i class="fa-brands fa-square-gitlab"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/pradeep-gurung-142833184/"
            target="_blank"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/pradeeptamu" target="_blank">
            <i class="fa-brands fa-github"></i>
          </a>

          <a href="mailto:gurung.pradeep02@gmail.com" target="_blank">
            <i class="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>

      {/* content section */}
      <div className="contents-section">
        <section id="about">
          <h1>
            <span className="title-number">01.</span> ABOUT ME
          </h1>
          <p>
            A MSc Computing and Technology graduate with considerable experience
            in developing dynamic web applications specializing in Laravel,
            Vue.js, Nuxt.js and React.js. A strong communicator with the ability
            to convey ideas clearly with an emphasis on client satisfaction and
            delivering project related work in challenging environment via
            strong technical attitude and collaboration. I leverage strong
            skills in problem identification, implementation of effective
            solutions in time-driven contexts with a good professional conduct
            at all times. Would welcome the opportunity to build on this
            foundation in an inspiring, challenging, and open team-based
            environment.
          </p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <div className="skills contents">
            <span>Laravel</span>
            <span>Vue.js</span>
            <span>Nuxt.js</span>
            <span>React.js</span>
            <span>Sass</span>
            <span>HTML5</span>
            <span>Bootstrap</span>
            <span>Javascript</span>
            <span>Git</span>
            <span>MySQL</span>
          </div>
        </section>
        <section id="education">
          <h1>
            <span className="title-number">02.</span> EDUCATION AND
            CERTIFICATION
          </h1>
          <p>
            <span className="title-number">Bachelor’s (2018):</span>{" "}
            <i>
              Bachelor of Information Management | Tribhuvan University, Nepal
            </i>
          </p>
          <p>
            <span className="title-number">Master’s (2021):</span>
            <i>
              {" "}
              MSc Computing and Technology with Advanced Practice | Northumbria
              University London Campus, United Kingdom
            </i>
          </p>
          <p>
            <span className="title-number">Certification (2023):</span>{" "}
            <i>
              {" "}
              Meta Front-End Developer Professional Certificate | Coursera{" "}
            </i>
          </p>
        </section>
        <section id="experience">
          <h1>
            <span className="title-number">03.</span> WHERE I'VE WORKED
          </h1>
          <div className="experience">
            <div className="timeline">2019-2020</div>
            <div className="contents">
              <p className="company-title title-topic">YASHRI SOFT PVT. LTD</p>
              <p className="title-topic">FullStack Developer</p>
              <p>
                Adeptly oversaw the maintenance and optimization of existing
                client websites, proactively diagnosed and resolved performance
                issues. Created robust REST APIs capable of handling diverse
                requests, including CRUD operations, intricate filtering, and
                seamless data retrievals. Developed and styled interactive web
                apps. Engaged in collaborative efforts with designers and other
                developers to guarantee cohesive and user-centric experiences
                across web applications. Beyond individual tasks, I've had the
                privilege of guiding and mentoring interns.
              </p>
              <div className="skills">
                <span>Laravel</span>
                <span>Vue.js</span>
                <span>Nuxt.js</span>
                <span>Sass</span>
                <span>HTML5</span>
                <span>Bootstrap</span>
                <span>Javascript</span>
                <span>Git</span>
                <span>MySQL</span>
              </div>
            </div>
          </div>
          <div className="experience">
            <div className="timeline">2018-2019</div>
            <div className="contents">
              <p className="company-title title-topic">IT GLANCE PVT.LTD.</p>
              <p className="title-topic">Intern</p>
              <p>
                Primarily tasked with creating code segments for the frontend of
                websites and executing CRUD operations. Provided assistance in
                generating reports and preparing documentation. Conducted
                website audits and promptly reported general performance
                concerns to senior developers. Conducted quality assurance tests
                on diverse websites to ensure cross-browser compatibility and
                seamless mobile responsiveness. Collaborated closely with SEO
                team to enhance the search engine performance of websites.
              </p>
              <div className="skills">
                <span>PHP</span>
                <span>Laravel</span>
                <span>HTML5</span>
                <span>Scss</span>
                <span>Bootstrap</span>
                <span>Javascript</span>
                <span>WordPress</span>
                <span>Git</span>
                <span>MySQL</span>
              </div>
            </div>
          </div>
        </section>
        <section id="project">
          <h1>
            <span className="title-number">04.</span> SOME THINGS I'VE BUILT
          </h1>
          <a
            href="https://garjoonepal.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-section">
              <div className="image">
                <img src={garjoo} alt="garjoo" />
              </div>
              <div className="contents">
                <p className="company-title title-topic">GARJOO NEPAL</p>
                <p className="description">
                  Developed on Laravel REST APIs and reusable components in
                  Nuxt.js. Its a platforms for online advertising to promote
                  products or services connecting both buyers and sellers in one
                  single entity with an extensive range of listings spanning
                  electronics, fashion, and more.
                </p>
                <div className="skills">
                  <span>Laravel</span>
                  <span>Nuxt.js</span>
                  <span>Bootstrap</span>
                  <span>HTML5</span>
                  <span>SASS</span>
                </div>
              </div>
            </div>
          </a>

          <a
            href="https://suvalaxmi.pradeepgurung.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-section">
              <div className="image">
                <img src={suva} alt="suva" />
              </div>
              <div className="contents">
                <p className="company-title title-topic">SUVLAXMI REALESTATE</p>
                <p className="description">
                  Built on Laravel REST APIs and reusable components in Vue.js.
                  Its a real estate hub for proper seekers and sellers, with an
                  extensive array of property listings, spanning elegant homes
                  to commercial spaces.
                </p>
                <div className="skills">
                  <span>Laravel</span>
                  <span>Vue.js</span>
                  <span>Bootstrap</span>
                  <span>HTML5</span>
                  <span>SASS</span>
                </div>
              </div>
            </div>
          </a>
          <a
            href="https://gitlab.com/pradeep_tamu/thenextrends"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-section">
              <div className="image">
                <img src={trends} alt="messanger" />
              </div>
              <div className="contents">
                <p className="company-title title-topic">TheNextrends</p>
                <p className="description">
                  Developed on Laravel REST APIs and reusable components in
                  Vue.js. Its a e-commerce platform tailored for a diverse range
                  of clothing and accessories.
                </p>
                <div className="skills">
                  <span>Laravel</span>
                  <span>Vue.js</span>
                  <span>Bootstrap</span>
                  <span>HTML5</span>
                  <span>SASS</span>
                </div>
              </div>
            </div>
          </a>
          <a
            href="https://messanger.pradeepgurung.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-section">
              <div className="image">
                <img src={msn} alt="messanger" />
              </div>
              <div className="contents">
                <p className="company-title title-topic">
                  MESSANGER TOURS & TRAVELS
                </p>
                <p className="description">
                  Engineered using the Laravel framework. Its a tours and travel
                  compnay portfolio website, integrated with captivating
                  destinations and personalized itineraries into a user-friendly
                  platform.
                </p>
                <div className="skills">
                  <span>Laravel</span>
                  <span>Bootstrap</span>
                  <span>HTML5</span>
                  <span>SCSS</span>
                </div>
              </div>
            </div>
          </a>
        </section>
        <div className="copyright-section">
          <p>
            Designed and built by{" "}
            <span className="color-code">Pradeep Gurung </span>
            with <span className="color-code">React.js</span>
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
