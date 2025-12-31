"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface JotFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    formId: string;
    title: string;
    baseUrl?: string;
}

export default function JotFormModal({ isOpen, onClose, formId, title, baseUrl = "https://form.jotform.com" }: JotFormModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    // Handle the script loading for resizing (optional but recommended by JotForm)
    useEffect(() => {
        if (isOpen) {
            // We'll trust the iframe to handle itself mostly, but we can verify if we need the specific script.
            // The user provided script src='https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js' which is for resizing.
            // We can include it if needed, but often a fixed height or 100% height with scroll is fine for modals. 
            // For now, let's keep it simple with just the iframe.
        }
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
                    >
                        <div className="flex items-center justify-between p-4 border-b">
                            <h3 className="text-lg font-bold text-slate-900">{title}</h3>
                            <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full hover:bg-slate-100">
                                <X className="h-5 w-5" />
                            </Button>
                        </div>
                        <div className="flex-1 overflow-y-auto bg-slate-50 relative -mx-1">
                            <iframe
                                id={`JotFormIFrame-${formId}`}
                                title={title}
                                onLoad={() => window.parent.scrollTo(0, 0)}
                                // @ts-expect-error: allowtransparency is not in the React types but needed for iframe
                                allowtransparency="true"
                                allow="geolocation; microphone; camera; fullscreen; payment"
                                src={`${baseUrl}/${formId}`}
                                frameBorder="0"
                                style={{
                                    minWidth: "100%",
                                    maxWidth: "100%",
                                    height: "539px", // Initial height, but we'll let it be flexible if possible or stick to 100%
                                    border: "none",
                                }}
                                className="w-full h-full min-h-[500px]"
                                scrolling="yes"
                            />
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
