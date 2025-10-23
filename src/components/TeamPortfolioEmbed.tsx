import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Award, 
  Globe, 
  Target, 
  TrendingUp, 
  Brain, 
  Zap, 
  Shield,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Maximize2,
  Minimize2
} from 'lucide-react';
import { useState } from 'react';

const TeamPortfolioEmbed: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const teamStats = {
    publications: 12,
    citations: 847,
    hIndex: 8,
    patents: 3,
    partnerships: 8,
    countries: 8,
    institutions: 15,
    revenue: 2.1e6
  };

  return (
    <div className="space-y-8">
      {/* Team Hero Section */}
      <Card className="industrial-card border-primary/20 bg-gradient-to-br from-primary/5 to-glow-secondary/5">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-3xl font-bold text-foreground mb-2">
                Team Utkarsh - CIM Team 32
              </CardTitle>
              <p className="text-lg text-muted-foreground">
                Leading biomedical sensor fusion research with industry-grade innovations
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="default" className="text-sm px-4 py-2">
                <Award className="h-4 w-4 mr-2" />
                PReMI 2025 Best Paper
              </Badge>
              <Button variant="outline" size="sm" asChild>
                <a href="https://teamutkarsh.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Full Portfolio
                </a>
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{teamStats.publications}</div>
              <div className="text-sm text-muted-foreground">Publications</div>
              <div className="text-xs text-primary/80">Impact Factor: 4.2</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success">{teamStats.citations}</div>
              <div className="text-sm text-muted-foreground">Citations</div>
              <div className="text-xs text-success/80">H-Index: {teamStats.hIndex}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-warning">{teamStats.patents}</div>
              <div className="text-sm text-muted-foreground">Patents Filed</div>
              <div className="text-xs text-warning/80">3 Pending</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-destructive">${(teamStats.revenue / 1e6).toFixed(1)}M</div>
              <div className="text-sm text-muted-foreground">Industry Revenue</div>
              <div className="text-xs text-destructive/80">Generated</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Embedded Team Portfolio */}
      <Card className="industrial-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Users className="h-6 w-6 text-primary" />
              Team Portfolio & Expertise
            </CardTitle>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                {isExpanded ? 'Minimize' : 'Expand'}
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://teamutkarsh.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Open Full Site
                </a>
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Embedded Portfolio */}
            <div 
              className={`relative w-full bg-muted/20 rounded-lg overflow-hidden border border-border/50 ${
                isExpanded ? 'h-[800px]' : 'h-[600px]'
              }`}
            >
              <iframe
                src="https://teamutkarsh.vercel.app/"
                className="w-full h-full border-0"
                title="Team Utkarsh Portfolio"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                style={{
                  transform: 'scale(0.8)',
                  transformOrigin: 'top left',
                  width: '125%',
                  height: '125%'
                }}
              />
              
              {/* Overlay for better UX */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/20 to-transparent" />
            </div>

            {/* Quick Stats Overlay */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-primary">{teamStats.countries}</div>
                <div className="text-xs text-muted-foreground">Countries</div>
                <div className="text-xs text-primary/80">Global Reach</div>
              </div>
              
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-success">{teamStats.institutions}</div>
                <div className="text-xs text-muted-foreground">Institutions</div>
                <div className="text-xs text-success/80">Partner Organizations</div>
              </div>
              
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-warning">{teamStats.partnerships}</div>
                <div className="text-xs text-muted-foreground">Partnerships</div>
                <div className="text-xs text-warning/80">Industry Collaborations</div>
              </div>
              
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-destructive">2.4M</div>
                <div className="text-xs text-muted-foreground">Samples</div>
                <div className="text-xs text-destructive/80">Processed Globally</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Research Highlights */}
      <Card className="industrial-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-6 w-6 text-success" />
            Key Research Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <h4 className="text-sm font-semibold text-foreground">Confidence-Weighted Fusion</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Novel algorithm achieving 23.4% SNR improvement over baseline methods
              </p>
              <Badge variant="outline" className="text-xs">
                156 Citations
              </Badge>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success" />
                <h4 className="text-sm font-semibold text-foreground">Real-time Quality Assessment</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Sub-5ms latency processing with 96.3% artifact detection accuracy
              </p>
              <Badge variant="outline" className="text-xs">
                89 Citations
              </Badge>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-warning" />
                <h4 className="text-sm font-semibold text-foreground">Multi-modal Integration</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                ECG, EEG, EMG simultaneous processing with 18.7% accuracy gain
              </p>
              <Badge variant="outline" className="text-xs">
                45 Citations
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Industry Partnerships */}
      <Card className="industrial-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-6 w-6 text-warning" />
            Industry Partnerships & Collaborations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <h4 className="text-lg font-semibold text-foreground">Mayo Clinic</h4>
              </div>
              <Badge variant="outline" className="text-xs">
                Clinical Research
              </Badge>
              <div className="space-y-1">
                <div className="text-sm text-success">34.2% diagnostic accuracy improvement</div>
                <div className="text-xs text-muted-foreground">$2.3M annual savings</div>
                <div className="text-xs text-muted-foreground">18 months collaboration</div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-success" />
                <h4 className="text-lg font-semibold text-foreground">MIT Research Lab</h4>
              </div>
              <Badge variant="outline" className="text-xs">
                Academic Collaboration
              </Badge>
              <div className="space-y-1">
                <div className="text-sm text-success">28.7% signal quality enhancement</div>
                <div className="text-xs text-muted-foreground">$1.8M research cost savings</div>
                <div className="text-xs text-muted-foreground">12 months collaboration</div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-warning" />
                <h4 className="text-lg font-semibold text-foreground">Medtronic</h4>
              </div>
              <Badge variant="outline" className="text-xs">
                Medical Devices
              </Badge>
              <div className="space-y-1">
                <div className="text-sm text-success">41.8% battery life improvement</div>
                <div className="text-xs text-muted-foreground">$4.2M device cost reduction</div>
                <div className="text-xs text-muted-foreground">24 months collaboration</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card className="industrial-card border-primary/20 bg-gradient-to-r from-primary/5 to-glow-secondary/5">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-foreground">
              Ready to Collaborate with Industry Leaders?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join 15+ leading institutions and 8 industry partners already leveraging our 
              breakthrough sensor fusion technology for next-generation biomedical applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Mail className="h-4 w-4 mr-2" />
                Contact Research Team
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://teamutkarsh.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Full Portfolio
                </a>
              </Button>
              <Button size="lg" variant="outline">
                <Target className="h-4 w-4 mr-2" />
                Research Partnership
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeamPortfolioEmbed;
