import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type InputWithLabelProps = {
  label: string;
  placeholder: string;
  type?: string;
  id?: string;
  className?: string;
};

export function InputWithLabel({
  label,
  placeholder,
  type,
  id,
  className,
  ...props
}: InputWithLabelProps) {
  return (
    <div className="grid w-full max-w-md items-center gap-y-2">
      <Label htmlFor={label}>{label}</Label>
      <Input
        className={className}
        type={type}
        id={id}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
}
