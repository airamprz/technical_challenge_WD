import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: -100, y: 0 },
  visible: { opacity: 1, x: 0, y: 0 },
};

const PhoneDetails = ({ phone, onClose }) => {
  if (!phone) {
    return (
      <p className="text-center text-gray-500">
        Select a phone to view details
      </p>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 1 }}
      className="bg-white p-8 rounded shadow-md"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">{phone.name}</h2>
        <button
          onClick={onClose}
          className="text-red-500 hover:text-red-700 focus:outline-none"
        >
          &#10006;
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <img
            src={phone.imageFileName}
            alt={phone.name}
            className="w-full h-64 object-cover mb-4 rounded"
          />
        </div>
        <div>
          <p>
            <span className="font-semibold">Manufacturer:</span>{" "}
            {phone.manufacturer}
          </p>
          <p>
            <span className="font-semibold">Color:</span> {phone.color}
          </p>
          <p>
            <span className="font-semibold">Screen:</span> {phone.screen}
          </p>
          <p>
            <span className="font-semibold">Processor:</span> {phone.processor}
          </p>
          <p>
            <span className="font-semibold">RAM:</span> {phone.ram}
          </p>
          <p className="mb-4">
            <span className="font-semibold">Price:</span> ${phone.price}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default PhoneDetails;
