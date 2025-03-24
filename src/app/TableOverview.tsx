import Image from "next/image";

const TableOverview = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 w-full ">
      {/* Bảng Thông Tin */}
      <div className="overflow-x-auto md:w-1/2">
        <table className="w-full border border-gray-300 text-sm">
          <thead>
            <tr className="bg-teal-800 text-white">
              <th className="px-4 py-2 text-left">Tên dự án</th>
              <th className="px-4 py-2 text-left">
                Khu nhà ở cao cấp Vạn Thuận – Tây Thăng Long
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Tên thương mại", "JADE LAKE RESIDENCE"],
              [
                "Vị trí dự án",
                "Lô đất số TT-07, đường Tây Thăng Long, phường Tây Tựu, quận Bắc Từ Liêm, TP Hà Nội",
              ],
              ["Chủ đầu tư", "Công Ty TNHH Sản Xuất – Thương Mại Vạn Thuận"],
              ["Quy mô dự án", "1,582ha"],
              [
                "Sản Phẩm",
                "Liền kề: 82 căn\nBiệt thự: 08 căn\nThiết kế: 06 tầng nổi và 01 tầng hầm\nDiện tích: 102m2 – 160m2-200m2",
              ],
              [
                "Hoàn thiện",
                "Xây thô, hoàn thiện mặt ngoài (bao gồm hệ thống cửa nhôm và mái che)",
              ],
              ["Hình thức sở hữu", "Sổ đỏ lâu dài"],
              ["Thời gian mở bán", "Quý IV/2024"],
            ].map(([title, content], index) => (
              <tr key={index} className="border-t border-gray-300">
                <td className="px-4 py-2 font-medium bg-gray-100">{title}</td>
                <td className="px-4 py-2 whitespace-pre-line">{content}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Hình ảnh */}
      <div className="md:w-1/2 flex justify-center items-center overflow-hidden">
        <Image
          src="/images/Overview-2.png"
          alt="Phối cảnh dự án Jade Lake"
          width={600}
          height={400}
          className="shadow-lg shadow-lg object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default TableOverview;
