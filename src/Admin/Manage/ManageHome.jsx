import React from "react";
import Navbar from "../../Component/Navbar";
import { useNavigate } from "react-router-dom";

export default function ManageHome() {
  const navigate = useNavigate();

  const Gosalary = () => {
    navigate("/managesalary");
  };
  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-green-900 to-black font-sans text-white">
      <Navbar />

    
      <header className="w-full py-4 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="w-[50%] text-center">
          <button className="TITLENAV" data-text="Awesome">
            <span className="actual-text font-extrabold text-2xl">
              &nbsp;Manage User&nbsp;
            </span>
            <span
              aria-hidden="true"
              className="hover-text font-extrabold text-2xl"
            >
              &nbsp;Manage User&nbsp;
            </span>
          </button>
        </div>
      </header>


      <main className="w-full flex-grow flex items-center justify-center px-4 md:px-8 py-6">
        <div className="w-full max-w-5xl bg-black/40 rounded-lg p-6 md:p-8 shadow-lg">
          {/* User Info Section */}
          <section className="w-full flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-600 pb-4 mb-6">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <p className="text-xl md:text-2xl font-bold">กิตติพล อินมูล</p>
              <p className="text-sm md:text-md text-gray-300">
                งาน : ตัดอ้อยแมนเช็ค FPS
              </p>
            </div>
            <div className="w-full md:w-1/2 text-left md:text-right">
              <p className="text-xl md:text-2xl font-semibold">
                ยอดเงินสุทธิ : <span className="text-green-400">20000.00</span>
              </p>
            </div>
          </section>

         
          <section className="w-full flex flex-wrap justify-center items-center gap-4 mb-6">
            <button
              onClick={Gosalary}
              className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition font-medium"
            >
              จัดการเงินเดือน
            </button>
            <button className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition font-medium">
              เพิ่ม/ลดตั๋ว
            </button>
            <button className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition font-medium">
              เบิกเงิน
            </button>
            <button className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition font-medium">
              ประวัติเบิกเงิน
            </button>
            <button className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition font-medium">
              แก้ไข
            </button>
            <button className="px-4 py-2 bg-red-600 rounded hover:bg-red-500 transition font-medium">
              ลบ
            </button>
          </section>

        
          <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gray-800 p-5 rounded-lg shadow-md flex flex-col items-center">
              <p className="text-sm md:text-lg font-medium">เงินเดือน</p>
              <p className="text-lg md:text-2xl font-bold">200,000.00</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg shadow-md flex flex-col items-center">
              <p className="text-sm md:text-lg font-medium">เบิกเงิน</p>
              <p className="text-lg md:text-2xl font-bold">30,000.00</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg shadow-md flex flex-col items-center">
              <p className="text-sm md:text-lg font-medium">
                เงินเดือนหลังเบิก
              </p>
              <p className="text-lg md:text-2xl font-bold">170,000.00</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg shadow-md flex flex-col items-center">
              <p className="text-sm md:text-lg font-medium">ตั๋ว</p>
              <p className="text-lg md:text-2xl font-bold">20</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
