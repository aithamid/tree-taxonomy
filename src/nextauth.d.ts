import { UUID } from "crypto";
import {DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
    interface Session extends DefaultSession {
        user: DefaultUser & {
            id: UUID;
        };
    }
}