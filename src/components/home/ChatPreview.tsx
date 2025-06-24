
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, CheckCircle } from "lucide-react";

export function ChatPreview() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4">Live Preview</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              See Our AI in Action
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Watch how our medical assistant provides detailed, source-backed responses 
              to complex health questions using peer-reviewed literature.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Evidence-based responses</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Source citations included</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Professional-grade accuracy</span>
              </div>
            </div>
          </div>
          
          <Card className="p-6 bg-gradient-to-br from-background to-muted/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-doctor rounded-full flex items-center justify-center text-white">
                🩺
              </div>
              <div>
                <h4 className="font-medium">Dr. AI Assistant</h4>
                <p className="text-sm text-muted-foreground">Medical Expert</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-end">
                <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm py-3 px-4 max-w-[85%]">
                  What are the latest guidelines for managing hypertension?
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MessageSquare className="h-5 w-5 text-doctor mt-1" />
                <div className="bg-muted rounded-2xl rounded-tl-sm py-3 px-4 flex-1">
                  <p className="mb-3">
                    According to the 2023 ESC/ESH Guidelines, lifestyle modifications remain 
                    first-line treatment for stage 1 hypertension:
                  </p>
                  <ul className="space-y-1 text-sm list-disc list-inside">
                    <li>DASH diet implementation</li>
                    <li>Sodium reduction (&lt;2g/day)</li>
                    <li>Regular aerobic exercise (150min/week)</li>
                    <li>Weight management (BMI 20-25)</li>
                  </ul>
                  <div className="mt-3 text-xs text-muted-foreground">
                    📚 Source: European Heart Journal, 2023
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
