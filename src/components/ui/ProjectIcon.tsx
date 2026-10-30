import { Cloud, CreditCard, FileText, Files, Grid3x3, HeartPulse, MessagesSquare, Receipt, TvMinimalPlay } from "lucide-react";
import type { Project } from "@/content/projects";

const icons = {
  "file-text": FileText,
  receipt: Receipt,
  youtube: TvMinimalPlay,
  message: MessagesSquare,
  heart: HeartPulse,
  files: Files,
  cloud: Cloud,
  "credit-card": CreditCard,
  grid: Grid3x3,
} satisfies Record<Project["icon"], unknown>;

export function ProjectIcon({ name, className }: { name: Project["icon"]; className?: string }) {
  const Icon = icons[name];
  return <Icon className={className} strokeWidth={1.5} />;
}
