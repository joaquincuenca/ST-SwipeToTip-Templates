import React, { useState } from 'react';
import TemplateCard from './TemplateCard';
import WhatsIncluded from './WhatsIncluded';
import { Eye, Download, FileText, X, CheckCircle } from 'lucide-react';

const TemplatesPage = () => {
    const [downloadedItems, setDownloadedItems] = useState([]);
    const [previewModal, setPreviewModal] = useState({ isOpen: false, content: null });

    const templateCategories = [
        {
            id: 'introduction',
            title: 'Introduction Materials',
            description: 'Essential resources to understand and implement SwipetoTip. Perfect for businesses, employees, and customers getting started.',
            items: [
                {
                    id: 'intro-1',
                    name: 'Service Industry Tipping Guide',
                    preview: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&q=80',
                    fileType: 'PDF',
                    fileSize: '1.8 MB',
                    format: 'Document',
                    downloads: '1.2k downloads',
                    features: ['QR Code Guide', 'Tipping Etiquette', 'Best Practices'],
                    previewContent: {
                        title: 'Service Industry Tipping Guide',
                        subtitle: 'Complete guide for service professionals',
                        description: 'Master modern tipping practices with this comprehensive guide. Increase your earnings with proven strategies and QR code optimization.',
                        benefits: [
                            'Learn to increase tip amounts by 35%',
                            'QR code placement optimization',
                            'Customer interaction best practices',
                            'Multi-language tipping etiquette',
                            'Monthly earnings tracking templates'
                        ],
                        icon: '📚',
                        stats: [
                            { label: 'Downloads', value: '1,200+' },
                            { label: 'User Rating', value: '4.8/5' },
                            { label: 'Pages', value: '42' }
                        ]
                    }
                },
                {
                    id: 'intro-2',
                    name: 'SwipetoTip Implementation Manual',
                    preview: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80',
                    fileType: 'ZIP',
                    fileSize: '3.2 MB',
                    format: 'PDF/PPT/Excel',
                    downloads: '2.4k downloads',
                    features: ['Step-by-Step Setup', 'Business Integration', 'Team Training'],
                    previewContent: {
                        title: 'SwipetoTip Implementation Manual',
                        subtitle: 'Complete business implementation guide',
                        description: 'Everything businesses need to deploy SwipetoTip successfully. Includes training materials, compliance guides, and optimization strategies.',
                        benefits: [
                            'Complete deployment checklist',
                            'Employee training presentations',
                            'Legal compliance documentation',
                            'Custom branding guidelines',
                            'Performance analytics setup'
                        ],
                        icon: '📋',
                        stats: [
                            { label: 'Downloads', value: '2,400+' },
                            { label: 'User Rating', value: '4.9/5' },
                            { label: 'Setup Time', value: '20 min' }
                        ]
                    }
                }
            ]
        }
    ];

    const handleDownload = (itemId) => {
        if (!downloadedItems.includes(itemId)) {
            setDownloadedItems([...downloadedItems, itemId]);
            setTimeout(() => {
                alert('Template downloaded successfully!');
            }, 500);
        }
    };

    const openPreview = (item) => {
        setPreviewModal({
            isOpen: true,
            content: item.previewContent
        });
    };

    const closePreview = () => {
        setPreviewModal({ isOpen: false, content: null });
    };

    // RESPONSIVE CARD DESIGN with IMAGE
    const ResponsiveCard = ({ item, isDownloaded, onDownload }) => {
        return (
            <div className="w-full bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
                {/* Image Section */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img 
                        src={item.preview} 
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    {/* Downloads Badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-full">
                        {item.downloads}
                    </div>
                    {/* Preview Overlay */}
                    <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                        <button
                            onClick={() => openPreview(item)}
                            className="bg-white rounded-full p-3 shadow-lg transform translate-y-2 hover:translate-y-0 transition-transform duration-300"
                        >
                            <Eye className="w-6 h-6 text-blue-600" />
                        </button>
                    </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                    {/* Title and File Info */}
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
                                {item.fileType}
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
                                {item.name}
                            </h3>
                        </div>
                        <button
                            onClick={() => openPreview(item)}
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200 flex-shrink-0"
                        >
                            <Eye className="w-5 h-5 text-gray-600" />
                        </button>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gray-200 mb-4"></div>

                    {/* Features Section */}
                    <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                            {item.features.map((feature, index) => (
                                <span 
                                    key={index}
                                    className="px-3 py-1.5 bg-gray-50 text-gray-700 text-sm font-medium rounded-lg"
                                >
                                    {feature}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Section: File Info and Download */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-6 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                                <FileText className="w-4 h-4" />
                                <span className="font-medium">{item.fileSize}</span>
                            </div>
                            <div>
                                <span className="font-medium">{item.format}</span>
                            </div>
                        </div>
                        
                        <div className="flex gap-3">
                            <button
                                onClick={() => openPreview(item)}
                                className="px-4 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200 flex items-center gap-2 min-w-[100px] justify-center"
                            >
                                <Eye className="w-4 h-4" />
                                Preview
                            </button>
                            <button
                                onClick={() => onDownload(item.id)}
                                disabled={isDownloaded}
                                className={`px-4 py-2.5 font-medium rounded-lg transition-colors duration-200 flex items-center gap-2 min-w-[100px] justify-center ${
                                    isDownloaded 
                                        ? 'bg-green-100 text-green-700 cursor-default'
                                        : 'bg-blue-600 text-white hover:bg-blue-700'
                                }`}
                            >
                                {isDownloaded ? (
                                    <>
                                        <CheckCircle className="w-4 h-4" />
                                        Downloaded
                                    </>
                                ) : (
                                    <>
                                        <Download className="w-4 h-4" />
                                        Download
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Page Header - Adjusted to match screenshot */}
            <div className="mb-16">
                <div className="mt-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        SwipetoTip Resources & Templates
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl">
                        Download professional tipping resources and implementation materials. Perfect for service providers, employers, and customers adopting contactless tipping solutions.
                    </p>
                </div>
            </div>

            {/* Template Categories */}
            {templateCategories.map((category, categoryIndex) => (
                <section key={category.id} className={categoryIndex > 0 ? 'mt-24' : ''}>
                    {/* Category Header */}
                    <div className="mb-8">
                        <h3 className="text-3xl font-bold text-gray-900 mb-3">
                            {category.title}
                        </h3>
                        <p className="text-gray-600 max-w-2xl">
                            {category.description}
                        </p>
                    </div>

                    {/* Responsive Cards Grid with Images */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {category.items.map((item) => (
                            <ResponsiveCard
                                key={item.id}
                                item={item}
                                isDownloaded={downloadedItems.includes(item.id)}
                                onDownload={handleDownload}
                            />
                        ))}
                    </div>
                </section>
            ))}

            {/* Modern Preview Modal with Dimmed Background */}
            {previewModal.isOpen && previewModal.content && (
                <div className="fixed inset-0 z-50">
                    {/* Dimmed Background Overlay */}
                    <div 
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
                        onClick={closePreview}
                    />
                    
                    {/* Modal Container */}
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                        <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
                            {/* Close Button */}
                            <button
                                onClick={closePreview}
                                className="absolute top-4 right-4 z-10 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
                            >
                                <X className="w-4 h-4 text-gray-700" />
                            </button>

                            <div className="p-6">
                                {/* Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-3xl">{previewModal.content.icon}</span>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">
                                            {previewModal.content.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm">{previewModal.content.subtitle}</p>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-gray-700 text-sm mb-6">
                                    {previewModal.content.description}
                                </p>

                                {/* Stats */}
                                <div className="grid grid-cols-3 gap-2 mb-6">
                                    {previewModal.content.stats.map((stat, index) => (
                                        <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                                            <div className="text-base font-bold text-gray-900">{stat.value}</div>
                                            <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Benefits */}
                                <div className="mb-6">
                                    <h4 className="text-base font-semibold text-gray-900 mb-3">What You'll Get:</h4>
                                    <ul className="space-y-2">
                                        {previewModal.content.benefits.map((benefit, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                <span className="text-gray-700 text-sm">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Download Button */}
                                <button
                                    onClick={() => {
                                        const currentItem = templateCategories
                                            .flatMap(cat => cat.items)
                                            .find(item => item.previewContent === previewModal.content);
                                        if (currentItem) {
                                            handleDownload(currentItem.id);
                                            closePreview();
                                        }
                                    }}
                                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
                                >
                                    <Download className="w-5 h-5" />
                                    Download Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Key Benefits Section */}
            <div className="mt-24 bg-blue-50 rounded-xl p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    SwipetoTip Benefits
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h4 className="text-xl font-semibold text-gray-900 mb-3">For Tourists</h4>
                        <p className="text-gray-600">Easy tipping solution without cultural confusion. Simply enter the service ID, calculate the amount, and swipe to tip.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h4 className="text-xl font-semibold text-gray-900 mb-3">For Citizens</h4>
                        <p className="text-gray-600">Carry your responsibility even when cash is unavailable. Ensure fair treatment of service providers every time.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h4 className="text-xl font-semibold text-gray-900 mb-3">For Employees</h4>
                        <p className="text-gray-600">Receive what you've earned with no risk. Smooth, simple, and safe tipping directly to you.</p>
                    </div>
                </div>
            </div>

            {/* What's Included Section */}
            <div className="mt-24">
                <WhatsIncluded />
            </div>
        </main>
    );
};

export default TemplatesPage; 