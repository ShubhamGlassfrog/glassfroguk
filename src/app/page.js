"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Footer from "@/components/footer/footer";

const services = [
  {
    id: 1,
    title: "Local SEO",
    description: "Porta semper lacus cursus feugiat and primis ultrice",
    icon: "📍", // Replace with an icon component if needed
  },
  {
    id: 2,
    title: "E-Commerce SEO",
    description: "Porta semper lacus cursus feugiat and primis ultrice",
    icon: "🛒",
  },
  {
    id: 3,
    title: "Advanced Analytics",
    description: "Porta semper lacus cursus feugiat and primis ultrice",
    icon: "🔍",
  },
  {
    id: 4,
    title: "PPC Management",
    description: "Porta semper lacus cursus feugiat and primis ultrice",
    icon: "💰",
  },
];

 const cservices = [
    { title: "SEO Services", image: "/seoservice.jpg",description:"As a leading UK SEO Company, we have an established team of innovative SEO professionals experienced in providing award-winning search campaigns for a wide range of sectors including Healthcare and Ecommerce. Learn how we can grow your digital customer base. " },
    { title: "Digital PR Services", image: "/digitalpr.jpg",description:"Backlinks are an important part of SEO, but getting them is increasingly difficult. That’s where Digital PR services can help. We approach Digital PR from a heavily SEO-focused perspective. Our goal is to improve your brand awareness and strengthen the authority of your site through gaining coverage and links." },
    { title: "PPC Services", image: "/ppc.jpg", description: "Our PPC Services cover every aspect needed to run a successful paid search campaign. Our data-driven approach ensures your PPC campaigns deliver a tangible return on investment. We've won awards for our PPC Services, praised for our data-led approach backed by AI and strategic management." },
    { title: "Web Design & Development", image: "/wdd.jpg",description:"Our team develop SEO friendly, responsive websites for both professional services and eCommerce. We can also develop intuitive apps that support business goals. Having a website which looks great is one thing, however we design and build websites that convert traffic to sales." },
    { title: "Paid Social Media", image: "/pcm.png",description:"Whether you’re looking for reach, engagement, or sales, advertising on social media marketing channels can help you access more potential customers. The time spent on social media increases year on year. We’ll design a campaign that will help you take advantage of these opportunities." },
    { title: "Local SEO", image: "/ls.webp",description:"If you are targeting local customers, we can put together a sustainable local strategy to win new customers. Local SEO works differently to national campaigns. Use a UK SEO Company to dominate the local search results and gain more traffic and new customers." },
  ];
const seo = [
  {
    id: 1,
    title: "Advanced Analytics Review",
    description:
      "Maecenas gravida nunc vehicula magna luctus tempor quisque laoreet turpis at augue.",
    icon: "📊", // Replace with an appropriate icon or image
  },
  {
    id: 2,
    title: "Email Marketing Campaigns",
    description:
      "Maecenas gravida nunc vehicula magna luctus tempor quisque laoreet turpis at augue.",
    icon: "✉️",
  },
  {
    id: 3,
    title: "Video Marketing",
    description:
      "Maecenas gravida nunc vehicula magna luctus tempor quisque laoreet turpis at augue.",
    icon: "🎥",
  },
  {
    id: 4,
    title: "Search Engine Optimization (SEO)",
    description:
      "Maecenas gravida nunc vehicula magna luctus tempor quisque laoreet turpis at augue.",
    icon: "🔍",
  },
  {
    id: 5,
    title: "Pay Per Click (PPC)",
    description:
      "Maecenas gravida nunc vehicula magna luctus tempor quisque laoreet turpis at augue, viverra et augue eget dictum tempor.",
    icon: "💰",
  },
  {
    id: 6,
    title: "Strategy and Analytics Consulting",
    description:
      "Maecenas gravida nunc vehicula magna luctus tempor quisque laoreet turpis at augue, viverra et augue eget dictum tempor.",
    icon: "💬",
  },
  {
    id: 7,
    title: "Content Marketing",
    description:
      "Maecenas gravida nunc vehicula magna luctus tempor quisque laoreet turpis at augue, viverra et augue eget dictum tempor.",
    icon: "🖥️",
  },
  {
    id: 8,
    title: "Website Design Development",
    description:
      "Maecenas gravida nunc vehicula magna luctus tempor quisque laoreet turpis at augue, viverra et augue eget dictum tempor.",
    icon: "💻",
  },
];

const seoservices = [
    { title: "SEO Services", icon: "🖱️" },
    { title: "SEO Strategy", icon: "📈" },
    { title: "Link Building", icon: "🔗" },
    { title: "UX & CRO", icon: "🎨" },
    { title: "Technical & Audits", icon: "📋" },
    { title: "Website Design", icon: "💻" },
    { title: "Content Marketing", icon: "📄" },
    { title: "PPC & Paid Media", icon: "💰" },
    { title: "Website Migrations", icon: "📦" },
    { title: "Digital PR", icon: "📚" },
    { title: "Reputation Management", icon: "⭐" },
    { title: "Crisis Communications", icon: "💬" },
    { title: "SEO Consultancy", icon: "📝" },
    { title: "Local SEO", icon: "📍" },
  ];

export default function HowItWorksPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
const router = useRouter();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = async () => {
    const newErrors = {};

    // Validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = "First name is required.";
    }
    if (!formData.websiteLink.trim()) {
      newErrors.websiteLink = "Website Link is required.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required.";
    } else if (!phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be 10 digits.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setLoading(true); // Set loading to true during submission

      try {
        const response = await fetch("/api/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          // Success
          console.log("Form submitted successfully");
          setFormData({
            fullName: "",
            websiteLink: "",
            email: "",
            phoneNumber: "",
          }); // Clear form fields
          setErrors({});
          alert("Form submitted successfully!"); // Optional: Replace with toast
           router.push("/quiz");
        } else {
          const result = await response.json();
          console.error("Error:", result.error);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      } finally {
        setLoading(false); // Set loading to false after submission
      }
    }
  };


  // Detect scroll to adjust header width
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  

  return (
    <>
   <div
  className="relative min-h-screen py-16 px-6 md:px-12"
 
>
  {/* Background Video */}
  <video
    className="absolute top-0 left-0 w-full h-full object-cover"
    src="/glassfrogweb.mp4" // Replace with your video file path
    autoPlay
    loop
    muted
    playsInline
  ></video>

  {/* Overlay for Background Color */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  {/* Content */}
  <div className="relative z-10">
    {/* Header Component */}
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "w-full bg-[#f3f8fc] " : "w-full"
      } text-white py-4 px-6`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <img
          src={isScrolled ? "/logo.svg" : "/whitelogo.png"}
          alt="Logo"
          className={isScrolled ? "h-12" : "h-12"}
        />
        <nav className="flex space-x-6">
          <a
            href="#"
            className={`${
              isScrolled ? "text-black" : "text-white"
            } hover:text-gray-900 transition-colors`}
          >
            Home
          </a>
          <a
            href="#"
            className={`${
              isScrolled ? "text-black" : "text-white"
            } hover:text-gray-900 transition-colors`}
          >
            About
          </a>
          <a
            href="#"
            className={`${
              isScrolled ? "text-black" : "text-white"
            } hover:text-gray-900 transition-colors`}
          >
            Contact
          </a>
        </nav>
      </div>
    </motion.header>

    {/* Main Content */}
    <div className="max-w-7xl mx-auto pt-20 flex flex-col-reverse md:flex-row items-center text-center justify-center ">
      {/* Text Section */}
      <div className="flex-1 h-[70vh] flex flex-col items-center text-center justify-center">
        <motion.h2
          className="text-6xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{ lineHeight: "1.4" }}
        >
          Higher Rankings.
                <br></br>
                <span className="pt-2">
          Relevant Visitors.</span>
          <br></br>
         <span className="pt-2"> More Customers</span>
        </motion.h2>
        <motion.p
          className="text-lg text-white mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
         Multiple award-winning search marketing with outstanding results.
        </motion.p>
        <motion.button
          className="bg-[#f76c6c] text-white py-3 px-6 rounded-md hover:bg-[#f55c5c] transition"
          onClick={toggleModal}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Take the Scorecard
        </motion.button>
      </div>
  {isModalOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <motion.div
      className="bg-white rounded-lg p-8 shadow-lg max-w-lg mx-4 relative"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
    >
      {/* Close Button */}
      <button
        onClick={toggleModal}
        className="absolute top-4 right-4 text-black hover:text-gray-600"
      >
        &#x2715;
      </button>

      <h2 className="text-2xl font-bold mb-4 text-center text-black">
        Enter your details below to start the scorecard
      </h2>

      <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        validateForm();
      }}
    >
      {/* Name Fields */}
      <div className="flex gap-4">
        <div className="w-full">
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-black"
          >
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="First name"
            className="mt-1 block w-full text-black p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          {errors.fullName && (
            <p className="text-sm text-red-500 mt-1">{errors.fullName}</p>
          )}
        </div>
        
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-black"
        >
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className="mt-1 block w-full p-3 border text-black border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && (
          <p className="text-sm text-red-500 mt-1">{errors.email}</p>
        )}
      </div>

      {/* Phone Number Field */}
      <div>
        <label
          htmlFor="phoneNumber"
          className="block text-sm font-medium text-black"
        >
          Phone Number *
        </label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="Phone Number"
          className="mt-1 block w-full p-3 border text-black border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
        {errors.phoneNumber && (
          <p className="text-sm text-red-500 mt-1">{errors.phoneNumber}</p>
        )}
      </div>
<div className="w-full">
          <label
            htmlFor="websiteLink"
            className="block text-sm font-medium text-black"
          >
            Website Link *
          </label>
          <input
            type="text"
            id="websiteLink"
            name="websiteLink"
            placeholder="Website Link"
            className="mt-1 block w-full p-3 border text-black border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
            value={formData.websiteLink}
            onChange={handleChange}
            required
          />
          {errors.websiteLink && (
            <p className="text-sm text-red-500 mt-1">{errors.websiteLink}</p>
          )}
        </div>
      {/* Submit Button */}
      <button
        type="submit"
        className=" w-full bg-[#f76c6c] text-white py-3 rounded-md text-lg font-semibold hover:bg-[#f55c5c] transition flex items-center justify-center"
        disabled={loading}
      >
        {loading ? (
          <>
            <svg
              className="animate-spin h-5 w-5 text-white mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 000 8v4a8 8 0 01-8-8z"
              ></path>
            </svg>
            Submitting...
          </>
        ) : (
          "Start"
        )}
      </button>
    </form>

      {/* Footer Note */}
      <p className="text-sm text-black mt-4 text-center">
        Your personalised results will be emailed to you along with relevant
        marketing tips. You can opt out at any time.
      </p>
      <p className="text-sm text-center mt-2">
        <a href="#" className="text-pink-500 hover:underline">
          Privacy Policy
        </a>
      </p>
    </motion.div>
  </div>
)}


     
    </div>
  </div>
</div>

         <section className="py-12 px-6 md:px-16 lg:px-24 bg-gray-50">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      ><p>Knowledge Of The Market</p>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          Custom SEO Services – Our Specialty
        </h2>
        <p className="text-gray-600 text-2xl md:text-base">
          Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis
          libero <br></br>tempus, blandit posuere and ligula varius magna a porta
          elementum massa risus
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className="hover:bg-white p-6 text-center hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <div className="text-7xl mb-4 text-indigo-500">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
      </section>
      <section className="py-12 px-6 md:px-16 lg:px-24 bg-gray-50 flex flex-col lg:flex-row items-center">
      {/* Image Section */}
      <motion.div
        className="w-full lg:w-1/2 relative mb-8 lg:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative overflow-hidden ">
          <img
            src="/sec3.png" // Replace with your image path
            alt="Team Collaboration"
           
          />
        </div>
      </motion.div>

      {/* Text Content Section */}
      <motion.div
        className="w-full lg:w-1/2 lg:pl-10 text-center lg:text-left"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-indigo-600 text-sm font-semibold uppercase mb-2">
          Welcome to Glassfrog
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
         Not just an
SEO Company
        </h2>
        <p className="text-gray-600 text-sm md:text-base mb-6">
          We believe that the future of marketing is digital, and we use a full range of digital marketing services to help maximise your online potential. Whether you sell to companies or consumers, more visibility means more leads and customers to your business.

Our portfolio of organic, digital PR, paid and web services allow you to reach your target audiences wherever they are on the web.
        </p>
       
        
      </motion.div>
      </section>
      <div className="py-12 bg-gray-100">
        <h2 className="text-3xl md:text-5xl text-center pb-4 font-bold text-gray-800 mb-4">
          Our Services
        </h2>
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
           
        {cservices.map((service, index) => (
          <motion.div
            key={index}
            className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* <div
              className={`absolute inset-0 bg-green-500 bg-opacity-70 flex items-center justify-center text-white text-lg font-bold p-4 ${
                service.description ? "group-hover:hidden" : ""
              }`}
            >
              {service.title}
            </div> */}
            {service.description && (
              <div className="absolute inset-0 bg-[#cb3188] bg-opacity-80 p-4 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-bold mb-2 text-lg">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
      </div>
      <div className="bg-[#060f3c] text-white py-12">
      <motion.div
        className="max-w-4xl mx-auto text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Achieving real results
        </motion.h2>
        {/* Underline */}
        <motion.div
          className="w-16 h-1 bg-white mx-auto mb-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
        ></motion.div>
        {/* Description */}
        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          We work with leading brands and prospering SME’s across many sectors,{" "}
          <span className="font-bold">delivering tangible business benefits</span> and a
          great ROI. We understand the true value of a campaign comes from
          building your brand and increasing leads and revenue to hit targets.
        </motion.p>
        {/* Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.button
          className="bg-[#f76c6c] text-white py-3 px-6 rounded-md hover:bg-[#f55c5c] transition"
          onClick={toggleModal}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Take the Scorecard
        </motion.button>
        </motion.div>
      </motion.div>
    </div>
      <section className="py-12 px-6 md:px-16 lg:px-24 bg-gray-50">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          SEO Management Strategy Services
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis
          libero tempus, blandit posuere and ligula varius magna a porta
          elementum massa risus
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {seo.map((service, index) => (
          <motion.div
            key={service.id}
            className="flex  p-6 hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <div className="text-4xl mb-4 text-indigo-500">{service.icon}</div>
           <div><h3 className="text-xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm">
              {service.description}
            </p></div> 
          </motion.div>
        ))}
      </div>
      </section>
        <section className="py-12 bg-gray-100">
      <div className="text-center mb-8">
        <motion.h2
          className="text-3xl font-bold text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our best-in-class SEO services
        </motion.h2>
      </div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              delayChildren: 0.2,
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {seoservices.map((service, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-lg font-semibold text-gray-800">
              {service.title}
            </h3>
            <span className="text-2xl bg-yellow-300 text-white p-2 rounded-full">
              {service.icon}
            </span>
          </motion.div>
        ))}
      </motion.div>
      </section>
      <Footer/>
      </>
  );
}
