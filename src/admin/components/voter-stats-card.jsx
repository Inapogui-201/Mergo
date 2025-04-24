import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function VoterStatsCard() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Voter Turnout</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="space-y-1">
            <div className="flex items-center justify-between text-sm">
              <div>Urban</div>
              <div className="font-medium">76%</div>
            </div>
            <Progress value={76} className="h-2" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-between text-sm">
              <div>Suburban</div>
              <div className="font-medium">64%</div>
            </div>
            <Progress value={64} className="h-2" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-between text-sm">
              <div>Rural</div>
              <div className="font-medium">52%</div>
            </div>
            <Progress value={52} className="h-2" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
