import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const recentActivity = [
  {
    id: 1,
    type: "vote",
    user: "John Doe",
    time: "2 minutes ago",
    details: "Voted in Presidential Election",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "JD",
  },
  {
    id: 2,
    type: "registration",
    user: "Jane Smith",
    time: "10 minutes ago",
    details: "Registered as a new voter",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "JS",
  },
  {
    id: 3,
    type: "candidate",
    user: "Robert Johnson",
    time: "25 minutes ago",
    details: "Added as a new candidate",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "RJ",
  },
  {
    id: 4,
    type: "vote",
    user: "Emily Davis",
    time: "45 minutes ago",
    details: "Voted in Presidential Election",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "ED",
  },
  {
    id: 5,
    type: "registration",
    user: "Michael Wilson",
    time: "1 hour ago",
    details: "Registered as a new voter",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "MW",
  },
];

export function RecentActivityTable() {
  return (
    <div className="space-y-4">
      <div className="rounded-md border">
        <div className="p-4">
          <div className="grid gap-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={activity.avatar} alt={activity.user} />
                  <AvatarFallback>{activity.initials}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {activity.user}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {activity.details}
                  </p>
                </div>
                <Badge
                  variant={
                    activity.type === "vote"
                      ? "default"
                      : activity.type === "registration"
                      ? "secondary"
                      : "outline"
                  }
                >
                  {activity.type}
                </Badge>
                <div className="text-sm text-muted-foreground">
                  {activity.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
