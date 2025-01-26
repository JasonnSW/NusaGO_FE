import { Switch } from "./ui/switch";
import { IoMdAlert } from "react-icons/io";

interface AccordionItemContentProps {
  items: string[];
  title: string;
}

export function AccordionItemContent({ items, title }: AccordionItemContentProps) {
  return (
    <div className="space-y-4 mt-2">
      {items.map((label, index) => (
        <div key={index} className="flex items-center justify-between ">
          <div className="flex items-center">
            <IoMdAlert className="text-neutral-600 text-2xl" />
            <span className="text-xs mx-2 font-medium text-gray-700 w-36">
              {title} - {label}
            </span>
          </div>
          <Switch />
        </div>
      ))}
    </div>
  );
}
