"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";
import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
} from "lucide-react";
import api from "@/lib/api";
import Navbar from "@/components/Navbar";

type LoginData = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const router = useRouter();

  const [data, setData] = useState<LoginData>({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const email = data.email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) return "Please enter your email address.";
    if (!emailRegex.test(email)) return "Please enter a valid email address.";
    if (!data.password) return "Please enter your password.";

    return null;
  };

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    const validationError = validateForm();
    if (validationError) {
      toast.error(validationError);
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/api/auth/login", {
        email: data.email.trim().toLowerCase(),
        password: data.password,
      });

      const user = response.data?.data;

      toast.success(`Welcome back${user?.name ? `, ${user.name}` : ""}.`);

      setData({ email: "", password: "" });

      router.push(user?.mustChangePassword ? "/change-password" : "/");
    } catch (err: any) {
      const message =
        err?.response?.data?.message ||
        "Unable to sign in. Please check your credentials and try again.";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F8F3EA] text-[#3A101A]">
      <Navbar />

      <div className="grid min-h-[calc(100vh-96px)] grid-cols-1 lg:grid-cols-2">
        <section
          className="
            relative
            hidden
            overflow-hidden
            bg-[#350C17]
            lg:flex
            lg:flex-col
            lg:justify-between
            lg:px-[70px]
            lg:py-[60px]
          "
        >
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-[180px]
              -top-[180px]
              h-[520px]
              w-[520px]
              rounded-full
              bg-[#C59B27]/[0.07]
              blur-[30px]
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -bottom-[200px]
              -left-[150px]
              h-[450px]
              w-[450px]
              rounded-full
              bg-[#5D1728]/50
              blur-[40px]
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-[22px]
              border
              border-[#C59B27]/20
            "
          />

          <span
            aria-hidden="true"
            className="
              absolute
              left-[17px]
              top-[17px]
              h-[18px]
              w-[18px]
              border-l
              border-t
              border-[#C59B27]
            "
          />

          <span
            aria-hidden="true"
            className="
              absolute
              bottom-[17px]
              right-[17px]
              h-[18px]
              w-[18px]
              border-b
              border-r
              border-[#C59B27]
            "
          />

          <div className="relative z-10">
            <Link
              href="/"
              className="
                font-display
                text-[1.55rem]
                font-semibold
                uppercase
                tracking-[0.05em]
                text-[#F7E9C2]
              "
            >
              Machon Aleh Zayis
            </Link>

            <div className="mt-3 h-px w-[45px] bg-[#C59B27]" />
          </div>

          <div className="relative z-10 max-w-[590px]">
            <div
              className="
                mb-7
                flex
                items-center
                gap-3
                font-body
                text-[0.72rem]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#D0A63A]
              "
            >
              <span className="h-px w-[25px] bg-[#C59B27]" />
              A House of Torah Publishing
            </div>

            <h1
              className="
                font-display
                text-[4rem]
                font-normal
                leading-[0.98]
                text-[#F7E9C2]
                xl:text-[4.6rem]
              "
            >
              Your words.
              <br />
              <em className="italic text-[#D0A63A]">Your legacy.</em>
            </h1>

            <div className="my-8 h-[2px] w-[58px] bg-[#C59B27]" />

            <p
              className="
                max-w-[470px]
                font-body
                text-[1.05rem]
                leading-[1.75]
                text-[#D6C6C2]
              "
            >
              Access your publishing workspace and continue bringing your
              manuscript from first page to finished sefer.
            </p>
          </div>

          <div
            dir="rtl"
            className="
              relative
              z-10
              font-hebrew
              text-[1.45rem]
              text-[#C9BDB8]
            "
          >
            הוצאה לאור מרישא עד גמירא
          </div>
        </section>

        <section
          className="
            flex
            min-h-[calc(100vh-96px)]
            items-center
            justify-center
            bg-[#F8F3EA]
            px-6
            py-12
            sm:px-10
            lg:px-16
            xl:px-24
          "
        >
          <div className="w-full max-w-[440px]">
            <div className="mb-12 lg:hidden">
              <Link
                href="/"
                className="
                  font-display
                  text-[1.45rem]
                  font-semibold
                  uppercase
                  tracking-[0.04em]
                  text-[#4A1521]
                "
              >
                Machon Aleh Zayis
              </Link>

              <div className="mt-3 h-[2px] w-[42px] bg-[#C59B27]" />
            </div>

            <div className="mb-9">
              <span
                className="
                  mb-3
                  block
                  font-body
                  text-[0.72rem]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#9A741A]
                "
              >
                Member Access
              </span>

              <h2
                className="
                  font-display
                  text-[3rem]
                  font-normal
                  leading-none
                  text-[#3A101A]
                  sm:text-[3.35rem]
                "
              >
                Welcome back.
              </h2>

              <p
                className="
                  mt-4
                  font-body
                  text-[0.98rem]
                  leading-[1.6]
                  text-[#66575A]
                "
              >
                Sign in to access your account and publishing workspace.
              </p>
            </div>

            <form onSubmit={onSubmitHandler} noValidate className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="
                    mb-2
                    block
                    font-body
                    text-[0.76rem]
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-[#4A1521]
                  "
                >
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={17}
                    strokeWidth={1.4}
                    className="
                      absolute
                      left-0
                      top-1/2
                      -translate-y-1/2
                      text-[#A77B18]
                    "
                  />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={data.email}
                    onChange={onChangeHandler}
                    placeholder="you@example.com"
                    disabled={loading}
                    className="
                      h-[52px]
                      w-full
                      border-0
                      border-b
                      border-[#4A1521]/20
                      bg-transparent
                      pl-8
                      pr-2
                      font-body
                      text-[1rem]
                      text-[#3A101A]
                      outline-none
                      placeholder:text-[#9A8B8D]
                      focus:border-[#4A1521]
                      focus:ring-0
                      disabled:cursor-not-allowed
                      disabled:opacity-60
                    "
                  />
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="
                      font-body
                      text-[0.76rem]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-[#4A1521]
                    "
                  >
                    Password
                  </label>

                  <Link
                    href="/forgot-password"
                    className="
                      font-body
                      text-[0.75rem]
                      text-[#8B6816]
                      transition-colors
                      hover:text-[#4A1521]
                    "
                  >
                    Forgot password?
                  </Link>
                </div>

                <div className="relative">
                  <LockKeyhole
                    size={17}
                    strokeWidth={1.4}
                    className="
                      absolute
                      left-0
                      top-1/2
                      -translate-y-1/2
                      text-[#A77B18]
                    "
                  />

                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    value={data.password}
                    onChange={onChangeHandler}
                    placeholder="Enter your password"
                    disabled={loading}
                    className="
                      h-[52px]
                      w-full
                      border-0
                      border-b
                      border-[#4A1521]/20
                      bg-transparent
                      pl-8
                      pr-10
                      font-body
                      text-[1rem]
                      text-[#3A101A]
                      outline-none
                      placeholder:text-[#9A8B8D]
                      focus:border-[#4A1521]
                      focus:ring-0
                      disabled:cursor-not-allowed
                      disabled:opacity-60
                    "
                  />

                  <button
                    type="button"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    onClick={() => setShowPassword((value) => !value)}
                    className="
                      absolute
                      right-0
                      top-1/2
                      flex
                      -translate-y-1/2
                      items-center
                      justify-center
                      p-1
                      text-[#6B5B5E]
                      transition-colors
                      hover:text-[#4A1521]
                    "
                  >
                    {showPassword ? (
                      <EyeOff size={18} strokeWidth={1.4} />
                    ) : (
                      <Eye size={18} strokeWidth={1.4} />
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="
                  group
                  mt-2
                  flex
                  h-[54px]
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-[2px]
                  border
                  border-[#4A1521]
                  bg-[#4A1521]
                  font-body
                  text-[0.78rem]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#FFF9EF]
                  shadow-[0_10px_25px_rgba(74,21,33,0.15)]
                  transition-all
                  duration-200
                  hover:bg-[#310B13]
                  hover:shadow-[0_12px_30px_rgba(74,21,33,0.22)]
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#C59B27]/40
                  focus:ring-offset-2
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              >
                {loading ? (
                  <>
                    <span
                      className="
                        h-4
                        w-4
                        animate-spin
                        rounded-full
                        border-2
                        border-[#FFF9EF]/30
                        border-t-[#FFF9EF]
                      "
                    />
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign In
                    <ArrowRight
                      size={16}
                      strokeWidth={1.5}
                      className="
                        transition-transform
                        duration-200
                        group-hover:translate-x-1
                      "
                    />
                  </>
                )}
              </button>
            </form>

            <div className="my-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-[#4A1521]/12" />
              <span
                className="
                  font-display
                  text-[0.85rem]
                  italic
                  text-[#9A8B8D]
                "
              >
                or
              </span>
              <div className="h-px flex-1 bg-[#4A1521]/12" />
            </div>

            <p className="text-center font-body text-[0.9rem] text-[#66575A]">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="
                  font-semibold
                  text-[#4A1521]
                  underline
                  decoration-[#C59B27]
                  decoration-1
                  underline-offset-4
                  transition-colors
                  hover:text-[#A77B18]
                "
              >
                Create an account
              </Link>
            </p>

            <div
              className="
                mt-10
                border-t
                border-[#4A1521]/10
                pt-5
                text-center
                font-body
                text-[0.72rem]
                italic
                text-[#8B7B7E]
              "
            >
              Your publishing journey, preserved with care.
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}