import "./index.css";

export function App() {
  return (
    <main className="page">
      <section className="card">
        <div className="nav">
          <span>ehudsn.sh</span>
          <div className="nav-links">
            <a
              className="nav-link"
              href="mailto:eddie@orchata.ai"
              aria-label="Email"
            >
              <span className="icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
                  <path d="m22 8-10 6L2 8" />
                </svg>
              </span>
            </a>
            <a
              className="nav-link"
              href="https://github.com/ehudsn"
              aria-label="GitHub"
            >
              <span className="icon" aria-hidden="true">
                <img
                  src="https://cdn.simpleicons.org/github/f2f2f2?viewbox=auto"
                  alt=""
                />
              </span>
            </a>
            <a
              className="nav-link"
              href="https://huggingface.co/eoai-dev"
              aria-label="Hugging Face"
            >
              <span className="icon" aria-hidden="true">
                <img
                  src="https://cdn.simpleicons.org/huggingface/f2f2f2?viewbox=auto"
                  alt=""
                />
              </span>
            </a>
            <a className="nav-link" href="https://x.com/ehudsn" aria-label="X">
              <span className="icon" aria-hidden="true">
                <img
                  src="https://cdn.simpleicons.org/x/f2f2f2?viewbox=auto"
                  alt=""
                />
              </span>
            </a>
          </div>
        </div>
        <p className="subtle">Hello, I'm Eddie</p>
        <p className="lead">
          I'm an autodidact who taught myself software engineering and machine
          learning. I love building on the web with TypeScript and I'm currently
          obsessed with Bun. I also build models, mostly with PyTorch.
        </p>
        <ul className="list">
          <li className="list-item">
            <span className="dot" aria-hidden="true"></span>
            Director of Emerging Technology at
            <a className="inline-link" href="https://winmill.com">
              Winmill Software
            </a>
          </li>
          <li className="list-item">
            <span className="dot" aria-hidden="true"></span>
            Founder and builder at
            <a className="inline-link" href="https://orchata.ai">
              Orchata Labs
            </a>
          </li>
        </ul>
        <p className="paragraph">
          LLMs show us what's possible, even if we're not at AGI yet. We're
          getting there faster than expected, and our relationship with
          technology is going to shift dramatically over the next five years.
        </p>
        <p className="paragraph">
          I've been married for 10 years and live in Monterrey, Mexico.
        </p>
        <p className="paragraph">
          I'm currently learning Rust, reinforcement learning algorithms,
          robotics, and world models.
        </p>
        <p className="paragraph">
          I once thought I'd be a musician and played (and still can play a bit
          of) jazz saxophone. I dropped out of college twice because I couldn't
          stay focused or in one place long enough to finish.
        </p>
        <p className="paragraph">
          My wife and I founded Divelement Web Services, which was acquired by
          Winmill Software in November 2025.
        </p>
        <p className="paragraph">
          Looking to connect with like-minded people who want to radically
          reinvent human-technology interaction for the betterment of mankind.
        </p>
      </section>
    </main>
  );
}

export default App;
