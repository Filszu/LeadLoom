import Nav from "@/components/nav/Nav"


export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    console.log("layout")
    return (
      <section className="w-full">
        {/* Include shared UI here e.g. a header or sidebar */}
        <Nav />
        <main className="m-auto w-full max-w-full p-4 sm:p-6 md:p-10 lg:w-11/12 xl:w-10/12">
          {children}
        </main>
   
        
      </section>
    )
  }