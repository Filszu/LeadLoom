// import getSession from "./getSession";

// export const savedSession = await getSession();
console.log('===');

// Error: Invariant: cookies() expects to have requestAsyncStorage, none available.
//     at cookies (/vercel/path0/.next/server/chunks/9948.js:14:3734)
//     at getSession (/vercel/path0/.next/server/chunks/2499.js:1:13809)
//     at /vercel/path0/.next/server/app/dashboard/page.js:1:24257
//     at __webpack_require__.a (/vercel/path0/.next/server/webpack-runtime.js:1:1019)
//     at 26889 (/vercel/path0/.next/server/app/dashboard/page.js:1:24179)
//     at __webpack_require__ (/vercel/path0/.next/server/webpack-runtime.js:1:146)
//     at /vercel/path0/.next/server/app/dashboard/page.js:1:19518
//     at __webpack_require__.a (/vercel/path0/.next/server/webpack-runtime.js:1:1019)
//     at 68156 (/vercel/path0/.next/server/app/dashboard/page.js:1:19367)
//     at Function.__webpack_require__ (/vercel/path0/.next/server/webpack-runtime.js:1:146)
// > Build error occurred
// Error: Failed to collect page data for /dashboard
//     at /vercel/path0/node_modules/next/dist/build/utils.js:1178:15


// export async function getServerSideProps(context) {
//     const savedSession = await getSession(context.req);
  
//     // Pass the session data to your page as a prop
//     return { props: { savedSession } };
//   }