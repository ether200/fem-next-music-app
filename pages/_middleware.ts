import { NextResponse } from "next/server";

/*
THIS MIDDLEWARE IS GOING TO EXECUTE BEFORE ANY OF THESE REQUEST HAPPENS
THE EDGE (MIDDLEWARE) ARE NOT IN A NODE ENVIRONMENT
IT'S MORE OF A WEBWORKER ENVIRONMENT OR NETWORK
IT CAN ONLY ACCESS TO LOW LEVEL THINGS. INTENTIONAL TO MAKE THINGS FASTER
*/

// Routes to be protected
const signedInPages = ["/", "/playlist", "/library"];

export default function middleware(req) {
  if (signedInPages.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.TRAX_ACCESS_TOKEN;
    const url = "/signin";

    if (!token) {
      return NextResponse.redirect(url);
    }
  }
}
