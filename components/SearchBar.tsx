"use client";
import Image from "next/image";
import { useState } from "react";
import { SearchManufacturer } from "./";
import { SearchBarProps } from "@/types";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
   return (
      <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
         <Image
            src={"/magnifying-glass.svg"}
            alt="magnifying glass"
            width={40}
            height={40}
            className={`object-contain ${otherClasses}`}
         />
      </button>
   );
};

const SearchBar = ({ setManufacturer, setModel }: SearchBarProps) => {
   const [searchManufacturer, setSearchManufacturer] = useState("");

   const [SearchModel, setSearchModel] = useState("");

   const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (searchManufacturer === "" && SearchModel === "") {
         return alert("Please fill the search bar");
      }

      setModel(SearchModel);
      setManufacturer(searchManufacturer);
   };

   return (
      <form className="searchbar" onSubmit={handleSearch}>
         <div className="searchbar__item">
            <SearchManufacturer
               selected={searchManufacturer}
               setSelected={setSearchManufacturer}
            />

            <SearchButton otherClasses="sm:hidden" />
         </div>

         <div className="searchbar__item">
            <Image
               src="/model-icon.png"
               alt="Car modal"
               width={25}
               height={25}
               className="absolute w-[20px] h-[20px] ml-4"
            />
            <input
               type="text"
               name="model"
               value={SearchModel}
               onChange={(e) => setSearchModel(e.target.value)}
               placeholder="Tiguan"
               className="searchbar__input"
            />
            <SearchButton otherClasses="sm:hidden" />
         </div>

         <SearchButton otherClasses="max-sm:hidden" />
      </form>
   );
};

export default SearchBar;
