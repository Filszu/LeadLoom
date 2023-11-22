import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard",
  // other metadata
};

export default function Dashboard() {
  return (
    <>
      <ECommerce />
    </>
  );
}
