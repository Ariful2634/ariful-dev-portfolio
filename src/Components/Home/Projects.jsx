
import 'aos/dist/aos.css';
import techPic from '../../images/tech-hub-ss.png'
import hotelPic from '../../images/hotel.png'
import brandshopPic from '../../images/brand.png'
import Project from './Project';


const Projects = () => {

    

    const items = [
        {
            title: "The Tech Hub",
            image: techPic,
            liveLink: "https://tech-hub-c2612.web.app/",
            repoLink: "https://github.com/Ariful2634/tech-hub-client",
            description:
                "It is a platform where users can discover and share the latest tech products. Users can submit new products, upvote or downvote existing products & post reviews for products.",
        },
        {
            title: "Book My Hotel",
            image: hotelPic,
            liveLink: "https://hotel-booking-management-928e5.web.app/",
            repoLink: "https://github.com/Ariful2634/hotel-booking-management-client",
            description:
                "A user-friendly hotel booking system that allows seamless reservations, providing a convenient platform to browse accommodations, select dates, and secure bookings with ease.",
        },
        {
            title: "Tech Shop",
            image: brandshopPic,
            liveLink: "https://tech-shop-5a579.web.app/",
            repoLink: "https://github.com/Ariful2634/brand-shop-client",
            description:
                "This is a tech gadget related website where user can see the brandwise product.User can see the product details. User can add a product to cart and can see the add product to my cart.",
        },
       
    ];

    return (
        
        <div id="projects" >
          
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-12 gap-4">
                {items.map((project, idx) => (
                    <Project key={idx} project={project}></Project>
                ))}
            </div>
        </div>
    );
};

export default Projects;