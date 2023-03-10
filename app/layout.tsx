import "@/styles/global.css";
import { GlassPane } from "@/components/GlassPane";
import { PropsWithChildren } from "react";
import Sidebar from "@/components/Sidebar";
export default function DashboardRootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en'>
      <head />
      <body className='h-screen w-screen rainbow-mesh p-6'>
        {children}
      </body>
    </html>
  );
}
