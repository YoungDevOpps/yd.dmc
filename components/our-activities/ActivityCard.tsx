import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { ActivityType } from "@/types/types";

import DynamicIcon from "@/components/DynamicIcon";
import ActivityDetailsSheet from "./ActivityDetailsSheet";

interface ActivityCardProps {
  activity: ActivityType;
}

export default function ActivityCard({ activity }: ActivityCardProps) {
  return (
    <Card className="hover:shadow-xl transition-shadow">
      <CardHeader>
        <div className="flex items-start space-x-4">
          <span>
            <DynamicIcon iconName={activity.icon} />
          </span>
          <h3 className="text-xl font-semibold">{activity.title}</h3>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col items-start justify-between flex-1 gap-4">
        <p className="text-gray-600 w-full line-clamp-2">
          {activity.description}
        </p>
        <ActivityDetailsSheet activityId={activity.id} />
      </CardContent>
    </Card>
  );
}
