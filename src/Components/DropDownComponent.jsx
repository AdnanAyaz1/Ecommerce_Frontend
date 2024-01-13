import { useNavigate } from "react-router-dom";

const DropDownComponent = ({ categories }) => {
  const navigate = useNavigate();
  return (
    <div className="absolute bg-white rounded-lg bottom-[-170px] shadow-xl py-4 px-8 z-30 w-[150px]">
      {categories.map((cat) => (
        <h1
          className="text-gray-500 hover:cursor-pointer hover:text-orange-600 hover:underline-offset-8 hover:underline mb-2"
          key={cat.name}
          onClick={() => navigate("/shop", { state: { cat: cat.value } })}
        >
          {cat.name}
        </h1>
      ))}
    </div>
  );
};

export default DropDownComponent;
