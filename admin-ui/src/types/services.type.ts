export type Service = {
  id: number;
  icon: string;
  iconPublicId: string;
  localeData: {
    uz: {
      title: string;
      desc: string;
      features: string[];
      steps: string[];
    };
    ru: {
      title: string;
      desc: string;
      features: string[];
      steps: string[];
    };
  };
};

export type ServicesResponse = {
  success: boolean;
  message: string;
  data: Service[];
};
