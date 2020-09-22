const Hero = ({ children = null } = {}) => (
  <div class="absolute top-0 left-0 right-0 bottom-0 bg-hero bg-cover bg-center bg-no-repeat">
    {children}
  </div>
);

export default Hero;
