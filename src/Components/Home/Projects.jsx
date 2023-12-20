
import 'aos/dist/aos.css';
const Projects = () => {
    return (
        <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
            <div className="max-w-5xl mx-auto border p-3 mt-6 rounded">
                <div className="flex lg:flex-row flex-col items-center justify-between ">
                <h3 className="font-bold text-2xl">Project Name: <span className="text-green-600">The Tech Hub</span></h3>
                <div className="flex gap-10 text-blue-600 font-bold">
                        <a href="https://tech-hub-c2612.web.app/">Live Link</a>
                        <a href="https://github.com/Ariful2634/tech-hub-client">Client Side</a>
                        <a href="https://github.com/Ariful2634/tech-hub-server">Server Side</a>
                    </div>
                </div>
                <p className="font-semibold mt-3"><span className="font-bold">Technology Used:</span> Reactjs, Tailwind CSS, Daisy UI, Material UI, MongoDB, Firebase, Stripe, Jwt etc.</p>
                
                    <p className="font-bold mt-3">Key Features :
                    </p>
                    <li>Created an Admin Route, Moderator Route, User Route. Admin can add users roles, add coupons.</li>
                    <li>Users can post products and upvote the product.</li>
                    <li>Moderators can accept products and marked them as featured.</li>
                   
                
            </div>
            <div className="max-w-5xl mx-auto border p-3 mt-6 rounded">
                <div className="flex lg:flex-row flex-col items-center justify-between ">
                <h3 className="font-bold text-2xl">Project Name: <span className="text-green-600">Book My Hotel</span></h3>
                <div className="flex gap-10 text-blue-600 font-bold">
                        <a href="https://hotel-booking-management-928e5.web.app/">Live Link</a>
                        <a href="https://github.com/Ariful2634/hotel-booking-management-client">Client Side</a>
                        <a href="https://github.com/Ariful2634/hotel-booking-management-server">Server Side</a>
                    </div>
                </div>
                <p className="font-semibold mt-3"><span className="font-bold">Technology Used:</span> Reactjs, Tailwind CSS, Daisy UI, MongoDB, Firebase, Jwt etc.</p>
                
                    <p className="font-bold mt-3">Key Features :
                    </p>
                    <li>Users can view the rooms and room details.</li>
                    <li>Users can book rooms.</li>
                    <li>Users can view and post reviews for rooms.</li>
                   
                
            </div>
            <div className="max-w-5xl mx-auto border p-3 mt-6 rounded">
                <div className="flex lg:flex-row flex-col items-center justify-between ">
                <h3 className="font-bold text-2xl">Project Name: <span className="text-green-600">Tech Shop</span></h3>
                <div className="flex gap-10 text-blue-600 font-bold">
                        <a href="https://tech-shop-5a579.web.app/">Live Link</a>
                        <a href="https://github.com/Ariful2634/tech-shop-client">Client Side</a>
                        <a href="https://github.com/Ariful2634/tech-shop-server">Server Side</a>
                    </div>
                </div>
                <p className="font-semibold mt-3"><span className="font-bold">Technology Used:</span> Reactjs, Tailwind CSS, Daisy UI, MongoDB, Firebase, etc.</p>
                
                    <p className="font-bold mt-3">Key Features :
                    </p>
                    <li>Users can see the brandwise product on clicking in a specific brand.</li>
                    <li>Users can see the product details and also can add products.</li>
                    <li>Users can update and delete the products.</li>
                   
                
            </div>
        </div>
    );
};

export default Projects;