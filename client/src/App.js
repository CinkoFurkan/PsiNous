import { Toaster } from "react-hot-toast";
import WebLayout from "./layout/web";

export default function App() {
  return (
    <div className="w-screen h-auto bg-background">
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "#b60707",
              color: "#fff",
            },
          },
        }}
      />
      <WebLayout />
    </div>
  );
}
