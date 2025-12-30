import React from "react";
import { FiGithub } from "react-icons/fi";

export default function GitHubBadge() {
  const username = "c-njoro";
  const profileUrl = `https://github.com/${username}`;

  return (
    <div className="relative group w-full max-w-xs">
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

      {/* Main card */}
      <div className="relative flex flex-col items-center p-6 bg-gradient-to-br from-gray-900 to-black rounded-lg shadow-xl border border-gray-800">
        {/* Header with GitHub icon */}
        <div className="flex items-center justify-center mb-4">
          <div className="p-3 bg-gradient-to-br from-gray-800 to-black rounded-full border border-gray-700 shadow-lg">
            <FiGithub className="text-3xl text-white" />
          </div>
        </div>

        {/* Username */}
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-4 group/username"
        >
          <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent group-hover/username:from-purple-300 group-hover/username:to-blue-300 transition-all duration-300">
            @{username}
          </h3>
        </a>

        {/* Stats container */}
        <div className="w-full grid grid-cols-3 gap-3 mb-4">
          {/* Followers */}
          <div className="flex flex-col items-center p-2 bg-gray-900/50 rounded-lg backdrop-blur-sm border border-gray-800">
            <span className="text-2xl font-bold text-white">50+</span>
            <span className="text-xs text-gray-400 mt-1">Followers</span>
          </div>

          {/* Repositories */}
          <div className="flex flex-col items-center p-2 bg-gray-900/50 rounded-lg backdrop-blur-sm border border-gray-800">
            <span className="text-2xl font-bold text-white">20+</span>
            <span className="text-xs text-gray-400 mt-1">Repos</span>
          </div>

          {/* Contributions */}
          <div className="flex flex-col items-center p-2 bg-gray-900/50 rounded-lg backdrop-blur-sm border border-gray-800">
            <span className="text-2xl font-bold text-white">500+</span>
            <span className="text-xs text-gray-400 mt-1">Contribs</span>
          </div>
        </div>

        {/* Visit button */}
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 w-full py-2 px-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 text-center"
        >
          View Profile
        </a>
      </div>
    </div>
  );
}
