import React from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Component/Navbar";

export default function Managewithdraw() {
  const navigate = useNavigate();

  const backhome = () => {
    navigate("/manage");
  };

  const handleSubmit = () => {
    Swal.fire({
      title: "ยืนยันการบันทึกข้อมูล?",
      text: "กรุณายืนยันการเบิกเงินเดือน",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "ยืนยัน",
      cancelButtonText: "ยกเลิก",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("สำเร็จ!", "ข้อมูลได้ถูกบันทึกเรียบร้อย.", "success");
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-green-900 to-black font-sans text-white">
      <Navbar />

      <header className="w-full py-4 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="w-[50%] text-center">
          <button className="TITLENAV" data-text="Awesome">
            <span className="actual-text font-extrabold text-2xl">
              &nbsp;เบิกเงิน&nbsp;
            </span>
          </button>
        </div>
      </header>

      <main className="w-full flex-grow flex items-center justify-center px-4 md:px-8 py-6">
        <div className="w-full max-w-5xl bg-black/40 rounded-lg p-6 md:p-8 shadow-lg">
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

          <section className="w-full flex flex-wrap  items-center gap-4 mb-6">
            <button
              onClick={backhome}
              className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition font-medium"
            >
              กลับ
            </button>
          </section>

          <section className="pt-5 pl-20 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="bg-gray-800 p-5 rounded-lg shadow-md flex flex-col items-center justify-center">
              <p className="text-sm md:text-lg font-medium">เบิกเงิน</p>
            </div>
            <div className="flex flex-col col-span-3">
              <input
                className="mt-2 p-3 bg-gray-800 text-white rounded-lg border border-gray-600 md:text-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="กรอกจำนวนเงิน"
              />
            </div>
            <div className="flex justify-center items-center">
              <button
                type="submit"
                onClick={handleSubmit}
                className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-green-500 transition font-semibold w-full md:w-auto"
              >
                ยืนยัน
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
