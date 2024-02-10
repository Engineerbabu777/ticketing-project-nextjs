
// Define a functional React component named StatusDisplay that takes a 'status' prop
const StatusDisplay = ({ status }) => {
    // getColor function takes a 'status' parameter and returns a corresponding color code
    const getColor = (status) => {
      let color;
      // Switch statement to determine the color based on the lowercase 'status'
      switch (status.toLowerCase()) {
        case "done":
          color = "bg-green-200";
          return color;
  
        case "started":
          color = "bg-yellow-200";
          return color;
  
        case "not started":
          color = "bg-red-200";
          return color;
  
        default:
          // If the 'status' doesn't match any case, use a default color
          color = "bg-slate-700";
      }
      return color;
    };
  
    // Return a JSX element representing the status label with dynamically assigned color
    return (
      <span
        className={`inline-block  rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${getColor(
          status
        )}`}
      >
        {status}
      </span>
    );
  };
  
  // Export the StatusDisplay component for use in other parts of the application
  export default StatusDisplay;
  