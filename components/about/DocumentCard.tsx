"use client";

import React, { JSX } from "react";
import { FileText, Download, Calendar, File } from "lucide-react";
import { DocumentType } from "@/types/types";
import { useIsMobile } from "@/hooks/use-mobile";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface DocumentCardProps {
  document: DocumentType;
}

const DocumentCard: React.FC<DocumentCardProps> = ({ document }) => {
  const [fileType, setFileType] = React.useState<string>("");
  const [fileSize, setFileSize] = React.useState<string>("");

  const isMobile = useIsMobile();

  const [isHovered, setIsHovered] = React.useState<boolean>(false);

  // 🔍 Extraire l’extension + taille du fichier dynamiquement
  React.useEffect(() => {
    if (!document.fileUrl) return;

    // 1️⃣ Déterminer le type de fichier
    const extMatch = document.fileUrl.split(".").pop();
    setFileType(extMatch ? extMatch.toLowerCase() : "inconnu");

    // 2️⃣ Déterminer la taille avec une requête HEAD
    const fetchFileSize = async () => {
      try {
        const response = await fetch(document.fileUrl, { method: "HEAD" });
        const size = response.headers.get("content-length");

        if (size) {
          const kb = Number(size) / 1024;
          setFileSize(
            kb > 1024 ? `${(kb / 1024).toFixed(2)} MB` : `${kb.toFixed(2)} KB`
          );
        } else {
          setFileSize("Taille inconnue");
        }
      } catch (error) {
        console.warn("Impossible de récupérer la taille du fichier :", error);
        setFileSize("Erreur");
      }
    };

    fetchFileSize();
  }, [document.fileUrl]);

  // Function de téléchargement du document
  const handleDownload = async () => {
    try {
      const response = await fetch(document.fileUrl);
      if (!response.ok) throw new Error("Erreur réseau");

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      // ✅ correction :
      const link = window.document.createElement("a");
      link.href = url;
      link.download = `${document.title}.${document.fileType.toLowerCase()}`;
      window.document.body.appendChild(link);
      link.click();
      window.document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Erreur lors du téléchargement :", error);
    }
  };

  const getFileIcon = (fileType: string) => {
    const type = fileType.toLowerCase();
    const icons: Record<string, JSX.Element> = {
      pdf: <FileText className="w-6 h-6 text-red-500" />,
      doc: <FileText className="w-6 h-6 text-blue-500" />,
      docx: <FileText className="w-6 h-6 text-blue-500" />,
      ppt: <FileText className="w-6 h-6 text-amber-800" />,
      pptx: <FileText className="w-6 h-6 text-amber-800" />,
      xls: <FileText className="w-6 h-6 text-green-600" />,
      xlsx: <FileText className="w-6 h-6 text-green-600" />,
    };
    return icons[type] ?? <File className="w-4 h-4 text-gray-500" />;
  };

  return (
    <div
      className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 ${
        isMobile ? "p-3 w-full" : "p-5 w-md"
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start gap-6">
          {getFileIcon(fileType)}
          <div>
            <h3 className={`font-semibold text-lg text-gray-900}`}>
              {document.title}
            </h3>
            <span className="inline-block mt-1 bg-blue-100 text-xs font-medium px-2 py-0.5 rounded-full">
              {document.fileType.toUpperCase()}
            </span>
          </div>
        </div>

        <Tooltip>
          <TooltipTrigger>
            <span
              onClick={handleDownload}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="flex items-center gap-2 bg-primary/95 p-3 hover:bg-primary text-white text-sm font-medium rounded-full cursor-pointer transition-colors"
            >
              {/* Icône avec animation */}
              <Download
                className={`w-4 h-4 transition-all duration-300 ${
                  isHovered
                    ? "transform -translate-y-0.5 scale-110"
                    : "transform translate-y-0 scale-100"
                }`}
              />

              {/* <span className={`relative z-10 hidden md:inline`}>Télécharger</span> */}
            </span>
          </TooltipTrigger>
          <TooltipContent>Télécharger</TooltipContent>
        </Tooltip>
      </div>

      {/* Description */}
      {document.description && (
        <p className="text-gray-600 text-sm mb-4">{document.description}</p>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between text-xs text-gray-500">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>
              {new Date(document.certificatedAt).toLocaleDateString("fr-FR")}
            </span>
          </div>
          <span>{fileSize}</span>
        </div>

        {document.category && (
          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded font-medium">
            {document.category}
          </span>
        )}
      </div>
    </div>
  );
};

export default DocumentCard;
