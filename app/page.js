// app/page.js (or app/page.tsx)
import Navbar from '../components/Navbar';
import Testimonial from '../components/Testimonial';
import Carousel from "../components/Carousel";
import AboutUs from "../components/AboutUs";
import FeaturedProducts from "../components/FeauturedProducts";
import Services from "../components/Services";

// Exporting the page component only
export default function Home() {
  // Declare your reviewsData inside the component
  const reviewsData = [
    {
      id: 1,
      user: "Alex K.",
      content: '"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”',
      rating: 5,
      date: "August 14, 2023",
    },
    {
      id: 2,
      user: "Sarah M.",
      content: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`,
      rating: 5,
      date: "August 15, 2023",
    },
    {
      id: 3,
      user: "Ethan R.",
      content: `"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."`,
      rating: 5,
      date: "August 16, 2023",
    },
    {
      id: 4,
      user: "Olivia P.",
      content: `"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."`,
      rating: 5,
      date: "August 17, 2023",
    },
    {
      id: 5,
      user: "Liam K.",
      content: `"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."`,
      rating: 5,
      date: "August 18, 2023",
    },
    {
      id: 6,
      user: "Samantha D.",
      content: `"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."`,
      rating: 5,
      date: "August 19, 2023",
    },
  ];

  return (
    <div>
      <Navbar />
      <Carousel />
      <AboutUs />
      <FeaturedProducts />
      <Services />
      <Testimonial data={reviewsData} /> {/* Pass reviewsData as a prop */}
    </div>
  );
}
