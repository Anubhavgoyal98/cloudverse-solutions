import React, { useState } from 'react';
import { Cloud, Menu, X, ChevronRight, Mail, Phone, MapPin } from 'lucide-react';

export default function CloudverseConsulting() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Insights', href: '#insights' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Cloud className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">
                Cloudverse Consulting
              </span>
            </div>

            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Home Section */}
      <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Your Vision, Powered by Salesforce.
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-10">
            We are <strong>Cloudverse Consulting Services Ltd.</strong>, a dedicated team of
            Salesforce-certified consultants and developers transforming businesses
            with intelligent, scalable, and results-driven solutions.
          </p>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            In today’s digital landscape, efficiency and customer experience are everything.
            We help businesses build, customize, and optimize Salesforce platforms that
            streamline operations, supercharge sales, and deliver outstanding results —
            from strategy to post-launch support.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-semibold text-xl text-blue-600 mb-2">Certified Experts</h3>
              <p className="text-gray-700">
                Our team holds top-tier Salesforce certifications, ensuring expert guidance
                and flawless implementation.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-semibold text-xl text-blue-600 mb-2">Proven Results</h3>
              <p className="text-gray-700">
                We’ve helped businesses achieve measurable gains in efficiency, automation,
                and ROI through Salesforce.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-semibold text-xl text-blue-600 mb-2">Client-First Approach</h3>
              <p className="text-gray-700">
                Every solution we deliver is personalized to your unique goals, ensuring
                long-term success and scalability.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
            >
              Get in Touch
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Comprehensive Salesforce Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Implementation & Customization',
                desc: 'We tailor Salesforce to your business needs, ensuring seamless integration, user adoption, and long-term scalability.'
              },
              {
                title: 'Development & Integration',
                desc: 'From Apex to LWC, we build custom apps and integrate Salesforce with your existing systems for a unified workflow.'
              },
              {
                title: 'Consulting & Strategic Advisory',
                desc: 'Our consultants guide your Salesforce roadmap, aligning technology with business goals for maximum impact.'
              },
              {
                title: 'Managed Services & Support',
                desc: 'Stay future-ready with proactive monitoring, maintenance, and support to keep Salesforce running at its best.'
              }
            ].map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-blue-700 mb-3">{service.title}</h3>
                <p className="text-gray-700">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section id="insights" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Salesforce Insights from Cloudverse
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: '5 Common Salesforce Automation Mistakes',
                desc: 'Avoid technical debt with these best practices for optimizing automation in Salesforce.',
              },
              {
                title: 'Apex vs. LWC: Which Should You Use?',
                desc: 'Understand when to use Apex or Lightning Web Components to get the best performance and flexibility.',
              },
              {
                title: 'Maximizing ROI with Managed Services',
                desc: 'Learn how ongoing optimization and proactive support can extend Salesforce’s value long-term.',
              }
            ].map((insight, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">{insight.title}</h3>
                <p className="text-gray-700">{insight.desc}</p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read More <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Contact Us
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-blue-100">503 18 James Street, Waterloo, Canada</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-blue-100">647-500-4815</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-blue-100">contact-us@cloudverseservices.com</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Let’s Build Something Exceptional</h3>
              <p className="text-blue-100 mb-6">
                Whether you’re just starting your Salesforce journey or optimizing an existing
                implementation, our experts are ready to help you maximize results and efficiency.
              </p>
              <a
                href="mailto:contact-us@cloudverseservices.com"
                className="inline-block px-8 py-3 bg-white text-blue-700 font-medium rounded-md hover:bg-gray-100 transition-colors"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <Cloud className="h-8 w-8 text-blue-400" />
            <span className="ml-2 text-2xl font-bold text-white">Cloudverse Consulting</span>
          </div>
          <p className="text-sm">© {new Date().getFullYear()} Cloudverse Consulting Services Ltd. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
