import homeImage from '../assets/images/homeBg.png';

export const HomePageContent = () => {
  return (
    <div className="mb-[100px] flex flex-col items-center md:flex-row md:items-center justify-center">
      <div className="md:mr-8 text-start">
        <div className="text-[60px] font-bold mb-1  leading-none">The Era of</div>
        <div className="text-[60px] font-bold mb-1 ml-0 leading-none">Technology</div>
        <div className="text-[36px] text-gray mb-1 ml-1  leading-none">TCP Solutions</div>
        <div>
          <button className="mr- border rounded-3xl h-12 px-8 mt-4  bg-gray-50 shadow-inner text-lg">
            Get Started
          </button>
        </div>
      </div>

      <img
        src={homeImage}
        alt="Description"
        className="mt-4 max-w-full h-auto md:flex-shrink-0 "
      />
    </div>
  );
};
