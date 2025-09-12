import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="font-bold text-xl">ECOL</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </div>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-white to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Drive Digital Transformation with AI and Cryptographic Security
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              ECOL delivers cutting-edge Artificial Intelligence and cryptographic solutions from Hong Kong to the world. 
              We empower businesses to innovate, optimize operations, and build unbreakable trust in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-3">
                <Icon name="MessageSquare" className="mr-2 h-5 w-5" />
                Discuss Your Project
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                <Icon name="Calendar" className="mr-2 h-5 w-5" />
                Request a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive solutions designed for global markets
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "Brain",
                title: "AI Consulting & Strategy",
                description: "Strategic guidance for AI implementation and digital transformation initiatives."
              },
              {
                icon: "Code",
                title: "AI Development & Integration", 
                description: "Custom AI solutions tailored to your business needs and technical requirements."
              },
              {
                icon: "Shield",
                title: "Cryptography & Digital Security",
                description: "Advanced security solutions and cryptographic implementations for enterprise."
              },
              {
                icon: "Globe",
                title: "Global Support & Scaling",
                description: "Worldwide deployment and scaling with international compliance standards."
              }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50/50">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon as any} className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose ECOL</h2>
            <p className="text-muted-foreground text-lg">Strategic advantages that set us apart</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "Zap", title: "Unmatched Efficiency", description: "Streamlined processes and rapid deployment" },
              { icon: "TrendingDown", title: "Significant Cost Reduction", description: "Optimized solutions that reduce operational costs" },
              { icon: "BarChart3", title: "Data-Driven Decisions", description: "Advanced analytics for informed business choices" },
              { icon: "CheckCircle", title: "Global Compliance & Trust", description: "GDPR, APAC regulations and international standards" }
            ].map((advantage, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full shadow-md flex items-center justify-center group-hover:shadow-lg transition-shadow">
                  <Icon name={advantage.icon as any} className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground text-sm">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Global Service Portfolio</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              End-to-end development and integration services, tailored to meet the challenges 
              and regulations of international markets
            </p>
          </div>

          {/* Partnership Ecosystem */}
          <div className="mb-16">
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Technology & Partnership Ecosystem</CardTitle>
                <CardDescription className="text-center max-w-4xl mx-auto">
                  Strategic partnerships with leading global technology providers, ensuring 
                  best-in-class solutions and maximum reliability for our clients
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700">International AI Leaders</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Microsoft Azure AI</li>
                      <li>• OpenAI</li>
                      <li>• Meta (Llama)</li>
                      <li>• Amazon Web Services (AWS)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700">Global Cloud & Security Giants</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Google Cloud Platform</li>
                      <li>• Palo Alto Networks</li>
                      <li>• Cloudflare</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700">Chinese Tech Innovators</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Huawei</li>
                      <li>• Tencent Cloud</li>
                      <li>• Baidu AI</li>
                      <li>• SenseTime</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Service Sections */}
          <div className="grid lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Brain" className="h-6 w-6 text-primary" />
                  Artificial Intelligence & Machine Learning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Custom & Fine-Tuned LLM Solutions</li>
                  <li>• Intelligent Process Automation</li>
                  <li>• Voice AI & Speech Recognition</li>
                  <li>• AI for Manufacturing & QC</li>
                  <li>• Industry-Specific AI Solutions</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Shield" className="h-6 w-6 text-primary" />
                  Cryptographic Services & Digital Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Secure Application Development</li>
                  <li>• Public Key Infrastructure (PKI)</li>
                  <li>• Global Compliance & Data Protection</li>
                  <li>• Secure Document Workflow & e-Signatures</li>
                  <li>• Cryptography for Blockchain & FinTech</li>
                  <li>• Security Audit & Advisory</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Global Process */}
          <div className="mt-16">
            <Card className="bg-gradient-to-r from-gray-50 to-blue-50 border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Our Global Process</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-5 gap-4">
                  {[
                    { step: "1", title: "Discovery & Consultation", icon: "Search" },
                    { step: "2", title: "Strategy & Roadmap", icon: "Map" },
                    { step: "3", title: "Development & Testing", icon: "Code" },
                    { step: "4", title: "Deployment & Integration", icon: "Rocket" },
                    { step: "5", title: "Support & Evolution", icon: "LifeBuoy" }
                  ].map((phase, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 mx-auto mb-3 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                        <Icon name={phase.icon as any} className="h-6 w-6" />
                      </div>
                      <h4 className="font-semibold text-sm mb-1">Step {phase.step}</h4>
                      <p className="text-xs text-muted-foreground">{phase.title}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ECOL: Your Global Technology Partner Based in Hong Kong
              </h2>
              <p className="text-xl text-muted-foreground">
                A team of experts specializing in AI and cryptographic security, 
                providing innovative, world-class solutions for businesses operating on the international stage
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <Card>
                <CardHeader>
                  <CardTitle>Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To empower companies worldwide to streamline operations, make smarter decisions, 
                    and protect their critical assets through transformative and secure digital technologies, 
                    delivered to the highest standard of excellence.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Strategic Hong Kong Hub</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our strategic location in Hong Kong and collaborative relationships with major 
                    international and Chinese technology firms provide us with unique market insights, 
                    advanced technological capabilities, and robust infrastructure.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-center mb-8">Why Choose ECOL?</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Strategic Hong Kong Hub",
                    description: "Bridging global markets with connectivity to East and West"
                  },
                  {
                    title: "World-Class Partnerships", 
                    description: "Access to cutting-edge technologies and joint expertise"
                  },
                  {
                    title: "International Compliance Expertise",
                    description: "Navigating GDPR, APAC regulations, and more"
                  },
                  {
                    title: "Multilingual Team",
                    description: "Seamless communication in English, Mandarin, and other languages"
                  },
                  {
                    title: "Premium Delivery",
                    description: "Relentless focus on quality, security, and achieving business goals"
                  },
                  {
                    title: "Global Mindset",
                    description: "Solutions designed for cross-border deployment"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
              <p className="text-xl text-muted-foreground">
                Partner with us to leverage world-class technology and expertise. 
                Let's build a secure and intelligent future for your business, together.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="MapPin" className="h-5 w-5 text-primary" />
                    <span>Hong Kong SAR, China</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" className="h-5 w-5 text-primary" />
                    <span>contact@ecol.tech</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" className="h-5 w-5 text-primary" />
                    <span>+852 1234 5678</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-semibold mb-4">Business Hours</h4>
                  <div className="text-muted-foreground space-y-1">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM (HKT)</p>
                    <p>Saturday: 10:00 AM - 2:00 PM (HKT)</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                  <CardDescription>
                    We'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@company.com" />
                  </div>
                  
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Your Company" />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your project..."
                      rows={4}
                    />
                  </div>
                  
                  <Button className="w-full">
                    <Icon name="Send" className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-lg">E</span>
                </div>
                <span className="font-bold text-xl">ECOL</span>
              </div>
              <p className="text-gray-400 text-sm">
                Driving digital transformation with AI and cryptographic security from Hong Kong to the world.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>AI Consulting</li>
                <li>AI Development</li>
                <li>Cryptography</li>
                <li>Digital Security</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>News</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>GDPR Compliance</li>
                <li>Security</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 ECOL. All rights reserved. | Made with ❤️ in Hong Kong</p>
          </div>
        </div>
      </footer>
    </div>
  );
}