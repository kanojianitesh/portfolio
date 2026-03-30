import type { Publication } from "@/data/publications";

interface PublicationEntryProps {
  pub: Publication;
  highlightName?: string;
}

export function PublicationEntry({
  pub,
  highlightName = "Kanojia, N.",
}: PublicationEntryProps) {
  const highlightAuthor = (authors: string) => {
    const idx = authors.indexOf(highlightName);
    if (idx === -1) return authors;
    return (
      <>
        {authors.slice(0, idx)}
        <strong>{highlightName}</strong>
        {authors.slice(idx + highlightName.length)}
      </>
    );
  };

  return (
    <li className="text-sm leading-relaxed">
      {pub.status === "in-preparation" && (
        <span className="mr-2 inline-block rounded bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
          In Preparation
        </span>
      )}
      {highlightAuthor(pub.authors)}
      {pub.year && ` (${pub.year}).`} "{pub.title}."
      {pub.journal && (
        <>
          {" "}
          <em>{pub.journal}.</em>
        </>
      )}
      {pub.doi && (
        <>
          {" "}
          <a
            href={pub.doi}
            target="_blank"
            rel="noreferrer"
            className="text-primary underline underline-offset-2 hover:text-primary/80"
          >
            DOI
          </a>
        </>
      )}
    </li>
  );
}
