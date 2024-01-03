import { Fragment } from "react";

import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  result,
  tabs,
  people,
  userNavigation,
  navigation,
  user,
} from "../../components/Seed/Tabledata";
import TableNav from "./TableNav";
import TableStats from "./TableStats";
import Table from ".";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <>
      <div className="h-screen w-4/5  border-2 font-thin bg-white">
        <TableNav />
        <div className="py-10">
          <header>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
                Overview
              </h1>
              <h2>As of December 11,2008,8:00 Am PT</h2>
            </div>
          </header>
          <main>
            <div className="mx-auto h-full max-w-6xl sm:px-6 lg:px-8">
              <TableStats />
              <Table/>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
