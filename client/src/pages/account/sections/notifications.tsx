import { useState, useEffect } from "react";
import { User } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface NotificationsProps {
  user: User | null;
}

interface NotificationSettings {
  email: {
    marketing: boolean;
    propertyUpdates: boolean;
    applicationUpdates: boolean;
    accountSecurity: boolean;
  };
}

export default function Notifications({ user }: NotificationsProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [settings, setSettings] = useState<NotificationSettings>({
    email: {
      marketing: true,
      propertyUpdates: true,
      applicationUpdates: true,
      accountSecurity: true,
    },
  });
  
  // Fetch notification settings
  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await fetch("/api/user/notification-settings");
        if (response.ok) {
          const data = await response.json();
          setSettings(data);
        }
      } catch (error) {
        console.error("Failed to fetch notification settings:", error);
      }
    };
    
    fetchSettings();
  }, []);
  
  const handleToggle = (category: keyof typeof settings.email) => {
    setSettings(prev => ({
      ...prev,
      email: {
        ...prev.email,
        [category]: !prev.email[category]
      }
    }));
  };
  
  const handleSaveSettings = async () => {
    setIsLoading(true);
    
    try {
      const response = await fetch("/api/user/notification-settings", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(settings),
      });
      
      if (!response.ok) {
        throw new Error("Failed to update notification settings");
      }
      
      toast.success("Settings Updated", {
        description: "Your notification preferences have been saved."
      });
    } catch (error) {
      toast.error("Error", {
        description: error instanceof Error ? error.message : "Failed to update settings"
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Preferences</CardTitle>
        <CardDescription>
          Manage how and when you receive notifications from Rural Homes
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Email Notifications</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="marketing">Marketing & Promotions</Label>
                <p className="text-sm text-muted-foreground">
                  Receive updates about special offers and new features
                </p>
              </div>
              <Switch
                id="marketing"
                checked={settings.email.marketing}
                onCheckedChange={() => handleToggle("marketing")}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="propertyUpdates">Property Updates</Label>
                <p className="text-sm text-muted-foreground">
                  Get notified about new properties matching your preferences
                </p>
              </div>
              <Switch
                id="propertyUpdates"
                checked={settings.email.propertyUpdates}
                onCheckedChange={() => handleToggle("propertyUpdates")}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="applicationUpdates">Application Updates</Label>
                <p className="text-sm text-muted-foreground">
                  Receive updates about your rental applications
                </p>
              </div>
              <Switch
                id="applicationUpdates"
                checked={settings.email.applicationUpdates}
                onCheckedChange={() => handleToggle("applicationUpdates")}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="accountSecurity">Account & Security</Label>
                <p className="text-sm text-muted-foreground">
                  Important notifications about your account security
                </p>
              </div>
              <Switch
                id="accountSecurity"
                checked={settings.email.accountSecurity}
                onCheckedChange={() => handleToggle("accountSecurity")}
              />
            </div>
          </div>
        </div>
        
        <Button 
          onClick={handleSaveSettings} 
          className="w-full"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Saving...
            </>
          ) : (
            "Save Preferences"
          )}
        </Button>
      </CardContent>
    </Card>
  );
}
