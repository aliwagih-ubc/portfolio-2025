"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ArrowLeft, Send, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectInquiryFormProps {
  isOpen: boolean;
  onClose: () => void;
}

type Step = 1 | 2 | 3;

interface FormData {
  name: string;
  email: string;
  projectDescription: string;
  problemSolved: string;
  successCriteria: string;
  existingWork: string;
  mustHaves: string;
  niceToHaves: string;
  additionalContext: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  projectDescription: "",
  problemSolved: "",
  successCriteria: "",
  existingWork: "",
  mustHaves: "",
  niceToHaves: "",
  additionalContext: "",
};

export function ProjectInquiryForm({
  isOpen,
  onClose,
}: ProjectInquiryFormProps) {
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const canProceedStep1 = formData.name.trim() && formData.email.trim();
  const canProceedStep2 =
    formData.projectDescription.trim() && formData.problemSolved.trim();

  const handleNext = () => {
    if (step < 3) setStep((step + 1) as Step);
  };

  const handleBack = () => {
    if (step > 1) setStep((step - 1) as Step);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate form submission - replace with actual form service
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    // Reset form after animation
    setTimeout(() => {
      setStep(1);
      setFormData(initialFormData);
      setIsSubmitted(false);
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-lg z-50"
          >
            <div className="h-full md:h-auto bg-card border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border/50">
                <div>
                  <h2 className="font-display text-xl font-bold text-foreground">
                    {isSubmitted ? "Thank you!" : "Start a Project"}
                  </h2>
                  {!isSubmitted && (
                    <p className="text-sm text-muted-foreground mt-1">
                      Step {step} of 3
                    </p>
                  )}
                </div>
                <button
                  onClick={handleClose}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                >
                  <X className="h-5 w-5 text-muted-foreground" />
                </button>
              </div>

              {/* Progress Bar */}
              {!isSubmitted && (
                <div className="h-1 bg-muted">
                  <motion.div
                    className="h-full bg-accent"
                    initial={{ width: "33%" }}
                    animate={{ width: `${(step / 3) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              )}

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6">
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center py-8"
                    >
                      <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                        <Check className="h-8 w-8 text-green-500" />
                      </div>
                      <h3 className="font-display text-xl font-bold text-foreground mb-2">
                        Message sent!
                      </h3>
                      <p className="text-muted-foreground">
                        I&apos;ll get back to you within 24-48 hours.
                      </p>
                    </motion.div>
                  ) : step === 1 ? (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="font-semibold text-foreground mb-4">
                          About You
                        </h3>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                              Your name
                            </label>
                            <input
                              type="text"
                              value={formData.name}
                              onChange={(e) => updateField("name", e.target.value)}
                              placeholder="John Doe"
                              className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                              Email address
                            </label>
                            <input
                              type="email"
                              value={formData.email}
                              onChange={(e) => updateField("email", e.target.value)}
                              placeholder="john@company.com"
                              className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ) : step === 2 ? (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="font-semibold text-foreground mb-4">
                          Your Project
                        </h3>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                              What do you want built?
                            </label>
                            <textarea
                              value={formData.projectDescription}
                              onChange={(e) =>
                                updateField("projectDescription", e.target.value)
                              }
                              placeholder="Describe the product or feature..."
                              rows={3}
                              className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                              What problem does this solve?
                            </label>
                            <textarea
                              value={formData.problemSolved}
                              onChange={(e) =>
                                updateField("problemSolved", e.target.value)
                              }
                              placeholder="The core pain point you're addressing..."
                              rows={2}
                              className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                              How will you know it&apos;s done? (Success criteria)
                            </label>
                            <input
                              type="text"
                              value={formData.successCriteria}
                              onChange={(e) =>
                                updateField("successCriteria", e.target.value)
                              }
                              placeholder="e.g., Users can do X in under Y seconds"
                              className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="font-semibold text-foreground mb-4">
                          Details
                        </h3>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                              What exists already?
                            </label>
                            <input
                              type="text"
                              value={formData.existingWork}
                              onChange={(e) =>
                                updateField("existingWork", e.target.value)
                              }
                              placeholder="e.g., Existing website, brand new, etc."
                              className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                              Must-haves (non-negotiables)
                            </label>
                            <input
                              type="text"
                              value={formData.mustHaves}
                              onChange={(e) =>
                                updateField("mustHaves", e.target.value)
                              }
                              placeholder="Features that absolutely must be included"
                              className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                              Nice-to-haves (if time permits)
                            </label>
                            <input
                              type="text"
                              value={formData.niceToHaves}
                              onChange={(e) =>
                                updateField("niceToHaves", e.target.value)
                              }
                              placeholder="Features that would be great but not critical"
                              className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                              Anything else? (Budget, timeline, other context)
                            </label>
                            <textarea
                              value={formData.additionalContext}
                              onChange={(e) =>
                                updateField("additionalContext", e.target.value)
                              }
                              placeholder="Any other relevant information..."
                              rows={2}
                              className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Footer */}
              {!isSubmitted && (
                <div className="flex items-center justify-between p-6 border-t border-border/50">
                  <button
                    onClick={handleBack}
                    disabled={step === 1}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                      step === 1
                        ? "text-muted-foreground/50 cursor-not-allowed"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    )}
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back
                  </button>

                  {step < 3 ? (
                    <button
                      onClick={handleNext}
                      disabled={
                        (step === 1 && !canProceedStep1) ||
                        (step === 2 && !canProceedStep2)
                      }
                      className={cn(
                        "flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all",
                        ((step === 1 && canProceedStep1) ||
                          (step === 2 && canProceedStep2))
                          ? "bg-accent text-accent-foreground hover:bg-accent-hover btn-glow-orange"
                          : "bg-muted text-muted-foreground cursor-not-allowed"
                      )}
                    >
                      Next
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-accent text-accent-foreground text-sm font-semibold hover:bg-accent-hover btn-glow-orange transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Submit
                        </>
                      )}
                    </button>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
