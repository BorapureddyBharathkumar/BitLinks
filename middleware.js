import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  publicRoutes: ["/", "/shorten"],
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
