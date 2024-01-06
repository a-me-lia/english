import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "English | matthewguo.com",
  description: "English class website",
};

export default function Page() {
  redirect("/home");
}