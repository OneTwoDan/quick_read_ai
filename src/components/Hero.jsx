import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="quick_read_logo" className="w-56 object-contain" />

        <button
          type="button"
          onClick={() =>
            window.open("https://www.linkedin.com/in/daniel-londono-agudelo/")
          }
          className="black_btn"
        >
          LinkedIn
        </button>
      </nav>

      <h1 className="head_text">
        Transform articles effortlessly with <br className="max-md:hidden" />{" "}
        <span className="blue_gradient">QuickRead AI</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with OpenAI GPT-4. Transform lengthy articles
        using this open-source article summarizer and receive clear, concise
        summaries.
      </h2>
    </header>
  );
};

export default Hero;
