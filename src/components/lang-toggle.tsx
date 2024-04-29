import { GlobeIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";

export function LangToggle() {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                    <GlobeIcon className="h-5 w-5" />
                    <span className="sr-only">Escolha o tema</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => changeLanguage('en')}>
                    English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('pt-BR')}>
                    Português (BR)
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
