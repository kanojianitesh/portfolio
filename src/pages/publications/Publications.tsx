import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionHeading } from "@/components/SectionHeading";
import { PublicationEntry } from "@/components/PublicationEntry";
import { publications } from "@/data/publications";
import { conferences } from "@/data/conferences";
import { usePageTitle } from "@/hooks/use-page-title";

function Publications() {
  usePageTitle("Publications");
  const published = publications.filter((p) => p.status === "published");
  const inPrep = publications.filter((p) => p.status === "in-preparation");

  return (
    <section className="mx-auto max-w-4xl space-y-10">
      <SectionHeading>Publications</SectionHeading>

      {/* Published */}
      <Card>
        <CardHeader>
          <CardTitle>
            Published{" "}
            <span className="text-sm font-normal text-muted-foreground">
              ({published.length})
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal space-y-4 pl-5">
            {published.map((pub) => (
              <PublicationEntry key={pub.id} pub={pub} />
            ))}
          </ol>
        </CardContent>
      </Card>

      {/* In Preparation */}
      {inPrep.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>
              In Preparation{" "}
              <span className="text-sm font-normal text-muted-foreground">
                ({inPrep.length})
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal space-y-4 pl-5">
              {inPrep.map((pub) => (
                <PublicationEntry key={pub.id} pub={pub} />
              ))}
            </ol>
          </CardContent>
        </Card>
      )}

      {/* Conferences */}
      <Card>
        <CardHeader>
          <CardTitle>
            Conferences & Workshops{" "}
            <span className="text-sm font-normal text-muted-foreground">
              ({conferences.length})
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {conferences.map((conf) => (
              <li key={conf.id} className="text-sm leading-relaxed">
                <span className="mr-2 inline-block rounded bg-muted px-2 py-0.5 text-xs font-medium capitalize text-muted-foreground">
                  {conf.type}
                </span>
                <span className="font-medium">{conf.title}</span>
                <span className="text-muted-foreground">
                  {" "}
                  — {conf.event}, {conf.location}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}

export default Publications;
