import postbg from "../../assets/postbg.png"
import avatar from "../../assets/avatar.png"
import { Link } from "react-router-dom"

export default function index() {
  return (
    <div className="mx-4 flex flex-col items-center justify-center gap-20 md:mx-16">
      <div className="inline-flex flex-col items-center justify-center">
        <p className="text-4xl font-bold md:text-6xl">
          EvolutionX <span className="text-[#afbdf3]">Blog</span>
        </p>
      </div>
      <div className="flex w-full flex-col gap-10 rounded-3xl bg-black px-2 py-8 md:px-14 md:pb-16">
        <div className="inline-flex h-9 items-center">
          <hr className="w-9 rotate-90 border-2 border-[#6487fb]" />
          <p className="text-2xl font-semibold">
            <span className="text-[#6487fb]">LATEST</span> POSTS
          </p>
        </div>
        {/* Blog component */}
        <div className="posts mx-3 grid gap-6 md:mx-20 md:grid-cols-2 md:gap-16">
          {Array(10)
            .fill({ blogId: "blog1" })
            .map((blognum, index) => (
              <Link to={`/blog/${blognum.blogId}`} key={index}>
                <div
                  className="relative flex h-[240px] flex-col items-center justify-center rounded-3xl p-8 ring ring-slate-500/10 duration-100 ease-linear hover:scale-105"
                  key={index}
                >
                  <img
                    src={postbg}
                    alt="postbg"
                    fill
                    className="absolute z-0 h-full w-full rounded-3xl object-cover"
                  />
                  <div className="z-40 inline-flex flex-grow flex-col justify-between">
                    <div className="inline-flex gap-3">
                      <img src={avatar} alt="postbg" />
                      <div className="inline-flex flex-col">
                        <p className="text-xl">Joey</p>
                        <p className="text-xl">09 August 2024</p>
                      </div>
                    </div>
                    <p className="text-2xl font-bold">
                      Our plans with Android 15 QPR1 update.
                    </p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}
