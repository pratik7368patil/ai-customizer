import type { BlockModel } from "../models/BlockModel";

export const sampleBlocks: BlockModel[] = [
  {
    id: "hero-section",
    label: "Hero Section",
    content: `
      <div style="background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%); padding: 80px 20px; text-align: center; color: white;">
        <h1 style="font-size: 48px; margin-bottom: 20px;">Welcome to Our Platform</h1>
        <p style="font-size: 20px; margin-bottom: 30px;">Create beautiful websites with our drag and drop builder</p>
        <button style="background: white; color: #4f46e5; padding: 12px 30px; border: none; border-radius: 25px; font-size: 18px; cursor: pointer;">Get Started</button>
      </div>
    `,
  },
  {
    id: "feature-card",
    label: "Feature Card",
    content: `
      <div style="background: white; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); padding: 20px; max-width: 300px;">
        <img src="https://picsum.photos/300/200" alt="Feature" style="width: 100%; border-radius: 8px; margin-bottom: 15px;">
        <h3 style="color: #1a1f36; margin-bottom: 10px;">Amazing Feature</h3>
        <p style="color: #6b7280; line-height: 1.5;">Discover how this feature can transform your workflow and boost productivity.</p>
      </div>
    `,
  },
  {
    id: "contact-form",
    label: "Contact Form",
    content: `
      <form style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); max-width: 400px;">
        <h2 style="color: #1a1f36; margin-bottom: 20px;">Contact Us</h2>
        <input type="text" placeholder="Your Name" style="width: 100%; padding: 10px; margin-bottom: 15px; border: 1px solid #e5e7eb; border-radius: 5px;">
        <input type="email" placeholder="Your Email" style="width: 100%; padding: 10px; margin-bottom: 15px; border: 1px solid #e5e7eb; border-radius: 5px;">
        <textarea placeholder="Your Message" style="width: 100%; padding: 10px; margin-bottom: 15px; border: 1px solid #e5e7eb; border-radius: 5px; min-height: 100px;"></textarea>
        <button style="background: #4f46e5; color: white; padding: 12px 30px; border: none; border-radius: 5px; width: 100%; cursor: pointer;">Send Message</button>
      </form>
    `,
  },
  {
    id: "pricing-card",
    label: "Pricing Card",
    content: `
      <div style="background: linear-gradient(135deg, #818cf8 0%, #6366f1 100%); padding: 30px; border-radius: 15px; color: white; max-width: 300px;">
        <h3 style="font-size: 24px; margin-bottom: 10px;">Pro Plan</h3>
        <div style="font-size: 36px; margin-bottom: 20px;">$49<span style="font-size: 16px;">/month</span></div>
        <ul style="list-style: none; padding: 0; margin-bottom: 25px;">
          <li style="margin-bottom: 10px;">✓ Premium Feature 1</li>
          <li style="margin-bottom: 10px;">✓ Premium Feature 2</li>
          <li style="margin-bottom: 10px;">✓ Premium Feature 3</li>
        </ul>
        <button style="background: white; color: #4f46e5; padding: 12px 30px; border: none; border-radius: 25px; width: 100%; cursor: pointer;">Choose Plan</button>
      </div>
    `,
  },
  {
    id: "testimonial-card",
    label: "Testimonial Card",
    content: `
      <div style="background: white; padding: 25px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); max-width: 350px;">
        <div style="display: flex; align-items: center; margin-bottom: 20px;">
          <img src="https://picsum.photos/50" alt="Avatar" style="width: 50px; height: 50px; border-radius: 25px; margin-right: 15px;">
          <div>
            <h4 style="color: #1a1f36; margin: 0;">John Doe</h4>
            <p style="color: #6b7280; margin: 0;">CEO at Company</p>
          </div>
        </div>
        <p style="color: #374151; line-height: 1.6; margin: 0;">"This platform has completely transformed how we build websites. The drag and drop interface is intuitive and the results are amazing!"</p>
      </div>
    `,
  },
  {
    id: "cta-section",
    label: "CTA Section",
    content: `
      <div style="background: linear-gradient(135deg, #4f46e5 0%, #818cf8 100%); padding: 60px 20px; text-align: center; color: white;">
        <h2 style="font-size: 36px; margin-bottom: 20px;">Ready to Get Started?</h2>
        <p style="font-size: 18px; margin-bottom: 30px;">Join thousands of satisfied customers building amazing websites</p>
        <div>
          <button style="background: white; color: #4f46e5; padding: 12px 30px; border: none; border-radius: 25px; margin: 0 10px; font-size: 16px; cursor: pointer;">Try it Free</button>
          <button style="background: transparent; color: white; padding: 12px 30px; border: 2px solid white; border-radius: 25px; margin: 0 10px; font-size: 16px; cursor: pointer;">Learn More</button>
        </div>
      </div>
    `,
  }
];
