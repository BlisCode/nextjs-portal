import { Input } from "./ui/input";
import { Label } from "./ui/label";
import Select from "./ui/select";
import prisma from "@/lib/prisma"

async function filterJobs(formData: FormData){
    "use server";
}

export default  async function JobFiltrerSidebar(){
    const distincLocations = (await prisma.job
    .findMany({
        where: {approved: true},
        select: {location: true},
        distinct: ["location"],
    })
    .then((locations) =>
        locations.map(({ location }) => location).filter(Boolean),
     )) as string[]
    

    return (
    <aside className="md:w-[260px] p-4 sticky top-0 h-fit bg-background border rounded-lg">
        <form action={filterJobs}>
            <div className="space-y-4">
                <div className="flex flex-col gap-2">
                <Label htmlFor="q">Buscar</Label>
                <Input id="q" name="q" placeholder="Titulo, empresa, etc."/>
            </div>
            <div className="flex flex-col gap-2">
                <Label htmlFor="Location">Ubicación</Label>
                <Select id="ubicacion" name="ubicacion" defaultValue="">
                    <option value="">Todas las ubicaciones</option>
                    {distincLocations.map(location => (
                        <option key={location} value={location}>
                            {location}
                        </option>
                    ))}
                </Select>
            </div>
            </div>
        </form>
         
    </aside>
    );
}