
const HeroSection = () => {
  return (
    <section className="hero">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Hi, I'm <span>Your Name</span></h1>
        <h2>Frontend Developer / Designer</h2>
        <p>I build exceptional digital experiences</p>
        <button className="cta-button">View My Work</button>
      </motion.div>
    </section>
  );
};

export default HeroSection;