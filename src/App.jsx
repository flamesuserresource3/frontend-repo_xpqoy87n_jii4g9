import Navbar from './components/Navbar';
import LegoBackground from './components/LegoBackground';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';

function App() {
  return (
    <div className="relative min-h-screen text-zinc-900 dark:text-zinc-50">
      <LegoBackground />
      <Navbar />

      {/* Hero */}
      <section className="pt-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 items-center gap-10 py-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 backdrop-blur text-xs mb-4">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span>Building with bricks, bots, and curiosity</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black leading-tight">
                Your Name
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500">Personal Lego-Themed Website</span>
              </h1>
              <p className="mt-5 text-zinc-700 dark:text-zinc-300 max-w-prose">
                Welcome! This single-page site showcases my background, projects, research, and robotics work — all wrapped in a playful Lego vibe.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#projects" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-red-500 text-white font-semibold shadow hover:bg-red-600 transition-colors">View Projects</a>
                <a href="#about" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/60 backdrop-blur">About Me</a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/50 backdrop-blur p-6 grid place-items-center">
                <div className="grid grid-cols-6 grid-rows-6 gap-2 w-full h-full">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <div
                      key={i}
                      className="rounded-sm border border-zinc-200 dark:border-zinc-800 shadow-inner"
                      style={{ backgroundColor: ['#ef4444','#f59e0b','#22c55e','#3b82f6'][i % 4] }}
                    />
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 w-16 h-16 rounded-md bg-yellow-400 border border-yellow-500 shadow-inner" />
            </div>
          </div>
        </div>
      </section>

      <Section id="about" emoji="👋" title="About Me">
        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
          I'm a maker at heart who loves turning ideas into tangible things — whether that's a software prototype, a robot, or a meticulously engineered Lego build. I enjoy blending aesthetics with engineering, and this site is a snapshot of that mindset.
        </p>
      </Section>

      <Section id="projects" emoji="🧱" title="Projects">
        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard
            title="Brick Builder"
            description="A web tool to design Lego-like mosaics from images with adjustable palettes and stud sizes."
            tags={["React", "Canvas", "Image Processing"]}
            color="red"
          />
          <ProjectCard
            title="Path Planner"
            description="Interactive visualizer for A* and RRT algorithms navigating around obstacles like a robot on a playmat."
            tags={["Algorithms", "Visualization", "UX"]}
            color="blue"
          />
          <ProjectCard
            title="StudIO"
            description="Generative art experiments that arrange colorful studs into patterns with sound-reactive motion."
            tags={["Creative Coding", "Audio", "Framer Motion"]}
            color="green"
          />
          <ProjectCard
            title="BrickBot"
            description="A small tracked robot controlled from the browser, built with off‑the‑shelf parts and custom prints."
            tags={["Robotics", "WebSockets", "3D Printing"]}
            color="yellow"
          />
        </div>
      </Section>

      <Section id="research" emoji="🔬" title="Research">
        <div className="grid gap-4">
          <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-5 bg-white/70 dark:bg-zinc-900/60 backdrop-blur">
            <h3 className="font-semibold">Human‑Robot Collaboration with Visual Cues</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">Exploring how color, motion, and rhythm improve shared autonomy. Includes user studies and prototype implementations.</p>
          </div>
          <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-5 bg-white/70 dark:bg-zinc-900/60 backdrop-blur">
            <h3 className="font-semibold">Modular Construction for Rapid Prototyping</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">Evaluating Lego-like connectors as a medium for mechanical design iteration and education.</p>
          </div>
        </div>
      </Section>

      <Section id="robotics" emoji="🤖" title="Robotics">
        <div className="grid md:grid-cols-3 gap-6">
          {["Locomotion", "Manipulation", "Perception"].map((cat, idx) => (
            <div key={cat} className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-5 bg-white/70 dark:bg-zinc-900/60 backdrop-blur">
              <div className="flex items-center gap-2 mb-3">
                <div className={`w-4 h-4 rounded-sm ${['bg-red-500','bg-yellow-400','bg-blue-500'][idx]} border ${['border-red-600','border-yellow-500','border-blue-600'][idx]} shadow-inner`} />
                <h4 className="font-semibold">{cat}</h4>
              </div>
              <ul className="text-sm text-zinc-600 dark:text-zinc-400 list-disc pl-4 space-y-1">
                <li>Controllers and motion planning</li>
                <li>Hardware bring‑up and simulation</li>
                <li>Telemetry dashboards</li>
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <footer className="py-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">© {new Date().getFullYear()} Your Name — Built with love and lots of bricks.</p>
            <div className="flex gap-2">
              {["#ef4444", "#f59e0b", "#22c55e", "#3b82f6"].map((c, i) => (
                <div key={i} className="w-4 h-4 rounded-sm border shadow-inner" style={{ backgroundColor: c }} />
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
