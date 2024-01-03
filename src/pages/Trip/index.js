import { useState } from "react";
import TripNavbar from "./TripNavbar";
import {people} from "../../components/Seed/Tripdata"
import TripInput from "./TripInput";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


export default function Deempathyzing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [active, setactive] = useState("Features");
  const [showPassword, setShowPassword] = useState(false);
  const [query, setQuery] = useState("");

  const [selected, setSelected] = useState(people[3]);
  const [selected1, setSelected1] = useState(people[1]);
  const [selected2, setSelected2] = useState(people[2]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const activelink = (id) => {
    setactive(id);
  };

  const filteredPeople =
    query === ""
      ? []
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div className="min-h-screen  w-screen">
       <header className=" w-full mx-auto h-1/2 ">
       <TripNavbar/>
        <div className="items-center text-gray-50 flex justify-center mt-20">
          <h1 className="text-4xl font-semibold">Where do you want to go?</h1>
        </div>
        <div className="mt-20 sm:mx-auto sm:w-full sm:max-w-[650px]">
         <TripInput/>
        </div>
      </header>
    </div>
  );
}
