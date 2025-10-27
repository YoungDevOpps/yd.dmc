/* eslint-disable @typescript-eslint/no-explicit-any */
import * as TablerIcons from "@tabler/icons-react";

type Props = {
  iconName?: string | null;
  className?: string;
};

export default function DynamicIcon({ iconName, className }: Props) {
  const Icon = (TablerIcons as any)[`${iconName}`]; // exemple : IconLayoutList

  if (!Icon) return <TablerIcons.IconQuestionMark className={className} />; // fallback

  return <Icon className={className} />;
}
