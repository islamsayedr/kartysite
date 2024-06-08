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
        <ul className="flex flex-wrap gap-3 justify-center ">
          {holders.map((holder, index) => {
            const {
              theme,
              icons,
              rounded,
              holderName,
              holderTitle,
              holderLocation,
              holderEmail,
              holderPhone,
              color1,
            } = holder;

            if (theme == 0) {
              return (
                <Card
                  key={index}
                  rounded={rounded}
                  icons={icons}
                  id={`${index}`}
                  holderName={holderName}
                  holderTitle={holderTitle}
                  holderLocation={holderLocation}
                  holderEmail={holderEmail}
                  holderPhone={holderPhone}
                  color1={color1}
                />
              );
            } else if (theme == 1) {
              return (
                <Card1
                  key={index}
                  rounded={rounded}
                  icons={icons}
                  id={`${index}`}
                  holderName={holderName}
                  holderTitle={holderTitle}
                  holderLocation={holderLocation}
                  holderEmail={holderEmail}
                  holderPhone={holderPhone}
                  color1={color1}
                />
              );
            }else if (theme == 2) {
              return (
                <Card2
                  key={index}
                  rounded={rounded}
                  icons={icons}
                  id={`${index}`}
                  holderName={holderName}
                  holderTitle={holderTitle}
                  holderLocation={holderLocation}
                  holderEmail={holderEmail}
                  holderPhone={holderPhone}
                  color1={color1}
                />
              );
            }
          })}
        </ul>
      </div>
    </section>
  );
}
