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
  User,
} from "lucide-react";
import api from "@/lib/api";
import Navbar from "@/components/Navbar";

type SignupData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const passwordPolicy = [
  { test: (v: string) => v.length >= 8, message: "Password must contain at least 8 characters." },
  { test: (v: string) => v.length <= 128, message: "Password is too long." },
  { test: (v: string) => /[A-Z]/.test(v), message: "Password must contain at least one uppercase letter." },
  { test: (v: string) => /[a-z]/.test(v), message: "Password must contain at least one lowercase letter." },
  { test: (v: string) => /[0-9]/.test(v), message: "Password must contain at least one number." },
  { test: (v: string) => /[^A-Za-z0-9]/.test(v), message: "Password must contain at least one special character." },
];

export default function SignupPage() {
  const router = useRouter();

  const [data, setData] = useState<SignupData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const name = data.name.trim();
    const email = data.email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) return "Please enter your full name.";
    if (name.length < 2) return "Name must contain at least 2 characters.";
    if (name.length > 100) return "Name is too long.";
    if (!email) return "Please enter your email address.";
    if (!emailRegex.test(email)) return "Please enter a valid email address.";
    if (!data.password) return "Please enter a password.";

    for (const rule of passwordPolicy) {
      if (!rule.test(data.password)) return rule.message;
    }

    if (data.password !== data.confirmPassword) return "Passwords do not match.";

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

      await api.post("/api/auth/register", {
        name: data.name.trim(),
        email: data.email.trim().toLowerCase(),
        password: data.password,
      });

      toast.success("Account created successfully. Redirecting to sign in...");

      setData({ name: "", email: "", password: "", confirmPassword: "" });

      setTimeout(() => {
        router.push("/login");
      }, 1500);
    } catch (err: any) {
      const message =
        err?.response?.data?.message ||
        "Unable to create your account. Please try again.";
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
              Begin your
              <br />
              <em className="italic text-[#D0A63A]">legacy.</em>
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
              Create your account and begin your publishing journey with
              Machon Aleh Zayis.
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
          <div className="w-full max-w-[460px]">
            <div className="mb-10 lg:hidden">
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

            <div className="mb-8">
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
                New Member
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
                Create your account.
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
                Join Machon Aleh Zayis and begin your publishing journey.
              </p>
            </div>

            <form onSubmit={onSubmitHandler} noValidate className="space-y-5">
              <div>
                <label
                  htmlFor="name"
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
                  Full Name
                </label>

                <div className="relative">
                  <User
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
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={data.name}
                    onChange={onChangeHandler}
                    placeholder="Your full name"
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
                <label
                  htmlFor="password"
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
                  Password
                </label>

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
                    autoComplete="new-password"
                    value={data.password}
                    onChange={onChangeHandler}
                    placeholder="Create a password"
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
                    onClick={() => setShowPassword((current) => !current)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="
                      absolute
                      right-0
                      top-1/2
                      -translate-y-1/2
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

              <div>
                <label
                  htmlFor="confirmPassword"
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
                  Confirm Password
                </label>

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
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    autoComplete="new-password"
                    value={data.confirmPassword}
                    onChange={onChangeHandler}
                    placeholder="Confirm your password"
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
                    onClick={() => setShowConfirmPassword((current) => !current)}
                    aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                    className="
                      absolute
                      right-0
                      top-1/2
                      -translate-y-1/2
                      p-1
                      text-[#6B5B5E]
                      transition-colors
                      hover:text-[#4A1521]
                    "
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} strokeWidth={1.4} />
                    ) : (
                      <Eye size={18} strokeWidth={1.4} />
                    )}
                  </button>
                </div>
              </div>

              <p
                className="
                  pt-1
                  font-body
                  text-[0.76rem]
                  leading-[1.55]
                  text-[#76676A]
                "
              >
                By creating an account, you agree to our{" "}
                <Link
                  href="/terms"
                  className="
                    text-[#4A1521]
                    underline
                    decoration-[#C59B27]
                    underline-offset-2
                  "
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="
                    text-[#4A1521]
                    underline
                    decoration-[#C59B27]
                    underline-offset-2
                  "
                >
                  Privacy Policy
                </Link>
                .
              </p>

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
                    Creating account...
                  </>
                ) : (
                  <>
                    Create Account
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

            <div className="mt-8 text-center">
              <p className="font-body text-[0.9rem] text-[#66575A]">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="
                    font-semibold
                    text-[#4A1521]
                    underline
                    decoration-[#C59B27]
                    underline-offset-4
                    transition-colors
                    hover:text-[#A77B18]
                  "
                >
                  Sign in
                </Link>
              </p>
            </div>

            <div
              className="
                mt-8
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