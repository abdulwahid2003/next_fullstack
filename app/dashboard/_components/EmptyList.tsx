import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function EmptyList() {
  return (
    <div className="p-5 py-25 flex items-center flex-col mt-10 border-2">
      <h2>You don't have any short video created</h2>
      <Link href={'/create-new'}>
        <Button>Craete New Short Video</Button>
      </Link>
    </div>
  );
}

export default EmptyList;
