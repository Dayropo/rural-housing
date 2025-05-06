import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { AuthProvider } from "@/hooks/use-auth";
import ScrollToTop from "@/components/scroll-to-top";
import { useEffect, useState } from "react";

// Layout components
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

// Page components
import Home from "@/pages/home";
import Buy from "@/pages/buy";
import Rent from "@/pages/rent";
import Sell from "@/pages/sell";
import WeBuyHouses from "@/pages/we-buy-houses";
import PropertyDetail from "@/pages/property-detail";
import RentalApplication from "@/pages/rental-application";
import AdminDashboard from "@/pages/admin/dashboard";
import PropertyManagement from "@/pages/admin/property-management";
import EditProperty from "@/pages/admin/edit-property";
import AdminLogin from "@/pages/admin/login";
import NotFound from "@/pages/not-found";
import Login from "@/pages/login";
import AccountSettings from "@/pages/account";
import Profile from "@/pages/profile";

function Router() {
  const [location] = useLocation();
  const isAdminRoute = location.startsWith("/admin");

  return (
    <>
      <ScrollToTop />
      {!isAdminRoute && <Header />}
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/buy" component={Buy} />
        <Route path="/rent" component={Rent} />
        <Route path="/sell" component={Sell} />
        <Route path="/we-buy-houses" component={WeBuyHouses} />
        <Route path="/rental-application" component={RentalApplication} />
        <Route path="/properties/:id">
          {(params) => <PropertyDetail id={params.id} />}
        </Route>
        <Route path="/login" component={Login} />
        <Route path="/account" component={AccountSettings} />
        <Route path="/profile" component={Profile} />
        
        {/* Admin routes */}
        <Route path="/admin" component={AdminDashboard} />
        <Route path="/admin/login" component={AdminLogin} />
        <Route path="/admin/properties" component={PropertyManagement} />
        <Route path="/admin/properties/new" component={EditProperty} />
        <Route path="/admin/properties/:id/edit" component={EditProperty} />
        
        {/* Fallback to 404 */}
        <Route component={NotFound} />
      </Switch>
      {!isAdminRoute && <Footer />}
    </>
  );
}

function App() {
  // Remove Facebook hash fragment
  useEffect(() => {
    if (window.location.hash === '#_=_') {
      // Check if the browser supports history.replaceState
      if (history.replaceState) {
        // Remove the hash fragment without causing a page reload
        history.replaceState(
          null,
          document.title,
          window.location.pathname + window.location.search
        );
      } else {
        // For older browsers that don't support history.replaceState
        // Set the hash to an empty string
        window.location.hash = '';
      }
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router />
        <Toaster position="top-right" richColors closeButton />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
