import React from "react";

export default function grid() {
  return (
    <div className="w-max_width m-auto py-10">
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 sm:mt-20">
        <div className="rounded-xl md:col-span-2 flex flex-col bg-slate-100">
          <div className="max-w-2xl px-5 py-8 pb-0 sm:py-10 lg:p-8">
            <h1 className="pb-2.5 text-sm sm:text-base font-medium">lorem</h1>
            <p className="text-xs leading-6 sm:text-sm opacity-70 max-w-md">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus excepturi saepe praesentium sunt. Numquam distinctio
              odio quo nostrum iusto voluptas, laudantium necessitatibus
              laboriosam pariatur nesciunt a? Eum, saepe ipsa. Nulla.
            </p>
          </div>
          <div className="w-full relative hidden md:grid grid-cols-4 gap-5 pt-4 p-8 rounded-highnote">
            <div className="col-span-1">
              <img
                className="w-full h-80 object-cover object-center rounded-xl"
                src="/hero/heroimg.jpg"
                alt=""
              />
            </div>
            <div className="col-span-2">
              <img
                className="w-full h-80 object-cover object-center rounded-xl"
                src="/hero/heroimg.jpg"
                alt=""
              />
            </div>
            <div className="col-span-1">
              <img
                className="w-full h-80 object-cover object-center rounded-xl"
                src="/hero/heroimg.jpg"
                alt=""
              />    
            </div>
          </div>
        </div>
        <div className="rounded-xl col-span-1 flex flex-col  pt-4 bg-slate-100 p-8">
          <h1 className="pb-2.5 text-sm sm:text-base font-medium ">lorem</h1>
          <p className="text-xs leading-6 sm:text-sm opacity-70 max-w-md pb-2.5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            vitae, consequatur cum atque obcaecati optio temporibus iusto libero
            impedit explicabo consequuntur nihil dolorum voluptatum a dolorem
            quasi aperiam ad assumenda!
          </p>
          <div className="flex h-full flex-col justify-center overflow-hidden">
            <img
              className="w-full h-80 object-cover object-center rounded-xl"
              src="/hero/heroimg.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="rounded-xl col-span-1 flex flex-col bg-slate-100 pt-4 p-8">
          <h1 className="pb-2.5 text-sm sm:text-base font-medium">lorem</h1>
          <p className="text-xs leading-6 sm:text-sm opacity-70 max-w-md pb-2.5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            vitae, consequatur cum atque obcaecati optio temporibus iusto libero
            impedit explicabo consequuntur nihil dolorum voluptatum a dolorem
            quasi aperiam ad assumenda!
          </p>
          <div className="flex h-full flex-col justify-center overflow-hidden">
            <img
              className="w-full h-80 object-cover object-center rounded-xl"
              src="/hero/heroimg.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
