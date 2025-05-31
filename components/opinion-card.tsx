import { StarIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Opinion {
  name: string;
  description: string;
  avatar: string;
  position: string;
  fallback: string;
  company: string;
}

export function OpinionCard({ opinion }: { opinion: Opinion }) {
  return (
    <Card className="shadow-lg border border-primary h-full">
      <CardHeader className="flex gap-4 items-center">
        <Avatar className="w-14 h-14">
          <AvatarImage src={opinion.avatar} alt={opinion.name} />
          <AvatarFallback>{opinion.fallback}</AvatarFallback>
        </Avatar>
        <CardTitle>
          <p>{opinion.name}</p>
          <p className="text-sm text-gray-500">
            {opinion.position} de {opinion.company}
          </p>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 text-start h-full">
        <p>{opinion.description}</p>
        <div className="flex gap-2 items-center mt-auto">
          {Array.from({ length: 5 }).map((_, index) => (
            <StarIcon key={index} className="w-4 h-4 text-yellow-500" />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
