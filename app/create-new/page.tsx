"use client";
import  { useState } from "react";
import SelectTopic from "./_components/SelectTopic";
import SelectStyles from "./_components/SelectStyles";
import SelectDuration from "./_components/SelectDuration";
import { Button } from "@/components/ui/button";
import axios from "axios";
import CustomLoading from "./_components/CustomLoading";
function CreateNew() {
  const [formData, setFormData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [videoScript, setVideoScript] = useState([]);
  const onHandleInputChange = (fieldName: string, fieldValue: string) => {
    console.log(fieldName, fieldValue);
    setFormData((prev) => ({
      ...prev,
      [fieldName]: fieldValue,
    }));
  };

  const getVideoScript = async () => {
    try {
      setLoading(true);
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
      const result = await axios.post(
        "/api/get-video-script",
        { prompt },
        {
          headers: { "Content-Type": "application/json" },
        },
      );
      console.log("res", result.data);
      setVideoScript(result?.data?.result);
      setLoading(false);
    } catch (error) {
      console.log("error", error?.response?.data || error);
      setLoading(false);
    }
  };
  const onClickHandler = () => {
    getVideoScript();
  };
  console.log("vidoe", videoScript);
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
        <CustomLoading loading={loading} />
      </div>
    </div>
  );
}

export default CreateNew;
