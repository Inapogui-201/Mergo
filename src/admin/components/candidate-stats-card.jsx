import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function CandidateStatsCard() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Top Candidates</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="space-y-1">
            <div className="flex items-center justify-between text-sm">
              <div>Candidate A</div>
              <div className="font-medium">28%</div>
            </div>
            <Progress value={28} className="h-2" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-between text-sm">
              <div>Candidate B</div>
              <div className="font-medium">21%</div>
            </div>
            <Progress value={21} className="h-2" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-between text-sm">
              <div>Candidate C</div>
              <div className="font-medium">18%</div>
            </div>
            <Progress value={18} className="h-2" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
