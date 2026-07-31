"use client";
import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";
import { Spinner } from "@/components/ui/spinner";

function CustomLoading({ loading }: { loading: boolean }) {
  return (
    <AlertDialog open={loading}>
      <AlertDialogContent className="bg-white">
        <div className="bg-white flex flex-col items-center my-10">
          <h2>Loading...</h2>
          <Spinner />
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default CustomLoading;
