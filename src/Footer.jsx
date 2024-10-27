const Footer = () => (
  <footer className="mt-10">
    <div className="w-11/12 m-auto relative -mb-36 z-10">
      <div className="border rounded-3xl p-5 bg-[#FFFFFF26]">
        <div className="border-2 rounded-2xl bg-gradient-to-r from-blue-100 to-yellow-100 border-gray-300  py-10 flex flex-col items-center text-center gap-3">
          <h1 className='text-3xl font-bold'> Subscribe to our Newsletter </h1>
          <p className="text-xl text-gray-500"> Get the latest updates and news right in your inbox! </p>
          <div className="flex gap-3">
            <input type="email" placeholder="Enter your email" className="rounded-xl border border-gray-300 py-3 px-5" />
            <button className="rounded-xl px-5 bg-gradient-to-tr from-purple-400 to-yellow-500 font-bold"> Subscribe </button>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-black mt-6 pt-44">
      <div className="w-11/12 m-auto flex flex-col justify-center items-center text-white gap-12">
        <img src="../../src/assets/logo-footer.png" alt="" />
        <div className="w-full flex items-start justify-between">
          <div className="w-1/3 flex flex-col gap-4">
            <h2 className="font-bold"> About Us </h2>
            <p className="drak-6"> We are a passionate team <br /> dedicated to providing the best <br /> services to our customers. </p>
          </div>
          <div className="w-1/3 flex flex-col gap-4">
            <h2 className="font-bold"> Quick Links </h2>
            <p className="drak-6">Home <br />Services <br />About <br />Contact</p>
          </div>
          <div className="w-1/3 flex flex-col gap-4">
            <h2 className="font-bold"> Subscribe </h2>
            <p className="drak-6"> Subscribe to our newsletter for the <br /> latest updates. </p>
            <div className="flex">
              <input type="email" placeholder="Enter your email" className="rounded-l-xl border border-gray-300 py-3 px-5" />
              <button type="submit" className="rounded-r-xl text-black px-5 bg-gradient-to-tr from-purple-400 to-yellow-500 font-bold"> Subscribe </button>
            </div>
          </div>
        </div>
        <p className="drak-6 border-t border-gray-200 p-6 w-full text-center"> @2024 Your Company All Rights Reserved. </p>
      </div>
    </div>
  </footer>
);

export default Footer;
