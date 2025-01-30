import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { MdPhoneInTalk } from "react-icons/md";
import { Input, Button } from "antd";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginData = {
      phoneNumber,
      password,
    };

    try {
      const response = await fetch("https://your-backend-api.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful:", data);
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="mt-32 flex items-center justify-center p-4">
      <div className="w-full max-w-[550px] rounded-lg p-8">
        <div className="flex justify-between">
          <div>
            <h1 className="text-2xl font-bold">Avtorizatsiya</h1>
            <p className="text-gray-600 mb-6">
              Xizmatlardan foydalanish uchun tizimga kiring.
            </p>
          </div>
          <div>
            <IoIosCloseCircle
              size={30}
              className="cursor-pointer text-gray-500 hover:text-gray-700"
            />
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              prefix={<MdPhoneInTalk size={22} className="text-gray-500" />}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="+998"
              className="mt-2"
              required
            />
          </div>

          <div>
            <Input.Password
              placeholder="Parol"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2"
              required
            />
          </div>

          <Button type="primary" htmlType="submit" className="w-full #5D5DFE ">
            Avtorizatsiya
          </Button>
        </form>

        <div className="flex items-center justify-between">
          <div className="mt-6 text-center">
            <a
              href="/forgot-password"
              className="text-sm text-gray-600 hover:underline"
            >
              Parolni unitdingizmi?
            </a>
          </div>
          <div className="mt-4 text-center">
            <a
              href="/register"
              className="text-sm text-gray-600 hover:underline"
            >
              Registratsiya
            </a>
          </div>
        </div>

        <p className="mt-6 text-xs text-gray-500 text-center">
          Rojyxatdan o'tishni davom ettirish orqali men shaxsiy ma'lumotlarni
          qayta ishlash siyosati va ommaviy taklif bilan roziligimni
          tasdiqlayman.
        </p>
      </div>
    </div>
  );
};

export default Login;
