
import SignupForm from "@/components/auth/SignupForm";

export default function SignupPage() {
  return (
    <main className="grid min-h-screen grid-cols-1 bg-[#F7F1E7] lg:grid-cols-2">
      {/* Left: Signup form */}
      <section className="flex items-center justify-center px-6 py-12 sm:px-12">
        <SignupForm />
      </section>

      {/* Right: Welcome panel */}
      <section className="relative hidden items-center justify-center overflow-hidden bg-[#34483C] px-12 lg:flex">
        <div className="relative z-10 max-w-lg">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#C6D0C1]">
            Welcome to UpkaranHub
          </p>

          <h2 className="font-serif text-5xl leading-tight text-white xl:text-6xl">
            Your resources. Your schedule. Your convenience.
          </h2>

          <p className="mt-7 max-w-md text-base leading-8 text-[#D5DDD3]">
            Explore equipment, request bookings, and manage your
            resources through one convenient platform.
          </p>

          <div className="mt-12 h-px w-24 bg-[#B7A187]" />

          <p className="mt-5 text-sm tracking-wider text-[#C6D0C1]">
            BOOK. MANAGE. GET IT DONE.
          </p>
        </div>

        {/* Decorative circles */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-white/10" />
        <div className="absolute -bottom-40 -left-32 h-120 w-120 rounded-full border border-white/10" />
      </section>
    </main>
  );
}
