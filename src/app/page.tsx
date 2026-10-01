import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import BooksShowcase from "@/components/BooksShowcase";
import AuthorsShowcase from "@/components/AuthorsShowcase";
import Pricing from "@/components/Pricing";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <BooksShowcase />
        <AuthorsShowcase />
        <Pricing />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
