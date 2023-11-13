"use client";

import { useState } from "react";
import Button from "@/app/ui/Button";
import { AtSymbolIcon } from "@heroicons/react/24/outline";
import { mockData } from "@/app/lib/products-data";
import Image from 'next/image';
import Link from 'next/link';

const Admin = () => {
  const [login, setLogin] = useState(false);

  const handleLogin = () => setLogin(true);

  return (
    <>
      {login ? (
        <div>
          
          <Link href={"/admin/new-product"}>
          New Product
          </Link>
              <div className="inline-block min-w-full align-middle">
                {mockData?.map((product) => (
                  <div
                    key={product.slug}
                    className="mb-2 w-full rounded-md bg-white p-4"
                  >
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <div className="mb-2 flex items-center"></div>
                        <p className="text-sm text-gray-500">{product.slug}</p>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-between border-b py-5">
                      <div className="flex w-1/2 flex-col">
                        <p className="font-medium">{product.title}</p>
                      </div>
                      <div className="flex w-1/2 flex-col">
                        <p className="font-medium">${product.price}</p>
                      </div>
                    </div>
                    <div className="pt-4 text-sm">
                      <p>{product.description}</p>
                    </div>
                    <Image
                      alt="Sneaker Image"
                      className="aspect-[1/1] object-cover object-center"
                      src={`/imgs/products/${product.image_url}`}
                      width={250}
                      height={120}
                    />
                    <Button>Edit</Button>
                  </div>
                ))}
              
          </div>
        </div>
      ) : (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
          <div className="max-w-sm rounded-lg shadow-lg bg-white p-6 space-y-6 border border-gray-200 dark:border-gray-700">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">Login</h1>
              <p className="text-zinc-500 dark:text-zinc-400">
                NOT is admin admin
              </p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email">Email</label>
                <div className="relative">
                  <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    required
                  />
                  <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                </div>
                <div className="relative">
                  <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Enter your new password"
                    required
                  />
                  <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                </div>
                <Button onClick={handleLogin}>Login</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Admin;
