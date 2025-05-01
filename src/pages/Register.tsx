
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useRegistration } from "@/context/RegistrationContext";
import RegistrationProgress from "@/components/registration/RegistrationProgress";
import PersonalInfoStep from "@/components/registration/PersonalInfoStep";
import AddressInfoStep from "@/components/registration/AddressInfoStep";
import DocumentVerificationStep from "@/components/registration/DocumentVerificationStep";
import SocialMediaVerificationStep from "@/components/registration/SocialMediaVerificationStep";

const steps = [
  { id: 1, title: "Dados Pessoais" },
  { id: 2, title: "Endereço" },
  { id: 3, title: "Documentos" },
  { id: 4, title: "Redes Sociais" },
];

const Register: React.FC = () => {
  const { currentStep, goToStep } = useRegistration();

  const handleStepClick = (step: number) => {
    if (step <= currentStep) {
      goToStep(step);
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfoStep />;
      case 2:
        return <AddressInfoStep />;
      case 3:
        return <DocumentVerificationStep />;
      case 4:
        return <SocialMediaVerificationStep />;
      default:
        return <PersonalInfoStep />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8">
            <h1 className="text-3xl font-bold text-center mb-8">
              Cadastro para o <span className="text-furia-orange">Chatbot</span> da FURIA
            </h1>
            
            <RegistrationProgress
              currentStep={currentStep}
              steps={steps}
              onStepClick={handleStepClick}
            />
            
            <div className="mt-8">
              {renderCurrentStep()}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
