import React from 'react';
import { Download, Mail, Phone, Linkedin, MessageCircle, ExternalLink, Github, Calendar, MapPin, Code, Palette, Users, Target, Lightbulb, Zap, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const workExperience = [
    {
      title: "Front-End Developer",
      company: "EaseMyTrip", 
      period: "June 2025 – Present",
      description: "Building scalable hotel and travel modules using Angular",
      highlights: ["Integrated Swiper carousels", "REST APIs", "Dynamic hotel offer UIs"],
      technologies: ["Angular", "TypeScript", "RxJS", "Swiper", "SCSS"]
    },
    {
      title: "Software Engineer",
      company: "Clavax Technologies",
      period: "Sept 2024 – Present", 
      description: "Designed data dashboards for casino operations",
      highlights: ["Added pie charts", "Variance tables", "Collapsible lists"],
      technologies: ["Angular", "GitLab", "Microsoft Azure"]
    },
    {
      title: "Software Engineer",
      company: "Berryworks Ventures Pvt Ltd",
      period: "Sept 2023 – Sept 2024",
      description: "Developed a chatbot UI and integrated REST APIs",
      highlights: ["Sign-in with Slack & Google", "AWS deployment"],
      technologies: ["Angular", "React", "Node.js", "AWS"]
    },
    {
      title: "Angular Developer",
      company: "DUCAT",
      period: "Sept 2022 – March 2023",
      description: "Built NG-MART E-commerce site",
      highlights: ["Angular 14", "RxJS", "Lazy loading", "A/B testing"],
      technologies: ["Angular", "RxJS", "TypeScript"]
    }
  ];

  const projects = [
    {
      title: "Casino Analytics Dashboard",
      description: "A comprehensive analytics platform designed for casino operations management. Features real-time data visualization with interactive charts for transaction monitoring, player behavior analysis, and revenue tracking. The dashboard provides operators with insights into game performance, peak hours analysis, and detailed financial reports with customizable date ranges.",
      technologies: ["Angular", "Chart.js", "TypeScript", "RxJS", "Angular Material", "SCSS"],
      icon: <Palette className="w-6 h-6" />,
      gradient: "from-purple-400 to-pink-400"
    },
    {
      title: "NG-MART E-Commerce Platform",
      description: "A full-featured e-commerce application built with modern Angular architecture. Includes advanced product filtering, search functionality, shopping cart management, and user authentication. Features lazy loading for optimal performance, responsive design for all devices, and integrated payment gateway with order tracking capabilities.",
      technologies: ["Angular", "TypeScript", "RxJS", "Bootstrap", "Node.js", "MongoDB"],
      icon: <Code className="w-6 h-6" />,
      gradient: "from-blue-400 to-cyan-400"
    },
    {
      title: "Chatbot Interface",
      description: "An intelligent conversational UI designed for customer support automation. Features natural language processing, multi-platform integration with Slack and Google services, real-time messaging, and automated response generation. Includes user session management, conversation history, and seamless handoff to human agents when needed.",
      technologies: ["React", "Node.js", "REST APIs", "Socket.io", "Tailwind CSS", "Express.js"],
      icon: <MessageCircle className="w-6 h-6" />,
      gradient: "from-green-400 to-emerald-400"
    },
    {
      title: "Hotel Offers UI (EaseMyTrip)",
      description: "A dynamic hotel booking interface featuring interactive offer displays and promotional content. Built with Swiper for smooth carousel navigation, JSON-based content management for easy updates, and responsive design optimized for mobile booking. Includes real-time pricing updates, availability checking, and integrated booking flow with payment processing.",
      technologies: ["Angular", "Swiper", "TypeScript", "SCSS", "RxJS", "REST APIs"],
      icon: <Target className="w-6 h-6" />,
      gradient: "from-orange-400 to-red-400"
    }
  ];

  const skillCategories = [
    {
      category: "Frontend Frameworks",
      skills: [
        { name: "Angular", level: 90, color: "from-red-500 to-red-600", icon: "⚡" },
        { name: "React", level: 85, color: "from-blue-500 to-blue-600", icon: "⚛️" },
        { name: "TypeScript", level: 88, color: "from-blue-600 to-blue-700", icon: "📘" },
        { name: "JavaScript", level: 92, color: "from-yellow-500 to-yellow-600", icon: "🟨" }
      ]
    },
    {
      category: "UI & Styling",
      skills: [
        { name: "Tailwind CSS", level: 90, color: "from-cyan-500 to-cyan-600", icon: "🎨" },
        { name: "Bootstrap 5", level: 85, color: "from-purple-500 to-purple-600", icon: "🅱️" },
        { name: "Angular Material", level: 80, color: "from-indigo-500 to-indigo-600", icon: "🎯" },
        { name: "CSS3", level: 95, color: "from-blue-400 to-blue-500", icon: "🎪" }
      ]
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "GitHub", level: 88, color: "from-gray-700 to-gray-800", icon: "🐙" },
        { name: "GitLab", level: 80, color: "from-orange-500 to-orange-600", icon: "🦊" },
        { name: "AWS", level: 75, color: "from-orange-400 to-orange-500", icon: "☁️" },
        { name: "RxJS", level: 85, color: "from-pink-500 to-pink-600", icon: "🔄" }
      ]
    }
  ];

  const strengths = [
    { name: "Hard-working", icon: <Zap className="w-5 h-5" />, color: "text-yellow-500" },
    { name: "Eye for Detail", icon: <Target className="w-5 h-5" />, color: "text-red-500" },
    { name: "UI & UX Focused", icon: <Palette className="w-5 h-5" />, color: "text-purple-500" },
    { name: "Problem Solving", icon: <Lightbulb className="w-5 h-5" />, color: "text-blue-500" },
    { name: "Design Thinking", icon: <Code className="w-5 h-5" />, color: "text-green-500" },
    { name: "Team Player", icon: <Users className="w-5 h-5" />, color: "text-pink-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Floating particles background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-300/20 to-purple-300/20 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-300/20 to-yellow-300/20 rounded-full mix-blend-multiply filter blur-xl animate-float-delayed"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-r from-green-300/20 to-blue-300/20 rounded-full mix-blend-multiply filter blur-xl animate-float-slow"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-lg border-b border-white/20 z-50 shadow-lg shadow-black/5">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Deepika Garg
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-indigo-600 transition-all duration-300 hover:scale-105 relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-600 hover:text-indigo-600 transition-all duration-300 hover:scale-105 relative group">
                Experience
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-indigo-600 transition-all duration-300 hover:scale-105 relative group">
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-indigo-600 transition-all duration-300 hover:scale-105 relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <div className="mb-6 inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full text-sm font-medium text-indigo-700 border border-indigo-200/50 animate-pulse-gentle">
              <Star className="w-4 h-4 mr-2 text-yellow-500" />
              Available for opportunities
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-indigo-800 to-purple-800 bg-clip-text text-transparent animate-gradient">
              Deepika Garg
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-600 mb-8 animate-slide-up">
              Front-End Developer
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto animate-slide-up-delayed">
              Crafting clean, scalable, and user-centric UIs with modern technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up-delayed">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-indigo-200 text-indigo-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:border-indigo-300"
                onClick={() => scrollToSection('contact')}
              >
                Let's Connect
                <MessageCircle className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                I am a self-motivated Front-End Developer with 2+ years of experience building web applications. 
                Skilled in Angular, React, TypeScript, and modern UI/UX design. I aim to deliver highly performant, 
                accessible, and responsive digital experiences.
              </p>
              <Button className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6 animate-fade-in-right">
              {strengths.map((strength, index) => (
                <div key={index} className="flex items-center p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white/20">
                  <div className={`${strength.color} mr-3 transform transition-transform group-hover:scale-110`}>
                    {strength.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-700">{strength.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Work Experience</h2>
          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] bg-white/80 backdrop-blur-sm border border-white/20 group overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <CardTitle className="text-xl text-gray-900 group-hover:text-indigo-700 transition-colors">
                        {job.title}
                      </CardTitle>
                      <CardDescription className="text-lg font-medium text-slate-600 mt-1">
                        {job.company}
                      </CardDescription>
                    </div>
                    <div className="flex items-center text-gray-500 mt-2 md:mt-0">
                      <Calendar className="w-4 h-4 mr-2 text-indigo-500" />
                      <span className="text-sm">{job.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-800 mb-2">Key Highlights:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {job.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 hover:from-indigo-100 hover:to-purple-100 hover:text-indigo-700 transition-all duration-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group overflow-hidden relative bg-white/80 backdrop-blur-sm">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 bg-gradient-to-br ${project.gradient} rounded-xl mr-4 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {project.icon}
                    </div>
                    <CardTitle className="text-xl text-gray-900 group-hover:text-indigo-700 transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="border-slate-300 text-slate-600 hover:bg-slate-100 hover:text-slate-700 hover:border-slate-400 transition-all duration-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate about creating exceptional digital experiences with modern technologies
            </p>
          </div>
          
          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="animate-fade-in">
                <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center relative">
                  <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    {category.category}
                  </span>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                </h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-white/30 overflow-hidden"
                    >
                      {/* Background gradient effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
                      
                      {/* Content */}
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                            {skill.icon}
                          </span>
                          <div className={`px-3 py-1 bg-gradient-to-r ${skill.color} text-white text-xs font-bold rounded-full shadow-lg`}>
                            {skill.level}%
                          </div>
                        </div>
                        
                        <h4 className="font-semibold text-gray-800 mb-3 group-hover:text-indigo-700 transition-colors">
                          {skill.name}
                        </h4>
                        
                        {/* Animated progress bar */}
                        <div className="relative">
                          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse shadow-lg`}
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                          
                          {/* Glowing effect */}
                          <div 
                            className={`absolute top-0 h-2 bg-gradient-to-r ${skill.color} rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      {/* Floating particles effect */}
                      <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
                      <div className="absolute bottom-6 left-8 w-1 h-1 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping delay-100"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Tech Stack Visual */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-full px-8 py-4 border border-indigo-100 shadow-lg">
              <span className="text-gray-600 font-medium">Always learning:</span>
              <div className="flex space-x-3">
                <span className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-sm rounded-full shadow-md animate-bounce">Next.js</span>
                <span className="px-3 py-1 bg-gradient-to-r from-violet-500 to-violet-600 text-white text-sm rounded-full shadow-md animate-bounce delay-100">Vue.js</span>
                <span className="px-3 py-1 bg-gradient-to-r from-rose-500 to-rose-600 text-white text-sm rounded-full shadow-md animate-bounce delay-200">Docker</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Education</h2>
          <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] bg-white/80 backdrop-blur-sm group">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-700 transition-colors">
                    Bachelor of Computer Applications (BCA)
                  </h3>
                  <p className="text-slate-600 mb-2">MDU, Rohtak</p>
                  <div className="flex items-center text-gray-500">
                    <Calendar className="w-4 h-4 mr-2 text-indigo-500" />
                    <span>Aug 2019 – July 2022</span>
                  </div>
                  <p className="text-gray-600 mt-4">
                    Also completed Intermediate & Matriculation from CBSE Board
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Let's Connect</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Get In Touch</CardTitle>
                <CardDescription>
                  Ready to discuss your next project or opportunity? Let's connect!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <a 
                  href="mailto:gargdeepika2001@gmail.com" 
                  className="flex items-center p-4 bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
                >
                  <Mail className="w-5 h-5 text-blue-600 mr-3 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-700 group-hover:text-blue-700 transition-colors">gargdeepika2001@gmail.com</span>
                </a>
                <a 
                  href="tel:+1234567890" 
                  className="flex items-center p-4 bg-gradient-to-r from-slate-50 to-green-50 rounded-xl hover:from-green-100 hover:to-emerald-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
                >
                  <Phone className="w-5 h-5 text-green-600 mr-3 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-700 group-hover:text-green-700 transition-colors">Call Me</span>
                </a>
                <a 
                  href="https://linkedin.com/in/deepika-garg" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl hover:from-blue-100 hover:to-blue-200 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
                >
                  <Linkedin className="w-5 h-5 text-blue-600 mr-3 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-700 group-hover:text-blue-700 transition-colors">View Profile</span>
                  <ExternalLink className="w-4 h-4 ml-auto text-slate-400 group-hover:text-blue-500 transition-colors" />
                </a>
                <a 
                  href="https://wa.me/1234567890?text=Hi%20Deepika,%20I'd%20like%20to%20discuss%20a%20project%20opportunity" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gradient-to-r from-slate-50 to-green-50 rounded-xl hover:from-green-100 hover:to-green-200 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
                >
                  <MessageCircle className="w-5 h-5 text-green-600 mr-3 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-700 group-hover:text-green-700 transition-colors">Message Me</span>
                  <ExternalLink className="w-4 h-4 ml-auto text-slate-400 group-hover:text-green-500 transition-colors" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Quick Message</CardTitle>
                <CardDescription>
                  Send me a message directly from here
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm hover:bg-white/80"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm hover:bg-white/80"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none transition-all duration-300 bg-white/50 backdrop-blur-sm hover:bg-white/80"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    Send Message
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 to-purple-900/20"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <p className="text-slate-400">
            © 2024 Deepika Garg. Crafted with passion and precision.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
