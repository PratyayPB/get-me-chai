import Loader from "@/components/Loader";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh]">
      <Loader className="w-16 h-16" />
      <p className="mt-4 text-lg font-medium text-gray-400">Loading...</p>
    </div>
  );
}
