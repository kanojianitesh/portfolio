import { Linkedin, Mail, ExternalLink, Award } from "lucide-react";
import { usePageTitle } from "@/hooks/use-page-title";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/SectionHeading";
import { Timeline } from "@/components/Timeline";
import { ScholarIcon } from "@/components/icons/ScholarIcon";
import { OrcidIcon } from "@/components/icons/OrcidIcon";
import { profile } from "@/data/profile";
import { education } from "@/data/education";
import { skills } from "@/data/skills";
import { awards } from "@/data/awards";
import { news } from "@/data/news";
import niteshPhoto from "@/assets/nitesh_photo.jpeg";

function About() {
  usePageTitle("About");

  return (
    <section className="mx-auto max-w-4xl space-y-14">
      {/* ── Hero ── */}
      <div className="flex flex-col items-center gap-10 md:flex-row md:items-start">
        {/* Photo — first in DOM so it appears first on mobile, md:order-2 pushes it right on desktop */}
        <div className="shrink-0 md:order-2">
          <img
            src={niteshPhoto}
            alt={profile.name}
            width={288}
            height={405}
            loading="eager"
            className="w-56 rounded-lg border object-cover shadow-lg md:w-64 lg:w-72"
          />
        </div>
        <div className="flex-1 space-y-4 text-center md:order-1 md:text-left">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            {profile.name}
          </h1>
          <p className="text-lg text-muted-foreground">{profile.title}</p>
          <p className="text-sm text-muted-foreground">
            {profile.affiliation}
          </p>

          {/* Academic Links */}
          <div className="flex flex-wrap justify-center gap-2 pt-2 md:justify-start">
            <Button asChild variant="outline" size="sm">
              <a
                href={profile.links.scholar}
                target="_blank"
                rel="noreferrer"
              >
                <ScholarIcon className="mr-1.5 h-4 w-4" />
                Google Scholar
              </a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a
                href={profile.links.orcid}
                target="_blank"
                rel="noreferrer"
              >
                <OrcidIcon className="mr-1.5 h-4 w-4" />
                ORCID
              </a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="mr-1.5 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href={`mailto:${profile.email}`}>
                <Mail className="mr-1.5 h-4 w-4" />
                Email
              </a>
            </Button>
          </div>

          <p className="pt-2 text-sm leading-relaxed">
            {profile.bio}
          </p>
        </div>
      </div>

      {/* ── Recent News ── */}
      <div className="space-y-4">
        <SectionHeading>Recent News</SectionHeading>
        <Card>
          <CardContent className="space-y-3 pt-6">
            {news.map((item) => (
              <div key={item.id} className="flex gap-4 text-sm">
                <span className="shrink-0 font-medium text-primary">
                  {item.date}
                </span>
                <span className="text-muted-foreground">
                  {item.content}
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Read more (opens in new tab)"
                      className="ml-1 inline-flex items-center text-primary hover:underline"
                    >
                      <ExternalLink aria-hidden="true" className="ml-0.5 inline h-3 w-3" />
                    </a>
                  )}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* ── Education ── */}
      <div className="space-y-4">
        <SectionHeading>Education</SectionHeading>
        <Timeline items={education} />
      </div>

      {/* ── Technical Skills ── */}
      <div className="space-y-4">
        <SectionHeading>Technical Skills</SectionHeading>
        <div className="space-y-4">
          {skills.map((category) => (
            <div key={category.name}>
              <h3 className="mb-2 text-sm font-semibold text-muted-foreground">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Awards ── */}
      <div className="space-y-4">
        <SectionHeading>Awards & Recognition</SectionHeading>
        <div className="space-y-3">
          {awards.map((award) => (
            <div key={award.id} className="flex gap-3">
              <Award aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-medium">{award.title}</p>
                <p className="text-xs text-muted-foreground">
                  {award.organization}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
