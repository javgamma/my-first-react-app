import React, { useState } from 'react'
import {Minus, Pointer} from 'lucide-react'
import { Plus } from 'lucide-react';
import {RefreshCw} from 'lucide-react'


const CounterClicker = () => {
 const [counter, setCounter]= useState(4);

 const add = () =>{
  setCounter(counter +1)
 }

 const substract =() =>{
  if(counter>0)
  setCounter (counter -1)
 }
 const refresh = () =>{
  setCounter (0)
 }




  return (
    <div className="flex flex-col h-[400px] items-center box-border p-3">
      <div className="flex justify-center items-center gap-5 w-[250px] h-[50px] bg-gray-600 text-white box-border px-5 rounded-t-md border">
        <Pointer className=" flex w-8 h-8 items-center " />
        <h2 className="text-4xl">Clicker</h2>
      </div>

      <div className="w-[250px] h-[300px] p-4 flex flex-col justify-between rounded-b-md border-x border-b">
        <div className="w-[100%] h-[350px] text-7xl flex justify-center items-center border-x-[1px] border-t-[1px] ">{counter}</div>
        <div className='flex'>
          <button className='flex bg-green-600 w-[33%] h-16 rounded-lg justify-center items-center' onClick={add}><Plus/></button>
          <button className='flex  bg-yellow-400 w-[33%] h-16 rounded-lg justify-center items-center' onClick={refresh}><RefreshCw/></button>
          <button className='flex  bg-red-600 w-[33%] h-16 rounded-lg justify-center items-center' onClick={substract}><Minus/></button>
        </div>
      </div>
    </div>
  );
}

export default CounterClicker
