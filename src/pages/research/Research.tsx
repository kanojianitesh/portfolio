import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionHeading } from "@/components/SectionHeading";

function Research() {
  return (
    <section className="mx-auto max-w-4xl space-y-10">
      <SectionHeading>Research</SectionHeading>

      {/* Current Research */}
      <Card>
        <CardHeader>
          <CardTitle>Current Research</CardTitle>
          <CardDescription>
            Ph.D. in Electromicrobiology &middot; University of Queensland – IIT
            Delhi Research Academy &middot; 2020 – Present
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm leading-relaxed">
          <p>
            My work examines <em>Shewanella oneidensis</em> nanowire formation
            during extracellular electron transfer and the effects of heavy
            metals in electrochemical environments. This research integrates
            microbiology and electrochemistry to advance bioelectrochemical
            systems for sustainable energy and metal recovery.
          </p>

          <div>
            <h4 className="mb-2 font-semibold">Key Focus Areas</h4>
            <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
              <li>
                Microbial nanowires, electron transfer, and biofilm conductivity
              </li>
              <li>
                Interdisciplinary electrochemical and microbiological experiments
              </li>
              <li>
                Advanced instrumentation including Octet, Vi-cell, Clonepix, and
                Cedex bioanalyser
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Collaborators */}
      <Card>
        <CardHeader>
          <CardTitle>Collaborators</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li>
              <span className="font-medium">Dr. Lucinda Doyle</span>
              <span className="text-muted-foreground">
                {" "}
                — Primary Supervisor
              </span>
            </li>
            <li>
              <span className="font-medium">Dr. Gordon Southam</span>
              <span className="text-muted-foreground"> — Co-Supervisor</span>
            </li>
            <li>
              <span className="font-medium">Dr. Bernardino Virdis</span>
              <span className="text-muted-foreground"> — Co-Supervisor</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Funding */}
      <Card>
        <CardHeader>
          <CardTitle>Research Funding</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li>
              <span className="font-medium">
                ANSTO Beamtime Grant (AUD 98,352 each, twice)
              </span>
              <span className="text-muted-foreground">
                {" "}
                — Australian Synchrotron XFM Beamline
              </span>
            </li>
            <li>
              <span className="font-medium">
                UQ Research Training Tuition Fee & Stipend Scholarship
              </span>
              <span className="text-muted-foreground">
                {" "}
                — University of Queensland
              </span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}

export default Research;
