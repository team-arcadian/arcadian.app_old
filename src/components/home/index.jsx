import Hero from "../hero";

const Home = () => (
  <Hero>
    <div class="w-full h-full flex flex-col">
      <div class="w-full h-1/2 flex flex-col items-start justify-start p-12">
        <div class="px-12 py-4 bg-black bg-opacity-50">
          <h1 class="font-title text-6xl text-white uppercase">
            We are Arcadian
          </h1>
        </div>
      </div>
      <div class="w-full h-1/2 flex items-end justify-end p-12">
        <a href="#" class="block px-6 py-2 mx-4 bg-black bg-opacity-50">
          <span className="font-title text-3xl text-white">About Us</span>
        </a>
        <a href="#" class="block px-6 py-2 mx-4 bg-black bg-opacity-50">
          <span className="font-title text-3xl text-white">Portfolio</span>
        </a>
        <a href="#" class="block px-6 py-2 mx-4 bg-black bg-opacity-50">
          <span className="font-title text-3xl text-white">Contact</span>
        </a>
      </div>
    </div>
  </Hero>
);

export default Home;
