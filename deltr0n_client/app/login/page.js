'use client'
import Link from "next/link";
import { useState } from "react";
import { FaFacebookF, FaGithub, FaGoogle, FaRegEnvelope } from "react-icons/fa";
import {MdLockOutline} from "react-icons/md";


export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-black">
      <div className="bg-white rounded-2xl text-black shadow-2xl flex w-2/3 max-w-4xl">
        <div className="w-3/5 p-5">
          <div className="text-left font-bold">
            <span className="text-blue-900">PCUnion</span>
          </div>
          <div className="py-10">
            <h2 className="text-3xl font-bold text-blue-900 mb-2">
              Sign in to Account
            </h2>
            <div className="border-2 w-10 border-blue-900 inline-block mb-2"></div>
            <div className="flex justify-center my-2">
              <a
                href="#"
                className="border-2 border-gray-200 rounded-full p-3 mx-1"
              >
                <FaFacebookF className="text-sm" />
              </a>
              <a
                href="#"
                className="border-2 border-gray-200 rounded-full p-3 mx-1"
              >
                <FaGoogle className="text-sm" />
              </a>
              <a
                href="#"
                className="border-2 border-gray-200 rounded-full p-3 mx-1"
              >
                <FaGithub className="text-sm" />
              </a>
            </div>{" "}
            {/*Social login section */}
            <p className="text-gray-400 my-3">or use your ruc</p>
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 w-64 p-2 flex items-center">
                <FaRegEnvelope className="text-gray-400 m-2 " />
                <input type="text" placeholder="RUC" name ='ruc' className="bg-gray-100 outline-none text-sm 
                w-full" />
              </div>
              <div className="bg-gray-100 w-64 p-2 flex items-center mt-3">
                <MdLockOutline className="text-gray-400 m-2 " />
                <input type="password" placeholder="password" name = 'contrasenha'className="bg-gray-100 outline-none text-sm 
                w-full" />
              </div>
              <div className="flex justify-between w-64 mb-5 mt-3">
                <label className="flex items-center text-xs">
                  <input type="checkbox" name="remember" className="mr-1"/> Remember me
                </label>
                <a href="#" className="text-xs">Forgot password?</a>
              </div>
              <a
            href="#"
            className="border-2 text-blue-900 border-blue-900 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-900 hover:text-white"
          >
            Sign in
          </a> 
            </div>
          </div>
        </div>
        {/* Login section */}
        <div className="w-2/5 bg-blue-900 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
          <h2 className="text-3xl font-bold mb-2"> Hello, friend!</h2>
          <div className="border-2 w-10 border-white inline-block mb-2"></div>
          <p className="mb-10">
            Fill up personal information and start journey with us
          </p>
          <a
            href="/signup"
            className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-blue-900"
          >
            Sign up
          </a>
        </div>
        {/* Signup section */}
      </div>
    </div>
  );
}



