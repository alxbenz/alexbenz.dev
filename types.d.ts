export interface Information {
    contact: Contact;
    links: Link[];
}

export interface Content {
    profile: string[];
    intro: Intro;
    sections: SectionsEntity[];
    skills: SkillsEntity[];
    projects: ProjectsEntity[];
    employment: EmploymentEntity[];
    education: EducationEntity[];
    testimonials: TestimonialsEntity[];
}
export interface Contact {
    name: string;
    street: string;
    zip: number;
    location: string;
    phone: string;
    mail: string;
    web: string;
    birthdate: string;
}
export interface Link {
    id: string;
    url: string;
    usage: Usage[];
}

type Usage = 'intro' | 'contact';

export interface Intro {
    h2: string;
    p?: string[];
}
export interface SectionsEntity {
    id: string;
    h2: string;
    sub: string;
    p: string[];
}
export interface ContactInfo {
    email: string;
    phone: string;
    socialMedia: SocialMedia;
}
export interface SocialMedia {
    twitter: string;
    linkedin: string;
    github: string;
}
export interface SkillsEntity {
    category: string;
    label: string;
    period?: string;
    level?: string;
    percentage?: number;
    top?: boolean;
}
export interface ProjectsEntity {
    start: string;
    end?: string;
    position: string;
    company?: string;
    location?: string;
    description: string;
    skills?: string[];
    projectLink?: string;
}
export interface EmploymentEntity {
    start: string;
    end: string;
    position: string;
    company: string;
    location: string;
    description: string;
    skills?: string[];
}
export interface EducationEntity {
    date: number;
    title: string;
    field?: string;
    institute?: string;
    location?: string;
}
export interface TestimonialsEntity {
    name: string;
    company: string;
    statement?: string[];
}
