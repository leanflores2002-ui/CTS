import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import PageContainer from '@/components/PageContainer';
import KeyTopicsSection from '@/components/KeyTopicsSection';
import AIStatsSection from '@/components/AIStatsSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import ResourcesSection from '@/components/ResourcesSection';
import ImpactosSocialesSection from '@/components/ImpactosSocialesSection';
import OpinionesSection from '@/components/OpinionesSection';

export default function Inicio() {
  return (
    <>
      <Header />
      <PageContainer>
        <HeroSection />
        <KeyTopicsSection />
        <AIStatsSection />
        <CaseStudiesSection />
        <ResourcesSection />
        <ImpactosSocialesSection />
        <OpinionesSection />
      </PageContainer>
      <Footer />
    </>
  );
}
