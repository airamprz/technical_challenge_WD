import { useState } from "react";
import PhoneList from "./components/PhoneList";
import PhoneDetails from "./components/PhoneDetails";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: -100, y: 0 },
  visible: { opacity: 1, x: 0, y: 0 },
};

function App() {
  const [selectedPhone, setSelectedPhone] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectPhone = (phone) => {
    setSelectedPhone(phone);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedPhone(null);
    setIsModalOpen(false);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 1 }}
      className="bg-gray-100 min-h-screen flex items-center justify-center"
    >
      <div className="bg-white p-8 rounded shadow-md w-full max-w-screen-md">
        <h1 className="text-3xl font-bold mb-6">Phone Catalog</h1>
        <div className="flex">
          <PhoneList onSelectPhone={handleSelectPhone} />
        </div>
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
            <div className="p-8 rounded shadow-md max-w-screen-md">
              <PhoneDetails phone={selectedPhone} onClose={handleCloseModal} />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default App;
