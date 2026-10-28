/**
 * Core type definitions for Agriculture Extension SF Rahu (AESFR)
 */

export type Language = 'ur' | 'sd' | 'en';

export interface WeatherData {
  city: string;
  district: string;
  latitude: number;
  longitude: number;
  temperature: number;
  apparentTemperature: number;
  humidity: number;
  windSpeed: number;
  windDirection: number;
  precipitationProbability: number;
  weatherCode: number;
  weatherDescription: string;
  isDay: boolean;
  retrievalTime: string;
  provider: string;
  isCached?: boolean;
  dailyForecast: {
    date: string;
    dayName: string;
    maxTemp: number;
    minTemp: number;
    rainProb: number;
    weatherCode: number;
  }[];
}

export interface SchemeItem {
  id: string;
  titleUrdu: string;
  titleSindhi: string;
  titleEnglish: string;
  summaryUrdu: string;
  summarySindhi: string;
  summaryEnglish: string;
  targetCropOrBeneficiary: string;
  subsidyOrBenefit: string;
  eligibility: string;
  requiredDocuments: string[];
  sourceName: string;
  sourceUrl: string;
  publishedDate: string;
  lastUpdated: string;
  isVerified: boolean;
  verificationBadge: string;
  category: 'subsidy' | 'card' | 'support_price' | 'solar_equipment' | 'relief';
}

export interface DepartmentNotice {
  id: string;
  titleUrdu: string;
  titleSindhi: string;
  titleEnglish: string;
  contentUrdu: string;
  contentSindhi: string;
  contentEnglish: string;
  priority: 'urgent' | 'important' | 'routine';
  issuingAuthority: string;
  sourceUrl: string;
  publishedDate: string;
  expiryDate?: string;
  isVerified: boolean;
  category: 'pest_alert' | 'canal_schedule' | 'advisory' | 'general';
}

export interface AgricultureCircle {
  id: string;
  circleName: string;
  circleNameUrdu: string;
  circleNameSindhi: string;
  taluka: string;
  district: string;
  officerName: string;
  officerTitle: string;
  tappas: string[];
  dehs: string[];
  mainCrops: string[];
  contactNote: string;
}

export interface CropGuide {
  id: string;
  nameUrdu: string;
  nameSindhi: string;
  nameEnglish: string;
  botanicalName: string;
  season: 'Kharif' | 'Rabi' | 'Zaid';
  sowingPeriod: string;
  harvestingPeriod: string;
  recommendedVarieties: string[];
  seedRate: string;
  landPreparation: string;
  irrigationSchedule: string;
  fertilizerPlan: string;
  majorPestsAndDiseases: {
    name: string;
    symptoms: string;
    culturalControl: string;
  }[];
  harvestingStorage: string;
  sindhSpecificTips: string;
  officialReference: string;
}

export interface DiseaseDetectionResult {
  diagnosis: string;
  diagnosisUrdu: string;
  diagnosisSindhi: string;
  cropIdentified: string;
  confidenceLevel: 'High' | 'Medium' | 'Low' | 'Uncertain';
  confidenceScorePercent: number;
  confidenceExplanation: string;
  isPhotoClear: boolean;
  visibleSymptoms: string[];
  possibleCauses: string[];
  safeImmediateSteps: string[];
  chemicalAdvisoryDisclaimer: string;
  extensionOfficerAction: string;
  analyzedAt: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant' | 'system';
  text: string;
  timestamp: string;
  cropContext?: string;
  needsFollowUp?: boolean;
  isOfflineFallback?: boolean;
}
