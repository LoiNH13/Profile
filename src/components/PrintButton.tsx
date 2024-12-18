import { FaPrint } from 'react-icons/fa';
import { handlePrint } from '../utils/print';

export const PrintButton = () => {
  return (
    <button
      onClick={handlePrint}
      className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors print:hidden"
      aria-label="Print CV"
    >
      <FaPrint className="w-5 h-5" />
    </button>
  );
};