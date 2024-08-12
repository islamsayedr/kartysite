"use client";
import Card from "../molecules/Card";
import Card1 from "../molecules/Card1";
import Card2 from "../molecules/Card2";
import { holders } from "../../lib/holder";
import { InputField } from "../atoms/Input";
import { useState } from "react";

export default function CardList() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSaech = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  return (
    <section className="flex  px-4 sm:px-20 py-6">
      <div className="container flex flex-col gap-6 m-auto justify-center items-center">
        <InputField
          label=""
          placeholder="ابحث..."
          name="search"
          type="text"
          value={searchTerm}
          handleValueChange={handleSaech}
          err={""}
        />
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
          {holders.map((holderData, index) => {
            return <Card key={index} holder={holderData} />;
          })}
        </ul>
      </div>
    </section>
  );
}
