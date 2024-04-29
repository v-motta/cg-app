import { GlobeIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LangToggle() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                    <GlobeIcon className="h-5 w-5" />
                    <span className="sr-only">Escolha o tema</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => { }}>
                    English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => { }}>
                    Português (BR)
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
