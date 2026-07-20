"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
function SelectTopic({ onUserSelect }) {
  const items = [
    "Custom Prompt",
    "Random AI Story",
    "Scary Story",
    "Historical Facts",
    "Bedtime Story",
    "Motivational",
    "Fun Facts",
  ];
  const [selectedOption, setSelectedOption] = useState<string>("");
  return (
    <div>
      <h2 className="font-bold text-xl text-primary">Content</h2>
      <p className="text-gray-500">What is the topic of your video?</p>
      <Select
        items={items}
        onValueChange={(value: string) => {
          setSelectedOption(value);
          value !== "Custom Prompt" && onUserSelect("topic", value);
        }}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {items.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      {selectedOption == "Custom Prompt" && (
        <Textarea
          onChange={(e) => {
            console.log("e", e.target.value);
            onUserSelect("topic", e.target.value);
          }}
          className={"mt-3"}
          placeholder="Write prompt on which you want to generate video"
        />
      )}
    </div>
  );
}

export default SelectTopic;
