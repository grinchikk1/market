import { useState } from "react";
import Switch from "../../components/Switch";
import Buyer from "../../components/Registration/Buyer";
import Supplier from "../../components/Registration/Supplier";

export default function RegisterPage() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="relative flex items-center justify-center pt-10 ">
      <Switch value={isChecked} onChange={handleChange} />
      {!isChecked ? <Buyer /> : <Supplier />}
    </div>
  );
}
