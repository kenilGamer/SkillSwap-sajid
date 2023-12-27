import { MdEdit } from "react-icons/md";
const Profile = () => {
  return (
    <>
     <div className="w-full h-full bg-gray-100 p-7 ">
        <div className="flex text-center"> 
          <img src="/public/logo.jpg" width={50} alt="" />
          <h1 className="text-3xl font-extrabold py-0 text-center px-4 ">your profile</h1>
        </div>
        <div className="w-[40%] my-10 h-36 m-12 flex">
          <div className="h-full columns-auto">
            <img className="w-full h-full object-cover rounded-md" src="/public/assets/Face 1.png" alt="" />
          </div>
          <div className=" mx-3 w-64 ">
           <div className="flex items-center gap-5">
           <h1 className="text-xl font-bold">username </h1>
            <span><MdEdit/></span>
           </div>
            <div> <h6 className="font-bold text-xs mb-3">[Designation]</h6></div>
            <div className="flex gap-9 md-3">
              <h4 className="opacity-70">Username</h4><p>abcd1234</p>
            </div>
            <div className="flex gap-9 md-3">
              <h4 className="opacity-70">Country</h4><p>India</p>
            </div>
            <div className="flex gap-9 md-3">
              <h4 className="opacity-70">Website</h4><a href="https://godcrafts.fun/">https://godcrafts.fun/</a>
            </div>
          </div>
        </div>
        <div className="w-full h-52">
          <div className="flex items-center gap-2 mb-4">
            <h1 className="text-2xl font-bold">SKILLS </h1>
            <samp><MdEdit/></samp>
          </div>
          <div className="w-8/12 flex flex-wrap gap-3">
              <button className="border-solid px-4 py-2 border-b-slate-800 border-l-slate-500 border-t-yellow-500 border-r-yellow-300 rounded-3xl border-2"> SKILLS 1</button>
              <button className="border-solid px-4 py-2 border-b-slate-800 border-l-slate-500 border-t-yellow-500 border-r-yellow-300 rounded-3xl border-2"> SKILLS 2</button>
              <button className="border-solid px-4 py-2 border-b-slate-800 border-l-slate-500 border-t-yellow-500 border-r-yellow-300 rounded-3xl border-2"> SKILLS 3</button>
              <button className="border-solid px-4 py-2 border-b-slate-800 border-l-slate-500 border-t-yellow-500 border-r-yellow-300 rounded-3xl border-2"> SKILLS 4</button>
              <button className="border-solid px-4 py-2 border-b-slate-800 border-l-slate-500 border-t-yellow-500 border-r-yellow-300 rounded-3xl border-2"> SKILLS 5</button>
              <button className="border-solid px-4 py-2 border-b-slate-800 border-l-slate-500 border-t-yellow-500 border-r-yellow-300 rounded-3xl border-2"> SKILLS 6</button>
              <button className="border-solid px-4 py-2 border-b-slate-800 border-l-slate-500 border-t-yellow-500 border-r-yellow-300 rounded-3xl border-2"> SKILLS 7</button> 
              <button className="border-solid px-4 py-2 border-b-slate-800 border-l-slate-500 border-t-yellow-500 border-r-yellow-300 rounded-3xl border-2"> SKILLS 8</button>
              <button className="border-solid px-4 py-2 border-b-slate-800 border-l-slate-500 border-t-yellow-500 border-r-yellow-300 rounded-3xl border-2"> SKILLS 9</button>
              <button className="border-solid px-4 py-2 border-b-slate-800 border-l-slate-500 border-t-yellow-500 border-r-yellow-300 rounded-3xl border-2"> SKILLS 10</button>
              <button className="border-solid px-4 py-2 border-b-slate-800 border-l-slate-500 border-t-yellow-500 border-r-yellow-300 rounded-3xl border-2"> SKILLS 11</button>
              <button className="border-solid px-4 py-2 border-b-slate-800 border-l-slate-500 border-t-yellow-500 border-r-yellow-300 rounded-3xl border-2"> SKILLS 12</button>
              <button className="border-solid px-4 py-2 border-b-slate-800 border-l-slate-500 border-t-yellow-500 border-r-yellow-300 rounded-3xl border-2"> SKILLS 13</button>
              <button className="border-solid px-4 py-2 border-b-slate-800 border-l-slate-500 border-t-yellow-500 border-r-yellow-300 rounded-3xl border-2"> SKILLS 14</button>
         
          </div>
        </div>
        <div className="">

        </div>
     </div>
    </>
  )
}

export default Profile