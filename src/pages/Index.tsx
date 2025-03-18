
import React from "react";
import MainLayout from "@/layouts/MainLayout";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Skills from "@/components/Skills";

const Index = () => {
  return (
    <MainLayout>
      <Hero />
      <Education />
      <Skills />
    </MainLayout>
  );
};

export default Index;
