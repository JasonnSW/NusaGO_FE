import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { VscCheck } from "react-icons/vsc";
import PriceCardData from "@/features/home/data/PriceCardData.json";

export default function PriceCards() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 px-32 w-full gap-12 z-30">
      {PriceCardData.map((plan, index) => (
        <Card
          key={index}
          className="bg-neutral-light shadow-inner rounded-none flex flex-col w-full h-auto justify-center group hover:bg-primary-dark "
        >
          <CardHeader className="leading-normal">
            <CardTitle className="text-black font-bold text-2xl group-hover:text-white">
              {plan.type}
            </CardTitle>
            <CardDescription className="text-base group-hover:text-white">{plan.description}</CardDescription>
          </CardHeader>
          <CardContent className="text-lg md:text-xl space-y-4 flex-1 min-h-[200px] group-hover:text-white">
            {plan.price.amount !== null ? (
              <p>
                {plan.price.currency}{" "}
                <span className="font-bold text-2xl md:text-4xl">
                  {plan.price.amount.toLocaleString().replace(/,/g, ".")}
                </span>{" "}
                / {plan.price.frequency}
              </p>
            ) : (
              <p className="font-bold text-3xl">Kontak Kami!</p>
            )}
            <div className="border-b border-gray-300"></div>
            <ul className="space-y-2">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-x-6">
                  <VscCheck className="w-8 h-auto text-primary-primary" />
                  <span className="text-base leading-relaxed font-normal">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="flex items-center justify-center md:mt-6 lg:mt-12">
            <Button className="h-full w-full px-12 py-3s text-lg border-2 bg-neutral-light text-black rounded-3xl group-hover:bg-primary-light_active group-hover:text-primary-dark">
              {plan.buttonText}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
