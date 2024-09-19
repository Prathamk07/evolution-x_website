import React from "react"
import share from "../../assets/share.svg"

export default function index() {
  return (
    <div className="mx-20 -mb-20 -mt-24">
      <div className="inline-flex w-full flex-col gap-20">
        <div className="inline-flex w-full rounded-3xl border border-[#2a2828] bg-[#070505] p-16">
          <div className="inline-flex w-full flex-col gap-14">
            <div className="flex flex-col gap-12">
              <div className="inline-flex items-center justify-between">
                <div className="text-xl text-white">
                  <span>9 August 2024 • </span>
                  <span className="font-light">Author: Joey Huab</span>
                </div>
                <img
                  src={share}
                  className="relative size-7 cursor-pointer"
                  alt="share"
                />
              </div>
              <div className="text-5xl text-white">
                Our plans with Android 15 QPR1 update.
              </div>
            </div>
            <div className="flex h-96 flex-col gap-8">
              <div className="inline-flex h-44 items-center justify-center rounded-2xl bg-white px-80 py-16">
                <div className="text-3xl text-[#363232]/50">
                  Image if any...
                </div>
              </div>
              <div className="text-xl text-white">content </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
