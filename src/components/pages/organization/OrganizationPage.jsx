import HeaderComponent from "../../sections/header/header-component";
import FooterComponent from "../../sections/footer/footer-component";
import HeroComponent from "../../sections/hero/hero-component";

// --- Updated Team Member Data ---
// I have added image paths and more detailed bios.
// IMPORTANT: You must place your actual images in the `public/images/` folder
// and ensure the image names match (e.g., "anand-deshpande.jpg").
const trustees = [
  { 
    name: "Mr. Anand Deshpande", 
    role: "Trustee", 
    image: "/images/trustee1.jpg", // Example image path
    bio: "With over two decades of experience in social entrepreneurship, Mr. Deshpande provides the strategic vision that guides our organization. His commitment to public health is the cornerstone of our mission." 
  },
  { 
    name: "Mrs. Priya Sharma", 
    role: "Trustee", 
    image: "/images/trustee2.jpg", // Example image path
    bio: "A retired healthcare professional, Mrs. Sharma brings invaluable expertise in medical ethics and community outreach. She ensures our operations adhere to the highest standards of patient care and integrity." 
  },
];
const director = [
    { 
        name: "Dr. Rajesh Gupta", 
        role: "Director", 
        image: "/images/director1.jpg", // Example image path
        bio: "As the Director, Dr. Gupta oversees all operational and medical activities. His leadership ensures that Aadhar Blood Bank remains a leader in blood safety and transfusion medicine in the region." 
    },
];
const officers = [
    { 
        name: "Mr. Vikram Singh", 
        role: "Chief Medical Officer", 
        image: "/images/officer1.jpg", // Example image path
        bio: "Mr. Singh is responsible for the technical and medical standards of our labs. He ensures all collected units are safe and that our facilities comply with all national health regulations." 
    },
    { 
        name: "Ms. Sunita Patil", 
        role: "Head of Operations", 
        image: "/images/officer2.jpg", // Example image path
        bio: "Ms. Patil masterfully manages the logistics of our blood drives and daily operations. Her work is crucial in connecting our generous donors with patients in need." 
    },
];
const captains = [
  { 
    name: "Mr. Rohan Joshi", 
    role: "Volunteer Captain", 
    image: "/images/captain1.jpg", // Example image path
    bio: "Rohan leads our passionate team of volunteers. He is the friendly face of our organization at every event, ensuring a positive and welcoming experience for all donors." 
  },
  { 
    name: "Ms. Meera Iyer", 
    role: "Donation Camp Captain", 
    image: "/images/captain2.jpg", // Example image path
    bio: "An expert in event management, Meera organizes and executes our large-scale blood donation camps, making it possible to save thousands of lives each year." 
  },
];

// --- Updated MemberCard Component ---
// The MemberCard now includes an `<img>` tag to display the pictures.
const MemberCard = ({ member }) => (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full sm:w-80 text-center transform hover:scale-105 transition-transform duration-300 flex flex-col items-center">
        <img 
            src={member.image} 
            alt={member.name} 
            className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-red" 
        />
        <h3 className="text-xl font-bold text-dark">{member.name}</h3>
        <p className="role text-red font-semibold mb-2">{member.role}</p>
        <p className="text-light text-sm">{member.bio}</p>
    </div>
);

const OrganizationPage = () => {
    const heroDetails = {
        subheadingText: "Meet the Team",
        headingText: "The Pillars of Our Organization",
        classHint: "contact-page-hero",
    };

    return (
        <>
            <HeaderComponent />
            <HeroComponent {...heroDetails} />

            <main className="bg-off_white py-16">
                <section id="about-us" className="container mx-auto px-6 text-center scroll-mt-24">
                    <h2 className="text-4xl font-bold text-dark_red mb-4">About Us</h2>
                    <p className="max-w-3xl mx-auto text-lg text-light">
                        Aadhar Blood Bank is driven by a mission to ensure a safe and sufficient blood supply for those in need. Our organization is built on the pillars of compassion, integrity, and community service. We are powered by a dedicated team of trustees, directors, officers, and volunteers who work tirelessly to save lives.
                    </p>
                </section>

                <section id="trustees" className="container mx-auto px-6 text-center mt-16 scroll-mt-24">
                    <h2 className="text-4xl font-bold text-dark_red mb-8">Our Trustees</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {trustees.map((member, idx) => <MemberCard key={idx} member={member} />)}
                    </div>
                </section>

                <section id="director" className="container mx-auto px-6 text-center mt-16 scroll-mt-24">
                    <h2 className="text-4xl font-bold text-dark_red mb-8">Our Director</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {director.map((member, idx) => <MemberCard key={idx} member={member} />)}
                    </div>
                </section>

                <section id="officers" className="container mx-auto px-6 text-center mt-16 scroll-mt-24">
                    <h2 className="text-4xl font-bold text-dark_red mb-8">Our Officers</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {officers.map((member, idx) => <MemberCard key={idx} member={member} />)}
                    </div>
                </section>

                <section id="captains" className="container mx-auto px-6 text-center mt-16 scroll-mt-24">
                    <h2 className="text-4xl font-bold text-dark_red mb-8">Our Captains</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {captains.map((member, idx) => <MemberCard key={idx} member={member} />)}
                    </div>
                </section>

                <section id="approvals" className="container mx-auto px-6 text-center mt-16 scroll-mt-24">
                     <h2 className="text-4xl font-bold text-dark_red mb-4">Government Approval & Recognitions</h2>
                    <p className="max-w-3xl mx-auto text-lg text-light">
                        We are a fully licensed and recognized blood bank, complying with all the regulations and standards set by the government health authorities. Our commitment to quality and safety has been acknowledged through various accolades and certifications.
                    </p>
                </section>
            </main>

            <FooterComponent />
        </>
    );
};

export default OrganizationPage;