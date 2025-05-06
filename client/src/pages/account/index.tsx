import { useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

// Import account sections
import PersonalInfo from "@/pages/account/sections/personal-info";
import SignInSecurity from "@/pages/account/sections/sign-in-security";
import ManageAccount from "@/pages/account/sections/manage-account";
import Notifications from "@/pages/account/sections/notifications";

export default function AccountSettings() {
  const { user, isAuthenticated } = useAuth();
  const [, navigate] = useLocation();
  const [activeTab, setActiveTab] = useState("personal-info");

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    navigate("/login");
    return null;
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex items-center mb-6">
        <Button 
          variant="ghost" 
          className="mr-2" 
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Button>
        <h1 className="text-3xl font-bold">Account Settings</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Manage Your Account</CardTitle>
          <CardDescription>
            Update your profile, manage security settings, and customize your preferences
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="personal-info">Personal Info</TabsTrigger>
              <TabsTrigger value="sign-in-security">Sign-in & Security</TabsTrigger>
              <TabsTrigger value="manage-account">Manage Account</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>
            
            <TabsContent value="personal-info">
              <PersonalInfo user={user} />
            </TabsContent>
            
            <TabsContent value="sign-in-security">
              <SignInSecurity user={user} />
            </TabsContent>
            
            <TabsContent value="manage-account">
              <ManageAccount user={user} />
            </TabsContent>
            
            <TabsContent value="notifications">
              <Notifications user={user} />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
