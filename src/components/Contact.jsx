import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import {
  IoCallOutline,
  IoLocationOutline,
  IoMailOutline,
} from "react-icons/io5";

const Contact = () => {
  return (
    <div className="shadow-lg border border-[#fde047] py-3 px-4 mt-10">
      <h1 className="text-center text-3xl font-semibold font-roboto mt-6">
        Get In Touch
      </h1>
      <div className="w-52 h-[2px] bg-[#facc15] mx-auto mt-2 mb-6 rounded-full"></div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* form */}
        <div>
          <form>
            <div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <input
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full border p-2 outline-[#facc15] shadow-"
                  />
                </div>
                <div>
                  <input
                    name="email"
                    type="text"
                    placeholder="Email"
                    className="w-full border p-2 outline-[#facc15]"
                  />
                </div>
                <div>
                  <input
                    name="phone"
                    type="text"
                    placeholder="Phone"
                    className="w-full border p-2 outline-[#facc15]"
                  />
                </div>
                <div>
                  <input
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    className="w-full border p-2 outline-[#facc15]"
                  />
                </div>
              </div>
              <div className="mt-6">
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Your message"
                  className="w-full p-2 border"
                ></textarea>
              </div>
            </div>

            <div class="flex justify-center mt-4">
              <button className="flex justify-center items-center gap-2 bg-[#facc15] text-white px-4 py-2">
                <span>
                  <IoIosSend  />
                </span>{" "}
                Send Message
              </button>
            </div>
          </form>
        </div>
        {/* contact info */}
        <div>
          <div className="border-l-2 border-[#facc15] rounded-lg px-4">
            <div className="flex items-center gap-6">
              <span className="p-2 bg-[#f3f1f1] border hover:border hover:border-[#facc15] transition-transform duration-300 rounded-md">
                <IoCallOutline className="w-6 h-6 text-[#facc15] hover:text-black" />
              </span>
              <div>
                <p>Phone</p>
                <p className="font-roboto font-medium">+8801982845092</p>
              </div>
            </div>
          </div>
          <div className="border-l-2 border-[#facc15] rounded-lg px-4 my-6">
            <div className="flex items-center gap-6">
              <span className="p-2 bg-[#f3f1f1] border hover:border hover:border-[#facc15] transition-transform duration-300 rounded-md">
                <IoMailOutline className="w-6 h-6 text-[#facc15] hover:text-black" />
              </span>
              <div>
                <p>Email</p>
                <p className="font-roboto font-medium">
                  tamannaaktermoni51@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="border-l-2 border-[#facc15] rounded-lg px-4 my-6">
            <div className="flex items-center gap-6">
              <span className="p-2 bg-[#f3f1f1] border hover:border hover:border-[#facc15] transition-transform duration-300 rounded-md">
                <IoLocationOutline className="w-6 h-6 text-[#facc15] hover:text-black" />
              </span>
              <div>
                <p>Address</p>
                <p className="font-roboto font-medium">
                  Kishoreganj, Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </div>
          {/* social links */}
          <div>
            <h3 className="text-2xl font-roboto font-semibold text-[#facc15]">
              Follow me
            </h3>
            <div className="flex flex-row space-x-4 my-4">
              <a
                className="hover:text-[#facc15] hover:scale-125 transition duration-300"
                href="https://github.com/Tamanna5092"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                className="hover:text-[#facc15] hover:scale-125 transition duration-300"
                href="https://www.linkedin.com/in/tamanna51/"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                className="hover:text-[#facc15] hover:scale-125 transition duration-300"
                href="https://www.instagram.com/tamannaaktermoni51/"
              >
                <FaInstagram className="w-6 h-6 " />
              </a>
              <a
                className="hover:text-[#facc15] hover:scale-125 transition duration-300"
                href="https://www.facebook.com/tamannaaktermoni51"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                className="hover:text-[#facc15] hover:scale-125 transition duration-300"
                href="https://x.com/tamanna_51?s=09"
              >
                <FaXTwitter className="w-5 h-5 hover:text-[#facc15] transition duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
