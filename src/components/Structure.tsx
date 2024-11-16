import CursorFollower from "./CursorFollower";
import Footer from "./Footer";
import Header from "./Header";

const Structure = ({ children }: any) => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="relative overflow-hidden w-screen h-max ">
      <div>
        <CursorFollower />
      </div>
      <div className="fixed top-0 left-0 z-50 sm:bg-transparent bg-black border-b border-gray-700 sm:border-b-0">
        <Header />
      </div>
      <div className="pt-[calc(10vh)] sm:pt-0">{children}</div>
      <div>
        <Footer />
      </div>
      <div className="to-top">
        <button onClick={scrollToTop}>
          <p>Back to top</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Structure;
