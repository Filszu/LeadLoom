import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

interface TabSectionProps {
    tab1Children: React.ReactNode,
    tab2Children: React.ReactNode,
    tab1Title: string,
    tab2Title: string,
    tab1Value: string,
    tab2Value: string,
    
}
export function TabSection({tab1Children,tab2Children, tab1Title, tab1Value, tab2Title, tab2Value}: TabSectionProps) {
  return (
    <Tabs defaultValue={tab1Value} className="">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value={tab1Value}>{tab1Title}</TabsTrigger>
        <TabsTrigger value={tab2Value}>{tab2Title}</TabsTrigger>
      </TabsList>
      <TabsContent value={tab1Value}>
        {tab1Children}
      </TabsContent>
      <TabsContent value={tab2Value}>
        {tab2Children}
      </TabsContent>
    </Tabs>
  )
}
