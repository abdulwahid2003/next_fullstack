"use client";
import React, { useEffect, useState } from "react";
import SelectTopic from "./_components/SelectTopic";
import SelectStyles from "./_components/SelectStyles";
import SelectDuration from "./_components/SelectDuration";
import { Button } from "@/components/ui/button";
import axios from "axios";
function CreateNew() {
  const [formData, setFormData] = useState([]);
  const onHandleInputChange = (fieldName: string, fieldValue: string) => {
    console.log(fieldName, fieldValue);
    setFormData((prev) => ({
      ...prev,
      [fieldName]: fieldValue,
    }));
  };

  const getVideoScript = async () => {
    try {
      const prompt =
        "Write a script to generate" +
        " " +
        formData?.duration +
        " " +
        "video on topic: " +
        " " +
        formData?.topic +
        " " +
        "along with AI Image prompt in" +
        " " +
        formData?.imageStyle +
        " " +
        "for each scene and give me result in JSON format with imagePrompt and ContentText as field";
      console.log("prompt", prompt);
      const result = await axios
        .post(`/api/get-video-script`, {
          prompt: prompt,
        })
        .then((res) => console.log("res", res));
    } catch (error) {
      console.log("error", error);
    }
  };
  const onClickHandler = () => {
    getVideoScript();
  };
  return (
    <div className="md:px-20">
      <h2 className="font-bold text-4xl text-primary text-center"></h2>
      <div className="mt-10 shadow-md p-10">
        <SelectTopic onUserSelect={onHandleInputChange} />
        <SelectStyles onUserSelect={onHandleInputChange} />
        <SelectDuration onUserSelect={onHandleInputChange} />
        <Button
          className="mt-10 w-full"
          title={"Create Short Video"}
          onClick={onClickHandler}
        >
          Create Short Video
        </Button>
      </div>
    </div>
  );
}

export default CreateNew;
