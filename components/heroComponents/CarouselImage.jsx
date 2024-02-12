// path:components/heroComponents/CarouselImage.jsx

const CarouselImage = ({ imagePaths }) => (
  <div className="carouselImage relative"
    style={{ backgroundImage: `url(${imagePaths})` }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50" />
  </div>
);

export default CarouselImage;
