import React from "react";
import { motion } from "framer-motion";

const Hobbies = () => {
  const hobbies = ["Personal Finance", "Researching", "Reading Books", "Troubleshooting"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
      className="w-full p-6 rounded-lg shadow-lg bg-black bg-opacity-20 hover:bg-opacity-30 transition duration-300"
    >
      <p className="text-sm text-designColor uppercase tracking-widest mb-1">Leisure</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Hobbies</h2>
      <div className="flex flex-col gap-4">
        {hobbies.map((hobby, i) => (
          <p key={i} className="text-base font-medium text-neutral-300">
            • {hobby}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

export default Hobbies;


// import React from 'react'
// import { motion } from 'framer-motion';

// const Hobbies = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1, transition: { duration: 0.5 } }}
//       className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
//     >
//       <div className="w-full lgl:w-1/2">
//         <div className="py-12 font-titleFont flex flex-col gap-4">
//           <p className="text-sm text-designColor tracking-[4px] uppercase">
//             Features
//           </p>
//           <h2 className="text-3xl md:text-4xl font-bold">Hobbies</h2>
//         </div>
//         <div className="flex flex-col gap-6">
//           <div className="overflow-x-hidden">
//             <p className="text-base uppercase font-medium">Personal Finance</p>
//           </div>
//           <div className="overflow-x-hidden">
//             <p className="text-base uppercase font-medium">Researching</p>
//           </div>
//           <div className="overflow-x-hidden">
//             <p className="text-base uppercase font-medium">Reading Books</p>
//           </div>
//           <div className="overflow-x-hidden">
//             <p className="text-base uppercase font-medium">Troubleshooting</p>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export default Hobbies