
import React from "react";
import MainLayout from "@/layouts/MainLayout";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import ProfileSection from "@/components/ProfileSection";
import ServicesOffered from "@/components/ServicesOffered";
import Testimonials from "@/components/Testimonials";
import Projects from "@/components/Projects";

const Index = () => {
  return (
    <MainLayout>
      <Hero />
      <ProfileSection />
      <Experience />
      <Projects isFeaturedOnly={true} />
      <Skills />
      <ServicesOffered />
      <Education />
      <Testimonials />
    </MainLayout>
  );
};

export default Index;
