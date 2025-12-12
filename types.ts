import React from 'react';

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: number;
  name: string;
  event: string;
  text: string;
  rating: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface SectionProps {
  id: string;
}