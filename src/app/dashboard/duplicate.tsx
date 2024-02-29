"use client";

import { Button } from "@/components/ui/button";
import prisma from "@/db/prisma";
import { duplicate } from "@/server/actions";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";

// Duplicate button 
interface DuplicateButtonProps {
    fileId: string;
  }

export function DuplicateButton({fileId} : DuplicateButtonProps ) {

        const router = useRouter();
        const handleReload = () => {
                router.push('/'); // Replace '/' with the desired URL
        };
            return (
                <Button hidden className=" bg-green-500 hover:bg-green-400" onClick={async () => {
                        await duplicate(fileId);
                        handleReload();
                }}>Duplicate</Button>
            )
}