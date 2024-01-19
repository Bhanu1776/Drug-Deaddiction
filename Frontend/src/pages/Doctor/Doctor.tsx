import DoctorCards from "@/pages/Doctor/components/DoctorCards";

const Doctors = () => (
  <main>
    <section className="mt-20 flex h-32 w-full items-center justify-center border bg-[#000000eb]">
      <h1 className="text-4xl  font-bold tracking-wider text-white md:text-4xl lg:text-5xl">
        List of Doctors
      </h1>
    </section>

    <section className="mt-20 flex flex-wrap justify-center gap-10 border p-4">
      <DoctorCards/>
    </section>
  </main>
);

export default Doctors;
