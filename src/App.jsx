import React from "react";
import Button from "./components/Button";
import CreditCard from "./components/CreditCard";
import Rating from "./components/Rating";
import UserCard from "./components/UserCard";
import dataUser from "./data/dataUserCard.json";
import dataCreditCard from "./data/dataCreditCard.json";
import ButtonList from "./components/ButtonList";
import CounterClicker from "./components/CounterClicker";

const App = () => {
  console.log(dataUser);
  return (
    <>
      <p className=" flex w-50 h-14 text-[40px] font-bold justify-center ">
        Credit Cards
      </p>
      <div className="w-[100%] h-1200px flex flex-wrap gap-4 m-10">
        {dataCreditCard.map((card) => {
          return (
            <CreditCard
              key={card.id}
              type={card.type}
              number={card.number}
              expirationMonth={card.expirationMonth}
              expirationYear={card.expirationYear}
              bank={card.bank}
              owner={card.owner}
              cssClass={card.cssClass}
            />
          );
        })}
      </div>
      <div className="flex gap-3 justify-center flex-col">
        <p className=" flex w-50 h-14 text-[40px] font-bold justify-center ">
          User Cards
        </p>

        <div className="flex w-[100%] h-[900px] flex-wrap box-border gap-2 p-0 m-8">
          {dataUser.map((user) => {
            return (
              <UserCard
                key={user.id}
                name={user.name}
                rating={user.rating}
                gender={user.gender}
                job={user.job}
                city={user.city}
              />
            );
          })}
        </div>
      </div>

      <div className="flex flex-col items-center mt-10">
        <h1 className="text-4xl mb-5">Button List</h1>
        <ButtonList count={100} />
      </div>
      <CounterClicker />
    </>
  );
};

export default App;
