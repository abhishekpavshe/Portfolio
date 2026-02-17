import { useEffect, useState } from "react";



function Navbar() {
  const [dark, setDark] = useState(
    localStorage.theme === "dark"
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [dark]);

  return (
    <div className="sticky top-0 bg-paper dark:bg-darkPaper border-b border-line dark:border-darkLine z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        <a href="#home" className="font-semibold text-lg">
          AP
        </a>

        <div className="hidden md:flex gap-6 text-sm text-sub dark:text-darkSub">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setDark(!dark)}
            className="border border-line dark:border-darkLine px-3 py-1 rounded-lg text-sm"
          >
            {dark ? "☀️ Light" : "🌙 Dark"}
          </button>

          <a
            href="/resume.pdf"
            className="border border-line dark:border-darkLine px-3 py-1 rounded-lg text-sm"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}


function Section({ id, title, children }) {
  return (
    <section id={id} className="py-20 border-t border-line scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-8">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section id="home" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-sub text-sm">Hi, I'm</p>
        <h1 className="text-5xl font-semibold mt-2">
          Abhishek Pavshe
        </h1>
        <p className="text-lg text-sub mt-4 max-w-2xl">
          Full-Stack Cloud & Automation Engineer building scalable data pipelines,
          modern web interfaces, and intelligent cloud-based systems.
        </p>

        <div className="mt-6 flex gap-4">
          <a
            href="#projects"
            className="bg-ink text-paper px-4 py-2 rounded-lg text-sm hover:opacity-90"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            className="border border-line px-4 py-2 rounded-lg text-sm hover:bg-paper"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <Hero />

      <Section id="about" title="About">
        <p className="text-sub max-w-3xl">
          MS Computer Science graduate with hands-on experience in cloud infrastructure,
          ETL pipeline development, REST API systems, and building automation platforms.
          I specialize in connecting data systems with reliable backend services and
          clean, modern user interfaces.
        </p>
      </Section>

      <Section id="skills" title="Skills">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-line p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Frontend</h3>
            <p className="text-sub text-sm">
              React, Angular, Responsive UI, Component Architecture
            </p>
          </div>

          <div className="bg-white border border-line p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Backend & Cloud</h3>
            <p className="text-sub text-sm">
              Python, Django, Spring Boot, REST APIs, Azure, AWS
            </p>
          </div>

          <div className="bg-white border border-line p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Data Engineering</h3>
            <p className="text-sub text-sm">
              ETL Pipelines, PostgreSQL, Oracle, SQL, Data Quality
            </p>
          </div>

          <div className="bg-white border border-line p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Machine Learning</h3>
            <p className="text-sub text-sm">
              TensorFlow, Scikit-learn, NLP, LLMs
            </p>
          </div>
        </div>
      </Section>

      <Section id="experience" title="Experience">
        <div className="space-y-6">
          <div className="bg-white border border-line p-6 rounded-xl">
            <h3 className="font-semibold">
              Building Automation Systems Engineer – Florida State University
            </h3>
            <p className="text-sm text-sub mt-2">
              Designed ETL pipelines, deployed APIs, maintained infrastructure,
              and built monitoring dashboards supporting campus-wide BAS systems.
            </p>
          </div>

          <div className="bg-white border border-line p-6 rounded-xl">
            <h3 className="font-semibold">
              Data Engineer Intern – Span Labs
            </h3>
            <p className="text-sm text-sub mt-2">
              Automated Azure-based ETL workflows and built backend services
              supporting analytics and system integration.
            </p>
          </div>
        </div>
      </Section>

      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-line p-6 rounded-xl">
            <h3 className="font-semibold">Image Classifier</h3>
            <p className="text-sm text-sub mt-2">
              Deep learning model built with TensorFlow achieving ~78% accuracy.
            </p>
          </div>

          <div className="bg-white border border-line p-6 rounded-xl">
            <h3 className="font-semibold">Cancer Prediction Algorithm</h3>
            <p className="text-sm text-sub mt-2">
              Built a predictive ML model to estimate cancer risk probabilities.
            </p>
          </div>
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <p className="text-sub">
          Email: abhishekpavshe27@gmail.com
        </p>
      </Section>
    </div>
  );
}

export default App;
