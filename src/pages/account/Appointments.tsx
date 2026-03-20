import { CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

export default function AppointmentsPage() {
  return (
    <div>
      <h2 className="font-heading text-xl font-semibold text-foreground mb-6">Appointments</h2>
      <div className="text-center py-12">
        <CalendarDays className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
        <h3 className="font-heading text-lg font-semibold text-foreground mb-2">No Appointments</h3>
        <p className="text-sm text-muted-foreground font-body max-w-sm mx-auto mb-4">
          Book a showroom visit or design consultation to see products in person.
        </p>
        <Link to="/contact" className="text-sm text-accent font-body hover:underline">
          Contact us to book →
        </Link>
      </div>
    </div>
  );
}
