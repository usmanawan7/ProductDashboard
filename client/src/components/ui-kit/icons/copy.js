import React from "react"

export const CopyIcon = ({copyApiKey}) => {
  return (
    <svg width={20} height={20} viewBox="0 0 20 20" className="cursor-pointer absolute right-5" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={copyApiKey}>
      <path d="M5.41732 12.709C4.6119 12.709 3.95898 12.0561 3.95898 11.2507V5.62565C3.95898 4.70518 4.70518 3.95898 5.62565 3.95898H11.2507C12.0561 3.95898 12.709 4.6119 12.709 5.41732" 
        stroke="#A1A1AA"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round" 
      />
      <path
        d="M7.29102 8.95768C7.29102 8.03721 8.03721 7.29102 8.95768 7.29102H14.3743C15.2948 7.29102 16.041 8.03721 16.041 8.95768V14.3743C16.041 15.2948 15.2948 16.041 14.3743 16.041H8.95768C8.03721 16.041 7.29102 15.2948 7.29102 14.3743V8.95768Z"
        stroke="#A1A1AA"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round" 
      />
    </svg>
  )
}
