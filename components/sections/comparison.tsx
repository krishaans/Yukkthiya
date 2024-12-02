"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check } from 'lucide-react';

const competitors = [
  {
    name: "Law Lanka",
    features: {
      "AI Chatbot": true,
      "FAQ": false,
      "Forum": false,
      "Optimized for SL Law": false,
      "User Profile": false,
      "Lawyer Contact": false,
      "Lawyer Distinction": false,
      "Jurisdiction Assessor": false,
      "Lawyer Directory": false
    }
  },
  {
    name: "Legal Path",
    features: {
      "AI Chatbot": false,
      "FAQ": true,
      "Forum": true,
      "Optimized for SL Law": false,
      "User Profile": true,
      "Lawyer Contact": false,
      "Lawyer Distinction": false,
      "Jurisdiction Assessor": false,
      "Lawyer Directory": false
    }
  },
  {
    name: "Reddit/Quora",
    features: {
      "AI Chatbot": false,
      "FAQ": true,
      "Forum": true,
      "Optimized for SL Law": false,
      "User Profile": true,
      "Lawyer Contact": false,
      "Lawyer Distinction": false,
      "Jurisdiction Assessor": false,
      "Lawyer Directory": false
    }
  },
  {
    name: "Facebook Groups",
    features: {
      "AI Chatbot": false,
      "FAQ": false,
      "Forum": false,
      "Optimized for SL Law": false,
      "User Profile": true,
      "Lawyer Contact": false,
      "Lawyer Distinction": false,
      "Jurisdiction Assessor": false,
      "Lawyer Directory": false
    }
  },
  {
    name: "Yukkthiya",
    features: {
      "AI Chatbot": true,
      "FAQ": true,
      "Forum": true,
      "Optimized for SL Law": true,
      "User Profile": true,
      "Lawyer Contact": true,
      "Lawyer Distinction": true,
      "Jurisdiction Assessor": true,
      "Lawyer Directory": true
    }
  }
];

export function ComparisonSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why We Stand Out
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how Yukkthiya compares to other legal platforms in Sri Lanka
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto"
        >
          <table className="w-full min-w-[800px] border-collapse">
            <thead>
              <tr>
                <th className="p-4 text-left bg-white border-b-2 border-gray-200">Features</th>
                {competitors.map((competitor) => (
                  <th
                    key={competitor.name}
                    className={`p-4 text-center border-b-2 border-gray-200 ${
                      competitor.name === "Yukkthiya" ? "bg-[#7a0000] text-white" : "bg-white"
                    }`}
                  >
                    {competitor.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.keys(competitors[4].features).map((feature, index) => (
                <motion.tr
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="hover:bg-gray-50"
                >
                  <td className="p-4 border-b border-gray-200 font-medium">{feature}</td>
                  {competitors.map((competitor) => (
                    <td
                      key={`${competitor.name}-${feature}`}
                      className={`p-4 text-center border-b border-gray-200 ${
                        competitor.name === "Yukkthiya" ? "bg-[#7a0000]/5" : ""
                      }`}
                    >
                      {competitor.features[feature] ? (
                        <Check className={`h-5 w-5 mx-auto ${
                          competitor.name === "Yukkthiya" ? "text-[#7a0000]" : "text-green-600"
                        }`} />
                      ) : (
                        <span className="block w-5 h-5 mx-auto" />
                      )}
                    </td>
                  ))}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}