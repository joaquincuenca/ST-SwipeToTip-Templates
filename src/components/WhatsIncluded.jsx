import React from 'react';
import { FileText, Image, Code, Download } from 'lucide-react';

const WhatsIncluded = () => {
    const features = [
        {
        icon: <FileText className="w-6 h-6 text-orange-600" />,
        title: 'Complete Files',
        description:
            'HTML, CSS, and JavaScript files ready to deploy. All assets and resources included.',
        },
        {
        icon: <Image className="w-6 h-6 text-orange-600" />,
        title: 'Images & Assets',
        description:
            'High-quality images, icons, and QR code templates optimized for web.',
        },
        {
        icon: <Code className="w-6 h-6 text-orange-600" />,
        title: 'Documentation',
        description:
            'Step-by-step setup guide, customization instructions, and best practices.',
        },
        {
        icon: <Download className="w-6 h-6 text-orange-600" />,
        title: 'Easy Setup',
        description:
            'No coding required. Simple configuration files to match your branding.',
        },
    ];

    return (
        <section className="bg-gray-50 rounded-2xl px-6 py-10 sm:px-8 md:p-12">
        <h3 className="text-3xl font-bold text-gray-900 mb-8">
            What's Included
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
            <div
                key={index}
                className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition"
            >
                {/* Icon */}
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                {feature.icon}
                </div>

                {/* Text */}
                <div className="pr-2">
                <h4 className="font-bold text-gray-900 mb-1">
                    {feature.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                </p>
                </div>
            </div>
            ))}
        </div>
        </section>
    );
};

export default WhatsIncluded;