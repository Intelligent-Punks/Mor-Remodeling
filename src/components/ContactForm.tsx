import { getAssetUrl } from '@/utils/asset'
import AnimatedText from '@/components/AnimatedText'

interface ContactFormProps {
  formData: {
    name: string
    phone: string
    email: string
    projectType: string
    address: string
    message: string
  }
  errors: Record<string, string>
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
  handleSubmit: (e: React.FormEvent) => void
  services?: Array<{ id: string; title: string; slug?: string }>
}

export default function ContactForm({ 
  formData, 
  errors, 
  handleChange, 
  handleSubmit, 
  services = [] 
}: ContactFormProps) {
  return (
    <form onSubmit={handleSubmit} className="mt-10 md:mt-[40px] space-y-8 md:space-y-[40px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[16px]">
        <div className="relative">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full bg-transparent border-b pb-2 text-sm md:text-base text-[#2A2A2A] placeholder:text-[#2A2A2A]/40 focus:outline-none focus:border-[#2A2A2A] ${
              errors.name ? 'border-red-500' : 'border-[#2A2A2A]/40'
            }`}
          />
          {errors.name && <span className="absolute -bottom-5 left-0 text-xs text-red-500">{errors.name}</span>}
        </div>
        <div className="relative">
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full bg-transparent border-b pb-2 text-sm md:text-base text-[#2A2A2A] placeholder:text-[#2A2A2A]/40 focus:outline-none focus:border-[#2A2A2A] ${
              errors.phone ? 'border-red-500' : 'border-[#2A2A2A]/40'
            }`}
          />
          {errors.phone && <span className="absolute -bottom-5 left-0 text-xs text-red-500">{errors.phone}</span>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[20px]">
        <div className="relative">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full bg-transparent border-b pb-2 text-sm md:text-base text-[#2A2A2A] placeholder:text-[#2A2A2A]/40 focus:outline-none focus:border-[#2A2A2A] ${
              errors.email ? 'border-red-500' : 'border-[#2A2A2A]/40'
            }`}
          />
          {errors.email && <span className="absolute -bottom-5 left-0 text-xs text-red-500">{errors.email}</span>}
        </div>

        <div className="relative">
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className={`w-full bg-transparent border-b pb-2 text-sm md:text-base focus:outline-none focus:border-[#2A2A2A] appearance-none cursor-pointer ${
              formData.projectType ? 'text-[#2A2A2A]' : 'text-[#2A2A2A]/40'
            } ${errors.projectType ? 'border-red-500' : 'border-[#2A2A2A]/40'}`}
          >
            <option value="">Project Type</option>
            {services.map((service) => (
              <option key={service.id} value={service.slug || service.id}>
                {service.title}
              </option>
            ))}
            <option value="other">Other</option>
          </select>
          <img
            src={getAssetUrl('/icons/arrow-down.svg')}
            alt=""
            className="absolute right-0 top-0 w-5 h-5 md:w-6 md:h-6 pointer-events-none"
          />
          {errors.projectType && <span className="absolute -bottom-5 left-0 text-xs text-red-500">{errors.projectType}</span>}
        </div>
      </div>

      <div className="relative">
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className={`w-full bg-transparent border-b pb-2 text-sm md:text-base text-[#2A2A2A] placeholder:text-[#2A2A2A]/40 focus:outline-none focus:border-[#2A2A2A] ${
            errors.address ? 'border-red-500' : 'border-[#2A2A2A]/40'
          }`}
        />
        {errors.address && <span className="absolute -bottom-5 left-0 text-xs text-red-500">{errors.address}</span>}
      </div>

      <div className="relative">
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          rows={1}
          className={`w-full bg-transparent border-b pb-2 text-sm md:text-base text-[#2A2A2A] placeholder:text-[#2A2A2A]/40 focus:outline-none focus:border-[#2A2A2A] resize-none ${
            errors.message ? 'border-red-500' : 'border-[#2A2A2A]/40'
          }`}
        />
        {errors.message && <span className="absolute -bottom-5 left-0 text-xs text-red-500">{errors.message}</span>}
      </div>

      <button
        type="submit"
        className="w-full md:w-auto inline-flex items-center justify-center px-8 md:px-[30px] py-5 md:py-[23px] bg-[#F4C077] rounded-full text-sm md:text-base font-medium text-[#2A2A2A] transition-all overflow-hidden cursor-pointer hover:opacity-90 active:bg-[#2A2A2A] active:text-white"
      >
        <AnimatedText text="Send request" staggered={false} />
      </button>
    </form>
  )
}