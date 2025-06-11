import React from "react";
import { z } from "zod";
export declare const schema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email?: string;
    password?: string;
}, {
    email?: string;
    password?: string;
}>;
export default function LoginForm(): React.JSX.Element;
