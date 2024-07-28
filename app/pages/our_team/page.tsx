import Image from "next/image";
import Employee from "../../data/employee.json";

const page = () => {
  return (
    <>
      <section className="bg-white flex justify-center pt-8 pb-8">
        <article className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {Employee.map((person, i) => (
            <div key={i + 1} className="bg-[#f6f6f6] shadow-xl flex flex-col">
              <Image
                src={`${person.image}`}
                alt={`${person.name}_pic`}
                width={0}
                height={0}
                sizes="100%"
                className="w-auto h-auto object-cover"
              />
              <div className="bg-white flex flex-col items-center p-6">
                <h2>{person.name}</h2>
                <p>{person["่job"]}</p>
              </div>
            </div>
          ))}
        </article>
      </section>
    </>
  );
};

export default page;
