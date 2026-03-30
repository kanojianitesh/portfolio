import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionHeading } from "@/components/SectionHeading";
import { courses } from "@/data/teaching";

function Teaching() {
  return (
    <section className="mx-auto max-w-4xl space-y-10">
      <SectionHeading>Teaching</SectionHeading>

      <div className="grid gap-4 sm:grid-cols-2">
        {courses.map((course) => (
          <Card key={course.id}>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">
                <span className="font-mono text-primary">{course.code}</span>
                <span className="mx-2 text-muted-foreground">&middot;</span>
                {course.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {course.role}, {course.institution}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground">
            Assisted in laboratory course design and evaluation for undergraduate
            and postgraduate students.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}

export default Teaching;
