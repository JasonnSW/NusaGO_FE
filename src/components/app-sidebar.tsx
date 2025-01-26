"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { usePlaceContext } from "@/features/peta/context/PlaceContext";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { AccordionItemContent } from "./AccordionItemContent";
import { Skeleton } from "@/components/ui/skeleton";

const emissionsItems = [
  "Biomass Fires CCI",
  "Biomass Fires MODIS LC",
  "Drained Organic Soils",
  "Fires Organic Soils",
];

const landCoverItems = [
  "WorldCover 10m 2020/2021 (ESA)",
  "Dynamic World",
  "Copernicus CGLS-LC100 Land Cover",
  "ESRI 2017/2023 Land Cover",
];

const vegetationsItems = [
  "NDVI (anomalies) - MODIS",
  "NDVI (average) - MODIS",
  "NDVI (change) - MODIS",
  "PET (anomalies) - MODIS",
  "PET (average) - MODIS",
  "PET (change) - MODIS",
];

export function AppSidebar() {
  const { photoUrl, address } = usePlaceContext();

  return (
    <Sidebar className="space-y-4">
      <SidebarHeader className="space-y-1">
        {photoUrl ? (
          <div className="w-full h-full">
            <Image
              src={photoUrl}
              className="object-contain"
              alt="Place Photo"
              width={400}
              height={400}
            />
          </div>
        ) : (
          <Skeleton className="w-full h-full bg-gray-500"/>
        )}
        {address && (
          <span className="pl-6 text-xl font-bold text-black">{address}</span>
        )}
      </SidebarHeader>
      <Separator className="w-full h-[2px] mt-1 " />
      <SidebarContent className="mx-7 mt-6">
        <Accordion type="single" collapsible className="rounded-3xl border">
          <AccordionItem value="emissions" className="mx-4">
            <AccordionTrigger
              className="flex items-center space-x-4"
              icon="/assets/emission.svg"
            >
              <span className="text-neutral-dark_active font-semibold">
                Emissions
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <AccordionItemContent title="Emissions" items={emissionsItems} />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="land-cover" className="mx-4">
            <AccordionTrigger
              className="flex items-center space-x-2"
              icon="/assets/landCover.svg"
            >
              <span className="text-neutral-dark_active font-semibold">
                Land Cover
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <AccordionItemContent title="Land Cover" items={landCoverItems} />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="vegetations" className="mx-4">
            <AccordionTrigger
              className="flex items-center space-x-2"
              icon="/assets/vegetation.svg"
            >
              <span className="text-neutral-dark_active font-semibold">
                Vegetations
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <AccordionItemContent
                title="Vegetations"
                items={vegetationsItems}
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </SidebarContent>
    </Sidebar>
  );
}
