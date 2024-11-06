export interface Devis {
  name: string;
  company: string;
  email: string;
  phone: number | null;
  site_type: {
    'site-vitrine': boolean;
    'site-complet': boolean;
    'site-ecommerce': boolean;
    'site-wordpress': boolean;
  };
  page_count: number | null;
  features: {
    'contact-form': boolean;
    'blog': boolean;
    'portfolio': boolean;
    'faq': boolean;
    'booking': boolean;
    'catalog': boolean;
  };
  product_count: number | null;
  payment_options: {
    'payment-card': boolean;
    'paypal': boolean;
    'stripe': boolean;
    //   'other-payment-check': boolean;
  };
  other_payment: string;
  delivery_options: {
    'delivery-national': boolean;
    'delivery-international': boolean;
    pickup: boolean;
  };
  stock_management: string;
  design: {
    'graphic-charter': boolean;
    'visual-advice': boolean;
  };
  message: string;
}
