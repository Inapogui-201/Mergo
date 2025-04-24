import React from "react";
import { useState } from "react";
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
import { Label } from "@/components/ui/label";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronLeft, Loader2, Upload } from "lucide-react";
import { Link } from "react-router-dom";
import { toast, Toaster } from "sonner";

const NewCandidate = () => {
  const [avatar, setAvatar] = useState("/placeholder.svg?height=100&width=100");
  const [initials, setInitials] = useState("NC");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birth, setBirth] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [profile, setProfile] = useState("");
  const [video, setVideo] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const isFormValid = () => {
    return (
      username &&
      email &&
      phone &&
      birth &&
      country &&
      city &&
      profile &&
      video &&
      category
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("birth", birth);
    formData.append("country", country);
    formData.append("city", city);
    formData.append("profile", profile);
    formData.append("video", video);
    formData.append("category", category);

    try {
      const response = await fetch("/api/v1/candidate/", {
        method: "POST",
        body: formData, // Envoi du FormData au lieu du JSON
      });

      if (response.ok) {
        const data = await response.json();
        setTimeout(() => {
          toast.success(data.message);
          // Reset form fields
          setUsername("");
          setEmail("");
          setPhone("");
          setBirth("");
          setCountry("");
          setCity("");
          setProfile("");
          setVideo("");
          setCategory("");
        }, 5000);
      } else {
        const errorData = await response.json();
        toast.error(`${errorData.message || "Il y a eu une erreur"}`);
      }
    } catch (error) {
      toast.error(`Erreur réseau: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center gap-4">
          <Link to="/wp-admin/candidates">
            <Button variant="outline" size="icon" className="h-7 w-7">
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Retour</span>
            </Button>
          </Link>
          <h1 className="text-3xl font-bold tracking-tight">
            Add New Candidate
          </h1>
        </div>

        <form>
          <Card>
            <CardHeader>
              <CardTitle>Candidate Information</CardTitle>
              <CardDescription>
                Enter the details for the new candidate
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="username">Nom et prénom</Label>
                  <Input
                    id="username"
                    name="username"
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="nom et prénom"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="birth">Naissance</Label>
                  <Input
                    id="birth"
                    name="birth"
                    onChange={(e) => setBirth(e.target.value)}
                    type="date"
                    placeholder="Date naissance"
                    required
                  />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="country">Pays</Label>
                  <Input
                    id="country"
                    name="country"
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="pays"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">Ville</Label>
                  <Input
                    id="city"
                    name="city"
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="ville"
                    required
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="phone">Télephone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="télephone"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="profile">Profil</Label>
                <Input
                  id="profile"
                  name="profile"
                  onChange={(e) => setProfile(e.target.value)}
                  placeholder="profile url"
                  required
                />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="video">Vidéo</Label>
                  <Input
                    id="video"
                    name="video"
                    onChange={(e) => setVideo(e.target.value)}
                    placeholder="vidéo url"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Catégorie projet</Label>
                  <Input
                    id="category"
                    name="category"
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="categorie"
                    required
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" asChild>
                <Link href="/wp-admin/candidates">Annuler</Link>
              </Button>
              <Button
                type="submit"
                onClick={handleSubmit}
                disabled={loading || !isFormValid()}
                className="bg-[#2AB4C4] hover:bg-[#3cd3e4]"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sauvegarde en cours..
                  </>
                ) : (
                  "Sauvegarde"
                )}
              </Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </>
  );
};

export default NewCandidate;
