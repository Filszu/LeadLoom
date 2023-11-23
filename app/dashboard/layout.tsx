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
   
        {children}
      </section>
    )
  }