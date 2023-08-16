import React from "react";

// todo:
// -разобраться с автоскроллом

const Home = () => {
  class Image {
    constructor(path, id) {
      this.path = path;
      this.id = id;
    }
  }
  const [images, setImages] = React.useState([]);
  const [isScrolling, setIsScrolling] = React.useState(false);

  const carouselRef = React.useRef(null);
  const pathsToImages = ["images/home/carousel_image_1.png", "images/home/carousel_image_2.png"];

  // function autoScroll(scrollContainer) {
  // if (scrollContainer.scrollLeft % 480 === 0) {
  //   scrollContainer.append(firstItem);
  //   scrollContainer.scroll(scrollContainer.scrollLeft - 480, 0);
  //   firstItem = document.querySelector('.carousel-item:first-child');
  //   lastItem = document.querySelector('.carousel-item:last-child');
  // }

  //   const promise = new Promise ((res, rej) => {
  //     setTimeout(() => {
  //       const scrollAmount = 1;
  //       scrollContainer.scrollBy(scrollAmount, 0);
  //       return res();
  //     }, 20);
  //   });
  //   promise.then(() => {
  //     autoScroll();
  //   })
  // }

  React.useEffect(() => {
    setImages(
      pathsToImages.map((path, i) => {
        return new Image(path, i);
      })
    );
  }, []);

  return (
    <div className="h-full">
      <div className="carousel" ref={carouselRef}>
        {images.map((image) => {
          return (
            <div key={image.id} className="carousel-item">
              <img className="h-full" src={image.path} alt="Interior" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
