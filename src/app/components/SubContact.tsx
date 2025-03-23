import { Facebook, Linkedin, Mail, Twitter } from "lucide-react";

export default function SubContact() {
  return (
    <div className="max-w-6xl mx-auto pt-6">
      <p className="italic text-lg">
        Mọi chi tiết vui lòng liên hệ:{" "}
        <span className="font-semibold">09.1111.3319</span> hoặc truy cập
        Website thông tin dự án Vlasta – Thủy Nguyên{" "}
        <a
          href="https://vlastahaiphongg.com"
          className="text-blue-500 italic hover:underline"
        >
          https://vlastahaiphongg.com
        </a>
      </p>

      {/* Dấu phân cách đặt phía trên icon */}
      <div className="mt-6 flex justify-center">
        <div className="h-0.5 w-10 bg-gray-300"></div>
      </div>

      {/* Icon mạng xã hội */}
      <div className="mt-4 flex items-center justify-center space-x-4 text-gray-500">
        <a
          href="#"
          className="p-2 border rounded-full transition-colors hover:text-blue-500"
        >
          <Facebook className="w-3 h-3" />
        </a>
        <a
          href="#"
          className="p-2 border rounded-full transition-colors hover:text-blue-500"
        >
          <Twitter className="w-3 h-3" />
        </a>
        <a
          href="#"
          className="p-2 border rounded-full transition-colors hover:text-blue-500"
        >
          <Mail className="w-3 h-3" />
        </a>

        <a
          href="#"
          className="p-2 border rounded-full transition-colors hover:text-blue-500"
        >
          <Linkedin className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
