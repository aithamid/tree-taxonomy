import DynamicForm from "@/components/dynamicform"
import { SwitchForm } from "@/components/form"
import RealTimeForm from "@/components/realtimeform"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import Link from "next/link"

export default function Page() {
  return <div>
          <nav className="flex items-center justify-center gap-4 py-4 text-sm font-medium md:gap-8 md:py-6 bg-gray-300">
        <Link
          className="px-3 py-1 rounded-md bg-gray-200 text-gray-800 transition-colors hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
          href="#"
        >
          Accueil
        </Link>
      </nav>
      <div className="p-8 w-1/3">
      <RealTimeForm />
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="illumination">
                <AccordionTrigger>Illumination</AccordionTrigger>
                <AccordionContent>
                    <Switch>Switch</Switch>
                    <SwitchForm/>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
      </div>
      <div>
        <DynamicForm />
    </div>
   </div>
}
