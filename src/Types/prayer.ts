export interface Prayer {
  name: string;
  time: Date | null;
  icon: React.ComponentType<{ className?: string }>;
}
