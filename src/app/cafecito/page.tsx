import { CafecitoDonations } from "./donations";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invitame un Cafecito - @ferminrp",
};

export default function CafecitoDonationsPage() {
  return <CafecitoDonations />;
} 