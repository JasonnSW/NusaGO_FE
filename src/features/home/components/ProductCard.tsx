import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import ProductCardsData from "@/features/home/data/ProductCardData.json";

export default function ProductCards() {
  return (
    <div className="flex w-full gap-24">
      {ProductCardsData.map((product, index) => (
        <Card
          key={index}
          className="bg-neutral-light shadow-inner rounded-2xl flex flex-col w-full min-w-72 h-auto"
        >
          <CardHeader className="text-center space-y-4">
            <Image
              src={product.icon}
              width={100}
              height={100}
              alt={product.title}
              className="w-24 h-24 md:w-32 md:h-32 mx-auto"
            />
            <CardTitle className="text-3xl text-center text-primary-primary font-bold">
              {product.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="h-full w-full">
            <CardDescription className="w-full text-center text-base md:text-base text-black">
              {product.description}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
