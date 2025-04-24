import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const upcomingElections = [
  {
    id: 1,
    title: "Presidential Election",
    date: "May 20, 2025",
    status: "active",
    candidates: 12,
  },
  {
    id: 2,
    title: "Senate Election",
    date: "June 15, 2025",
    status: "upcoming",
    candidates: 24,
  },
  {
    id: 3,
    title: "Local Council Election",
    date: "July 10, 2025",
    status: "upcoming",
    candidates: 48,
  },
];

export function UpcomingElectionsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Elections</CardTitle>
        <CardDescription>Schedule for the next elections</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {upcomingElections.map((election) => (
            <div
              key={election.id}
              className="flex items-center justify-between"
            >
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {election.title}
                </p>
                <p className="text-sm text-muted-foreground">{election.date}</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-sm text-muted-foreground">
                  {election.candidates} candidates
                </div>
                <Badge
                  variant={
                    election.status === "active" ? "default" : "secondary"
                  }
                >
                  {election.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
