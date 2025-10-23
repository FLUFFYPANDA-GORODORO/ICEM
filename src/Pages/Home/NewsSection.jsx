import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

// ✅ Configure the PDF worker (Vite + ESM compatible)
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const API_URL = "http://localhost:8080/api/news";

const NewsSection = () => {
  const [newsList, setNewsList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedPdfUrl, setSelectedPdfUrl] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [numPages, setNumPages] = useState(null);
  const [scale, setScale] = useState(1.1);

  // ✅ Fetch News from Backend
  const fetchNews = async () => {
    try {
      const res = await axios.get(API_URL);
      setNewsList(res.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load notices");
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  // ✅ Download PDF (Cloudinary-compatible)
  const handleDownloadPdf = async (pdfUrl, title) => {
    try {
      // Add fl_attachment for download
      const formattedUrl = pdfUrl.includes("/upload/")
        ? pdfUrl.replace("/upload/", "/upload/fl_attachment/")
        : pdfUrl;

      const response = await fetch(formattedUrl, { mode: "cors" });
      if (!response.ok) throw new Error("Failed to fetch PDF");

      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const fileName = title?.replace(/\s+/g, "_") + ".pdf" || "document.pdf";

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = fileName;
      link.click();

      setTimeout(() => window.URL.revokeObjectURL(blobUrl), 5000);
    } catch (error) {
      console.error("Error downloading PDF:", error);
      toast.error("Failed to download PDF");
    }
  };

  // ✅ View PDF in Modal (no fl_attachment)
  const handleViewPdf = (pdfUrl, title) => {
    setSelectedPdfUrl(pdfUrl);
    setSelectedTitle(title);
    setShowModal(true);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="flex justify-center items-center py-16 px-4 bg-gray-50">
      <div className="w-full max-w-4xl bg-white border border-gray-200 shadow-sm rounded-md p-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#0f1e46] mb-8">
          Notices / Circulars
        </h2>

        {newsList.length === 0 ? (
          <p className="text-center text-gray-600">No notices available.</p>
        ) : (
          <div className="space-y-4">
            {newsList.map((news) => (
              <div
                key={news.id}
                className="border-b border-gray-200 pb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between"
              >
                {/* Left Section - New Tag + Title */}
                <div className="flex items-start sm:items-center gap-3">
                  <span className="bg-[#0f1e46] text-white text-xs font-semibold px-2 py-0.5 rounded-sm mt-0.5">
                    New
                  </span>
                  <h3 className="text-sm sm:text-base text-[#0f1e46] font-medium leading-snug">
                    {news.title}
                  </h3>
                </div>

                {/* Right Section - PDF Actions */}
                {news.pdfUrl && (
                  <div className="mt-2 sm:mt-0 flex gap-4 text-sm text-blue-700 font-medium">
                    <button
                      onClick={() => handleViewPdf(news.pdfUrl, news.title)}
                      className="hover:underline"
                    >
                      View PDF
                    </button>
                    <button
                      onClick={() =>
                        handleDownloadPdf(news.pdfUrl, news.title)
                      }
                      className="hover:underline"
                    >
                      Download PDF
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* View All Button */}
        <div className="mt-10 text-center">
          <button className="px-6 py-2 border border-[#0f1e46] text-[#0f1e46] rounded-sm hover:bg-[#0f1e46] hover:text-white transition-all duration-300 text-sm font-semibold">
            View All Notices
          </button>
        </div>
      </div>

      {/* ✅ PDF Viewer Modal */}
      {showModal && selectedPdfUrl && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex justify-center items-center">
          <div className="bg-[#0d1117] border border-cyan-500/40 rounded-2xl w-11/12 lg:w-3/4 xl:w-2/3 h-[90vh] shadow-2xl shadow-cyan-500/10 flex flex-col overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center px-5 py-3 border-b border-cyan-500/30 bg-black/40">
              <h2 className="text-cyan-300 font-semibold text-lg tracking-wide">
                {selectedTitle || "View PDF"}
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-red-400 text-2xl font-bold transition-all"
              >
                ✕
              </button>
            </div>

            {/* Scrollable PDF Viewer */}
            <div className="flex-1 overflow-y-auto p-4 bg-black/30 custom-scrollbar">
              <Document
                file={selectedPdfUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={(error) =>
                  toast.error("Failed to load PDF: " + error.message)
                }
                loading={<p className="text-cyan-300">Loading PDF...</p>}
              >
                {Array.from(new Array(numPages), (el, index) => (
                  <div
                    key={`page_${index + 1}`}
                    className="mb-4 flex justify-center"
                  >
                    <Page
                      pageNumber={index + 1}
                      scale={scale}
                      renderTextLayer={true}
                      renderAnnotationLayer={true}
                    />
                  </div>
                ))}
              </Document>
            </div>

            {/* Zoom Controls */}
            <div className="flex justify-center items-center gap-4 py-3 border-t border-cyan-500/30 bg-black/40">
              <button
                onClick={() => setScale((prev) => Math.max(prev - 0.2, 0.6))}
                className="px-3 py-1 bg-gray-700/50 rounded-lg hover:bg-gray-600/70 transition-all"
              >
                ➖ Zoom Out
              </button>
              <button
                onClick={() => setScale((prev) => Math.min(prev + 0.2, 2))}
                className="px-3 py-1 bg-gray-700/50 rounded-lg hover:bg-gray-600/70 transition-all"
              >
                ➕ Zoom In
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsSection;
