"use client";

import documents from "@/mock/documents.json";
import { Search, DownloadCloud } from "lucide-react";
import DocumentCard from "./DocumentCard";
import { motion } from "framer-motion";

export default function DocumentsSection() {
  //   const [searchTerm, setSearchTerm] = useState("");
  //   const [selectedCategory, setSelectedCategory] = useState("Tous");

  //   // Extraire les catégories uniques
  //   const categories = useMemo(() => {
  //     const uniqueCategories = [...new Set(documents.map((doc) => doc.category))];
  //     return ["Tous", ...uniqueCategories];
  //   }, []);

  // Filtrer les documents
  //   const filteredDocuments = useMemo(() => {
  //     return documents.filter((document) => {
  //       const matchesSearch =
  //         document.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //         document.description.toLowerCase().includes(searchTerm.toLowerCase());
  //       const matchesCategory =
  //         selectedCategory === "Tous" || document.category === selectedCategory;

  //       return matchesSearch && matchesCategory;
  //     });
  //   }, [searchTerm, selectedCategory]);

  return (
    <section
      id="documents"
      className="container py-20 mx-auto px-6 min-h-[50vh] flex items-center flex-col justify-center gap-4 "
    >
      <div className="container mx-auto px-4 ">
        {/* En-tête */}
        <motion.h2
          className="text-3xl text-center mb-8 flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center">
            <DownloadCloud className="w-12 h-12 text-primary" />
          </div>
          <span className="text-3xl md:text-4xl font-bold mb-2">
            Nos{" "}
            <span className="text-primary group relative mb-4">
              Documents et Ressources
              <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-primary"></span>
            </span>
          </span>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Accédez à tous nos documents officiels, guides et ressources
          </p>
        </motion.h2>

        {/* Statistiques */}
        {/* <div className="mb-6 flex items-center justify-between">
          <p className="text-gray-600">
            {filteredDocuments.length} document
            {filteredDocuments.length > 1 ? "s" : ""} trouvé
            {filteredDocuments.length > 1 ? "s" : ""}
          </p>
          {selectedCategory !== "Tous" && (
            <button
              onClick={() => setSelectedCategory("Tous")}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              Réinitialiser les filtres
            </button>
          )}
        </div> */}

        {/* Liste des documents */}
        <div className="flex flex-wrap justify-center items-center gap-8 ">
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
      </div>
    </section>
  );
}

/**
 Filtres et recherche 
        <div className="mb-8 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
             Barre de recherche 
            <div className="relative flex-1 w-full md:max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher un document..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
              />
            </div>

             Filtre par catégorie 
            <div className="flex items-center space-x-2 w-full md:w-auto">
              <Filter className="text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-white"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
 */
