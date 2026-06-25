import { Switch, Route, Redirect, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import ScrollToTop from "@/components/ScrollToTop";


import OU from "@/pages/OU";
import UCEOU from "@/pages/UCEOU";

import Home from "@/pages/Home";
import About from "@/pages/About";
import ImportantDates from "@/pages/ImportantDates";
import ApplicationForm from "@/pages/ApplicationForm";
import HallTicket from "@/pages/HallTicket";
import Results from "@/pages/Results";
import Syllabus from "@/pages/Syllabus";
import MockTest from "@/pages/MockTest";
import Notifications from "@/pages/Notifications";
import Contact from "@/pages/Contact";
import Faq from "@/pages/Faq";
import Login from "@/pages/Login";
import StudentDashboard from "@/pages/StudentDashboard";
import AdminDashboard from "@/pages/AdminDashboard";
import NotFound from "@/pages/not-found";
import Courses from "./pages/Courses";
import FeePayment from "@/pages/FeePayment";
import PrintApplication from "@/pages/PrintApplication";
import RegistrationNumber from "@/pages/RegistrationNumber";
import PaymentStatus from "@/pages/PaymentStatus";
import CollegeList from "@/pages/CollegeList";
import FullApplication from "@/pages/FullApplication";
import Response from "@/pages/Response";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      {/* <Route path="/about" component={About} /> */}
      <Route path="/important-dates" component={ImportantDates} />
      <Route path="/application" component={ApplicationForm} />
      <Route path="/hall-ticket" component={HallTicket} />
      <Route path="/results" component={Results} />
      <Route path="/syllabus" component={Syllabus} />
      <Route path="/mock-test" component={MockTest} />
      <Route path="/notifications" component={Notifications} />
      <Route path="/contact" component={Contact} />
      <Route path="/faq" component={Faq} />
      <Route path="/login" component={Login} />
      <Route path="/student-dashboard" component={StudentDashboard} />
      <Route path="/admin-dashboard" component={AdminDashboard} />
      <Route path="/full-application" component={FullApplication} />
      <Route path="/college-list" component={CollegeList} />
      <Route path="/courses" component={Courses} />
      <Route path="/fee-payment" component={FeePayment} />
      <Route path="/application-form">
        <Redirect to="/application" />
      </Route>
      <Route path="/print-application" component={PrintApplication} />
      <Route path="/payment-status" component={PaymentStatus} />
      <Route path="/registration-number" component={RegistrationNumber} />
      <Route path="/response" component={Response}  />  
      <Route path="/ou" component={OU} />
      <Route path="/uce-ou" component={UCEOU} />
      
      <Route path="/:rest*">
        <NotFound />
      </Route>
    </Switch>
  );
}




function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter>
        <ScrollToTop />
        <Router />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
