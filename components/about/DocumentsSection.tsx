"use client";

import documents from "@/mock/documents.json";
import { Search } from "lucide-react";
import DocumentCard from "./DocumentCard";
import SectionWrapper from "../SectionWrapper";
import SectionTitle from "../SectionTitle";

export default function DocumentsSection() {
  return (
    <SectionWrapper id="documents" variant="lightBg">
      {/* En-tête */}
      <SectionTitle
        title="Nos"
        highlight="Documents et Ressources"
        desc="Accédez à tous nos documents officiels, guides et ressources"
      />

      {/* Liste des documents */}
      <div className="flex flex-wrap justify-center items-center gap-8">
        {documents.map((document) => (
          <DocumentCard key={document.id} document={document} />
        ))}
      </div>

      {/* Message si aucun document trouvé */}
      {documents.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Search className="w-16 h-16 mx-auto" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Aucun document trouvé
          </h3>
          <p className="text-gray-600">
            Aucun document ne correspond à votre recherche. Essayez d{"''"}
            utiliser d{"''"}autres termes.
          </p>
        </div>
      )}
    </SectionWrapper>
  );
}
