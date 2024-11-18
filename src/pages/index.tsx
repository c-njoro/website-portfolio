import About from "@/components/About";
import Discover from "@/components/Discover";
import Ideas from "@/components/Ideas";
import Landing from "@/components/Landing";
import Works from "@/components/Works";

const Home = () => {
  return (
    <div className="w-screen h-max min-h-[100(vh)] flex flex-col justify-start items-start">
      <div>
        <Landing />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Ideas />
      </div>
      <div>
        <Discover />
      </div>
      <div id="works">
        <Works />
      </div>
    </div>
  );
};

export default Home;
