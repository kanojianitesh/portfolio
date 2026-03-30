import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/SectionHeading";

const activities = [
  {
    id: 1,
    role: "Logistics Head",
    organization: "Vibhinn – IIT Delhi's Annual Pride Festival",
    period: "2024 & 2025",
  },
  {
    id: 2,
    role: "PG Coordinator",
    organization: "Indradhanu – IIT Delhi Queer Collective",
    period: "2023–24",
  },
  {
    id: 3,
    role: "Cohort Representative",
    organization: "UQ-IITD Research Academy Student Council",
    period: "2021–23",
  },
  {
    id: 4,
    role: "Member",
    organization: "International and Alumni Affairs Team, UQIDRA Council",
    period: "",
  },
];

function Fun() {
  return (
    <section className="mx-auto max-w-4xl space-y-10">
      <SectionHeading>Extracurricular Activities</SectionHeading>

      <div className="grid gap-4 sm:grid-cols-2">
        {activities.map((a) => (
          <Card key={a.id}>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">{a.role}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {a.organization}
              </p>
              {a.period && (
                <p className="mt-1 text-xs text-muted-foreground">
                  {a.period}
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Fun;
