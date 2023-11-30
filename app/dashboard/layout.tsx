import Nav from "@/components/nav/Nav"


export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="w-full">
        {/* Include shared UI here e.g. a header or sidebar */}
        <Nav />
        <main className="p-10 w-full m-auto lg:w-11/12 xl:w-10/12">
          {children}
        </main>
   
        
      </section>
    )
  }