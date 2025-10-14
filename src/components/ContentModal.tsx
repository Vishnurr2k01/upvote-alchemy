import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Copy, CheckCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

interface ContentModalProps {
  subreddit: string;
  content: string;
  onClose: () => void;
}

const ContentModal = ({ subreddit, content, onClose }: ContentModalProps) => {
  const [copied, setCopied] = useState(false);

  const parseContent = (rawContent: string) => {
    const sections: Record<string, string> = {};
    const lines = rawContent.split('\n');
    let currentSection = '';
    let currentContent: string[] = [];

    lines.forEach(line => {
      if (line.startsWith('POST TITLE:')) {
        if (currentSection) sections[currentSection] = currentContent.join('\n').trim();
        currentSection = 'title';
        currentContent = [line.replace('POST TITLE:', '').trim()];
      } else if (line.startsWith('POST CONTENT:')) {
        if (currentSection) sections[currentSection] = currentContent.join('\n').trim();
        currentSection = 'content';
        currentContent = [];
      } else if (line.startsWith('SUGGESTED FLAIR:')) {
        if (currentSection) sections[currentSection] = currentContent.join('\n').trim();
        currentSection = 'flair';
        currentContent = [line.replace('SUGGESTED FLAIR:', '').trim()];
      } else if (line.startsWith('ENGAGEMENT STRATEGY:')) {
        if (currentSection) sections[currentSection] = currentContent.join('\n').trim();
        currentSection = 'strategy';
        currentContent = [];
      } else {
        currentContent.push(line);
      }
    });
    
    if (currentSection) sections[currentSection] = currentContent.join('\n').trim();
    return sections;
  };

  const sections = parseContent(content);

  const handleCopy = () => {
    const textToCopy = `${sections.title}\n\n${sections.content}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    toast({
      title: "Copied to clipboard!",
      description: "Post content has been copied.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto animate-slide-in-right">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-primary">
            r/{subreddit}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 pt-6">
          {/* Post Title */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase">Post Title</h3>
            <p className="text-xl font-bold text-foreground">{sections.title}</p>
          </div>

          {/* Post Content */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase">Post Content</h3>
            <div className="bg-muted rounded-lg p-4">
              <p className="text-foreground whitespace-pre-line leading-relaxed">{sections.content}</p>
            </div>
          </div>

          {/* Suggested Flair */}
          {sections.flair && sections.flair !== 'None' && (
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase">Suggested Flair</h3>
              <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                {sections.flair}
              </span>
            </div>
          )}

          {/* Engagement Strategy */}
          {sections.strategy && (
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase">Engagement Strategy</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{sections.strategy}</p>
            </div>
          )}

          {/* Copy Button */}
          <Button
            onClick={handleCopy}
            className="w-full bg-primary hover:bg-primary/90"
          >
            {copied ? (
              <>
                <CheckCircle className="w-4 h-4 mr-2" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 mr-2" />
                Copy Post Content
              </>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContentModal;
