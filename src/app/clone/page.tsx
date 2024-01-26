"use client"

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Page() {

    const [title, setTitle] = useState('');
    const valueColor = "#FF0000"

    const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setTitle(value.toString());
    };

    return <div>
        <form className="flex flex-col gap-4 p-8 w-1/3">
            <h1 className="text-2xl font-bold">{title}</h1>
            <div className="flex flex-col gap-4">
                <label htmlFor="color">Color</label>
                <input id="color" type="color" defaultValue={valueColor} onChange={(e) => handleColorChange(e)}/>
            </div>
            <Button type="submit">Submit</Button>
        </form>
    </div>
}