
import React, { createContext, useState, useContext } from "react";

type SocialMedia = {
  platform: string;
  username: string;
  verified: boolean;
};

type RegistrationData = {
  // Step 1: Personal Information
  personalInfo: {
    name: string;
    email: string;
    cpf: string;
    phone: string;
    birthDate: string;
  };
  // Step 2: Address Information
  addressInfo: {
    street: string;
    number: string;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode: string;
  };
  // Step 3: Document Verification
  documents: {
    idNumber: string;
    idType: string;
    idPhoto: string | null;
  };
  // Step 4: Social Media Verification
  socialMedia: SocialMedia[];
  // Registration completion
  completed: boolean;
};

const initialRegistrationData: RegistrationData = {
  personalInfo: {
    name: "",
    email: "",
    cpf: "",
    phone: "",
    birthDate: "",
  },
  addressInfo: {
    street: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    state: "",
    zipCode: "",
  },
  documents: {
    idNumber: "",
    idType: "RG",
    idPhoto: null,
  },
  socialMedia: [
    {
      platform: "twitter",
      username: "",
      verified: false,
    },
  ],
  completed: false,
};

type RegistrationContextProps = {
  registrationData: RegistrationData;
  currentStep: number;
  updatePersonalInfo: (data: Partial<RegistrationData["personalInfo"]>) => void;
  updateAddressInfo: (data: Partial<RegistrationData["addressInfo"]>) => void;
  updateDocuments: (data: Partial<RegistrationData["documents"]>) => void;
  updateSocialMedia: (data: SocialMedia[]) => void;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
  completeRegistration: () => void;
  reset: () => void;
};

const RegistrationContext = createContext<RegistrationContextProps | undefined>(
  undefined
);

export const RegistrationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [registrationData, setRegistrationData] = useState<RegistrationData>(
    initialRegistrationData
  );
  const [currentStep, setCurrentStep] = useState(1);

  const updatePersonalInfo = (data: Partial<RegistrationData["personalInfo"]>) => {
    setRegistrationData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        ...data,
      },
    }));
  };

  const updateAddressInfo = (data: Partial<RegistrationData["addressInfo"]>) => {
    setRegistrationData((prev) => ({
      ...prev,
      addressInfo: {
        ...prev.addressInfo,
        ...data,
      },
    }));
  };

  const updateDocuments = (data: Partial<RegistrationData["documents"]>) => {
    setRegistrationData((prev) => ({
      ...prev,
      documents: {
        ...prev.documents,
        ...data,
      },
    }));
  };

  const updateSocialMedia = (data: SocialMedia[]) => {
    setRegistrationData((prev) => ({
      ...prev,
      socialMedia: data,
    }));
  };

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 4));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const goToStep = (step: number) => {
    if (step >= 1 && step <= 4) {
      setCurrentStep(step);
    }
  };

  const completeRegistration = () => {
    setRegistrationData((prev) => ({
      ...prev,
      completed: true,
    }));
  };

  const reset = () => {
    setRegistrationData(initialRegistrationData);
    setCurrentStep(1);
  };

  return (
    <RegistrationContext.Provider
      value={{
        registrationData,
        currentStep,
        updatePersonalInfo,
        updateAddressInfo,
        updateDocuments,
        updateSocialMedia,
        nextStep,
        prevStep,
        goToStep,
        completeRegistration,
        reset,
      }}
    >
      {children}
    </RegistrationContext.Provider>
  );
};

export const useRegistration = () => {
  const context = useContext(RegistrationContext);
  if (context === undefined) {
    throw new Error("useRegistration must be used within a RegistrationProvider");
  }
  return context;
};
