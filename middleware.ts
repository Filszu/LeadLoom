import { NextResponse, type NextRequest } from 'next/server'
import { createClient } from '@/utils/supabase/middleware'

export async function middleware(request: NextRequest) {
  try {
    // This `try/catch` block is only here for the interactive tutorial.
    // Feel free to remove once you have Supabase connected.
    const { supabase, response } = createClient(request)

    // Refresh session if expired - required for Server Components
    // https://supabase.com/docs/guides/auth/auth-helpers/nextjs#managing-session-with-middleware
    // const session = await supabase.auth.getSession()
    const {
      data: { session },
    }  = await supabase.auth.getSession()

    // if(!session) {
    //   return NextResponse.redirect('/login')
    // }

    
    console.log('----------->session', session)
    if (!session) {
      console.log("unauthorized")
      // return NextResponse.redirect('/login')
      // NextResponse.redirect(new URL('/home', request.url))
      return NextResponse.redirect(new URL('/login', request.url))
    }
    // if (!session || session?.user.user_metadata?.role !== "admin") {
      // if (req.nextUrl.pathname.startsWith(apiAdminPath)) {
      //   return new NextResponse(
      //     JSON.stringify({ message: "authorization failed" }),
      //     { status: 403, headers: { "Content-Type": "application/json" } }
      //   );
      // } else if (req.nextUrl.pathname.startsWith(adminPath)) {
      //   const redirectUrl = req.nextUrl.clone();
      //   redirectUrl.pathname = "/";
      //   return NextResponse.redirect(redirectUrl);
      // }
    //   return NextResponse.redirect('/login')
    // }

    return response
  } catch (e) {
    // If you are here, a Supabase client could not be created!
    // This is likely because you have not set up environment variables.
    // Check out http://localhost:3000 for Next Steps.
    return NextResponse.next({
      request: {
        headers: request.headers,
      },
    })
  }
}


export const config = {
  matcher: ["/dashboard/:path*"],
};



 
// // This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL('/home', request.url))
// }

