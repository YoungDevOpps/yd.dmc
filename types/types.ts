// types/document.ts
export interface DocumentType {
  id: string;
  title: string;
  description: string;
  fileUrl: string;
  fileSize: string;
  fileType: string;
  certificatedAt: string;
  category: string;
}

export interface ActivityType {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: { id: string; description: string }[];
}

export interface ContactInfoType {
  label: string;
  description: string[];
  icon: string;
  iconColor?: string;
  iconHoverColor: string;
}
