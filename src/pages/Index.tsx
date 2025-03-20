
import React from "react";
import MainLayout from "@/layouts/MainLayout";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

const Index = () => {
  return (
    <MainLayout>
      <Hero />
      <Projects />
      <Skills />
      <Education />
    </MainLayout>
  );
};

export default Index;
