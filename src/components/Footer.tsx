import React from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '../content/site';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 dark:bg-black text-white py-16">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{siteContent.siteName}</h3>
            <p className="text-gray-300 mb-4">
              Professional translation and localization services with a focus on quality and cultural sensitivity.
            </p>
            <div className="flex space-x-4">
              {siteContent.socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-2xl hover:text-accent-400 transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              {siteContent.services.map((service, index) => (
                <li key={index}>{service.title}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-300 mb-2">
              Ready to start your project?
            </p>
            <a 
              href={`mailto:${siteContent.contactEmail}`}
              className="text-accent-400 hover:text-accent-300 transition-colors"
            >
              {siteContent.contactEmail}
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 {siteContent.siteName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
