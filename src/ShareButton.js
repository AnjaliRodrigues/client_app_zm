import React from "react";

function ShareButton() {
  const handleShare = async () => {
    const data = {
      title: "Share URL",

      text: "",
      url: ""
    };

    if (navigator.canShare && navigator.canShare(data)) {
      try {
        await navigator.share(data);
        console.log("Shared successfully");
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      console.log("Web Share API not supported or unable to share");
    }
  };

  return (
    <button
      type="button"
      class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-2 border-orange-600 rounded-lg hover:bg-orange-200 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
      onClick={handleShare}
    >
      <svg
        class="h-4 w-8 text-red-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        {" "}
        <circle cx="18" cy="5" r="3" /> <circle cx="6" cy="12" r="3" />{" "}
        <circle cx="18" cy="19" r="3" />{" "}
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
      Share
    </button>
  );
}

export default ShareButton;
