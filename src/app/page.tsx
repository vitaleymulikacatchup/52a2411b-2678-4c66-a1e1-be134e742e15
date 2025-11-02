"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Scale, Briefcase, TrendingUp, Star, BookOpen, FileText, Clock, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Meist", id: "about" },
            { name: "Teenused", id: "services" },
            { name: "Arvustused", id: "testimonials" },
            { name: "Blogi", id: "blog" },
            { name: "Kontakt", id: "contact" }
          ]}
          brandName="Advokaadibüroo"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Usaldusväärne õigusabi Tallinnas"
          description="Meie kogenud advokaadid pakuvad professionaalset õigusabi äri-, tsiviil- ja kriminaalõiguse valdkondades. Individuaalne lähenemine igale kliendile."
          tag="Advokaadibüroo"
          tagIcon={Scale}
          buttons={[
            { text: "Broneeri konsultatsioon", href: "contact" },
            { text: "Vaata teenuseid", href: "services" }
          ]}
          imageSrc="https://images.pexels.com/photos/6170859/pexels-photo-6170859.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Kaasaegne advokaadibüroo sisekujundus"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Meist"
          description={[
            "Oleme Tallinna-põhine advokaadibüroo, mis spetsialiseeru äri-, tsiviil- ja kriminaalõiguse valdkondadele. Meie eesmärk on pakkuda klientidele kõrgetasemelist õigusabi.",
            "Meie meeskond koosneb kogenud advokaaadidest, kes omavad sügavaid teadmisi Eesti õigussüsteemist ja rahvusvahelisest õigusest."
          ]}
          buttons={[
            { text: "Tutvuge meeskonnaga", href: "team" }
          ]}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardOne
          title="Meie teenused"
          description="Pakume laia spektrit õigusteenuseid erinevatele klientidele"
          tag="Teenused"
          tagIcon={Briefcase}
          features={[
            {
              title: "Äriõigus",
              description: "Lepingute koostamine ja läbivaatamine, ettevõtete asutamine, ärivaidluste lahendamine",
              imageSrc: "https://images.pexels.com/photos/8112178/pexels-photo-8112178.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Äriõiguse teenused"
            },
            {
              title: "Tsiviilõigus",
              description: "Kinnisvara tehingud, perekonnaseisundite registreerimine, pärimisõigus",
              imageSrc: "https://images.pexels.com/photos/8815877/pexels-photo-8815877.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Tsiviilõiguse teenused"
            },
            {
              title: "Juriidiline nõustamine",
              description: "Õigusalane konsulteerimine, dokumentide koostamine, esindamine ametiasutustes",
              imageSrc: "https://images.pexels.com/photos/8112172/pexels-photo-8112172.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Juriidiline nõustamine"
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="Meie tulemused"
          description="Numbrid, mis räägivad meie kogemuste eest"
          tag="Statistika"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              icon: FileText,
              title: "Lahendatud juhtumeid",
              value: "500+"
            },
            {
              id: "2",
              icon: Clock,
              title: "Aastat kogemust",
              value: "15+"
            },
            {
              id: "3",
              icon: Users,
              title: "Rahulolev klient",
              value: "300+"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Klientide arvustused"
          description="Kuulge, mida meie kliendid meie teenuste kohta arvavad"
          tag="Arvustused"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Liis Tamm",
              role: "Ettevõtja",
              company: "OÜ Tamm Invest",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Liis Tamm portree"
            },
            {
              id: "2",
              name: "Mart Kask",
              role: "Juht",
              company: "AS Kask Grupp",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Mart Kask portree"
            },
            {
              id: "3",
              name: "Kadri Mägi",
              role: "Direktor",
              company: "MTÜ Mägi Fond",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Kadri Mägi portree"
            },
            {
              id: "4",
              name: "Toomas Sepp",
              role: "Omanik",
              company: "FIE Toomas Sepp",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7108955/pexels-photo-7108955.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Toomas Sepp portree"
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Õigusalased artiklid"
          description="Kasulikud nõuanded ja õigusalased uudised"
          tag="Blogi"
          tagIcon={BookOpen}
          blogs={[
            {
              id: "1",
              category: "Äriõigus",
              title: "Ettevõtte asutamise ABC",
              excerpt: "Kõik, mida peate teadma ettevõtte asutamisel Eestis",
              imageSrc: "https://images.pexels.com/photos/6170859/pexels-photo-6170859.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Ettevõtte asutamine",
              authorName: "Adv. Mari Kask",
              authorAvatar: "https://images.pexels.com/photos/14634936/pexels-photo-14634936.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "15. jaanuar 2025"
            },
            {
              id: "2",
              category: "Tsiviilõigus",
              title: "Kinnisvara ostu-müügi lepingud",
              excerpt: "Olulised aspektid kinnisvara tehingute puhul",
              imageSrc: "https://images.pexels.com/photos/5816286/pexels-photo-5816286.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Kinnisvara tehingud",
              authorName: "Adv. Mari Kask",
              authorAvatar: "https://images.pexels.com/photos/14634936/pexels-photo-14634936.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "8. jaanuar 2025"
            },
            {
              id: "3",
              category: "Nõustamine",
              title: "Kuidas valida õiget advokaati",
              excerpt: "Praktilised soovitused õigusabi valikul",
              imageSrc: "https://images.pexels.com/photos/7641842/pexels-photo-7641842.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Advokaadi valimine",
              authorName: "Adv. Mari Kask",
              authorAvatar: "https://images.pexels.com/photos/14634936/pexels-photo-14634936.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "2. jaanuar 2025"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Võtke meiega ühendust"
          description="Broneerige tasuta konsultatsioon või küsige lisainfot meie teenuste kohta. Vastame 24 tunni jooksul."
          inputs={[
            { name: "nimi", type: "text", placeholder: "Teie nimi", required: true },
            { name: "email", type: "email", placeholder: "E-posti aadress", required: true },
            { name: "telefon", type: "tel", placeholder: "Telefoninumber", required: false }
          ]}
          textarea={{
            name: "sõnum",
            placeholder: "Kirjeldage oma õiguslik probleem või küsimus...",
            rows: 5,
            required: true
          }}
          buttonText="Saada sõnum"
          imageSrc="https://images.pexels.com/photos/1031592/pexels-photo-1031592.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Meie kontor Tallinnas"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Teenused",
              items: [
                { label: "Äriõigus", href: "services" },
                { label: "Tsiviilõigus", href: "services" },
                { label: "Nõustamine", href: "services" }
              ]
            },
            {
              title: "Ettevõte",
              items: [
                { label: "Meist", href: "about" },
                { label: "Blogi", href: "blog" },
                { label: "Kontakt", href: "contact" }
              ]
            },
            {
              title: "Kontakt",
              items: [
                { label: "info@advokaadibyroo.ee", href: "mailto:info@advokaadibyroo.ee" },
                { label: "+372 5555 5555", href: "tel:+37255555555" },
                { label: "Tallinn, Eesti", href: "contact" }
              ]
            }
          ]}
          copyrightText="© 2025 Advokaadibüroo. Kõik õigused kaitstud."
        />
      </div>
    </ThemeProvider>
  );
}