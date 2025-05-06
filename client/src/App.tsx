import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";

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
import NotFound from "@/pages/not-found";

function Router() {
  const [location] = useLocation();
  const isAdminRoute = location.startsWith("/admin");

  return (
    <>
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
        
        {/* Admin routes */}
        <Route path="/admin" component={AdminDashboard} />
        <Route path="/admin/properties" component={PropertyManagement} />
        <Route path="/admin/properties/new" component={EditProperty} />
        <Route path="/admin/properties/:id/edit">
          {(params) => <EditProperty id={params.id} />}
        </Route>
        
        {/* Fallback to 404 */}
        <Route component={NotFound} />
      </Switch>
      {!isAdminRoute && <Footer />}
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
