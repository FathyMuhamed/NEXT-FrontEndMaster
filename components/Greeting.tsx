import React from 'react';
import { delay } from "@/lib/async";
import { getUserFromCookies } from "@/lib/auth"
import { cookies } from "next/headers"
import Card from './Card';
import Button from './Button';

const getData = async () => {
  await delay(5000);
  const user = await getUserFromCookies(cookies());
  return user;

}

const Greetings = async () => {
  const user = await getData();
  return (
    <React.Fragment>
      <Card className="w-full py-4 relative">
        <div className="mb-4">
          <h1 className="text-3xl text-gray-700 font-bold mb-4">
            Hello, {user?.firstName}!
          </h1>
          <h4 className="text-xl text-gray-400">
            Check your daily tasks and schedule
          </h4>
        </div>
        <div>
          <Button size="large">Todays Schedule</Button>
        </div>
      </Card>
    </React.Fragment>
  );
}

export default Greetings;