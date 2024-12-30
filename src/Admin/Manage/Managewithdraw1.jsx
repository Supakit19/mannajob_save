import React from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Component/Navbar";

export default function ManageWithdraw1() {
  const navigate = useNavigate();

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

      <header className="w-full py-4 px-4 md:px-8 flex justify-center">
        <h1 className="font-bold text-3xl text-white">เบิกเงิน</h1>
      </header>

      <main className="w-full flex-grow flex items-center justify-center px-4 md:px-8 py-6">
        <div className="w-full max-w-lg bg-black/40 rounded-lg p-6 shadow-lg">
          <div className="mb-6">
            <p className="text-2xl font-bold text-white">กิตติพล อินมูล</p>
            <p className="text-lg text-gray-300">งาน : ตัดอ้อยแมนเช็ค FPS</p>
            <p className="text-2xl font-semibold mt-2 text-white">
              ยอดเงินสุทธิ : <span className="text-green-400">20000.00</span>
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-lg font-medium text-white mb-1">
                ชื่อ
              </label>
              <input
                type="text"
                placeholder="กรอกชื่อ"
                className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-white mb-1">
                งาน
              </label>
              <input
                type="text"
                placeholder="กรอกงาน"
                className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-white mb-1">
                เงินเดือน/ตั๋ว
              </label>
              <input
                type="text"
                placeholder="กรอกเงินเดือน/ตั๋ว"
                className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-white mb-1">
                ประเภทเงินเดือน
              </label>
              <input
                type="text"
                placeholder="กรอกประเภทเงินเดือน"
                className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
          </div>

          <div className="mt-8 flex justify-end gap-4">
            <button
              onClick={() => navigate("/manage")}
              className="px-4 py-2 bg-gray-700 text-lg text-white rounded-lg hover:bg-gray-600 transition font-medium"
            >
              กลับ
            </button>
            <button
              onClick={handleSubmit}
              className="px-6 py-2 bg-green-500 text-lg text-white rounded-lg hover:bg-green-600 transition font-medium"
            >
              ยืนยัน
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
