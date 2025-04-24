import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { UserPlus, Search } from "lucide-react";
import { Link } from "react-router-dom";

const candidates = [
  {
    id: 1,
    name: "John Smith",
    party: "Democratic Party",
    position: "Presidential Candidate",
    votes: 2500,
    avatar: "/placeholder.svg?height=100&width=100",
    initials: "JS",
    status: "active",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    party: "Republican Party",
    position: "Presidential Candidate",
    votes: 1800,
    avatar: "/placeholder.svg?height=100&width=100",
    initials: "SJ",
    status: "active",
  },
  {
    id: 3,
    name: "Michael Brown",
    party: "Independent",
    position: "Senate Candidate",
    votes: 1600,
    avatar: "/placeholder.svg?height=100&width=100",
    initials: "MB",
    status: "active",
  },
  {
    id: 4,
    name: "Emily Davis",
    party: "Green Party",
    position: "Senate Candidate",
    votes: 1400,
    avatar: "/placeholder.svg?height=100&width=100",
    initials: "ED",
    status: "active",
  },
  {
    id: 5,
    name: "Robert Wilson",
    party: "Libertarian Party",
    position: "Local Council Candidate",
    votes: 1200,
    avatar: "/placeholder.svg?height=100&width=100",
    initials: "RW",
    status: "inactive",
  },
  {
    id: 6,
    name: "Jennifer Lee",
    party: "Democratic Party",
    position: "Local Council Candidate",
    votes: 1100,
    avatar: "/placeholder.svg?height=100&width=100",
    initials: "JL",
    status: "active",
  },
];
const CandidatePage = () => {
  return (
    <>
      <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Candidats</h1>
          <Link to="/wp-admin/candidates/add">
            <Button className="bg-[#2AB4C4] hover:bg-[#3cd3e4]">
              <UserPlus className="mr-2 h-4 w-4" />
              Ajouter un Candidat
            </Button>
          </Link>
        </div>

        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex flex-1 items-center space-x-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Rechercher des candidats..."
                className="w-full pl-8"
              />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filtrer par statut" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les candidats</SelectItem>
                <SelectItem value="active">Actif</SelectItem>
                <SelectItem value="inactive">Inactif</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Tabs defaultValue="grid" className="space-y-4">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="grid">Grid</TabsTrigger>
              <TabsTrigger value="list">List</TabsTrigger>
            </TabsList>
            <Select defaultValue="votes">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Trier par" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="votes">Trier par votes</SelectItem>
                <SelectItem value="name">Trier par nom</SelectItem>
                <SelectItem value="party">Trier par parti</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <TabsContent value="grid" className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {candidates.map((candidate) => (
                <Card key={candidate.id} className="overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="relative h-40 bg-muted">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Avatar className="h-32 w-32">
                          <AvatarImage
                            src={candidate.avatar}
                            alt={candidate.name}
                          />
                          <AvatarFallback>{candidate.initials}</AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="absolute right-2 top-2">
                        <Badge
                          variant={
                            candidate.status === "active"
                              ? "default"
                              : "secondary"
                          }
                        >
                          {candidate.status}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 text-center">
                    <CardTitle className="text-xl">{candidate.name}</CardTitle>
                    <CardDescription>{candidate.party}</CardDescription>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {candidate.position}
                    </p>
                    <div className="mt-2 font-medium">
                      {candidate.votes.toLocaleString()} votes
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center gap-2 p-4 pt-0">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/candidates/${candidate.id}`}>
                        View Profile
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/candidates/${candidate.id}/edit`}>
                        Modifier
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="list" className="space-y-4">
            <div className="rounded-md border">
              <div className="relative w-full overflow-auto">
                <table className="w-full caption-bottom text-sm">
                  <thead className="[&_tr]:border-b">
                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <th className="h-12 px-4 text-left align-middle font-medium">
                        Name
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium">
                        Parti
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium">
                        Position
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium">
                        Votes
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium">
                        Statut
                      </th>
                      <th className="h-12 px-4 text-right align-middle font-medium">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="[&_tr:last-child]:border-0">
                    {candidates.map((candidate) => (
                      <tr
                        key={candidate.id}
                        className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                      >
                        <td className="p-4 align-middle">
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage
                                src={candidate.avatar}
                                alt={candidate.name}
                              />
                              <AvatarFallback>
                                {candidate.initials}
                              </AvatarFallback>
                            </Avatar>
                            <div>{candidate.name}</div>
                          </div>
                        </td>
                        <td className="p-4 align-middle">{candidate.party}</td>
                        <td className="p-4 align-middle">
                          {candidate.position}
                        </td>
                        <td className="p-4 align-middle">
                          {candidate.votes.toLocaleString()}
                        </td>
                        <td className="p-4 align-middle">
                          <Badge
                            variant={
                              candidate.status === "active"
                                ? "default"
                                : "secondary"
                            }
                          >
                            {candidate.status}
                          </Badge>
                        </td>
                        <td className="p-4 text-right align-middle">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon" asChild>
                              <Link href={`/candidates/${candidate.id}`}>
                                <span className="sr-only">Voir</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="h-4 w-4"
                                >
                                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                                  <circle cx="12" cy="12" r="3" />
                                </svg>
                              </Link>
                            </Button>
                            <Button variant="ghost" size="icon" asChild>
                              <Link href={`/candidates/${candidate.id}/edit`}>
                                <span className="sr-only">Modifier</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="h-4 w-4"
                                >
                                  <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                                </svg>
                              </Link>
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default CandidatePage;
