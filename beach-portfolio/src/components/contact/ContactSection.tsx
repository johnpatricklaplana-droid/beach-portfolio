import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, MapPin, CheckCircle2 } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'
import { SectionHeading } from '../ui/SectionHeading'
import { MagneticButton } from '../ui/MagneticButton'

export function ContactSection() {
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    
    try {
      
      const result = await fetch('https://formtorch.com/f/vixmfzx9po', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form)
      })

      if(!result.ok) {
        throw new Error("Failed to send");
      }

      setSubmitting(false);
      setSent(true);

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
    }
    
  }

  return (
    <section id="contact" className="relative bg-(--color-sand-100)">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <SectionHeading
          eyebrow="Reservations"
          title="Let's build something."
          description="Open for freelance work, collaborations, or just a good conversation about software."
          light
        />

        <div className="mt-14 grid md:grid-cols-[1fr_1.3fr] gap-8">
          <div className="space-y-4">
            {[
              { icon: Mail, label: 'Email', value: 'johnpatricklaplana@gmail.com', href: 'mailto:hello@example.com' },
              { icon: GithubIcon, label: 'GitHub', value: 'github.com/johnpatricklaplana', href: 'https://github.com/johnpatricklaplana-droid' },
              { icon: LinkedinIcon, label: 'LinkedIn', value: 'linkedin.com/in/johnpatricklaplana', href: 'https://www.linkedin.com/in/john-patrick-laplana-169a61379' },
              { icon: MapPin, label: 'Location', value: 'Philippines (Remote-friendly)' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 rounded-2xl bg-white/60 border border-(--color-ocean-800)/10 p-4"
              >
                <div className="w-10 h-10 rounded-xl bg-(--color-ocean-800)/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-4.5 h-4.5 text-(--color-ocean-800)" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-display font-semibold tracking-wide uppercase text-ocean-900/50">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noreferrer" className="text-sm font-medium text-ocean-950 hover:underline">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-ocean-950">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="relative rounded-3xl bg-white/70 border border-(--color-ocean-800)/10 p-7 md:p-9 shadow-[0_20px_60px_rgba(15,76,129,0.1)] overflow-hidden">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center py-14"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.1 }}
                  >
                    <CheckCircle2 className="w-14 h-14 text-(--color-ocean-800)" aria-hidden="true" />
                  </motion.div>
                  <h3 className="font-display text-xl font-bold text-ocean-950 mt-4">
                    Reservation confirmed.
                  </h3>
                  <p className="text-sm text-ocean-900/60 mt-2 max-w-xs">
                    Thanks for reaching out — I'll get back to you within a day or two.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 text-sm font-display font-semibold text-(--color-ocean-800) hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field 
                      label="Name" 
                      id="name" 
                      type="text" 
                      placeholder="Your name" 
                      onChange={handleChange}
                      value={form.name}
                    />
                    <Field 
                      label="Email" 
                      id="email" 
                      type="email" 
                      placeholder="you@email.com" 
                      onChange={handleChange}
                      value={form.email}
                    />
                  </div>
                  <Field 
                    label="Subject" 
                    id="subject" 
                    type="text" 
                    placeholder="What's this about?"
                    value={form.subject}
                    onChange={handleChange}
                  />
                  <div>
                    <label htmlFor="message" className="block text-xs font-display font-semibold tracking-wide uppercase text-ocean-900/50 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about the project..."
                      className="w-full rounded-2xl border border-(--color-ocean-800)/15 bg-white/70 px-4 py-3 text-sm text-ocean-950 placeholder:text-ocean-900/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-ocean-800)/40 resize-none"
                    />
                  </div>

                  <MagneticButton variant="primary" className="w-full justify-center" ariaLabel="Send message">
                    {submitting ? 'Sending...' : 'Send Message'}
                  </MagneticButton>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ 
  label, 
  id, 
  type, 
  placeholder,
  onChange,
  value
}: Readonly<{ 
  label: string; 
  id: string; 
  type: string; 
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
}>) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-display font-semibold tracking-wide uppercase text-ocean-900/50 mb-2">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full rounded-2xl border border-(--color-ocean-800)/15 bg-white/70 px-4 py-3 text-sm text-ocean-950 placeholder:text-ocean-900/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-ocean-800)/40"
      />
    </div>
  )
}
