import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
function SelectDuration({ onUserSelect }) {
  return (
    <div>
      <h2 className="font-bold text-xl text-primary">Duration</h2>
      <p className="text-gray-500">Select the duration of your video</p>
      <Select
        onValueChange={(value: string) => {
          onUserSelect("duration", value);
        }}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Duration" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value={"30 Seconds"}>30 Seconds</SelectItem>

            <SelectItem value={"60 Seconds"}>60 Seconds</SelectItem>

            <SelectItem value={"90 Seconds"}>90 Seconds</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

export default SelectDuration;
