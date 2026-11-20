
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
  Mail,
  Lock,
} from "lucide-react";

const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),

  password: z
    .string()
    .min(8, "Password must contain at least 8 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    console.log("Login form data:", data);

    // Backend authentication will be connected later.
  };

  return (
    <div className="w-full max-w-md">
      {/* Brand */}
      <Link
        href="/"
        className="mb-12 inline-flex items-center gap-2 text-[#34483C]"
      >
        <Leaf size={25} />
        <span className="text-xl font-semibold">EquipEase</span>
      </Link>

      {/* Heading */}
      <div className="mb-9">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#87917A]">
          Welcome Back
        </p>

        <h1 className="font-serif text-4xl font-medium text-[#292D28]">
          Sign in to your account
        </h1>

        <p className="mt-3 text-sm leading-6 text-[#77766E]">
          Access your bookings and manage your equipment with ease.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
              className="w-full rounded-xl border border-[#E5DDCE] bg-white py-3.5 pl-12 pr-4 text-sm text-[#292D28] outline-none transition placeholder:text-[#AAA69D] focus:border-[#34483C]"
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
          <div className="mb-2 flex items-center justify-between">
            <label
              htmlFor="password"
              className="text-sm font-medium text-[#292D28]"
            >
              Password
            </label>

            <Link
              href="/forgot-password"
              className="text-xs font-medium text-[#526B57] hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <div className="relative">
            <Lock
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#87917A]"
            />

            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              {...register("password")}
              className="w-full rounded-xl border border-[#E5DDCE] bg-white py-3.5 pl-12 pr-12 text-sm text-[#292D28] outline-none transition placeholder:text-[#AAA69D] focus:border-[#34483C]"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#87917A] hover:text-[#34483C]"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>
          </div>

          {errors.password && (
            <p className="mt-2 text-xs text-red-600">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Remember me */}
        <label className="flex cursor-pointer items-center gap-2 text-sm text-[#77766E]">
          <input
            type="checkbox"
            className="h-4 w-4 accent-[#34483C]"
          />
          Remember me
        </label>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#34483C] py-4 text-sm font-semibold text-white transition hover:bg-[#293B30] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Signing in..." : "Sign In"}
          <ArrowRight size={17} />
        </button>
      </form>

      {/* Signup link */}
      <p className="mt-8 text-center text-sm text-[#77766E]">
        Don't have an account?{" "}
        <Link
          href="/signup"
          className="font-semibold text-[#34483C] hover:underline"
        >
          Create an account
        </Link>
      </p>

      {/* Back to home */}
      <div className="mt-10 border-t border-[#E5DDCE] pt-6 text-center">
        <Link
          href="/"
          className="text-xs font-medium text-[#87917A] hover:text-[#34483C]"
        >
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
