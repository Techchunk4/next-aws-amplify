import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-gray-800 bg-white">
      <Head>
        <title>Waag</title>
        <meta name="description" content="Empowering Your Workplace Success" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex items-center justify-between p-4 bg-white shadow-md">
        <div className="text-2xl font-bold text-gray-500">Waag</div>
        <nav>
          <ul className="flex space-x-4">
            {["Home", "About Us", "Services", "Resources", "Contact Us"].map(
              (item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "")}`}
                    className="hover:text-blue-600"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>
      </header>

      <section
        id="home"
        className="flex items-center justify-center h-screen text-center text-gray-800 bg-center bg-cover"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        <div className="p-8 bg-black rounded-lg shadow-md bg-opacity-15">
          <h1 className="text-5xl font-bold text-white">
            Empowering Your business Success
          </h1>
          <p className="mt-4 text-xl text-white">
            Comprehensive support and resources for a thriving work environment.
          </p>
          <a
            href="#services"
            className="inline-block px-6 py-3 mt-6 font-semibold text-white bg-gray-600 rounded-md"
          >
            Get Started
          </a>
        </div>
      </section>

      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="mb-8 text-3xl font-bold text-gray-500">
            Our Services
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Employee Counseling",
                description:
                  "Supporting employees through confidential counseling services.",
              },
              {
                title: "Training Programs",
                description:
                  "Enhancing skills and knowledge through tailored training sessions.",
              },
              {
                title: "Conflict Resolution",
                description:
                  "Facilitating effective conflict resolution and mediation.",
              },
              {
                title: "Wellness Programs",
                description: "Promoting health and wellness in the workplace.",
              },
            ].map((service, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="mb-4 text-xl font-semibold text-gray-500">
                  {service.title}
                </h3>
                <p>{service.description}</p>
                <a
                  href="#"
                  className="inline-block mt-4 text-gray-500 hover:underline"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="mb-8 text-3xl font-bold text-gray-500">About Waag</h2>
          <Image
            src="/team-photo.jpg"
            alt="Our Team"
            width={600}
            height={400}
            className="mx-auto mb-8 rounded-lg shadow-md"
          />
          <p className="max-w-2xl mx-auto">
            We are dedicated to fostering a supportive and productive work
            environment. Our team of professionals provides comprehensive
            services to help you achieve your workplace goals.
          </p>
          <div className="flex justify-center mt-8 space-x-8">
            {[
              {
                title: "Security",
                description: "We adhere to the highest ethical standards.",
              },
              {
                title: "Support",
                description: "We provide unwavering support to our clients.",
              },
              {
                title: "Cloud",
                description:
                  "We embrace innovative solutions to workplace challenges.",
              },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <h3 className="mb-2 text-xl font-semibold text-gray-500">
                  {value.title}
                </h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="mb-8 text-3xl font-bold text-gray-500">
            What Our Clients Say
          </h2>
          <div className="space-y-8">
            {[
              {
                quote:
                  "Next-WPA has transformed our workplace. The support and training have been invaluable.",
                author: "Client Name",
              },
              {
                quote:
                  "The wellness programs have significantly improved employee morale and productivity.",
                author: "Client Name",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="max-w-2xl p-6 mx-auto bg-white rounded-lg shadow-md"
              >
                <p className="mb-4">"{testimonial.quote}"</p>
                <cite className="text-gray-700">- {testimonial.author}</cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="resources" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="mb-8 text-3xl font-bold text-gray-500">Resources</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "eBooks",
                description:
                  "Downloadable resources to enhance your knowledge.",
              },
              {
                title: "Articles",
                description: "In-depth articles on workplace assistance.",
              },
              {
                title: "Webinars",
                description: "Online webinars covering various topics.",
              },
              {
                title: "Toolkits",
                description:
                  "Practical tools and resources for your workplace.",
              },
            ].map((resource, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="mb-4 text-xl font-semibold text-gray-500">
                  {resource.title}
                </h3>
                <p>{resource.description}</p>
                <a
                  href="#"
                  className="inline-block mt-4 text-gray-500 hover:underline"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="mb-8 text-3xl font-bold text-gray-500">
            Get in Touch
          </h2>
          <form className="max-w-xl mx-auto space-y-4">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                className="w-full h-32 px-4 py-2 border border-gray-300 rounded-md"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 font-semibold text-white bg-gray-500 rounded-md"
              >
                Send Message
              </button>
            </div>
          </form>
          <div className="mt-8">
            <p>Phone: (44) 7778484700</p>
            <p>Email: info@waag.com</p>
            <p>Address: 123 Main Street, City, State, ZIP</p>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-white shadow-md">
        <div className="container mx-auto text-center">
          <ul className="flex justify-center space-x-4">
            {["Home", "About Us", "Services", "Resources", "Contact Us"].map(
              (item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "")}`}
                    className="hover:text-blue-600"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
          <div className="mt-4">
            <p>&copy; 2024 Waag. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
