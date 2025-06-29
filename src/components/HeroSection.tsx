import { ChevronDown } from "lucide-react";

export const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20" />

      {/* Floating elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-float" />
        <div
          className="absolute top-40 right-32 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-32 left-32 w-40 h-40 bg-blue-500/10 rounded-full blur-xl animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="container mx-auto px-6 h-screen flex items-center justify-center relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Image Placeholder */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 glass rounded-full flex items-center justify-center border-4 border-purple-500/30 animate-pulse-soft">
                <div className="w-40 h-40 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                  <img
                    src="/public/selfie.jpg"
                    alt=""
                    className="w-full h-full object-cover rounded-full shadow-lg animate-fade-in"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full blur-md opacity-50 animate-pulse" />
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-6xl lg:text-8xl font-bold mb-6 animate-slide-up">
            <span className="gradient-text">RS Krishna</span>
          </h1>

          <p
            className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            3rd year B.Tech CSE student at{" "}
            <span className="gradient-text font-semibold">
              Chandigarh University
            </span>{" "}
            | Aspiring{" "}
            <span className="gradient-text font-semibold">
              Fullstack Engineer
            </span>
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="glass px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 cursor-hover bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border-purple-500/30"
            >
              <span className="gradient-text font-semibold">Get In Touch</span>
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="glass px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 cursor-hover"
            >
              View My Work
            </button>
          </div>

          {/* Scroll indicator */}
          <button
            onClick={scrollToAbout}
            className="animate-bounce cursor-hover"
          >
            <ChevronDown className="w-8 h-8 text-muted-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};
