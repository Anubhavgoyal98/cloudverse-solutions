import React, { useState } from 'react';
import { Cloud, Menu, X, ChevronRight, Mail, Phone, MapPin } from 'lucide-react';

export default function CloudverseClone() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'What We Do', href: '#what-we-do' },
    { name: 'About', href: '#about' },
    { name: 'By Capability', href: '#capability' },
    { name: 'By Department', href: '#department' },
    { name: 'How We Do It', href: '#how-we-do-it' },
    { name: 'Contact', href: '#contact' }
  ];

  const capabilities = [
    {
      title: 'Email & Communication',
      features: [
        'Personalized domain name',
        '25GB of email storage per user',
        'Calendar sharing for easy meeting booking',
        'Mobile access via browser and native apps',
        'World-class search functionality',
        'Enterprise-level security and reliability'
      ]
    },
    {
      title: 'Collaboration & Sharing',
      features: [
        'Share with company or select groups',
        'Online video conferencing with 15 participants',
        'Present to customers at no additional cost',
        'Team-based social conversations',
        'Private customer and employee connections',
        'Real-time document collaboration'
      ]
    }
  ];

  const departments = [
    {
      name: 'Retail',
      benefits: [
        'Connect with 250M+ customers via social platforms',
        'Co-author execution plans with suppliers and teams',
        'Empower store associates with mobile tools',
        'Reduce litigation costs with Google Vault',
        'Increase compliance with store portals',
        'Real-time dashboards for financial data'
      ]
    },
    {
      name: 'Manufacturing',
      benefits: [
        'Align innovation strategy across organization',
        'Boost quality, efficiency, and safety',
        'Consolidate financials and project data',
        'Increase sales and marketing productivity',
        'Real-time product data access',
        'Enhanced visibility of engineering changes'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Cloud className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">Cloudverse</span>
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

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Insuring Seamless Evolution to the Future
            </h1>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Cloudverse, with its broad knowledge of traditional IT deployments as well as 
              expertise of Google Apps and Salesforce, can help you assess and evaluate the 
              benefits of modern cloud-based solutions for your organization, and can manage 
              the entire deployment, making the transition seamless.
            </p>
            <div className="mt-10">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
              >
                Get Started
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="what-we-do" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            What We Do
          </h2>
          <div className="prose prose-lg max-w-4xl mx-auto text-gray-700">
            <p className="mb-6">
              Based in Orange County, California, Cloudverse, LLC is a cloud solutions 
              consulting organization focused on moving business from on-premise software 
              to scalable cloud-based solutions.
            </p>
            <p className="mb-6">
              Our founders have over 30 years of information technology experience holding 
              leadership roles at Google, Microsoft, and Cisco. With over a decade of 
              experience in the personal productivity and communication and collaboration 
              space, our founder is a subject matter expert in Microsoft Platform and 
              Microsoft licensing as well as Google Enterprise solutions.
            </p>
            <p className="mb-6">
              With our extensive experience with Microsoft software, Google services, and 
              Salesforce platform, we are well equipped to help companies compare and 
              contrast their current on-premise implementation with the new Cloud-based 
              business solutions.
            </p>
            <p className="font-semibold text-blue-600">
              Our mission is to provide simple, flexible, and effective cloud-based 
              solutions to our clients, to help them grow their business in a cost-effective 
              and scalable manner.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            About Us
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-lg text-gray-700 mb-6">
                Based in Orange County, California, Cloudverse, LLC is a cloud solutions 
                consulting organization focused on moving business from on-premise software 
                to scalable cloud-based solutions.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our founders have over 30 years of information technology experience holding 
                leadership roles at Google, Microsoft, and Toshiba. With over a decade of 
                experience in the personal productivity and communication and collaboration 
                space, our CEO is a subject matter expert in Microsoft Platform and Microsoft 
                licensing as well as Google Enterprise solutions.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                With our extensive experience with Microsoft software and Google Certified 
                personnel, we are well equipped to help companies compare and contrast their 
                current Microsoft implementation with the new Google Apps for Business.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mt-8">
                <p className="text-lg font-semibold text-blue-900">
                  Our goal is to be the premium cloud consulting organization in the U.S. 
                  by becoming the trusted adviser for cloud-based solutions for companies 
                  of all sizes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* By Capability Section */}
      <section id="capability" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            By Capability
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {capability.title}
                </h3>
                <ul className="space-y-3">
                  {capability.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* By Department Section */}
      <section id="department" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            By Department
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-blue-600 mb-6">
                  {dept.name}
                </h3>
                <ul className="space-y-3">
                  {dept.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Do It Section */}
      <section id="how-we-do-it" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            How We Do It
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="bg-blue-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Planning</h3>
                <p className="text-gray-700 mb-4">
                  Planning for a company-wide solution like Google Apps is the most important 
                  part of the deployment effort. Planning is included in each of our Google 
                  Apps deployment plans. We use a proven methodology to plan for 3-phase 
                  deployment by identifying the following:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">
                      Choose the right resources at the customer's organization to assist 
                      with the technical deployment
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">
                      Plan the communication, training, and ongoing support
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">
                      Plan for mail delivery during transitional phases and end state of deployment
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">
                      Plan for data migration for mail, contact, calendar, and files
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-indigo-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Migration</h3>
                <p className="text-gray-700 mb-4">
                  Every deployment of Google Apps is tailored to the customer's needs and 
                  goals. There are two main parts of migration:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">
                      Get the users provisioned in Google Apps
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">
                      Take care of the end user data including email, contacts, calendar 
                      appointments, and files in the legacy system
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Contact Us
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-blue-100">
                        14271 Jeffrey Rd 280<br />
                        Irvine, California, 92620<br />
                        United States
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-blue-100">info@cloudverse.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-blue-100">Contact us for consultation</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-6">Ready to Transform?</h3>
                <p className="text-blue-100 mb-6">
                  Let us help you transition to modern cloud-based solutions. Our team of 
                  experts is ready to assess your needs and create a customized deployment 
                  plan for your organization.
                </p>
                <a
                  href="mailto:info@cloudverse.com"
                  className="inline-block px-8 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-gray-100 transition-colors"
                >
                  Schedule a Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Cloud className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-2xl font-bold text-white">Cloudverse</span>
            </div>
            <p className="text-sm">
              © 2022 Cloudverse, LLC. All rights reserved.
            </p>
            <p className="text-sm mt-2">
              Cloud Solutions Consulting | Orange County, California
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
