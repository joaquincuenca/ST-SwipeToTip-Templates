import React from 'react';
import { Download, FileText, Code } from 'lucide-react';

const TemplateCard = ({ item, isDownloaded, onDownload }) => {
    return (
        <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        {/* Preview Image */}
        <div className="relative aspect-video bg-gray-100 overflow-hidden group">
            <img
            src={item.preview}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-6">
            <h4 className="text-xl font-bold text-gray-900 mb-3">
            {item.name}
            </h4>

            {/* File Info */}
            <div className="space-y-2 mb-6">
            <div className="flex items-center text-sm text-gray-600">
                <FileText className="w-4 h-4 mr-2" />
                <span>Format: {item.format}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
                <Code className="w-4 h-4 mr-2" />
                <span>Size: {item.fileSize}</span>
            </div>
            </div>

            {/* Download Button */}
            <button
            onClick={() => onDownload(item.id)}
            disabled={isDownloaded}
            className={`w-full py-3 px-4 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2 ${
                isDownloaded
                ? 'bg-green-100 text-green-700 cursor-not-allowed'
                : 'bg-orange-500 text-white hover:bg-orange-600 hover:shadow-lg'
            }`}
            >
            <Download className="w-5 h-5" />
            <span>
                {isDownloaded ? 'Downloaded' : `Download ${item.fileType}`}
            </span>
            </button>
        </div>
        </div>
    );
};

export default TemplateCard;