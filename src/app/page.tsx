import Hero from "@/components/Hero";
import Features from "@/components/Features";
import BooksShowcase from "@/components/BooksShowcase";
import AuthorsShowcase from "@/components/AuthorsShowcase";
import Pricing from "@/components/Pricing";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <BooksShowcase />
      <AuthorsShowcase />
      <Pricing />
      <ContactForm />
    </>
  );
}
