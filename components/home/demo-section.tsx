'use client'
import { Pizza } from "lucide-react";
import { useRef } from 'react';
import VariableProximity from '../ui/text';

export default function DemoSection() {
    const containerRef = useRef(null);
    return (
        <section className="relative justify-center items-center ">
            <div className="py-7 lg:pt-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div>

                </div>
                <div className="flex flex-col items-center text-center space-y-6">
                    <div className="inline-flex items-center justify-center p-2 rounded-2xl bg-gray-100/80 backdrop-blur-xs mx-auto px-4 sm:px-6">
                        <Pizza className="w-6 h-6 text-indigo-600" />
                        </div>
                        <div className="text-center mb-14">
                    <h3 className="text-3xl max-w-3xl font-bold mx-auto px-4 sm:px-6">
                        Watch how Summarix can help you to transform <span className="text-indigo-600">this next.js course PDF </span>into an easy-to-read summary!
                    </h3>
                    </div>
                    <div className="flex justify-center items-center px-2 sm:px-4 lg:px-6">

                    </div>
                </div>

            </div>

        </section>
    )
}