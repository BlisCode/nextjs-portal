import JobFiltrerSidebar from "@/components/JobFilterSidebar";
import JobListItem from "@/components/JobListItem";
import prisma from "@/lib/prisma";

export default async function Home() {
  const jobs = await prisma.job.findMany({
    where: { approved: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="max-w-5xl m-auto px-3 my-10 space-y-10">
      <div className="space-y-5 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Ofertas reales
        </h1>
        <p className="text-muted-foreground">Encuentra tu trabajo</p>
      </div>
      <section className="flex flex-col md:flex-row gap-4">
       <JobFiltrerSidebar />
      <div className="grow space-y-4">
      {jobs.map((job) => (
        <JobListItem job={job} key={job.id} />
      ))}
      </div>
      </section>
    </main>
  );
}