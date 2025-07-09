import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  progress: number; // 0 to 100
  label?: string;
  color?: string;
  height?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  progress, 
  label, 
  color = "blue",
  height = 8 
}) => {
  const colorClasses = {
    blue: "from-blue-500 to-blue-600",
    green: "from-green-500 to-green-600",
    purple: "from-purple-500 to-purple-600",
    red: "from-red-500 to-red-600",
    yellow: "from-yellow-500 to-yellow-600"
  };

  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {label}
          </span>
          <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
            {progress}%
          </span>
        </div>
      )}
      
      <div 
        className="w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
        style={{ height: `${height}px` }}
      >
        <motion.div
          className={`h-full bg-gradient-to-r ${colorClasses[color as keyof typeof colorClasses] || colorClasses.blue} rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default ProgressBar; 