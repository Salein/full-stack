import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import Image from "next/image";
import { Button } from "../ui";

interface Props {
    classname?: string;
}

export const Header: React.FC<Props> = ({ classname}) => {
    return (
        <header className={cn('border border-b', classname)}>
            <Container className="flex items-center justify-between py-8">

                {/* Левая часть */}
                <div className="flex items-center gap-4">
                    <Image src="/logo.png" alt="logo" width={32} height={32} />
                    <div>
                        <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
                        <p className="text-sm text-gray-400 leading-3">вкусней уже некуда</p>
                    </div>
                </div>

                {/* Правая часть */}
                <div className="flex items-center gap-3">
                    <Button variant="outline">Войти</Button>
                </div>
            </Container>
        </header>
    )
}