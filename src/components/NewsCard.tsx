
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface NewsCardProps {
  title: string;
  description: string;
  category: string;
  date: string;
  imageUrl: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  description,
  category,
  date,
  imageUrl,
}) => {
  return (
    <Card className="news-card overflow-hidden border border-gray-200 shadow-md">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
        />
        <Badge 
          className="absolute top-3 left-3 bg-furia-orange text-white hover:bg-furia-orange/90"
        >
          {category}
        </Badge>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="line-clamp-2 text-xl font-bold">{title}</CardTitle>
        <CardDescription>{date}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-3 text-gray-600">{description}</p>
      </CardContent>
      <CardFooter>
        <button className="text-furia-orange hover:underline font-medium">
          Leia mais
        </button>
      </CardFooter>
    </Card>
  );
};

export default NewsCard;
