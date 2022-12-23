import "@/styles/global.css";
import { GlassPane } from "@/components/GlassPane";
import { PropsWithChildren } from "react";
export default function AuthRootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en'>
      <head />
      <body className='h-screen w-screen rainbow-mesh p-6'>
        <GlassPane className='w-full h-full flex items-center justify-center '>
          {children}
        </GlassPane>
      </body>
    </html>
  );
}
