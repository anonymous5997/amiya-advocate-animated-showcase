import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CivilLaw from "./pages/expertise/CivilLaw";
import FamilyLaw from "./pages/expertise/FamilyLaw";
import ChequeDishonour from "./pages/expertise/ChequeDishonour";
import CorporateLaw from "./pages/expertise/CorporateLaw";
import Arbitration from "./pages/expertise/Arbitration";
import CourtPractice from "./pages/expertise/CourtPractice";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/expertise/civil-law" element={<CivilLaw />} />
          <Route path="/expertise/family-law" element={<FamilyLaw />} />
          <Route path="/expertise/cheque-dishonour" element={<ChequeDishonour />} />
          <Route path="/expertise/corporate-law" element={<CorporateLaw />} />
          <Route path="/expertise/arbitration" element={<Arbitration />} />
          <Route path="/expertise/court-practice" element={<CourtPractice />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
