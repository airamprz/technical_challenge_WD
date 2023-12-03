import { useState, useEffect } from "react";
import axios from "axios";

const PhoneList = ({ onSelectPhone }) => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/phones");
        setPhones(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 p-8 rounded shadow-md">
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {phones.map((phone) => (
            <li
              key={phone.id}
              onClick={() => onSelectPhone(phone)}
              className="cursor-pointer p-4 border border-gray-200 rounded transition-transform hover:scale-105"
            >
              <div className="flex items-center justify-between mb-2">
                <p className="text-lg font-semibold">{phone.name}</p>
                <span className="text-gray-600">${phone.price}</span>
              </div>
              <img
                src={phone.imageFileName}
                alt={phone.name}
                className="w-full h-32 object-cover mb-2 rounded"
              />
              <p className="text-sm text-gray-500">{phone.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PhoneList;
