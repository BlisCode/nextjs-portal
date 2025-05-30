import { Job } from "@prisma/client";
import Image from "next/image";
import companyLogoPlaceholder from "@/assets/company-logo-placeholder.png";
import { Briefcase, MapPin, Banknote, Globe2, Clock} from "lucide-react";
import { formatMoney, relativeDate } from "@/lib/utils";
import Badge from "./Badge";

interface JobListItemProps {
  job: Job;
}

export default function JobListItem({
  job: {
    title,
    companyName,
    type,
    locationType,
    location,
    salary,
    companyLogoUrl,
    createdAt,
  },
}: JobListItemProps) {
  return (
    <article className="flex gap-3 rounded-lg border p-5 hover:bg-muted/60">
      <Image
        src={companyLogoUrl || companyLogoPlaceholder}
        alt={`${companyName} logo`}
        width={100}
        height={100}
        className="rounded-lg self-center"
      />
      <div className="flex-grow space-y-3">
        <div>
        <h2 className="text-xl font-medium">{title}</h2>
        <p className="text-muted-foreground">{companyName}</p>
        </div>
     

      <div className="text-muted-foreground">

        <p className="flex items-center gap-1.5 sm:hidden">
          <Briefcase size={16} className="shrink-0" />
          <Badge>{type}</Badge>
        </p>
        <p className="flex items-center gap-1.5">
          <MapPin size={16} className="shrink-0" />
          {locationType} 
        </p>
        <p className="flex items-center gap-1.5">
          <Globe2 size={16} className="shrink-0" />
          {location || "WORLDWIDE"}
        </p>
        <p className="flex items-center gap-1.5">
          <Banknote size={16} className="shrink-0" />
          {formatMoney(salary)} 
        </p>
        <p className="flex items-center gap-1.5 sm:hidden">
          <Clock size={16} className="shrink-0" />
          {relativeDate(createdAt)}
        </p>
      </div>
      </div>
      <div className="hidden shrink-0 flex-col items-end justify-between  sm:flex">
        <Badge>{type}</Badge>
      <span className="flex items-center gap-1.5 text-muted-foreground">
        <Clock size={16} />
        {relativeDate(createdAt)}
      </span>
      
      </div>
      
    </article>
  );
}