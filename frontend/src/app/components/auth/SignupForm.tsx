
"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Eye,
  EyeOff,
  ArrowRight,
  Leaf,
  User,
  Mail,
  Lock,
} from "lucide-react";

const signupSchema = z
  .object({
    name: z.string().min(2, "Name must contain at least 2 characters"),

    email: z
      .string()
      .min(1, "Email is required")
      .email("Please enter a valid email address"),

    password: z
      .string()
      .min(8, "Password must contain at least 8 characters"),

    confirmPassword: z.string().min(1, "Please confirm your password"),

    role: z.enum(["student", "manager"]),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type SignupFormData = z.infer<typeof signupSchema>;

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "student",
    },
  });

  const onSubmit = async (data: SignupFormData) => {
    console.log("Signup form data:", data);

    // Backend registration will be connected later.
  };

  return (
    <div className="w-full max-w-md">
      {/* Brand */}
      <Link
        href="/"
        className="mb-10 inline-flex items-center gap-2 text-[#34483C]"
      >
        <Leaf size={25} />
        <span className="text-xl font-semibold">UpkaranHub</span>
      </Link>

      {/* Heading */}
      <div className="mb-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#87917A]">
          Get Started
        </p>

        <h1 className="font-serif text-4xl font-medium text-[#292D28]">
          Create your account
        </h1>

        <p className="mt-3 text-sm leading-6 text-[#77766E]">
          Join UpkaranHub and make equipment booking easier.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Full name */}
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-[#292D28]"
          >
            Full Name
          </label>

          <div className="relative">
            <User
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#87917A]"
            />

            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              {...register("name")}
              className="w-full rounded-xl border border-[#E5DDCE] bg-white py-3.5 pl-12 pr-4 text-sm outline-none transition focus:border-[#34483C]"
            />
          </div>

          {errors.name && (
            <p className="mt-2 text-xs text-red-600">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-[#292D28]"
          >
            Email Address
          </label>

          <div className="relative">
            <Mail
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#87917A]"
            />

            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              {...register("email")}
              className="w-full rounded-xl border border-[#E5DDCE] bg-white py-3.5 pl-12 pr-4 text-sm outline-none transition focus:border-[#34483C]"
            />
          </div>

          {errors.email && (
            <p className="mt-2 text-xs text-red-600">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-[#292D28]"
          >
            Password
          </label>

          <div className="relative">
            <Lock
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#87917A]"
            />

            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              {...register("password")}
              className="w-full rounded-xl border border-[#E5DDCE] bg-white py-3.5 pl-12 pr-12 text-sm outline-none transition focus:border-[#34483C]"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#87917A]"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {errors.password && (
            <p className="mt-2 text-xs text-red-600">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Confirm password */}
        <div>
          <label
            htmlFor="confirmPassword"
            className="mb-2 block text-sm font-medium text-[#292D28]"
          >
            Confirm Password
          </label>

          <div className="relative">
            <Lock
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#87917A]"
            />

            <input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm your password"
              {...register("confirmPassword")}
              className="w-full rounded-xl border border-[#E5DDCE] bg-white py-3.5 pl-12 pr-12 text-sm outline-none transition focus:border-[#34483C]"
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
              aria-label={
                showConfirmPassword ? "Hide password" : "Show password"
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#87917A]"
            >
              {showConfirmPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>
          </div>

          {errors.confirmPassword && (
            <p className="mt-2 text-xs text-red-600">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Account role */}
        <div>
          <label
            htmlFor="role"
            className="mb-2 block text-sm font-medium text-[#292D28]"
          >
            Account Type
          </label>

          <select
            id="role"
            {...register("role")}
            className="w-full rounded-xl border border-[#E5DDCE] bg-white px-4 py-3.5 text-sm text-[#292D28] outline-none focus:border-[#34483C]"
          >
            <option value="student">Student</option>
            <option value="manager">Manager</option>
          </select>

          {errors.role && (
            <p className="mt-2 text-xs text-red-600">
              {errors.role.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#34483C] py-4 text-sm font-semibold text-white transition hover:bg-[#293B30] disabled:opacity-70"
        >
          {isSubmitting ? "Creating account..." : "Create Account"}
          <ArrowRight size={17} />
        </button>
      </form>

      {/* Login link */}
      <p className="mt-7 text-center text-sm text-[#77766E]">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-semibold text-[#34483C] hover:underline"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
}
