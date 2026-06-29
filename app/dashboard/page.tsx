"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import EmptyList from "./_components/EmptyList";

function Dashboard() {
  const [videoList, setVideoList] = useState([]);
  return (
    <div>
      <div className="flex  justify-between">
        <h2 className="font-bold text-2xl text-primary">Dashboard</h2>
        <Button>+ Create New</Button>

        {videoList?.length == 0 && <EmptyList />}
      </div>
    </div>
  );
}

export default Dashboard;
