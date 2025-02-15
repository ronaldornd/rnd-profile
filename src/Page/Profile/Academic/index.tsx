import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import School from "./School";
import Certificates from "./Certificates";

export default function Academic() {
  return (
    <Tabs defaultValue="school" className="w-full flex items-center justify-center flex-col p-2">
      <TabsList className="bg-green-900 w-max justify-center items-center flex gap-5 h-10 rounded-lg px-7">
        <TabsTrigger className="bg-green-700 border-2 rounded-lg px-4 hover:bg-green-600 border-black" value="school">Escolar</TabsTrigger>
        <TabsTrigger className="bg-green-700 border-2 rounded-lg px-4 hover:bg-green-600 border-black" value="certificates">Certificados</TabsTrigger>
      </TabsList>
      <TabsContent value="school">
        <div className="w-full">
          <School />
        </div>
      </TabsContent>
      <TabsContent value="certificates">
        <div className="w-full">
<Certificates/>        </div>
      </TabsContent>
    </Tabs>
  );
}