import React, { useState } from 'react';
import { Mail, MessageCircle, Send, CheckCircle2, ArrowUpRight, Copy, Check, AlertCircle, Loader2 } from 'lucide-react';

interface ContactSectionProps {
  selectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ selectedService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: selectedService || 'Website Design & UI/UX',
    details: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Keep selectedService in sync if parent changes it
  React.useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    // Client-side validation
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedDetails = formData.details.trim();

    if (!trimmedName || !trimmedEmail || !trimmedDetails) {
      setErrorMessage('Please fill in all required fields (Name, Email, and Project Details).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setErrorMessage('Please enter a valid email address format.');
      return;
    }

    setIsSubmitting(true);

    try {
      const formDataObj = new FormData(e.currentTarget);
      formDataObj.append("access_key", "22cd95b3-0d8f-47be-9469-e513af5c1a2d");
      formDataObj.set('message', `Service Requested: ${formData.service}\n\nProject Details:\n${trimmedDetails}`);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj
      });

      if (response.status === 200) {
        setIsSubmitted(true);
        e.currentTarget.reset();
      } else {
        setErrorMessage("Failed, please try again");
      }
    } catch (err: any) {
      console.error('Submission error:', err);
      setErrorMessage("Failed, please try again");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('syedazainab3344@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const whatsappMessage = encodeURIComponent(
    "Hi Zainab! I visited your portfolio and I'm interested in discussing a website project with you."
  );
  const whatsappUrl = `https://wa.me/923131445073?text=${whatsappMessage}`;

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#071321] border-t border-[#23364A]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context & Direct Contact Links */}
          <div className="lg:col-span-5 text-left">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs uppercase tracking-widest text-[#D6AA3D] font-semibold">
                Get in Touch
              </span>
              <span className="text-[#23364A]">/</span>
              <span className="text-xs text-[#8191A3]">Start a Conversation</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-normal text-[#F4F3EA] leading-[1.14] mb-4 text-balance">
              Have a project{' '}
              <span className="italic font-normal text-[#D6AA3D]">in mind?</span>
            </h2>

            <p className="text-base sm:text-lg text-[#8191A3] leading-relaxed mb-8">
              Tell me what you're planning, what you need and what you'd like your website to achieve.
              Let's explore how we can bring the idea to life.
            </p>

            {/* Direct Channels */}
            <div className="space-y-4">
              {/* WhatsApp direct */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#0D1E30] border border-[#23364A] hover:border-[#D6AA3D]/60 hover:bg-[#13273D] transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#071321] border border-[#23364A] flex items-center justify-center text-[#D6AA3D] group-hover:border-[#D6AA3D]/50 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#8191A3] block">Direct Messaging (+92 313 1445073)</span>
                    <span className="text-sm font-medium text-[#F4F3EA] group-hover:text-[#D6AA3D] transition-colors">
                      Chat on WhatsApp
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#8191A3] group-hover:text-[#D6AA3D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* Email direct */}
              <div className="p-4 rounded-xl bg-[#0D1E30] border border-[#23364A] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#071321] border border-[#23364A] flex items-center justify-center text-[#D6AA3D]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#8191A3] block">Direct Email (syedazainab3344@gmail.com)</span>
                    <a
                      href="mailto:syedazainab3344@gmail.com?subject=Project%20Inquiry%20-%20Portfolio"
                      className="text-sm font-medium text-[#F4F3EA] hover:text-[#D6AA3D] transition-colors"
                    >
                      syedazainab3344@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 text-[#8191A3] hover:text-[#D6AA3D] hover:bg-[#071321] rounded-lg transition-colors cursor-pointer"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[#D6AA3D]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Availability Notice */}
            <div className="mt-8 pt-6 border-t border-[#23364A]/60 flex items-center gap-3 text-xs text-[#8191A3]">
              <span className="w-2 h-2 rounded-full bg-[#D6AA3D]"></span>
              <span>Currently accepting project inquiries for upcoming design & development slots.</span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#0D1E30] border border-[#23364A] p-6 sm:p-8 text-left shadow-2xl relative">
              {isSubmitted ? (
                <div className="py-12 px-4 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-14 h-14 rounded-full bg-[#D6AA3D]/10 border border-[#D6AA3D] flex items-center justify-center text-[#D6AA3D] mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-serif text-[#F4F3EA]">
                    Thank you, {formData.name}!
                  </h3>
                  <p className="text-sm text-[#8191A3] max-w-md mx-auto leading-relaxed">
                    Your inquiry regarding <strong className="text-[#F4F3EA] font-medium">{formData.service}</strong> has been successfully sent to <strong className="text-[#F4F3EA] font-medium">syedazainab3344@gmail.com</strong> via Resend.
                    Syeda Zainab will review your project details and reach out within 24–48 hours.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`mailto:syedazainab3344@gmail.com?subject=Project Inquiry - ${encodeURIComponent(formData.service)}&body=${encodeURIComponent(
                        `Hi Zainab,\n\nName: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\n\nProject Details:\n${formData.details}`
                      )}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#D6AA3D] text-[#071321] text-xs font-semibold hover:bg-[#f4c46f] transition-all cursor-pointer"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Open in Email Client</span>
                    </a>

                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', service: 'Website Design & UI/UX', details: '' });
                      }}
                      className="px-4 py-2 text-xs text-[#8191A3] hover:text-[#F4F3EA] transition-colors cursor-pointer"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <input type="hidden" name="access_key" value="22cd95b3-0d8f-47be-9469-e513af5c1a2d" />
                  <input type="hidden" name="from_name" value="Syeda Zainab SZ Portfolio Inquiry" />
                  <input type="hidden" name="subject" value={`New message from portfolio (${formData.service})`} />

                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-2.5 text-xs text-red-300">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-[#F4F3EA] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Elena Vance"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#071321] border border-[#23364A] text-[#F4F3EA] placeholder-[#8191A3]/50 text-sm focus:outline-none focus:border-[#D6AA3D] transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-[#F4F3EA] mb-1.5">
                        Your Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#071321] border border-[#23364A] text-[#F4F3EA] placeholder-[#8191A3]/50 text-sm focus:outline-none focus:border-[#D6AA3D] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label htmlFor="service" className="block text-xs font-medium text-[#F4F3EA] mb-1.5">
                      Service Required *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#071321] border border-[#23364A] text-[#F4F3EA] text-sm focus:outline-none focus:border-[#D6AA3D] transition-colors cursor-pointer"
                    >
                      <option value="Website Design & UI/UX">Website Design & UI/UX</option>
                      <option value="Website Development">Website Development (Wix / HTML / CSS)</option>
                      <option value="E-commerce Solutions">E-commerce Solutions (Shopify)</option>
                      <option value="Basic & On-Page SEO">Basic & On-Page SEO</option>
                      <option value="Website Redesign">Website Redesign</option>
                      <option value="Landing Page Design & Development">Landing Page Design & Development</option>
                    </select>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label htmlFor="details" className="block text-xs font-medium text-[#F4F3EA] mb-1.5">
                      Project Details & Goals *
                    </label>
                    <textarea
                      id="details"
                      name="message"
                      rows={4}
                      required
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="Briefly describe your business, what you'd like your website to achieve, and any existing timelines or links..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#071321] border border-[#23364A] text-[#F4F3EA] placeholder-[#8191A3]/50 text-sm focus:outline-none focus:border-[#D6AA3D] transition-colors resize-y"
                    />
                  </div>

                  {/* Notice & Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <p className="text-[11px] text-[#8191A3] max-w-xs">
                      Sent directly to syedazainab3344@gmail.com. No spam guarantee.
                    </p>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#D6AA3D] text-[#071321] text-xs font-semibold hover:bg-[#f4c46f] transition-all cursor-pointer shadow-md hover:scale-[1.02] active:scale-[0.98] self-stretch sm:self-auto justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          <span>Sending Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Project Inquiry</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
