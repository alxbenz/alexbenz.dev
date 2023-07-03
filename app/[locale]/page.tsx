import { Navigation } from "@/components/Global/Navigation";
import { Contact } from "@/components/Home/Contact";
import { Intro } from "@/components/Home/Intro";
import { Section } from "@/components/Home/Section";
import { Skills } from "@/components/Home/Skills";
import { Testimonials } from "@/components/Home/Testimonials";

import contentDE from "@/resources/content.de.json";
import contentEN from "@/resources/content.en.json";
import information from "@/resources/information.json";

import { Content, Information } from "@/types";

export const metadata = {
    title: "home",
    description: "what?",
};

export async function generateStaticParams() {
    return [{ locale: "en" }, { locale: "de" }];
}

export default function Home({ params }: { params: { locale: string } }) {
    const content: Content = params.locale === "de" ? contentDE : contentEN;
    const skillSection = content.sections.find(
        (section) => section.id === "skills"
    );
    const testimonialsSection = content.sections.find(
        (section) => section.id === "testimonials"
    );

    const contactSections = content.sections.find(
        (section) => section.id === "contact"
    );

    return (
        <div className="relative text-sm/6">
            <Navigation />
            <Intro
                intro={content.intro}
                information={information as Information}
            />
            <div className="relative md:w-1/2 md:left-1/2 flex justify-center lg:justify-start dark:bg-slate-950 dark:text-white">
                <main className="relative max-w-lg [&>section+section]:border-t-2">
                    {skillSection && (
                        <Section
                            h2={skillSection.h2}
                            p={skillSection.p}
                            sub={skillSection.sub}
                        >
                            <Skills skills={content.skills} />
                        </Section>
                    )}
                    {testimonialsSection && (
                        <Section
                            h2={testimonialsSection.h2}
                            p={testimonialsSection.p}
                            sub={testimonialsSection.sub}
                        >
                            <Testimonials testimonials={content.testimonials} />
                        </Section>
                    )}
                    {contactSections && (
                        <Section
                            h2={contactSections.h2}
                            p={contactSections.p}
                            sub={contactSections.sub}
                        >
                            <Contact information={information as Information} />
                        </Section>
                    )}
                </main>
            </div>
        </div>
    );
}
