import { cn } from "@/lib/utils";

interface PropertyStatusBadgeProps {
  status: string;
  className?: string;
}

export default function PropertyStatusBadge({ status, className }: PropertyStatusBadgeProps) {
  let statusClass = "";
  let label = "";
  
  switch (status.toLowerCase()) {
    case "available":
      statusClass = "bg-status-available";
      label = "Available";
      break;
    case "pending":
      statusClass = "bg-status-pending";
      label = "Pending";
      break;
    case "sold":
      statusClass = "bg-status-unavailable";
      label = "Sold";
      break;
    case "rented":
      statusClass = "bg-status-unavailable";
      label = "Rented";
      break;
    default:
      statusClass = "bg-gray-500";
      label = status.charAt(0).toUpperCase() + status.slice(1);
  }
  
  return (
    <span className={cn("status-badge", statusClass, className)}>
      {label}
    </span>
  );
}
