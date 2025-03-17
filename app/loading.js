// components/Loading.js
import { ClipLoader } from 'react-spinners'; // If you're using react-spinners

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <h1>The page is loading</h1>
      <ClipLoader color="#3498db" size={50} />
    </div>
  );
}
